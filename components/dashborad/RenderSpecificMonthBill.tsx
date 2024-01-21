import dayjs from "dayjs";
import { Card } from "../ui/card";
import { getCurrentMonthBill } from "@/server/action";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";

type RenderSpecificMonthBillProps = {
  user: KindeUser;
};

export default async function RenderSpecificMonthBill({
  user,
}: RenderSpecificMonthBillProps) {
  const USER_CURRENT_MONTH_BILLS = await getCurrentMonthBill({
    date: "2024-01-21",
    userId: user.id,
  });
  console.log(USER_CURRENT_MONTH_BILLS);
  return (
    <div className="flex flex-col gap-3 p-2">
      {USER_CURRENT_MONTH_BILLS?.map((item) => (
        <Card key={item.id} className="flex items-center p-2">
          <div className="basis-1/4">
            <p className="text-xl">{item.category}</p>
          </div>
          <div className="basis-1/4">
            <p className="text-xl">{item.price}</p>
          </div>
          <div className="basis-1/4">
            <p className="text-xl">{item.description}</p>
          </div>
          <div className="basis-1/4 flex items-center">
            <span className="ml-auto">
              {dayjs(item.date).format("YYYY-M-DD")}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
