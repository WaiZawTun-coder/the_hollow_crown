import Link from "next/link";

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: (
            <>
                By accessing or using The Hollow Crown website, you agree to be
                bound by these Terms of Service. If you do not agree with these
                terms, please do not use the website.
            </>
        ),
    },
    {
        title: "2. Accounts",
        content: (
            <>
                Some features may require you to create an account. You are
                responsible for providing accurate information and for keeping your
                account credentials secure.
                <br />
                <br />
                You are responsible for activity performed through your account. If
                you believe your account has been accessed without authorization,
                please contact us.
            </>
        ),
    },
    {
        title: "3. Acceptable Use",
        content: (
            <>
                You agree not to misuse the website, interfere with its operation,
                attempt to gain unauthorized access, or use the service for unlawful
                purposes.
            </>
        ),
    },
    {
        title: "4. Intellectual Property",
        content: (
            <>
                The Hollow Crown name, original campaign material, artwork, text,
                designs, and other original content are protected by applicable
                intellectual-property laws.
                <br />
                <br />
                You may not reproduce, redistribute, or commercially exploit
                proprietary content without appropriate permission.
            </>
        ),
    },
    {
        title: "5. User Content",
        content: (
            <>
                If the website allows you to submit content, you retain ownership of
                your original content. By submitting content, you grant the website
                the permissions necessary to store, display, and operate the relevant
                feature.
            </>
        ),
    },
    {
        title: "6. Third-Party Services",
        content: (
            <>
                The website may use third-party services for authentication,
                analytics, hosting, or other functionality. Your use of those
                services may also be subject to their respective terms and policies.
            </>
        ),
    },
    {
        title: "7. Availability",
        content: (
            <>
                We may modify, suspend, or discontinue features of the website at any
                time. We do not guarantee that the service will always be available,
                uninterrupted, or error-free.
            </>
        ),
    },
    {
        title: "8. Disclaimer",
        content: (
            <>
                The website and its content are provided on an “as is” and “as
                available” basis, without warranties of any kind to the extent
                permitted by applicable law.
            </>
        ),
    },
    {
        title: "9. Limitation of Liability",
        content: (
            <>
                To the maximum extent permitted by applicable law, The Hollow Crown
                and its operators will not be liable for indirect, incidental,
                special, or consequential damages arising from your use of the
                website.
            </>
        ),
    },
    {
        title: "10. Changes to These Terms",
        content: (
            <>
                These terms may be updated from time to time. When changes are made,
                the updated version will be published on this page.
            </>
        ),
    },
    {
        title: "11. Contact",
        content: (
            <>
                If you have questions regarding these Terms of Service, please use
                the contact method provided by the website.
            </>
        ),
    },
];

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#08090b] text-[#e6e1d6]">

            {/* HEADER */}
            <header className="border-b border-white/10">

                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-7 lg:px-12">

                    <Link
                        href="/"
                        className="font-serif text-xl text-[#d8d2c4] transition hover:text-white"
                    >
                        The Hollow Crown
                    </Link>

                    <Link
                        href="/register"
                        className="text-xs uppercase tracking-[0.2em] text-[#77736b] transition hover:text-[#aaa38f]"
                    >
                        ← Register
                    </Link>

                </div>

            </header>

            {/* TITLE */}
            <section className="border-b border-white/10">

                <div className="mx-auto max-w-5xl px-6 py-24 lg:px-12">

                    <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
                        Legal
                    </p>

                    <h1 className="mt-5 font-serif text-5xl text-[#e4ded1] md:text-7xl">
                        Terms of Service
                    </h1>

                    <p className="mt-6 max-w-2xl leading-8 text-[#77736b]">
                        The rules and conditions governing your use of The Hollow Crown
                        website.
                    </p>

                    <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#4f4d48]">
                        Last updated: August 30, 2026
                    </p>

                </div>

            </section>

            {/* CONTENT */}
            <section className="mx-auto max-w-5xl px-6 py-20 lg:px-12">

                <div className="space-y-14">

                    {sections.map((section) => (
                        <section key={section.title}>

                            <h2 className="font-serif text-2xl text-[#d4cec0] md:text-3xl">
                                {section.title}
                            </h2>

                            <div className="mt-5 max-w-3xl text-sm leading-8 text-[#77736b]">
                                {section.content}
                            </div>

                        </section>
                    ))}

                </div>

            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/10">

                <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-12">

                    <p className="text-xs uppercase tracking-[0.15em] text-[#4f4d48]">
                        The Hollow Crown
                    </p>

                    <div className="flex gap-6">

                        <Link
                            href="/privacy"
                            className="text-xs text-[#69665f] transition hover:text-[#aaa38f]"
                        >
                            Privacy
                        </Link>

                        <Link
                            href="/"
                            className="text-xs text-[#69665f] transition hover:text-[#aaa38f]"
                        >
                            Home
                        </Link>

                    </div>

                </div>

            </footer>

        </main>
    );
}