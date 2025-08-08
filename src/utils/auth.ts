import { request } from "./requestTool";
export type AuthError = {
    message: string;
    status?: number;
};

export const auth = {
    async signUp(username: string, email: string, password: string) {
        const data = await request("http://localhost:3001/api/v1/users/", {
            method: "POST",
            body: JSON.stringify({ username, email, password }),
        });

        console.log(data);
        return data;
    },

    async verifyEmail(token: string) {
        const data = await request(
            "http://localhost:3001/api/v1/user/verify-email",
            {
                method: "POST",
                body: JSON.stringify({ token }),
            }
        );

        console.log(data);
        return data;
    },

    async signIn(email: string, password: string) {
        const data = await request("http://localhost:3001/api/v1/users/auth", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });

        return data;
    },

    async signInWithAuth(provider: "github" | "google", nextUrl?: string) {
        // "https://accounts.google.com/o/oauth2/v2/auth";
    },

    async logout() {
        const data = await request(
            "http://localhost:3001/api/v1/users/logout",
            {
                method: "POST",
            }
        );
    },

    async getUserProfile() {
        const data = await request(
            "http://localhost:3001/api/v1/users/profile",
            {
                method: "GET",
            }
        );
        return data;
    },

    async getEmailWithToken(token: string) {
        const data = await request(
            "http://localhost:3001/api/v1/users/reset-password",
            {
                method: "POST",
                body: JSON.stringify({ token }),
            }
        );

        console.log(data);
        return data;
    },

    async resetPasswordRequest(email: string) {
        const data = await request(
            "http://localhost:3001/api/v1/users/reset-password",
            {
                method: "POST",
                body: JSON.stringify({ email }),
            }
        );

        console.log(data);
        return data;
    },

    async resetPassword(newPassword: string, token: string) {
        const data = await request(
            "http://localhost:3001/api/v1/users/reset-password",
            {
                method: "PUT",
                body: JSON.stringify({ newPassword, token }),
            }
        );

        return data;
    },
};
