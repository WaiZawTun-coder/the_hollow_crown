import Link from "next/link";

const paths = [
    {
        number: "I",
        title: "The Iron Vow",
        subtitle: "The Holy Tyrant",
        description:
            "Valerius wears the Crown. Thornmarch gains stability, but Sylara twists his sense of justice into merciless crusades.",
        choice: "Consolidate power or join the resistance.",
    },
    {
        number: "II",
        title: "The Broken Crown",
        subtitle: "The Fey Queen",
        description:
            "The Crown has been shattered. Sylara walks free, and the Dreadmoor begins spreading into the kingdom.",
        choice: "Negotiate with Sylara or attempt to bind her again.",
    },
    {
        number: "III",
        title: "The Silent Crown",
        subtitle: "The Plutocracy",
        description:
            "Joras locks the Crown away and turns its power toward trade. Thornmarch becomes prosperous—and increasingly controlled.",
        choice: "Serve the Exchequer or join the uprising.",
    },
    {
        number: "IV",
        title: "The Host",
        subtitle: "The Civil War",
        description:
            "A member of the party becomes Sylara's vessel. Every remaining faction sends assassins and diplomats.",
        choice: "Claim the throne or abandon it.",
    },
    {
        number: "V",
        title: "The Fifth Way",
        subtitle: "A Kingdom Without the Crown",
        description:
            "The binding is dissolved. Sylara departs, the Crown becomes mundane, and Thornmarch must determine its own future.",
        choice: "Forge a new order.",
    },
];

const endings = [
    {
        symbol: "⚔",
        title: "Order",
        description:
            "The ancient binding remains. Sylara stays imprisoned and Thornmarch retains the status quo.",
    },
    {
        symbol: "✦",
        title: "Liberty",
        description:
            "Sylara is freed. The kingdom accepts the chaos and uncertainty that follows.",
    },
    {
        symbol: "♛",
        title: "Power",
        description:
            "The binding is usurped. Sylara remains trapped within a new vessel, and someone claims dominion.",
    },
    {
        symbol: "◇",
        title: "Freedom",
        description:
            "The magic is dissolved completely, ending divine fey interference in mortal affairs.",
    },
];

