import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import dayjs from "dayjs";
import { Card } from "@/components/ui/card";
import AdjustMonthYear from "@/components/dashborad/AdjustMonthYear";
import SelectFunction from "@/components/dashborad/SelectFunction";
import AddNewBillForm from "@/components/dashborad/AddNewBillForm";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }
  return (
    <main className="pt-20 bg-gradient-to-b from-sky-950 via-fuchsia-sky to-sky-800 relative overflow-hidden w-full h-screen">
      <AdjustMonthYear />
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
      <SelectFunction />
      <AddNewBillForm />
    </main>
  );
}
