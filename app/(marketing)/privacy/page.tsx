import Link from "next/link";

const sections = [
    {
        title: "1. Information We Collect",
        content: (
            <>
                Depending on how you use the website, we may collect information such
                as your name, email address, account information, and information you
                voluntarily provide.
                <br />
                <br />
                We may also collect technical information such as browser type,
                device information, IP address, and general usage information when
                necessary to operate and secure the website.
            </>
        ),
    },
    {
        title: "2. How We Use Information",
        content: (
            <>
                Information may be used to create and manage your account, provide
                requested features, authenticate users, communicate with you, improve
                the website, and maintain the security and reliability of the
                service.
            </>
        ),
    },
    {
        title: "3. Authentication",
        content: (
            <>
                If you sign in using a third-party authentication provider, such as
                Google or GitHub, that provider may share information with us
                according to your authorization and its own privacy policy.
                <br />
                <br />
                We use information received through authentication to create or
                associate your account and provide the requested authentication
                functionality.
            </>
        ),
    },
    {
        title: "4. Cookies and Similar Technologies",
        content: (
            <>
                We may use cookies or similar technologies to maintain authentication
                sessions, remember preferences, improve functionality, and help
                protect the website.
            </>
        ),
    },
    {
        title: "5. Service Providers",
        content: (
            <>
                We may use third-party providers for services such as hosting,
                authentication, email delivery, analytics, storage, and infrastructure.
                These providers may process information as necessary to provide their
                services.
            </>
        ),
    },
    {
        title: "6. Data Security",
        content: (
            <>
                We take reasonable measures to protect information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission or electronic storage is completely
                secure.
            </>
        ),
    },
    {
        title: "7. Data Retention",
        content: (
            <>
                We retain information for as long as reasonably necessary to provide
                the service, maintain accounts, meet legal obligations, resolve
                disputes, and enforce applicable agreements.
            </>
        ),
    },
    {
        title: "8. Your Choices",
        content: (
            <>
                Depending on the information and applicable law, you may have rights
                to access, correct, delete, or otherwise control certain personal
                information associated with your account.
            </>
        ),
    },
    {
        title: "9. Children's Privacy",
        content: (
            <>
                The website is not intended to knowingly collect personal information
                from children in circumstances where such collection is prohibited by
                applicable law.
            </>
        ),
    },
    {
        title: "10. Changes to This Policy",
        content: (
            <>
                We may update this Privacy Policy from time to time. Any revised
                version will be published on this page with an updated date.
            </>
        ),
    },
    {
        title: "11. Contact",
        content: (
            <>
                If you have questions about this Privacy Policy or how your
                information is handled, please use the contact method provided by the
                website.
            </>
        ),
    },
];

export default function PrivacyPage() {
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
                        Privacy Policy
                    </h1>

                    <p className="mt-6 max-w-2xl leading-8 text-[#77736b]">
                        How The Hollow Crown collects, uses, and protects information
                        associated with your use of the website.
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
                            href="/terms"
                            className="text-xs text-[#69665f] transition hover:text-[#aaa38f]"
                        >
                            Terms
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