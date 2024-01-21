import dayjs from "dayjs";
import { Card } from "../ui/card";
import { getCurrentMonthBill } from "@/server/action";

export default async function RenderSpecificMonthBill() {
  const data = await getCurrentMonthBill({ date: "2022-01-01" });
  return (
    <div className="flex flex-col gap-3 p-2">
      <Card className="flex items-center p-2">
        <div className="basis-1/4">
          <p className="text-xl">breakfast</p>
        </div>
        <div className="basis-1/4">
          <p className="text-xl">12</p>
        </div>
        <div className="basis-1/4">
          <p className="text-xl">12</p>
        </div>
        <div className="basis-1/4 flex items-center">
          <span className="ml-auto">{dayjs().format("YYYY-M-DD")}</span>
        </div>
      </Card>
    </div>
  );
}
