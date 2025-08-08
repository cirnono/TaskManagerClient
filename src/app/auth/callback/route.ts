import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const requestUrl = new URL(request.url);
        const code = requestUrl.searchParams.get("code");
        const next = requestUrl.searchParams.get("next") || "/projects";

        if (!code) {
            console.error("No code provided in callback");
            throw new Error("No code provided");
        }

        return NextResponse.redirect(new URL(next, requestUrl.origin));
    } catch (error) {
        console.error("Callback error:", error);
        const errorUrl = new URL("/auth/auth-error", request.url);
        errorUrl.searchParams.set("error", "Failed to sign in");
        return NextResponse.redirect(errorUrl);
    }
}
