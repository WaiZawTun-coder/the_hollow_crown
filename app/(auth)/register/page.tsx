import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-[#08090b] text-[#e6e1d6]">

            <div className="grid min-h-screen lg:grid-cols-2">

                {/* LEFT — FORM */}
                <section className="order-2 flex min-h-screen items-center justify-center px-6 py-16 lg:order-1">

                    <div className="w-full max-w-md">

                        <div className="mb-10">

                            <Link
                                href="/"
                                className="text-xs uppercase tracking-[0.3em] text-[#77736b] transition hover:text-[#aaa38f]"
                            >
                                ← The Hollow Crown
                            </Link>

                        </div>

                        <div className="mb-10">

                            <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                                Begin Your Journey
                            </p>

                            <h1 className="mt-4 font-serif text-4xl text-[#e2dcd0]">
                                Enter the kingdom
                            </h1>

                            <p className="mt-4 text-sm leading-7 text-[#77736b]">
                                Create your account and step into the world of Thornmarch.
                            </p>

                        </div>

                        <RegisterForm />

                        {/* <form className="space-y-5">
                            <Input label="Name" id="name" name="name" autoComplete="name" placeholder="Your name" />

                            <Input label="email" id="email" name="email" autoComplete="email" placeholder="you@example.com" />

                            <Input label="Password" id="password" type="password" name="password" autoComplete="new-password" placeholder="••••••••" />

                            <Input label="New Password" id="new-password" type="password" name="confirmPassword" autoComplete="new-password" placeholder="••••••••" />

                            <label className="flex cursor-pointer items-start gap-3 pt-2">

                                <input
                                    type="checkbox"
                                    className="mt-1 h-4 w-4 accent-[#9f936b]"
                                />

                                <span className="text-xs leading-6 text-[#625f59]">
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
                                </span>

                            </label>

                            <Button type="submit" className="w-full">Create Account</Button>
                        </form> */}

                        {/* DIVIDER */}
                        <div className="my-8 flex items-center gap-4">

                            <div className="h-px flex-1 bg-white/10" />

                            <span className="text-[10px] uppercase tracking-[0.25em] text-[#4f4d48]">
                                Or
                            </span>

                            <div className="h-px flex-1 bg-white/10" />

                        </div>

                        {/* OAUTH */}
                        <div className="grid gap-3 sm:grid-cols-2">

                            <button
                                type="button"
                                className="border border-white/10 bg-[#101113] px-4 py-3 text-xs uppercase tracking-[0.15em] text-[#aaa49a] transition hover:border-white/20 hover:text-white"
                            >
                                Google
                            </button>

                            <button
                                type="button"
                                className="border border-white/10 bg-[#101113] px-4 py-3 text-xs uppercase tracking-[0.15em] text-[#aaa49a] transition hover:border-white/20 hover:text-white"
                            >
                                GitHub
                            </button>

                        </div>

                        <p className="mt-10 text-center text-sm text-[#625f59]">

                            Already have an account?{" "}

                            <Link
                                href="/login"
                                className="text-[#a99b68] transition hover:text-[#c0b278]"
                            >
                                Sign in
                            </Link>

                        </p>

                    </div>

                </section>

                {/* RIGHT — ATMOSPHERE */}
                <section className="relative order-1 hidden overflow-hidden border-l border-white/10 lg:order-2 lg:block">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(148,137,91,0.18),transparent_28%),linear-gradient(145deg,#15130f,#090a0c,#08090b)]" />

                    <div className="absolute left-1/2 top-1/2 h-137.5 w-137.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9f936b]/5 blur-[150px]" />

                    <div className="relative flex min-h-screen flex-col justify-between p-12">

                        <div />

                        <div className="max-w-md">

                            <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#9f936b]/25 bg-[#11100e]">

                                <span className="text-5xl text-[#a99b68]">
                                    ♔
                                </span>

                            </div>

                            <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
                                A Kingdom Without a King
                            </p>

                            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#e4ded1]">
                                Choose your path.
                            </h2>

                            <p className="mt-7 leading-8 text-[#77736b]">
                                Order. Freedom. Prosperity. Power.
                                <br />
                                The choice will always be yours.
                            </p>

                        </div>

                        <div>

                            <div className="mb-5 h-px w-full bg-white/10" />

                            <p className="text-xs uppercase tracking-[0.2em] text-[#4f4d48]">
                                The Hollow Crown
                            </p>

                        </div>

                    </div>

                </section>

            </div>

        </main>
    );
}
