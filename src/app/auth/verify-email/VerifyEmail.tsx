"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { auth } from "@/utils/auth";

export default function VerifyEmailForm() {
    const [message, setMessage] = useState("Verifying...");
    const [isLoading, setIsLoading] = useState(true);
    const params = useSearchParams();
    const token = params.get("token");
    const router = useRouter();

    useEffect(() => {
        const verify = async () => {
            if (token) {
                try {
                    const data = await auth.verifyEmail(token);
                    setMessage(
                        "Your email is verified, please wait while redirecting..."
                    );
                    setTimeout(() => {
                        router.push("/todos");
                        router.refresh();
                    }, 1000);
                } catch (error) {
                    toast.error("Error verify your token", {
                        description: JSON.stringify(error),
                    });
                    setTimeout(() => {
                        router.replace("/auth/callback?redirect=/auth-error");
                    }, 1000);
                } finally {
                    setIsLoading(false);
                }
            } else {
                toast.error("Invalid or expired token");
                router.replace("/auth/callback?redirect=/auth-error");
                return;
            }
        };

        verify();
    }, [token, router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            {isLoading ? (
                <div className="animate-pulse text-xl font-semibold text-gray-600">
                    Verifying...
                </div>
            ) : (
                <div className="text-xl font-semibold text-gray-800">
                    {message}
                </div>
            )}
        </div>
    );
}
