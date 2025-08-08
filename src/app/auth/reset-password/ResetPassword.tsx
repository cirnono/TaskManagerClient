"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { auth } from "@/utils/auth";

export default function ResetPasswordForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("Verifying...");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const params = useSearchParams();
    const token = params.get("token");
    const router = useRouter();

    useEffect(() => {
        const resetPassword = async () => {
            if (token) {
                try {
                    const data = await auth.getEmailWithToken(token);
                    setEmail(data);
                    console.log(email);
                } catch (error) {
                    toast.error("Error retriving profile", {
                        description: JSON.stringify(error),
                    });
                }
            } else {
                toast.error("Invalid or expired token");
                router.replace("/auth/callback?redirect=/auth-error");
                return;
            }
        };

        resetPassword();
    }, [token, router]);

    const handleSubmit = async () => {
        if (token) {
            if (newPassword != confirmPassword) {
                toast.error(
                    "Passwords do not match, please check and enter again"
                );
                return;
            } else {
                try {
                    setIsLoading(true);
                    const data = await auth.resetPassword(newPassword, token);
                    setMessage(JSON.stringify(data));
                    router.push("/todo");
                    router.refresh();
                } catch (error) {
                    toast.error("Authentication Error", {
                        description: JSON.stringify(error),
                    });
                } finally {
                    setIsLoading(false);
                }
            }
        } else {
            toast.error("Invalid or expired token");
            router.replace("/auth/callback?redirect=/auth-error");
            return;
        }
    };

    return (
        <Card className="w-96">
            <form onSubmit={handleSubmit}>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Reset password</CardTitle>
                    <CardDescription className="text-xs">
                        Enter your new password
                    </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="password">{email}</Label>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">New Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirmPassword">
                            Confirm Password
                        </Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            disabled={isLoading}
                            required
                        />
                    </div>
                    <Button
                        className="w-full"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Reset password
                    </Button>
                </CardContent>
            </form>
        </Card>
    );
}
