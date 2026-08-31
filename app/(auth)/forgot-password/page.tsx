"use client";

import { Input } from "@/components/ui/input";
import { useAuthMutations } from "@/hooks/useAuthMutations";
import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");
    const [message, setMessage] = useState<string>("");

    const { forgotPasswordMutation } = useAuthMutations();

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setStatus("loading");
        setError("");

        try {
            const response = await forgotPasswordMutation.mutateAsync({ email });
            setMessage(response?.message || "")
            // const response = await fetch(
            //     `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
            //     {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify({
            //             email,
            //         }),
            //     }
            // );

            // if (!response.ok) {
            //     throw new Error("Unable to process your request.");
            // }

            setStatus("success");
        } catch {
            setStatus("error");
            setError(
                "Something went wrong. Please check your email address and try again."
            );
        }
    }

    return (
        <main className="min-h-screen bg-[#0B0A09] text-[#D8D0C0]">
            <div className="grid min-h-screen lg:grid-cols-2">
                {/* LEFT — BRANDING */}
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
                                The Kingdom Remembers
                            </p>

                            <h1 className="font-serif text-6xl uppercase leading-[0.95] xl:text-7xl">
                                Lost your
                                <br />
                                <span className="text-[#A88B4A]">way?</span>
                            </h1>

                            <div className="my-8 h-px w-16 bg-[#A88B4A]/50" />

                            <p className="max-w-md font-serif text-lg leading-8 text-[#8E887D]">
                                Even those who wander the kingdom may find their way home.
                            </p>
                        </div>

                        <p className="text-[8px] uppercase tracking-[0.3em] text-[#8E887D]/40">
                            Thornmarch • The Kingless Land
                        </p>
                    </div>
                </section>

                {/* RIGHT — FORM */}
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

                        {status === "success" ? (
                            <SuccessState email={email} message={message} />
                        ) : (
                            <>
                                <div className="mb-10">
                                    <p className="mb-4 text-[9px] uppercase tracking-[0.45em] text-[#A88B4A]">
                                        Account Recovery
                                    </p>

                                    <h2 className="font-serif text-4xl uppercase">
                                        Forgot Password
                                    </h2>

                                    <p className="mt-5 text-sm leading-7 text-[#8E887D]">
                                        Enter the email address associated with your account.
                                        If an account exists, we&apos;ll send you instructions to
                                        reset your password.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* EMAIL */}
                                    <Input
                                        label="Email Address"
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        required value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        error={error}
                                    />

                                    {/* SUBMIT */}
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full border border-[#A88B4A] bg-[#A88B4A] px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-[#0B0A09] transition hover:bg-transparent hover:text-[#A88B4A] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {status === "loading"
                                            ? "Sending..."
                                            : "Send Reset Link"}
                                    </button>
                                </form>

                                {/* BACK TO LOGIN */}
                                <div className="mt-10 border-t border-[#A88B4A]/10 pt-8 text-center">
                                    <Link
                                        href="/login"
                                        className="text-[9px] uppercase tracking-[0.3em] text-[#8E887D] transition hover:text-[#A88B4A]"
                                    >
                                        ← Back to Sign In
                                    </Link>
                                </div>
                            </>
                        )}

                        {/* FOOTER */}
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

function SuccessState({ email, message }: { email: string, message?: string }) {
    return (
        <div className="text-center">
            {/* ICON */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#A88B4A]/30 bg-[#A88B4A]/5">
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-[#A88B4A]"
                >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
                    <path d="m22 6-10 7L2 6" />
                </svg>
            </div>

            <p className="mt-10 text-[9px] uppercase tracking-[0.45em] text-[#A88B4A]">
                {message || "Message Sent"}
            </p>

            <h2 className="mt-4 font-serif text-4xl uppercase">
                Check Your Email
            </h2>

            <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-[#8E887D]">
                If an account exists for
                <span className="text-[#D8D0C0]"> {email}</span>, we&apos;ve sent
                instructions to reset your password.
            </p>

            <p className="mx-auto mt-4 max-w-sm text-xs leading-6 text-[#8E887D]/60">
                The message may take a few minutes to arrive. Don&apos;t forget to
                check your spam folder.
            </p>

            <div className="mt-10">
                <Link
                    href="/login"
                    className="inline-block border border-[#A88B4A]/50 px-8 py-3 text-[9px] uppercase tracking-[0.3em] text-[#A88B4A] transition hover:bg-[#A88B4A] hover:text-[#0B0A09]"
                >
                    Return to Sign In
                </Link>
            </div>
        </div>
    );
}
