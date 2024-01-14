import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="font-Gothic">
      <section className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-950 via-fuchsia-sky to-sky-800">
        <div className="w-[80%] mx-auto flex flex-col space-y-5">
          <div className="flex flex-col space-y-5 items-center">
            <h1 className="font-bold text-4xl text-center text-white md:text-6xl lg:text-8xl">Welcome to Charge App</h1>
            <p className="text-xl text-center text-white md:text-2xl lg:text-3xl">Free, convenient, and secure to use.</p>
          </div>
          <div className="flex justify-center space-x-5">
            <Button className="rounded-3xl text-lg py-6 px-6 bg-sky-700 hover:bg-sky-600" variant={"default"}>Start to use</Button>
            <Button className="rounded-3xl text-lg py-6 px-6" variant={"outline"}>Github</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
