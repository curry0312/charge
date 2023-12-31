import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import NextTopLoader from 'nextjs-toploader';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    getUser,
    isAuthenticated,
  } = getKindeServerSession();
  const user = await getUser();
    console.log(await getUser());
    console.log(await isAuthenticated())
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <Navbar user={user} />
        {children}
      </body>
    </html>
  );
}
