import Link from "next/link";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#08090b] text-[#e6e1d6]">

            {/* HEADER */}
            <header className="border-b border-white/10 bg-[#090a0c]/90">

                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">

                    <Link
                        href="/"
                        className="font-serif text-xl tracking-wide text-[#ddd7c9]"
                    >
                        The Hollow Crown
                    </Link>

                    <div className="flex items-center gap-5">

                        <div className="hidden text-right sm:block">
                            <p className="text-xs uppercase tracking-[0.18em] text-[#77736b]">
                                Adventurer
                            </p>

                            <p className="mt-1 text-sm text-[#c8c1b3]">
                                Caelan Veyr
                            </p>
                        </div>

                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111214] font-serif text-lg text-[#aaa38f]"
                        >
                            C
                        </button>

                    </div>

                </div>

            </header>

            {/* DASHBOARD */}
            <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">

                {/* WELCOME */}
                <section className="relative overflow-hidden border border-white/10 bg-[#101113]">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(159,147,107,0.10),transparent_35%)]" />

                    <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_320px]">

                        <div>

                            <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                                Welcome back, Exile
                            </p>

                            <h1 className="mt-5 font-serif text-4xl text-[#e2dcd0] md:text-5xl">
                                Thornmarch awaits.
                            </h1>

                            <p className="mt-5 max-w-2xl leading-8 text-[#77736b]">
                                The Hollow Crown has resurfaced. Three factions are moving,
                                old secrets are returning, and the kingdom stands without a
                                true ruler.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                <Link
                                    href="/campaigns/the-hollow-crown"
                                    className="bg-[#9f936b] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#12120f] transition hover:bg-[#b5a66f]"
                                >
                                    Continue Campaign
                                </Link>

                                <Link
                                    href="/characters"
                                    className="border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#aaa38f] transition hover:border-[#9f936b]/60 hover:text-white"
                                >
                                    View Characters
                                </Link>

                            </div>

                        </div>

                        {/* CAMPAIGN STATUS */}
                        <div className="border border-white/10 bg-[#0c0d0f] p-7">

                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#65635d]">
                                Current Campaign
                            </p>

                            <h2 className="mt-4 font-serif text-2xl text-[#d5cfc2]">
                                The Hollow Crown
                            </h2>

                            <div className="mt-6 h-px bg-white/10" />

                            <div className="mt-6 flex items-end justify-between">

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#65635d]">
                                        Progress
                                    </p>

                                    <p className="mt-2 font-serif text-2xl text-[#aaa38f]">
                                        Act I
                                    </p>
                                </div>

                                <span className="text-sm text-[#66635d]">
                                    25%
                                </span>

                            </div>

                            <div className="mt-3 h-1 bg-[#242522]">
                                <div className="h-full w-1/4 bg-[#9f936b]" />
                            </div>

                            <p className="mt-5 text-xs leading-6 text-[#66635d]">
                                The Kingless Land
                            </p>

                        </div>

                    </div>

                </section>

                {/* MAIN GRID */}
                <section className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

                    {/* CHARACTER */}
                    <div className="border border-white/10 bg-[#101113]">

                        <div className="flex items-center justify-between border-b border-white/10 px-7 py-6">

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#9f936b]">
                                    Your Character
                                </p>

                                <h2 className="mt-2 font-serif text-2xl text-[#d8d1c3]">
                                    Caelan Veyr
                                </h2>
                            </div>

                            <Link
                                href="/characters/caelan-veyr"
                                className="text-xs uppercase tracking-[0.15em] text-[#77736b] transition hover:text-[#aaa38f]"
                            >
                                View →
                            </Link>

                        </div>

                        <div className="grid md:grid-cols-[220px_1fr]">

                            {/* CHARACTER PORTRAIT */}
                            <div className="relative min-h-70 border-b border-white/10 bg-[#141516] md:border-b-0 md:border-r">

                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(159,147,107,0.13),transparent_35%),linear-gradient(145deg,#171817,#0b0c0e)]" />

                                <div className="relative flex h-full min-h-70 items-center justify-center">

                                    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#9f936b]/20 bg-[#0c0d0e]">

                                        <span className="font-serif text-5xl text-[#aaa38f]">
                                            C
                                        </span>

                                    </div>

                                </div>

                                <div className="absolute bottom-5 left-5">

                                    <span className="border border-white/10 bg-black/40 px-3 py-2 text-[9px] uppercase tracking-[0.25em] text-[#77736b]">
                                        Level 3
                                    </span>

                                </div>

                            </div>

                            {/* CHARACTER DETAILS */}
                            <div className="p-7">

                                <p className="text-sm leading-7 text-[#77736b]">
                                    Former Border Warden. Disgraced exile. Monster hunter.
                                </p>

                                <p className="mt-5 leading-8 text-[#69665f]">
                                    You refused an order that would have left hundreds of
                                    villagers outside the gates of Greyhaven.
                                </p>

                                <div className="mt-8 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3">

                                    <Stat
                                        label="Origin"
                                        value="Thornmarch"
                                    />

                                    <Stat
                                        label="Role"
                                        value="Exile"
                                    />

                                    <Stat
                                        label="Alignment"
                                        value="Player"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* QUICK ACTIONS */}
                    <div className="border border-white/10 bg-[#101113]">

                        <div className="border-b border-white/10 px-7 py-6">

                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9f936b]">
                                Explore
                            </p>

                            <h2 className="mt-2 font-serif text-2xl text-[#d8d1c3]">
                                Quick Access
                            </h2>

                        </div>

                        <div className="divide-y divide-white/10">

                            <DashboardLink
                                href="/world"
                                title="World"
                                description="Explore Thornmarch"
                            />

                            <DashboardLink
                                href="/lore"
                                title="Lore"
                                description="Discover the old kingdom"
                            />

                            <DashboardLink
                                href="/factions"
                                title="Factions"
                                description="Know your potential allies"
                            />

                            <DashboardLink
                                href="/characters"
                                title="Characters"
                                description="Meet those shaping the kingdom"
                            />

                            <DashboardLink
                                href="/crown"
                                title="The Crown"
                                description="Learn what waits within"
                            />

                        </div>

                    </div>

                </section>

                {/* CAMPAIGN */}
                <section className="mt-8 border border-white/10 bg-[#101113]">

                    <div className="flex flex-col justify-between gap-5 border-b border-white/10 px-7 py-7 sm:flex-row sm:items-center">

                        <div>

                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9f936b]">
                                Your Journey
                            </p>

                            <h2 className="mt-2 font-serif text-2xl text-[#d8d1c3]">
                                Campaign Progress
                            </h2>

                        </div>

                        <Link
                            href="/campaigns/the-hollow-crown"
                            className="text-xs uppercase tracking-[0.15em] text-[#77736b] transition hover:text-[#aaa38f]"
                        >
                            View Campaign →
                        </Link>

                    </div>

                    <div className="grid md:grid-cols-4">

                        <Act
                            number="I"
                            title="The Kingless Land"
                            active
                        />

                        <Act
                            number="II"
                            title="The Dreadmoor"
                        />

                        <Act
                            number="III"
                            title="Crownfall"
                        />

                        <Act
                            number="IV"
                            title="The Final Choice"
                        />

                    </div>

                </section>

                {/* FACTION RELATIONSHIPS */}
                <section className="mt-8 grid gap-8 md:grid-cols-3">

                    <FactionCard
                        symbol="⚔"
                        title="Iron Vow"
                        status="Unknown"
                        description="The royalists believe Thornmarch needs order."
                    />

                    <FactionCard
                        symbol="🔥"
                        title="Coven of Rust"
                        status="Unknown"
                        description="The radicals believe the Crown should be destroyed."
                    />

                    <FactionCard
                        symbol="◈"
                        title="Silent Exchequer"
                        status="Unknown"
                        description="The merchants believe power belongs in capable hands."
                    />

                </section>

                {/* RECENT EVENTS */}
                <section className="mt-8 border border-white/10 bg-[#101113]">

                    <div className="border-b border-white/10 px-7 py-6">

                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#9f936b]">
                            Chronicle
                        </p>

                        <h2 className="mt-2 font-serif text-2xl text-[#d8d1c3]">
                            Recent Events
                        </h2>

                    </div>

                    <div className="divide-y divide-white/10">

                        <Event
                            number="01"
                            title="The Crown Has Returned"
                            text="Rumors spread through Thornmarch that the lost relic has been found."
                        />

                        <Event
                            number="02"
                            title="The Factions Move"
                            text="Agents of the Iron Vow, Coven of Rust, and Silent Exchequer have begun searching for the Crown."
                        />

                        <Event
                            number="03"
                            title="A Fragment of a Map"
                            text="A violent clash has revealed the first clue leading toward the Dreadmoor."
                        />

                    </div>

                </section>

                {/* FOOTER */}
                <footer className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 py-8 sm:flex-row sm:items-center">

                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#45433f]">
                        The Hollow Crown
                    </p>

                    <div className="flex gap-6">

                        <Link
                            href="/terms"
                            className="text-xs text-[#55524c] transition hover:text-[#858078]"
                        >
                            Terms
                        </Link>

                        <Link
                            href="/privacy"
                            className="text-xs text-[#55524c] transition hover:text-[#858078]"
                        >
                            Privacy
                        </Link>

                    </div>

                </footer>

            </div>

        </main>
    );
}

