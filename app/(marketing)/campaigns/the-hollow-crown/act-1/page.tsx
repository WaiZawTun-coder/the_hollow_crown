import Link from "next/link";

const choices = [
    {
        number: "01",
        title: "Sell the Map",
        faction: "Silent Exchequer",
        result:
            "Gain gold, a base of operations, and subtle backing—but make enemies of idealists and the faithful.",
    },
    {
        number: "02",
        title: "Give It to the Iron Vow",
        faction: "Order",
        result:
            "Gain military support and access to forbidden archives, but become complicit in a military crackdown on dissent.",
    },
    {
        number: "03",
        title: "Share It with the Coven",
        faction: "Freedom",
        result:
            "Learn secret paths and gain common-folk allies, but become marked as anarchists by the nobles.",
    },
    {
        number: "04",
        title: "Play All Sides",
        faction: "Deception",
        result:
            "Gain intelligence from every faction if you succeed—but if you are exposed, all three may unite against you.",
    },
];

export default function ActOnePage() {
    return (
        <main className="min-h-screen bg-[#08090b] text-[#e6e1d6]">

            <header className="border-b border-white/10">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-12">

                    <Link
                        href="/campaigns/the-hollow-crown"
                        className="text-xs uppercase tracking-[0.25em] text-[#77736b] hover:text-[#aaa38f]"
                    >
                        ← The Hollow Crown
                    </Link>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#55524c]">
                        Act I
                    </span>

                </div>
            </header>

            <section className="relative overflow-hidden border-b border-white/10">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(159,147,107,0.12),transparent_30%),linear-gradient(145deg,#14130f,#090a0c)]" />

                <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-12">

                    <p className="font-serif text-6xl text-[#4e4c47]">
                        I
                    </p>

                    <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[#9f936b]">
                        Act One
                    </p>

                    <h1 className="mt-5 font-serif text-5xl text-[#e4ded1] md:text-6xl">
                        The Kingless Land
                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736b]">
                        Thornmarch has endured without a monarch for a century. Now the
                        return of the Hollow Crown threatens to tear the kingdom apart.
                    </p>

                </div>

            </section>

            <section className="mx-auto max-w-4xl px-6 py-24 lg:px-12">

                <div className="space-y-16">

                    <StorySection
                        label="01 — Thornmarch"
                        title="A kingdom without a king"
                    >
                        <p>
                            The party arrives in the crumbling border kingdom of Thornmarch,
                            ruled by a weak Regency Council.
                        </p>

                        <p>
                            Monstrous incursions plague the people while brutal tax
                            collectors drain what remains of their wealth.
                        </p>

                        <p>
                            Then a rumor begins spreading through the kingdom:
                            <em> the Hollow Crown has been found.</em>
                        </p>
                    </StorySection>

                    <StorySection
                        label="02 — The Confrontation"
                        title="Three factions collide"
                    >
                        <p>
                            The party witnesses a violent clash between agents of the
                            Iron Vow, the Coven of Rust, and the Silent Exchequer.
                        </p>

                        <p>
                            They are fighting over a fragment of an ancient map—the first
                            clue to the Crown&apos;s location.
                        </p>
                    </StorySection>

                    <StorySection
                        label="03 — The First Choice"
                        title="Who will you trust?"
                    >
                        <p>
                            By the end of the act, the party recovers the first complete
                            fragment of the map.
                        </p>

                        <p>
                            That evening, all three factions send envoys.
                        </p>

                    </StorySection>

                </div>

            </section>

            {/* CHOICES */}
            <section className="border-y border-white/10 bg-[#0b0c0e]">

                <div className="mx-auto max-w-5xl px-6 py-24 lg:px-12">

                    <div className="mb-14">

                        <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                            The Decision
                        </p>

                        <h2 className="mt-4 font-serif text-4xl text-[#d8d1c3]">
                            The map is yours.
                        </h2>

                        <p className="mt-5 max-w-2xl leading-7 text-[#66635d]">
                            What happens next depends on who you choose to trust.
                        </p>

                    </div>

                    <div className="grid gap-px bg-white/10 md:grid-cols-2">

                        {choices.map((choice) => (
                            <div
                                key={choice.number}
                                className="bg-[#101113] p-8 transition hover:bg-[#151618]"
                            >

                                <span className="font-serif text-3xl text-[#4d4b46]">
                                    {choice.number}
                                </span>

                                <p className="mt-6 text-[9px] uppercase tracking-[0.25em] text-[#9f936b]">
                                    {choice.faction}
                                </p>

                                <h3 className="mt-3 font-serif text-2xl text-[#c8c1b4]">
                                    {choice.title}
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#66635d]">
                                    {choice.result}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* REVELATION */}
            <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-12">

                <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
                    What Everyone Learns
                </p>

                <h2 className="mt-6 font-serif text-3xl text-[#d8d1c3]">
                    The Crown lies within the Dreadmoor.
                </h2>

                <p className="mt-6 leading-8 text-[#69665f]">
                    Whatever choice the party makes, the map ultimately reveals the
                    same destination: the Sunken Cathedral, hidden within the
                    mist-shrouded Dreadmoor.
                </p>

                <Link
                    href="/campaigns/the-hollow-crown/act-2"
                    className="mt-10 inline-flex bg-[#9f936b] px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-[#12120f] transition hover:bg-[#b5a66f]"
                >
                    Enter the Dreadmoor →
                </Link>

            </section>

        </main>
    );
}

function StorySection({
    label,
    title,
    children,
}: {
    label: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="grid gap-8 md:grid-cols-[180px_1fr]">

            <p className="text-[10px] uppercase tracking-[0.25em] text-[#9f936b]">
                {label}
            </p>

            <div>

                <h2 className="font-serif text-3xl text-[#d0c9bb]">
                    {title}
                </h2>

                <div className="mt-6 space-y-5 text-sm leading-8 text-[#77736b]">
                    {children}
                </div>

            </div>

        </section>
    );
}
