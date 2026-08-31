"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthMutations } from "@/hooks/useAuthMutations";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ResetPasswordPage() {
    const router = useRouter();
    const { passwordUpdateMutation } = useAuthMutations();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");

    const passwordsMatch =
        password.length > 0 &&
        confirmPassword.length > 0 &&
        password === confirmPassword;

    const passwordStrength = getPasswordStrength(password);

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (passwordStrength.level == 1) {
            setError("Please choose a stronger password.");
            return;
        }

        setStatus("loading");

        try {
            await passwordUpdateMutation.mutateAsync({
                password
            });
            setStatus("success");
        } catch (err) {
            setStatus("error");

            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again."
            );
        }
    }

    if (status === "success") {
        return (
            <main className="min-h-screen bg-[#0B0A09] text-[#D8D0C0]">
                <div className="grid min-h-screen lg:grid-cols-2">
                    <BrandPanel />

                    <section className="flex min-h-screen items-center justify-center px-6 py-16">
                        <div className="w-full max-w-md">
                            <SuccessState
                                onContinue={() => router.push("/login")}
                            />
                        </div>
                    </section>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0B0A09] text-[#D8D0C0]">
            <div className="grid min-h-screen lg:grid-cols-2">
                <BrandPanel />

                <section className="flex min-h-screen items-center justify-center px-6 py-16">
                    <div className="w-full max-w-md">
                        {/* MOBILE LOGO */}
                        <div className="mb-16 lg:hidden">
                            <Link
                                href="/"
                                className="font-serif text-sm tracking-[0.3em]"
                            >
                                THE HOLLOW CROWN
                            </Link>
                        </div>

                        {/* HEADER */}
                        <div className="mb-10">
                            <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-[#A88B4A]">
                                Account Recovery
                            </p>

                            <h2 className="font-serif text-4xl uppercase">
                                New Password
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#8E887D]">
                                Choose a new password for your account. Make sure it is
                                strong and something you haven&apos;t used before.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* PASSWORD */}
                            <div>
                                <Input
                                    label="New Password"
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    placeholder="Enter your new Password"
                                />

                                {/* PASSWORD STRENGTH */}
                                {password.length > 0 && (
                                    <div className="mt-3">
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4].map((item) => (
                                                <div
                                                    key={item}
                                                    className={`h - 1 flex - 1 transition ${item <= passwordStrength.level
                                                        ? "bg-[#A88B4A]"
                                                        : "bg-[#A88B4A]/10"
                                                        } `}
                                                />
                                            ))}
                                        </div>

                                        <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-[#8E887D]">
                                            {passwordStrength.label}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* CONFIRM PASSWORD */}
                            <div>
                                <Input
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={confirmPassword}
                                    onChange={(event) =>
                                        setConfirmPassword(event.target.value)
                                    }
                                    placeholder="Confirm your new password"
                                />

                                {confirmPassword.length > 0 && (
                                    <p
                                        className={`mt - 2 text - [8px] uppercase tracking - [0.2em] ${passwordsMatch
                                            ? "text-[#A88B4A]"
                                            : "text-[#A66B6B]"
                                            } `}
                                    >
                                        {passwordsMatch
                                            ? "Passwords match"
                                            : "Passwords do not match"}
                                    </p>
                                )}
                            </div>

                            {/* PASSWORD REQUIREMENTS */}
                            <div className="border border-[#A88B4A]/10 bg-[#11100E] p-5">
                                <p className="text-[8px] uppercase tracking-[0.3em] text-[#A88B4A]">
                                    Password Requirements
                                </p>

                                <ul className="mt-4 space-y-2">
                                    <Requirement
                                        valid={password.length >= 8}
                                        text="At least 8 characters"
                                    />

                                    <Requirement
                                        valid={/[A-Z]/.test(password)}
                                        text="One uppercase letter"
                                    />

                                    <Requirement
                                        valid={/[a-z]/.test(password)}
                                        text="One lowercase letter"
                                    />

                                    <Requirement
                                        valid={/[0-9]/.test(password)}
                                        text="One number"
                                    />
                                </ul>
                            </div>

                            {/* ERROR */}
                            {status === "error" && (
                                <div className="border border-[#7A2525]/40 bg-[#7A2525]/10 px-4 py-3">
                                    <p className="text-xs leading-6 text-[#C58B8B]">
                                        {error}
                                    </p>
                                </div>
                            )}

                            {/* SUBMIT */}
                            <Button
                                type="submit"
                                disabled={
                                    status === "loading" ||
                                    !passwordsMatch ||
                                    passwordStrength.level < 3
                                }
                                className="w-full"
                            >
                                {status === "loading"
                                    ? "Updating..."
                                    : "Update Password"}
                            </Button>
                        </form>

                        {/* BACK */}
                        <div className="mt-10 border-t border-[#A88B4A]/10 pt-8 text-center">
                            <Link
                                href="/login"
                                className="text-[9px] uppercase tracking-[0.3em] text-[#8E887D] transition hover:text-[#A88B4A]"
                            >
                                ← Back to Sign In
                            </Link>
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-[8px] uppercase tracking-[0.25em] text-[#8E887D]/30">
                                The Hollow Crown
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

/* -------------------------------- */
/* BRAND PANEL */
/* -------------------------------- */

function BrandPanel() {
    return (
        <section className="relative hidden overflow-hidden border-r border-[#A88B4A]/10 lg:flex">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,139,74,0.08),transparent_50%)]" />

            <div className="absolute left-16 top-24 h-40 w-px bg-linear-to-b from-transparent via-[#A88B4A]/30 to-transparent" />

            <div className="absolute bottom-24 right-16 h-40 w-px bg-linear-to-b from-transparent via-[#A88B4A]/30 to-transparent" />

            <div className="relative z-10 flex w-full flex-col justify-between p-16">
                <Link
                    href="/"
                    className="font-serif text-sm tracking-[0.35em]"
                >
                    THE HOLLOW CROWN
                </Link>

                <div className="max-w-lg">
                    <p className="mb-6 text-[9px] uppercase tracking-[0.5em] text-[#A88B4A]">
                        A New Beginning
                    </p>

                    <h1 className="font-serif text-6xl uppercase leading-[0.95] xl:text-7xl">
                        Choose
                        <br />
                        <span className="text-[#A88B4A]">wisely.</span>
                    </h1>

                    <div className="my-8 h-px w-16 bg-[#A88B4A]/50" />

                    <p className="max-w-md font-serif text-lg leading-8 text-[#8E887D]">
                        Some things can be reclaimed.
                        <br />
                        Some cannot.
                    </p>
                </div>

                <p className="text-[8px] uppercase tracking-[0.3em] text-[#8E887D]/40">
                    Thornmarch • The Kingless Land
                </p>
            </div>
        </section>
    );
}

