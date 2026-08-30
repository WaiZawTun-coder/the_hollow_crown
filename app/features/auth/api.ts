import { apiFetch } from "@/lib/api/client";
import { UserType } from "./types";

export async function getCurrentUser() {
    const path = "/api/users/me";
    const host = process.env.NEXT_PUBLIC_AUTH_SERVER_URL;
    return await apiFetch<UserType>({ path, host });
}