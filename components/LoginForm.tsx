"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useAuthMutations } from "@/hooks/useAuthMutations";
import { Select } from "./ui/select";
import { Checkbox } from "./ui/checkBox";

export default function LoginForm() {
    const { loginMutation } = useAuthMutations();

    const handleSubmit = (formData: FormData) => {
        loginMutation.mutate({ formData });
    };

    return (
        <form className="space-y-6" action={handleSubmit}>
            {loginMutation.error && (
                <p className="text-sm text-red-500">
                    {loginMutation.error.message}
                </p>
            )}

            <Input
                name="email"
                label="Email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
            />

            <Input
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
            />

            <Checkbox label="Remember Me" />

            <Button
                type="submit"
                className="w-full"
                disabled={loginMutation.isPending}
            >
                {loginMutation.isPending ? "Signing in..." : "Enter"}
            </Button>
        </form>
    );
}