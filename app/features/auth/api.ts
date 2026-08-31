import { apiFetch } from "@/lib/api/client";
import { ForgotPasswordCredentials, ForgotPasswordResponse, LoginCredentials, LoginResponse, PasswordUpdateCredentials, PasswordUpdateResponse, RegisterCredentials, RegisterResponse, UserType } from "./types";



const AUTH_SERVER_URL = process.env.NEXT_PUBLIC_AUTH_SERVER_URL;

if (!AUTH_SERVER_URL) {
    throw new Error("NEXT_PUBLIC_AUTH_SERVER_URL is not configured");
}

export async function getCurrentUser() {
    const path = "/api/users/me";
    const host = AUTH_SERVER_URL;
    return await apiFetch<UserType>({ path, host });
}

export async function register(
    credentials: RegisterCredentials
): Promise<RegisterResponse> {
    return await apiFetch<RegisterResponse>({
        path: "/api/auth/register",
        host: AUTH_SERVER_URL,
        options: {
            method: "POST",
            body: credentials
        }
    })
}

export async function login(
    credentials: LoginCredentials
): Promise<LoginResponse> {
    return await apiFetch<LoginResponse>({
        path: "/api/auth/login",
        host: AUTH_SERVER_URL,
        options: {
            method: "POST",
            body: credentials,
        },
    });
}

export async function logout(): Promise<void> {
    await fetch("/api/auth/logout", {
        method: "POST",
    });
}

export async function forgotPassword(
    credentials: ForgotPasswordCredentials
): Promise<ForgotPasswordResponse> {
    return await apiFetch<ForgotPasswordResponse>({
        path: "/api/auth/password/forgot",
        host: AUTH_SERVER_URL,
        options: {
            method: "POST",
            body: credentials
        }
    })
}

export async function updatePassword(
    credentials: PasswordUpdateCredentials
): Promise<PasswordUpdateResponse> {
    return await apiFetch<PasswordUpdateResponse>({
        path: "/api/auth/password/update",
        host: AUTH_SERVER_URL,
        options: {
            method: "POST",
            body: credentials
        }
    })
}