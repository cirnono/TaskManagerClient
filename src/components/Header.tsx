"use client";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { UserMenu } from "./UserMenu";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <header
      className={cn(
        "flex flex-row items-center top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ",
        className
      )}
    >
      <div className="mx-auto container flex flex-row h-16 items-center justify-between">
        <Link
          //   href={user ? "/projects" : "/"}
          href="/"
          className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
        >
          I-DO
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            {isLandingPage && (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button asChild>
                  <Link href="/create-account">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          <div className="border-l pl-4 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
