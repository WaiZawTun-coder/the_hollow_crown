import { forgotPassword, login, logout, register, updatePassword } from '@/app/features/auth/api';
import { ForgotPasswordCredentials, ForgotPasswordResponse, LoginCredentials, LoginResponse, PasswordUpdateCredentials, PasswordUpdateResponse, RegisterCredentials, RegisterResponse } from '@/app/features/auth/types';
import { setAccessToken } from '@/lib/api/token';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export function useAuthMutations() {
    const queryClient = useQueryClient();
    const router = useRouter();

    // Register Mutation
    const registerMutation = useMutation<
        RegisterResponse, Error, RegisterCredentials>({
            mutationFn: register,
            onSuccess: () => {
                router.push("/login")
            },
        });

    // Login Mutation
    const loginMutation = useMutation<
        LoginResponse,
        Error,
        LoginCredentials
    >({
        mutationFn: login,

        onSuccess: (data) => {
            setAccessToken(data.accessToken);

            queryClient.setQueryData(
                ["authUser"],
                data.user
            );

            router.push("/dashboard")
        },
    });

    // Logout Mutation
    const logoutMutation = useMutation<void, Error>({
        mutationFn: logout,

        onSuccess: () => {
            setAccessToken(null);

            queryClient.clear();
        },
    });

    const forgotPasswordMutation = useMutation<
        ForgotPasswordResponse,
        Error,
        ForgotPasswordCredentials
    >({
        mutationFn: forgotPassword,
        onSuccess: (data) => {
            return data;
        }
    })

    const passwordUpdateMutation = useMutation<
        PasswordUpdateResponse,
        Error,
        PasswordUpdateCredentials
    >({
        mutationFn: updatePassword,
        onSuccess: (data) => {
            return data;
        }
    })

    return {
        registerMutation,
        loginMutation,
        logoutMutation,
        forgotPasswordMutation,
        passwordUpdateMutation
    };
}