function Stat({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="bg-[#111214] p-5">

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#55534d]">
                {label}
            </p>

            <p className="mt-2 font-serif text-base text-[#aaa38f]">
                {value}
            </p>

        </div>
    );
}

function DashboardLink({
    href,
    title,
    description,
}: {
    href: string;
    title: string;
    description: string;
}) {
    return (
        <Link
            href={href}
            className="group block px-7 py-5 transition hover:bg-[#151618]"
        >
            <div className="flex items-center justify-between">

                <div>

                    <h3 className="font-serif text-lg text-[#c8c1b4] group-hover:text-[#e1dbce]">
                        {title}
                    </h3>

                    <p className="mt-1 text-xs text-[#5e5b55]">
                        {description}
                    </p>

                </div>

                <span className="text-[#55524c] transition group-hover:translate-x-1 group-hover:text-[#9f936b]">
                    →
                </span>

            </div>
        </Link>
    );
}

function Act({
    number,
    title,
    active = false,
}: {
    number: string;
    title: string;
    active?: boolean;
}) {
    return (
        <div
            className={`border-b border-white/10 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 ${active ? "bg-[#141412]" : "bg-[#101113]"
                }`}
        >

            <span
                className={`font-serif text-4xl ${active ? "text-[#9f936b]" : "text-[#4e4c47]"
                    }`}
            >
                {number}
            </span>

            <h3 className="mt-5 font-serif text-lg text-[#bdb6a8]">
                {title}
            </h3>

            <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[#55534d]">
                {active ? "Current" : "Locked"}
            </p>

        </div>
    );
}

function FactionCard({
    symbol,
    title,
    status,
    description,
}: {
    symbol: string;
    title: string;
    status: string;
    description: string;
}) {
    return (
        <div className="border border-white/10 bg-[#101113] p-7">

            <div className="flex items-center justify-between">

                <span className="text-2xl text-[#77736b]">
                    {symbol}
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#55524c]">
                    {status}
                </span>

            </div>

            <h3 className="mt-7 font-serif text-xl text-[#c8c1b4]">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#66635d]">
                {description}
            </p>

        </div>
    );
}

function Event({
    number,
    title,
    text,
}: {
    number: string;
    title: string;
    text: string;
}) {
    return (
        <div className="flex gap-6 px-7 py-6">

            <span className="font-serif text-xl text-[#4e4c47]">
                {number}
            </span>

            <div>

                <h3 className="font-serif text-lg text-[#bbb4a7]">
                    {title}
                </h3>

                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#66635d]">
                    {text}
                </p>

            </div>

        </div>
    );
}