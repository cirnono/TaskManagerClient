"use client";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { UserMenu } from "./UserMenu";
import { jwtDecode } from "jwt-decode";

interface HeaderProps {
    className?: string;
}

interface UserPayload {
    userId: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [user, setUser] = useState<UserPayload | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    const isLandingPage = pathname === "/";

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decoded = jwtDecode<UserPayload>(token);
                setUser(decoded);
                setIsLoading(false);
            } catch (error) {
                console.error("Invalid token", error);
                setUser(null);
            }
        }
    }, []);

    if (isLoading) {
        return null; // or a loading spinner
    }

    return (
        <header
            className={cn(
                "flex flex-row items-center top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ",
                className
            )}
        >
            <div className="mx-auto container flex flex-row h-16 items-center justify-between">
                <Link
                    href={user ? "/projects" : "/"}
                    className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
                >
                    I-DO
                </Link>

                <div className="flex items-center gap-4">
                    {user ? (
                        <UserMenu user={user} />
                    ) : (
                        <div className="flex items-center gap-3">
                            {isLandingPage && (
                                <>
                                    <Button variant="ghost" asChild>
                                        <Link href="/login">Sign in</Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href="/create-account">
                                            Get Started
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    )}
                    <div className="border-l pl-4 dark:border-gray-800">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
};
