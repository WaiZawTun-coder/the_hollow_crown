'use server';

import { apiFetch } from '@/lib/api/client';
import { UserType } from '../features/auth/types';
import { ApiError } from 'next/dist/server/api-utils';
import { setAccessToken } from '@/lib/api/token';

const AUTH_SERVER_URL = process.env.NEXT_PUBLIC_AUTH_SERVER_URL;

type LoginState = {
    success: boolean;
    message?: string;
    user?: UserType;
};

type LoginSuccessState = {
    accessToken: string;
    tokenType: "Bearer";
    expiresInSeconds: number;
    user: UserType;
}

export async function loginAction(
    prevState: LoginState | undefined,
    formData: FormData
): Promise<LoginState> {
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = formData.get("rememberMe") == "on";

    if (!email || !password) {
        return {
            success: false,
            message: 'Email and password are required.',
        };
    }

    const body = { email, password, rememberMe };

    try {
        const result = await apiFetch<LoginSuccessState>({
            path: '/api/auth/login',
            host: AUTH_SERVER_URL,
            options: {
                method: 'POST',
                body,
            },
        });

        const { accessToken } = result;

        if (accessToken)
            setAccessToken(accessToken);
        else throw new Error("Invalid token");

        return {
            success: true,
            user: result.user,
        };
    } catch (error) {
        if (error instanceof Error || error instanceof ApiError) {
            return {
                success: false,
                message: error.message,
            };
        }

        return {
            success: false,
            message: 'Something went wrong. Please try again.',
        };
    }
}