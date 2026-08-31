"use client"

import { RegisterCredentials } from "@/app/features/auth/types";
import { useAuthMutations } from "@/hooks/useAuthMutations";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkBox";

type RegisterErrors = {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    agreedTermsNConditions?: string;
    global?: string;
};

export default function RegisterForm() {
    const { registerMutation } = useAuthMutations();
    const [error, setError] = useState<RegisterErrors | null>(null);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.currentTarget);

        const agreed = formData.get("agreedTermsNConditions");

        try {
            const credentials = getRegisterCredentials(formData);

            if (agreed != "on") {
                setError(prev => ({
                    ...prev,
                    agreedTermsNConditions: "Please Agree to continue creating account."
                }));
                return;
            }

            registerMutation.mutate(credentials);
        } catch (error: unknown) {
            if (error instanceof RegisterValidationError) {
                setError(error.errors);
                return;
            }

            if (error instanceof Error) {
                console.error(error);
            }
        }
    }

    function getRegisterCredentials(
        formData: FormData
    ): RegisterCredentials {
        const rawEmail = formData.get("email");
        const rawPassword = formData.get("password");
        const rawConfirmPassword = formData.get("confirmPassword");
        const rawFirstName = formData.get("name");

        const email =
            typeof rawEmail === "string"
                ? rawEmail.trim()
                : "";

        const password =
            typeof rawPassword === "string"
                ? rawPassword
                : "";

        const confirmPassword =
            typeof rawConfirmPassword === "string"
                ? rawConfirmPassword
                : "";

        const firstName =
            typeof rawFirstName === "string"
                ? rawFirstName.trim()
                : "";

        const errors: RegisterErrors = {};

        if (!firstName) {
            errors.name = "Name is required";
        }

        if (!email) {
            errors.email = "Email is required";
        }

        if (!password) {
            errors.password = "Password is required";
        }

        if (!confirmPassword) {
            errors.confirmPassword =
                "Confirm Password is required";
        }

        if (
            password &&
            confirmPassword &&
            password !== confirmPassword
        ) {
            errors.confirmPassword =
                "Passwords do not match";
        }

        if (Object.keys(errors).length > 0) {
            throw new RegisterValidationError(errors);
        }

        return {
            email,
            password,
            firstName,
            lastName: "",
        };
    }

    return (<form className="space-y-5" onSubmit={handleSubmit}>
        <Input
            label="Name"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            error={error?.name}
        />

        <Input
            label="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            error={error?.email}
        />

        <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="••••••••"
            error={error?.password}
        />

        <Input
            label="New Password"
            id="new-password"
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
            placeholder="••••••••"
            error={error?.confirmPassword}
        />

        <Checkbox
            label={<span className="text-xs leading-6 text-[#625f59]">
                I agree to the{" "}
                <Link
                    href="/terms"
                    className="text-[#9f936b] hover:text-[#c0b278]"
                >
                    terms
                </Link>{" "}
                and{" "}
                <Link
                    href="/privacy"
                    className="text-[#9f936b] hover:text-[#c0b278]"
                >
                    privacy policy
                </Link>
                .
            </span>}
            name="agreedTermsNConditions"
            error={error?.agreedTermsNConditions}
        />

        {registerMutation.error &&
            <p className="text-sm text-red-500">
                {registerMutation.error.message}
            </p>
        }

        <Button type="submit" className="w-full">Create Account</Button>
    </form>);
}

class RegisterValidationError extends Error {
    constructor(
        public errors: RegisterErrors
    ) {
        super("Registration validation failed");
        this.name = "RegisterValidationError";
    }
}