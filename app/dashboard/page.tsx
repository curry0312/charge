import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import AdjustMonthYear from "@/components/dashborad/AdjustMonthYear";
import SelectFunction from "@/components/dashborad/SelectFunction";
import AddNewBillForm from "@/components/dashborad/AddNewBillForm";
import { checkUserExistAction } from "@/server/action";
import RenderSpecificMonthBill from "@/components/dashborad/RenderSpecificMonthBill";
export default async function DashboardPage() {
  
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  await checkUserExistAction({ user });
  return (
    <main className="pt-20 bg-gradient-to-b from-sky-950 via-fuchsia-sky to-sky-800 relative overflow-hidden w-full h-screen">
      <AdjustMonthYear />
      <RenderSpecificMonthBill user={user}/>
      <SelectFunction />
      <AddNewBillForm user={user}/>
    </main>
  );
}
