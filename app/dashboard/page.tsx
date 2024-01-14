import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }

  return (
    <main className="pt-20 bg-gradient-to-b from-sky-950 via-fuchsia-sky to-sky-800 min-h-screen">
      <div className="flex justify-center text-white py-10">
        <h1 className="text-3xl font-bold">
          <span>-</span>2024<span>-</span>
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-5 px-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="rounded-md bg-white min-h-[150px] transition duration-100 ease-in-out hover:scale-105">
            <div className="flex justify-center">
              <h2 className="text-2xl"><span>-</span>{index + 1}<span>-</span></h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
