import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#08090b] text-[#e6e1d6]">

            <div className="grid min-h-screen lg:grid-cols-2">

                {/* LEFT — ATMOSPHERE */}
                <section className="relative hidden overflow-hidden border-r border-white/10 lg:block">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(148,137,91,0.16),transparent_30%),linear-gradient(145deg,#090a0c,#15130f,#08090b)]" />

                    <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9f936b]/5 blur-[140px]" />

                    <div className="relative flex min-h-screen flex-col justify-between p-12">

                        <Link
                            href="/"
                            className="text-xs uppercase tracking-[0.3em] text-[#77736b] transition hover:text-[#aaa38f]"
                        >
                            The Hollow Crown
                        </Link>

                        <div className="max-w-md">

                            <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#9f936b]/25 bg-[#11100e]">

                                <span className="text-5xl text-[#a99b68]">
                                    ♔
                                </span>

                            </div>

                            <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
                                Thornmarch
                            </p>

                            <h1 className="mt-5 font-serif text-5xl leading-tight text-[#e4ded1]">
                                The Crown
                                <br />
                                remembers you.
                            </h1>

                            <p className="mt-7 leading-8 text-[#77736b]">
                                Return to your account and continue exploring the world,
                                characters, factions, and secrets of Thornmarch.
                            </p>

                        </div>

                        <p className="text-xs uppercase tracking-[0.2em] text-[#4f4d48]">
                            The kingdom awaits
                        </p>

                    </div>

                </section>

                {/* RIGHT — FORM */}
                <section className="flex min-h-screen items-center justify-center px-6 py-16">

                    <div className="w-full max-w-md">

                        <div className="mb-10 lg:hidden">

                            <Link
                                href="/"
                                className="text-xs uppercase tracking-[0.3em] text-[#77736b]"
                            >
                                ← The Hollow Crown
                            </Link>

                        </div>

                        <div className="mb-10">

                            <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                                Welcome Back
                            </p>

                            <h2 className="mt-4 font-serif text-4xl text-[#e2dcd0]">
                                Enter Thornmarch
                            </h2>

                            <p className="mt-4 text-sm leading-7 text-[#77736b]">
                                Sign in to continue your journey.
                            </p>

                        </div>

                        <form className="space-y-6">
                            <Input label="Email" type="email" autoComplete="email" placeholder="you@example.com" />

                            <Input label="Password" type="password" autoComplete="current-password" placeholder="••••••••" />

                            <Button type="submit" className="w-full">Enter</Button>
                        </form>

                        {/* DIVIDER */}
                        <div className="my-8 flex items-center gap-4">

                            <div className="h-px flex-1 bg-white/10" />

                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#4f4d48]">
                                Or continue with
                            </span>

                            <div className="h-px flex-1 bg-white/10" />

                        </div>

                        {/* OAUTH */}
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Button type="button" variant="secondary">Google</Button>
                            <Button type="button" variant="secondary">GitHub</Button>
                        </div>

                        <p className="mt-10 text-center text-sm text-[#625f59]">

                            New to Thornmarch?{" "}

                            <Link
                                href="/register"
                                className="text-[#a99b68] transition hover:text-[#c0b278]"
                            >
                                Create an account
                            </Link>

                        </p>

                        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-[#3f3e3a]">
                            Choose your path wisely
                        </p>

                        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-[#3f3e3a]">Powered by Auth-Forge</p>

                    </div>

                </section>

            </div>

        </main>
    );
}
