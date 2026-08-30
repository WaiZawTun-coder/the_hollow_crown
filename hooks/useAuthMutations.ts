import { UserType } from '@/app/features/auth/types';
import { apiFetch } from '@/lib/api/client';
import { setAccessToken } from '@/lib/api/token';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ApiError } from 'next/dist/server/api-utils';

type LoginSuccessState = {
    accessToken: string;
    tokenType: "Bearer";
    expiresInSeconds: number;
    user: UserType;
}

const AUTH_SERVER_URL = process.env.NEXT_PUBLIC_AUTH_SERVER_URL;

export function useAuthMutations() {
    const queryClient = useQueryClient();

    // Login Mutation
    const loginMutation = useMutation({
        mutationFn: async (credentials: { formData: FormData }) => {
            const { formData } = credentials;
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

                if (!accessToken) return { scucess: false, message: "Invalid token" }

                return {
                    success: true,
                    user: result.user,
                    token: accessToken
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
        },
        onSuccess: (data) => {
            if (data?.token) {
                setAccessToken(data.token);

                // Directly seed/update the 'authUser' query cache
                queryClient.setQueryData(['authUser'], data.user);
            }
        },
        onError: (error) => {
            console.error({ error })
        }
    });

    // Logout Mutation
    const logoutMutation = useMutation({
        mutationFn: async () => {
            await fetch('/api/auth/logout', { method: 'POST' });
        },
        onSuccess: () => {
            localStorage.removeItem('token');

            // Clear the user from cache
            queryClient.setQueryData(['authUser'], null);

            // Clear all cached queries for security
            queryClient.clear();
        },
    });

    return { loginMutation, logoutMutation };
}