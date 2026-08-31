"use client";

import { useAuthMutations } from "@/hooks/useAuthMutations";
import { LoginCredentials } from "@/app/features/auth/types";
import { useState } from "react";

import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkBox";
import { Input } from "./ui/input";

type LoginErrors = {
    email?: string;
    password?: string;
}

export default function LoginForm() {
    const { loginMutation } = useAuthMutations();
    const [error, setError] = useState<LoginErrors | null>(null);

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError(null);

        const formData = new FormData(e.currentTarget);

        try {
            const credentials = getLoginCredentials(formData);

            loginMutation.mutate(credentials);
        } catch (error) {
            if (error instanceof LoginValidationError) {
                setError(error.errors);
                return;
            }
            if (error instanceof Error) {
                console.error(error.message)
            }
        }
    };

    function getLoginCredentials(
        formData: FormData
    ): LoginCredentials {
        const rawEmail = formData.get("email");
        const rawPassword = formData.get("password");

        const email =
            typeof rawEmail === "string"
                ? rawEmail.trim()
                : "";

        const password =
            typeof rawPassword === "string"
                ? rawPassword
                : "";

        const rememberMe =
            formData.get("rememberMe") === "on";

        const errors: LoginErrors = {};

        if (!email) {
            errors.email = "Email is required";
        }

        if (!password) {
            errors.password = "Password is required"
        }

        if (Object.keys(errors).length > 0) {
            throw new LoginValidationError(errors);
        }

        return {
            email,
            password,
            rememberMe,
        };
    }

    return (
        <form
            className="space-y-6"
            onSubmit={handleSubmit}
        >
            <Input
                name="email"
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                error={error?.email}
            />

            <Input
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                error={error?.password}
                helper={{
                    element: <span>Forgot Password?</span>,
                    href: "/forgot-password"
                }}
            />

            <Checkbox
                name="rememberMe"
                label="Remember Me"
            />

            <Button
                type="submit"
                className="w-full"
                disabled={loginMutation.isPending}
            >
                {loginMutation.isPending
                    ? "Signing in..."
                    : "Enter"}
            </Button>
        </form>
    );
}

class LoginValidationError extends Error {
    constructor(
        public errors: LoginErrors
    ) {
        super("Login validation failed");
        this.name = "LoginValidationError"
    }
}