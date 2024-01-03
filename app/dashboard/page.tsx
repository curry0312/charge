import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  if(!user){
    redirect("/api/auth/login?post_login_redirect_url=/dashboard")
  }
  return (
    <div>dashboardpage</div>
  )
}