export default function ActThreePage() {
    return (
        <main className="min-h-screen bg-[#08090b] text-[#e6e1d6]">

            {/* HEADER */}
            <header className="border-b border-white/10 bg-[#090a0c]">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-12">

                    <Link
                        href="/campaigns/the-hollow-crown"
                        className="text-xs uppercase tracking-[0.25em] text-[#77736b] transition hover:text-[#aaa38f]"
                    >
                        ← The Hollow Crown
                    </Link>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#55524c]">
                        Act III
                    </span>

                    <Link
                        href="/dashboard"
                        className="text-xs uppercase tracking-[0.25em] text-[#77736b] transition hover:text-[#aaa38f]"
                    >
                        Dashboard
                    </Link>

                </div>
            </header>

            {/* HERO */}
            <section className="relative overflow-hidden border-b border-white/10">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(137,105,73,0.12),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(100,75,57,0.08),transparent_30%),linear-gradient(145deg,#130f0d,#0a0909,#08090b)]" />

                <div className="relative mx-auto max-w-4xl px-6 py-32 text-center lg:px-12">

                    <p className="font-serif text-7xl text-[#463d37]">
                        III
                    </p>

                    <p className="mt-6 text-xs uppercase tracking-[0.45em] text-[#a18b72]">
                        Act Three
                    </p>

                    <h1 className="mt-5 font-serif text-5xl leading-tight text-[#e0d9cc] md:text-7xl">
                        Crownfall
                    </h1>

                    <div className="mx-auto mt-9 h-px w-24 bg-[#a18b72]/40" />

                    <p className="mx-auto mt-9 max-w-2xl text-lg leading-8 text-[#76716a]">
                        The Crown has been claimed.
                        <br />
                        Now Thornmarch must live with the consequences.
                    </p>

                </div>

            </section>

            {/* OPENING */}
            <section className="mx-auto max-w-4xl px-6 py-24 lg:px-12">

                <div className="grid gap-10 md:grid-cols-[180px_1fr]">

                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#a18b72]">
                            Crownfall
                        </p>
                    </div>

                    <div className="space-y-6 text-sm leading-8 text-[#74706a]">

                        <p>
                            The choice made beneath the Sunken Cathedral has changed
                            everything.
                        </p>

                        <p>
                            The factions no longer compete for the Crown from the shadows.
                            They now fight openly for the future of Thornmarch.
                        </p>

                        <p>
                            Rebellion spreads. Old alliances collapse. Soldiers choose
                            sides. Merchants close their gates. Villages begin preparing
                            for war.
                        </p>

                        <p className="font-serif text-xl leading-8 text-[#aaa08f]">
                            The question is no longer who deserves the Crown.
                            <br />
                            It is whether Thornmarch needs one at all.
                        </p>

                    </div>

                </div>

            </section>

            {/* BRANCHES */}
            <section className="border-y border-white/10 bg-[#0b0b0c]">

                <div className="mx-auto max-w-6xl px-6 py-24 lg:px-12">

                    <div className="mb-14">

                        <p className="text-xs uppercase tracking-[0.4em] text-[#a18b72]">
                            The Consequences
                        </p>

                        <h2 className="mt-5 font-serif text-4xl text-[#d8d1c3] md:text-5xl">
                            Five possible futures
                        </h2>

                        <p className="mt-5 max-w-2xl leading-7 text-[#69655f]">
                            The path forward depends on what happened inside the Cathedral.
                        </p>

                    </div>

                    <div className="space-y-px bg-white/10">

                        {paths.map((path) => (
                            <div
                                key={path.number}
                                className="group bg-[#101113] p-8 transition hover:bg-[#141414] md:p-10"
                            >

                                <div className="grid gap-8 md:grid-cols-[80px_1fr_230px] md:items-start">

                                    <span className="font-serif text-4xl text-[#494641] transition group-hover:text-[#a18b72]">
                                        {path.number}
                                    </span>

                                    <div>

                                        <p className="text-[9px] uppercase tracking-[0.3em] text-[#706458]">
                                            {path.subtitle}
                                        </p>

                                        <h3 className="mt-3 font-serif text-2xl text-[#cbc5b8]">
                                            {path.title}
                                        </h3>

                                        <p className="mt-5 max-w-2xl text-sm leading-8 text-[#69655f]">
                                            {path.description}
                                        </p>

                                    </div>

                                    <div className="border-l border-white/10 pl-6">

                                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#55524c]">
                                            Your Decision
                                        </p>

                                        <p className="mt-3 text-sm leading-6 text-[#777169]">
                                            {path.choice}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* WAR */}
            <section className="relative overflow-hidden border-b border-white/10">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,76,48,0.08),transparent_35%)]" />

                <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-12">

                    <p className="text-xs uppercase tracking-[0.4em] text-[#a18b72]">
                        The Final Conflict
                    </p>

                    <h2 className="mt-6 font-serif text-4xl text-[#d7d0c3] md:text-5xl">
                        The kingdom chooses a side.
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl leading-8 text-[#706b64]">
                        Every faction believes it knows what Thornmarch needs. Every
                        faction is willing to sacrifice lives to achieve it.
                    </p>

                    <div className="mx-auto mt-12 grid max-w-3xl gap-px bg-white/10 md:grid-cols-3">

                        <Conflict
                            title="The Nobles"
                            text="Fear the collapse of the old order."
                        />

                        <Conflict
                            title="The People"
                            text="Demand a voice in their own future."
                        />

                        <Conflict
                            title="The Fey"
                            text="Want Sylara's freedom."
                        />

                    </div>

                </div>

            </section>

            {/* TRUTH */}
            <section className="mx-auto max-w-4xl px-6 py-28 lg:px-12">

                <div className="text-center">

                    <p className="text-xs uppercase tracking-[0.4em] text-[#a18b72]">
                        The Last Truth
                    </p>

                    <h2 className="mt-6 font-serif text-4xl text-[#d7d0c3]">
                        The binding was never about a crown.
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#706b64]">
                        Sylara was not imprisoned by a mortal king. She was bound by her
                        own kind after daring to grant free will to mortals.
                    </p>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#706b64]">
                        The Crown was merely the vessel chosen to contain her.
                    </p>

                    <p className="mt-10 font-serif text-2xl text-[#aaa08f]">
                        Now the party decides whether that ancient judgment should survive.
                    </p>

                </div>

            </section>

            {/* FINAL CHOICE */}
            <section className="border-y border-white/10 bg-[#0b0c0e]">

                <div className="mx-auto max-w-6xl px-6 py-28 lg:px-12">

                    <div className="mb-16 text-center">

                        <p className="text-xs uppercase tracking-[0.4em] text-[#a18b72]">
                            The Final Choice
                        </p>

                        <h2 className="mt-6 font-serif text-4xl text-[#d8d1c3] md:text-5xl">
                            What deserves to survive?
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#69655f]">
                            The final decision is not about who should rule.
                            It is about what kind of future Thornmarch deserves.
                        </p>

                    </div>

                    <div className="grid gap-px bg-white/10 md:grid-cols-2">

                        {endings.map((ending) => (
                            <div
                                key={ending.title}
                                className="group bg-[#101113] p-10 text-center transition hover:bg-[#141515]"
                            >

                                <span className="text-3xl text-[#6d6257] transition group-hover:text-[#a18b72]">
                                    {ending.symbol}
                                </span>

                                <h3 className="mt-7 font-serif text-3xl text-[#cbc5b8]">
                                    {ending.title}
                                </h3>

                                <div className="mx-auto mt-5 h-px w-10 bg-white/10" />

                                <p className="mx-auto mt-6 max-w-sm text-sm leading-8 text-[#69655f]">
                                    {ending.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* EPILOGUE */}
            <section className="relative overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(159,147,107,0.09),transparent_32%),linear-gradient(180deg,#0c0d0d,#08090b)]" />

                <div className="relative mx-auto max-w-3xl px-6 py-32 text-center lg:px-12">

                    <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
                        Epilogue
                    </p>

                    <h2 className="mt-7 font-serif text-4xl leading-tight text-[#ddd7ca] md:text-5xl">
                        There was never going to be a perfect ending.
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#716c64]">
                        Thornmarch will remember what you chose. Some will call you
                        savior. Others will call you tyrant, traitor, or fool.
                    </p>

                    <p className="mt-8 font-serif text-2xl text-[#aaa08f]">
                        Perhaps all of them will be right.
                    </p>

                    <div className="mx-auto mt-12 h-px w-16 bg-[#9f936b]/40" />

                    <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-[#55524c]">
                        The Hollow Crown
                    </p>

                </div>

            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/10">

                <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-6 py-10 sm:flex-row sm:items-center lg:px-12">

                    <Link
                        href="/campaigns/the-hollow-crown"
                        className="text-xs uppercase tracking-[0.2em] text-[#55524c] hover:text-[#858078]"
                    >
                        ← Campaign
                    </Link>

                    <div className="flex gap-6">

                        <Link
                            href="/characters"
                            className="text-xs text-[#55524c] hover:text-[#858078]"
                        >
                            Characters
                        </Link>

                        <Link
                            href="/factions"
                            className="text-xs text-[#55524c] hover:text-[#858078]"
                        >
                            Factions
                        </Link>

                        <Link
                            href="/crown"
                            className="text-xs text-[#55524c] hover:text-[#858078]"
                        >
                            The Crown
                        </Link>

                    </div>

                </div>

            </footer>

        </main>
    );
}

function Conflict({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <div className="bg-[#101113] p-7">

            <h3 className="font-serif text-lg text-[#bbb4a7]">
                {title}
            </h3>

            <p className="mt-3 text-xs leading-6 text-[#605d57]">
                {text}
            </p>

        </div>
    );
}
