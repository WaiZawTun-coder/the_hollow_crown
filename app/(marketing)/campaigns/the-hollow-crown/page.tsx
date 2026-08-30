import Link from "next/link";

const acts = [
    {
        number: "I",
        title: "The Kingless Land",
        subtitle: "The kingdom without a king",
        description:
            "Thornmarch has stood without a monarch for a century. Now rumors of the Hollow Crown draw three factions into a dangerous struggle for power.",
        href: "/campaigns/the-hollow-crown/act-1",
        status: "Beginning",
    },
    {
        number: "II",
        title: "The Dreadmoor",
        subtitle: "Where the Crown sleeps",
        description:
            "The trail leads into the mist-shrouded Dreadmoor, where the party must face twisted creatures, ancient trials, and the Grey Warden.",
        href: "/campaigns/the-hollow-crown/act-2",
        status: "Locked",
    },
    {
        number: "III",
        title: "Crownfall",
        subtitle: "The price of power",
        description:
            "The choice made at the Cathedral reshapes Thornmarch. Every path leads toward upheaval—and a final decision about the fate of Sylara.",
        href: "/campaigns/the-hollow-crown/act-3",
        status: "Locked",
    },
];

export default function HollowCrownCampaignPage() {
    return (
        <main className="min-h-screen bg-[#08090b] text-[#e6e1d6]">

            {/* HEADER */}
            <header className="border-b border-white/10">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">

                    <Link
                        href="/campaigns"
                        className="text-xs uppercase tracking-[0.25em] text-[#77736b] transition hover:text-[#aaa38f]"
                    >
                        ← Campaigns
                    </Link>

                    <span className="font-serif text-lg text-[#c8c1b4]">
                        The Hollow Crown
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

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(159,147,107,0.14),transparent_30%),linear-gradient(145deg,#12110f,#090a0c,#08090b)]" />

                <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:px-12">

                    <p className="text-xs uppercase tracking-[0.45em] text-[#9f936b]">
                        A Thornmarch Campaign
                    </p>

                    <h1 className="mt-7 font-serif text-5xl leading-tight text-[#e4ded1] md:text-7xl">
                        The Hollow Crown
                    </h1>

                    <div className="mx-auto mt-8 h-px w-24 bg-[#9f936b]/40" />

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#77736b]">
                        An ancient crown has resurfaced in a kingdom that has survived a
                        century without a monarch. Three factions seek it. None can agree
                        what should happen when it is found.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-3">

                        <span className="border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#66635d]">
                            Political Intrigue
                        </span>

                        <span className="border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#66635d]">
                            Dark Fantasy
                        </span>

                        <span className="border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#66635d]">
                            Moral Ambiguity
                        </span>

                    </div>

                </div>
            </section>

            {/* CAMPAIGN INFO */}
            <section className="border-b border-white/10">

                <div className="mx-auto grid max-w-5xl md:grid-cols-3">

                    <Info
                        label="Level Range"
                        value="3–7"
                    />

                    <Info
                        label="Setting"
                        value="Thornmarch"
                    />

                    <Info
                        label="Structure"
                        value="3 Acts"
                    />

                </div>

            </section>

            {/* PREMISE */}
            <section className="mx-auto max-w-4xl px-6 py-24 lg:px-12">

                <div className="grid gap-12 md:grid-cols-[180px_1fr]">

                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                            The Premise
                        </p>
                    </div>

                    <div>

                        <h2 className="font-serif text-3xl text-[#d8d1c3] md:text-4xl">
                            A crown is not merely a crown.
                        </h2>

                        <p className="mt-7 leading-8 text-[#77736b]">
                            The Hollow Crown grants the right to rule Thornmarch. But the
                            relic hides a darker truth: it is a prison containing Sylara,
                            an archfey of truth and vengeance.
                        </p>

                        <p className="mt-5 leading-8 text-[#77736b]">
                            Whoever claims the Crown must decide what matters more—order,
                            liberty, prosperity, or self-determination.
                        </p>

                        <p className="mt-5 leading-8 text-[#77736b]">
                            There is no faction that is purely good. There is no choice
                            without a cost.
                        </p>

                    </div>

                </div>

            </section>

            {/* ACTS */}
            <section className="border-y border-white/10 bg-[#0b0c0e]">

                <div className="mx-auto max-w-5xl px-6 py-24 lg:px-12">

                    <div className="mb-14">

                        <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                            The Journey
                        </p>

                        <h2 className="mt-4 font-serif text-4xl text-[#d8d1c3]">
                            Three Acts
                        </h2>

                    </div>

                    <div className="space-y-px bg-white/10">

                        {acts.map((act) => (
                            <Link
                                key={act.number}
                                href={act.href}
                                className="group block bg-[#101113] p-8 transition hover:bg-[#151618] md:p-10"
                            >

                                <div className="grid gap-8 md:grid-cols-[100px_1fr_auto] md:items-center">

                                    <span className="font-serif text-5xl text-[#4d4b46] transition group-hover:text-[#9f936b]">
                                        {act.number}
                                    </span>

                                    <div>

                                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#66635d]">
                                            {act.subtitle}
                                        </p>

                                        <h3 className="mt-3 font-serif text-2xl text-[#cfc8ba] md:text-3xl">
                                            {act.title}
                                        </h3>

                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#66635d]">
                                            {act.description}
                                        </p>

                                    </div>

                                    <div className="flex items-center gap-5">

                                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#55524c]">
                                            {act.status}
                                        </span>

                                        <span className="text-[#55524c] transition group-hover:translate-x-1 group-hover:text-[#9f936b]">
                                            →
                                        </span>

                                    </div>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

            </section>

            {/* FACTIONS */}
            <section className="mx-auto max-w-5xl px-6 py-24 lg:px-12">

                <div className="mb-14">

                    <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                        The Struggle
                    </p>

                    <h2 className="mt-4 font-serif text-4xl text-[#d8d1c3]">
                        Three factions. Three visions.
                    </h2>

                </div>

                <div className="grid gap-px bg-white/10 md:grid-cols-3">

                    <Faction
                        symbol="⚔"
                        name="Iron Vow"
                        leader="Lord-Commander Valerius"
                        belief="A true heir must restore order."
                    />

                    <Faction
                        symbol="🔥"
                        name="Coven of Rust"
                        leader="Morwen the Unchained"
                        belief="The Crown is a symbol of tyranny."
                    />

                    <Faction
                        symbol="◈"
                        name="Silent Exchequer"
                        leader="Syndic Joras"
                        belief="Power should control trade and magic."
                    />

                </div>

            </section>

            {/* WARNING */}
            <section className="border-y border-[#9f936b]/10 bg-[#0d0d0c]">

                <div className="mx-auto max-w-3xl px-6 py-20 text-center">

                    <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
                        A Word of Warning
                    </p>

                    <p className="mt-6 font-serif text-2xl leading-relaxed text-[#aaa38f]">
                        The Crown never lies.
                        <br />
                        But its truth is not a mortal truth.
                    </p>

                    <p className="mt-6 text-sm leading-7 text-[#5f5c55]">
                        Your choices will change the course of the campaign.
                    </p>

                </div>

            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/10">

                <div className="mx-auto flex max-w-5xl flex-col justify-between gap-5 px-6 py-10 sm:flex-row sm:items-center lg:px-12">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#45433f]">
                        The Hollow Crown
                    </p>

                    <div className="flex gap-6">

                        <Link
                            href="/world"
                            className="text-xs text-[#55524c] hover:text-[#858078]"
                        >
                            World
                        </Link>

                        <Link
                            href="/lore"
                            className="text-xs text-[#55524c] hover:text-[#858078]"
                        >
                            Lore
                        </Link>

                        <Link
                            href="/factions"
                            className="text-xs text-[#55524c] hover:text-[#858078]"
                        >
                            Factions
                        </Link>

                    </div>

                </div>

            </footer>

        </main>
    );
}

function Info({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="border-r border-white/10 p-8 text-center last:border-r-0">

            <p className="text-[9px] uppercase tracking-[0.25em] text-[#55524c]">
                {label}
            </p>

            <p className="mt-3 font-serif text-xl text-[#aaa38f]">
                {value}
            </p>

        </div>
    );
}

function Faction({
    symbol,
    name,
    leader,
    belief,
}: {
    symbol: string;
    name: string;
    leader: string;
    belief: string;
}) {
    return (
        <div className="bg-[#101113] p-8">

            <span className="text-2xl text-[#77736b]">
                {symbol}
            </span>

            <h3 className="mt-7 font-serif text-xl text-[#c8c1b4]">
                {name}
            </h3>

            <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#55524c]">
                {leader}
            </p>

            <p className="mt-5 text-sm leading-7 text-[#66635d]">
                {belief}
            </p>

        </div>
    );
}