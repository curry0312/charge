"use client";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Button } from "@/components/ui/button";
import { useDate } from "@/hooks/dashboard/AdjustMonthYear/useDate";

export default function AdjustMonthYear() {
  const { currentMonth, currentYear, goToPreviousMonth, goToNextMonth } =
    useDate();
    
  return (
    <div className="flex justify-center gap-2 text-white py-10">
      <Button
        variant={"ghost"}
        onClick={()=>goToPreviousMonth()}
        className="flex justify-center items-center"
      >
        <ArrowBackIosNewRoundedIcon />
      </Button>
      <h1 className="text-3xl font-bold">
        <span></span>
        {currentYear}
        <span></span>
      </h1>
      <h2 className="text-3xl font-bold">{currentMonth}</h2>
      <Button
        variant={"ghost"}
        onClick={()=>goToNextMonth()}
        className="flex justify-center items-center"
      >
        <ArrowForwardIosRoundedIcon />
      </Button>
    </div>
  );
}
