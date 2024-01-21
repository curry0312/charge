"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { format } from "date-fns";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { onClose } from "@/lib/features/dashboard/addNewBillSlice";

const formSchema = z.object({
  price: z.string().min(2).max(50),
  category: z.string(),
  description: z.string(),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

export default function AddNewBillForm() {
  const formRef = useRef<HTMLDivElement | null>(null);

  const isOpen = useSelector(
    (state: RootState) => state.addNewBillSlice.isOpen
  );

  const dispatch = useDispatch();

  function closeAddNewBillForm() {
    dispatch(onClose());
  }

  function popup() {
    if (formRef.current) {
      formRef.current.style.transform = "translateX(0%)";
    }
  }
  function popoff() {
    if (formRef.current) {
      formRef.current.style.transform = "translateX(100%)";
    }
  }
  useEffect(() => {
    if (isOpen) {
      popup();
    } else {
      popoff();
    }
  }, [isOpen]);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: "",
      category: "",
      description: "",
      dob: new Date(),
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    
  }

  return (
    <div
      ref={formRef}
      className="absolute inset-0 translate-x-full transition duration-300 ease-in-out bg-neutral-900 p-5 z-[3]"
    >
      <div className="flex items-center">
        <Button
          onClick={closeAddNewBillForm}
          variant={"ghost"}
          className=" hover:bg-neutral-800 ml-auto"
        >
          <CloseRoundedIcon sx={{ fontSize: 30, color: "white" }} />
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white">Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Price</FormLabel>
                <FormControl>
                  <Input placeholder="What is your price?" {...field} />
                </FormControl>
                <FormDescription>Enter your price</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="breakfast">breakfast</SelectItem>
                    <SelectItem value="lunch">lunch</SelectItem>
                    <SelectItem value="dinner">dinner</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Choose your category</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Description</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    draggable={false}
                    placeholder="Enter your description"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"outline"} type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
