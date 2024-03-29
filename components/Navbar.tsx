"use client";

import * as React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";


export function Navbar({ user }: { user: KindeUser | null }) {
  return (
    <nav className="flex justify-between p-3 backdrop-blur-md fixed left-0 right-0 bg-opacity-5 bg-transparent z-[2]">
      <h1 className="font-bold text-2xl font-Gothic text-white">Charge App</h1>
      <div className="hidden md:flex items-center justify-between flex-1 max-w-[60%]">
        <div className={!!user ? "block" : "hidden"}>
          <NavigationMenuSection />
        </div>
        <div className="ml-auto">
          <AuthState user={user} />
        </div>
      </div>

      {/*mobile device*/}
      <div className="hidden">
        <MenuIcon sx={{ color: "white" }} />
        <MobileMenu />
      </div>
    </nav>
  );
}

function NavigationMenuSection() {
  return (
    <NavigationMenu className="font-Gothic">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/dashboard"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Go to dashboard
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Start your financial management
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function AuthState({ user }: { user: KindeUser | null }) {
  return (
    <div className="flex items-center space-x-2 font-Gothic">
      {user ? (
        <>
          <p className="text-white">Hello {user.given_name}</p>
          <Avatar>
            <AvatarImage
              src={
                user.picture ? user.picture : "https://github.com/shadcn.png"
              }
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Button variant={"destructive"}>
            <LogoutLink>Log out</LogoutLink>
          </Button>
        </>
      ) : (
        <>
          <Button>
            <LoginLink>Sign in</LoginLink>
          </Button>
          <Button variant={"outline"}>
            <RegisterLink>Sign up</RegisterLink>
          </Button>
        </>
      )}
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="absolute top-0 right-0 h-[100vh] w-[60%] bg-white z-10">
      <div className="absolute top-2 right-2">
        <button onClick={() => {}} className="text-3xl">
          <CloseIcon sx={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