/* -------------------------------- */
/* REQUIREMENT */
/* -------------------------------- */

function Requirement({
    valid,
    text,
}: {
    valid: boolean;
    text: string;
}) {
    return (
        <li className="flex items-center gap-3">
            <span
                className={`flex h-4 w-4 items-center justify-center rounded-full border text-[9px] ${valid
                    ? "border-[#A88B4A]/50 text-[#A88B4A]"
                    : "border-[#8E887D]/20 text-[#8E887D]/30"
                    } `}
            >
                {valid ? "✓" : ""}
            </span>

            <span
                className={`text - xs ${valid ? "text-[#D8D0C0]/70" : "text-[#8E887D]/50"
                    } `}
            >
                {text}
            </span>
        </li>
    );
}

/* -------------------------------- */
/* SUCCESS */
/* -------------------------------- */

function SuccessState({
    onContinue,
}: {
    onContinue: () => void;
}) {
    return (
        <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#A88B4A]/30 bg-[#A88B4A]/5">
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#A88B4A]"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            </div>

            <p className="mt-10 text-[9px] uppercase tracking-[0.45em] text-[#A88B4A]">
                Password Updated
            </p>

            <h2 className="mt-4 font-serif text-4xl uppercase">
                You&apos;re Back
            </h2>

            <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-[#8E887D]">
                Your password has been successfully updated. You can now sign in
                with your new password.
            </p>

            <button
                type="button"
                onClick={onContinue}
                className="mt-10 inline-block border border-[#A88B4A] bg-[#A88B4A] px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-[#0B0A09] transition hover:bg-transparent hover:text-[#A88B4A]"
            >
                Continue to Sign In
            </button>
        </div>
    );
}

/* -------------------------------- */
/* PASSWORD STRENGTH */
/* -------------------------------- */

function getPasswordStrength(password: string) {
    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
        return {
            level: 1,
            label: "Weak password",
        };
    }

    if (score <= 3) {
        return {
            level: 2,
            label: "Fair password",
        };
    }

    if (score <= 4) {
        return {
            level: 3,
            label: "Good password",
        };
    }

    return {
        level: 4,
        label: "Strong password",
    };
}