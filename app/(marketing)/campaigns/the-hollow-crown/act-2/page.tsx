import Link from "next/link";

const trials = [
    {
        number: "I",
        type: "Combat",
        title: "The Trial of Strength",
        description:
            "The Warden tests whether the party can face danger without abandoning those who depend upon them.",
    },
    {
        number: "II",
        type: "Riddle",
        title: "The Trial of Wisdom",
        description:
            "An ancient riddle challenges the party's understanding of what makes someone worthy to rule.",
    },
    {
        number: "III",
        type: "Moral Dilemma",
        title: "The Trial of Kingship",
        description:
            "The final trial offers no clean answer. The party must decide what they are willing to sacrifice for the greater good.",
    },
];

const choices = [
    {
        number: "01",
        title: "The Iron Vow",
        leader: "Valerius",
        description:
            "Give the Crown to Valerius. He places it upon his head and becomes a holy tyrant. Sylara twists his sense of justice into merciless crusades.",
        outcome: "Order through fear",
    },
    {
        number: "02",
        title: "The Coven of Rust",
        leader: "Morwen",
        description:
            "Allow the Coven to destroy the Crown. Its destruction releases Sylara in a cataclysmic burst of wild magic.",
        outcome: "Freedom through chaos",
    },
    {
        number: "03",
        title: "The Silent Exchequer",
        leader: "Joras",
        description:
            "Hand the Crown to Joras. He refuses to wear it and instead seals it inside a lead vault, using its magic to manipulate trade and futures.",
        outcome: "Prosperity through control",
    },
    {
        number: "04",
        title: "The Host",
        leader: "One of the Party",
        description:
            "A party member wears the Crown and becomes Sylara's vessel, gaining immense power while struggling against her alien morality.",
        outcome: "Power at a price",
    },
    {
        number: "05",
        title: "The Fifth Way",
        leader: "The Hidden Rite",
        description:
            "Attempt to unbind Sylara without destroying her. The ritual requires a rare component and a profound personal sacrifice.",
        outcome: "A future without the Crown",
    },
];

export default function ActTwoPage() {
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
                        Act II
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

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(82,96,75,0.13),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(91,68,51,0.10),transparent_30%),linear-gradient(145deg,#0d110e,#080b09,#08090b)]" />

                <div className="relative mx-auto max-w-4xl px-6 py-28 text-center lg:px-12">

                    <p className="font-serif text-6xl text-[#41483e]">
                        II
                    </p>

                    <p className="mt-6 text-xs uppercase tracking-[0.45em] text-[#899274]">
                        Act Two
                    </p>

                    <h1 className="mt-5 font-serif text-5xl leading-tight text-[#ddd8ca] md:text-7xl">
                        The Dreadmoor
                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#747a6e]">
                        The trail leads into the mist. Something ancient waits beneath the
                        drowned cathedral—and it has been waiting for you.
                    </p>

                    <div className="mx-auto mt-10 h-px w-20 bg-[#899274]/40" />

                </div>

            </section>

            {/* INTRO */}
            <section className="mx-auto max-w-4xl px-6 py-24 lg:px-12">

                <div className="grid gap-10 md:grid-cols-[180px_1fr]">

                    <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-[#899274]">
                            Into the Mist
                        </p>
                    </div>

                    <div className="space-y-6 text-sm leading-8 text-[#74736c]">

                        <p>
                            The map leads the party away from Thornmarch and into the
                            Dreadmoor—a swamp where the boundary between the mortal world
                            and something older has begun to decay.
                        </p>

                        <p>
                            Twisted fey creatures move beneath the trees. Undead wander
                            through the drowned paths. The mist itself whispers temptations
                            to those who travel too deeply.
                        </p>

                        <p>
                            Somewhere within the swamp lies the Sunken Cathedral.
                        </p>

                        <p className="font-serif text-xl leading-8 text-[#aaa38f]">
                            And something is guarding it.
                        </p>

                    </div>

                </div>

            </section>

            {/* DREADMOOR */}
            <section className="border-y border-white/10 bg-[#0a0d0b]">

                <div className="mx-auto max-w-5xl px-6 py-24 lg:px-12">

                    <div className="grid gap-12 md:grid-cols-2">

                        <div>

                            <p className="text-xs uppercase tracking-[0.35em] text-[#899274]">
                                The Dreadmoor
                            </p>

                            <h2 className="mt-5 font-serif text-4xl text-[#d4d0c4]">
                                The mist knows your name.
                            </h2>

                            <p className="mt-6 leading-8 text-[#706f68]">
                                The Dreadmoor is more than a dangerous wilderness. Its
                                whispers offer things the party wants—power, forgiveness,
                                forgotten answers, and promises of a different life.
                            </p>

                            <p className="mt-5 leading-8 text-[#706f68]">
                                The deeper the party travels, the harder it becomes to
                                distinguish temptation from truth.
                            </p>

                        </div>

                        <div className="border border-white/10 bg-[#101310] p-8">

                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#555a51]">
                                Destination
                            </p>

                            <h3 className="mt-5 font-serif text-3xl text-[#c7c3b6]">
                                The Sunken Cathedral
                            </h3>

                            <div className="mt-7 h-px bg-white/10" />

                            <p className="mt-6 text-sm leading-7 text-[#666b62]">
                                A ruined cathedral submerged within the Dreadmoor. The
                                entrance is sealed by an ancient trial.
                            </p>

                            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#899274]">
                                Guardian: The Grey Warden
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* GREY WARDEN */}
            <section className="mx-auto max-w-4xl px-6 py-24 lg:px-12">

                <div className="text-center">

                    <p className="text-xs uppercase tracking-[0.4em] text-[#899274]">
                        The Guardian
                    </p>

                    <h2 className="mt-5 font-serif text-4xl text-[#d4d0c4] md:text-5xl">
                        The Grey Warden
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#706f68]">
                        An immortal knight stands before the cathedral. He does not ask
                        which faction the party serves.
                    </p>

                    <p className="mt-7 font-serif text-2xl text-[#aaa38f]">
                        He asks whether they understand kingship.
                    </p>

                </div>

                {/* TRIALS */}
                <div className="mt-16 space-y-px bg-white/10">

                    {trials.map((trial) => (
                        <div
                            key={trial.number}
                            className="bg-[#101113] p-8 transition hover:bg-[#131613] md:p-10"
                        >

                            <div className="grid gap-7 md:grid-cols-[80px_1fr_auto] md:items-center">

                                <span className="font-serif text-4xl text-[#454a42]">
                                    {trial.number}
                                </span>

                                <div>

                                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#899274]">
                                        {trial.type}
                                    </p>

                                    <h3 className="mt-3 font-serif text-2xl text-[#c9c5b8]">
                                        {trial.title}
                                    </h3>

                                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#696d65]">
                                        {trial.description}
                                    </p>

                                </div>

                                <span className="text-[9px] uppercase tracking-[0.2em] text-[#4f534c]">
                                    The Warden
                                </span>

                            </div>

                        </div>
                    ))}

                </div>

            </section>

            {/* REVELATION */}
            <section className="relative overflow-hidden border-y border-[#899274]/10 bg-[#0d0f0d]">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(137,146,116,0.08),transparent_35%)]" />

                <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:px-12">

                    <p className="text-xs uppercase tracking-[0.45em] text-[#899274]">
                        The Truth Beneath the Cathedral
                    </p>

                    <h2 className="mt-7 font-serif text-4xl leading-tight text-[#d9d4c7] md:text-5xl">
                        The Crown is not empty.
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#74736c]">
                        The trials reveal a secret hidden by an ancient pact. The Hollow
                        Crown is a prison, and something has been bound within it for
                        generations.
                    </p>

                    <div className="mx-auto mt-12 h-px w-16 bg-[#899274]/40" />

                    <p className="mt-10 font-serif text-3xl text-[#aaa38f]">
                        Sylara
                    </p>

                    <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#555951]">
                        Archfey of Truth and Vengeance
                    </p>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#696d65]">
                        Bound by an ancient pact, Sylara waits within the Crown. Whoever
                        wears it becomes her vessel—gaining immense power while surrendering
                        part of their will to her influence.
                    </p>

                </div>

            </section>

            {/* CROWN CHAMBER */}
            <section className="mx-auto max-w-5xl px-6 py-24 lg:px-12">

                <div className="mb-14">

                    <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                        The Crown Chamber
                    </p>

                    <h2 className="mt-5 font-serif text-4xl text-[#d8d1c3]">
                        Everyone arrives at once.
                    </h2>

                    <p className="mt-5 max-w-2xl leading-8 text-[#706f68]">
                        At the heart of the cathedral, the Crown rests upon a pedestal of
                        black stone. Then the factions arrive.
                    </p>

                </div>

                <div className="grid gap-4 md:grid-cols-3">

                    <Faction
                        symbol="⚔"
                        title="Iron Vow"
                        leader="Valerius"
                        text="The Crown must restore legitimate rule."
                    />

                    <Faction
                        symbol="🔥"
                        title="Coven of Rust"
                        leader="Morwen"
                        text="The Crown must be destroyed."
                    />

                    <Faction
                        symbol="◈"
                        title="Silent Exchequer"
                        leader="Joras"
                        text="The Crown belongs in capable hands."
                    />

                </div>

                <div className="mt-12 border border-[#9f936b]/20 bg-[#10110f] p-8 text-center md:p-12">

                    <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                        Then Sylara Speaks
                    </p>

                    <p className="mx-auto mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-[#aaa38f]">
                        Three factions demand the Crown.
                        <br />
                        Sylara offers another path.
                    </p>

                </div>

            </section>

            {/* MAJOR CHOICE */}
            <section className="border-y border-white/10 bg-[#0b0c0e]">

                <div className="mx-auto max-w-6xl px-6 py-24 lg:px-12">

                    <div className="mb-14 text-center">

                        <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
                            Major Choice
                        </p>

                        <h2 className="mt-5 font-serif text-4xl text-[#d8d1c3] md:text-5xl">
                            What will you do with the Crown?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#66635d]">
                            There is no safe answer. Every path changes what Thornmarch
                            becomes.
                        </p>

                    </div>

                    <div className="grid gap-px bg-white/10 md:grid-cols-2">

                        {choices.map((choice) => (
                            <div
                                key={choice.number}
                                className="group bg-[#101113] p-8 transition hover:bg-[#141615] md:p-10"
                            >

                                <div className="flex items-start justify-between gap-5">

                                    <span className="font-serif text-4xl text-[#494b46] transition group-hover:text-[#9f936b]">
                                        {choice.number}
                                    </span>

                                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#555850]">
                                        {choice.outcome}
                                    </span>

                                </div>

                                <h3 className="mt-8 font-serif text-2xl text-[#c9c4b7]">
                                    {choice.title}
                                </h3>

                                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#6d725f]">
                                    {choice.leader}
                                </p>

                                <p className="mt-6 text-sm leading-8 text-[#686c64]">
                                    {choice.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* ENDING */}
            <section className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-12">

                <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
                    The Path Forward
                </p>

                <h2 className="mt-6 font-serif text-3xl leading-relaxed text-[#d4cec1] md:text-4xl">
                    Whatever you choose,
                    <br />
                    Thornmarch will never be the same.
                </h2>

                <p className="mt-7 leading-8 text-[#69665f]">
                    The Crown has been claimed, destroyed, worn, or unbound. Now the
                    consequences begin.
                </p>

                <Link
                    href="/campaigns/the-hollow-crown/act-3"
                    className="mt-10 inline-flex bg-[#9f936b] px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-[#12120f] transition hover:bg-[#b5a66f]"
                >
                    Continue to Crownfall →
                </Link>

            </section>

        </main>
    );
}

function Faction({
    symbol,
    title,
    leader,
    text,
}: {
    symbol: string;
    title: string;
    leader: string;
    text: string;
}) {
    return (
        <div className="border border-white/10 bg-[#101113] p-7">

            <span className="text-2xl text-[#77736b]">
                {symbol}
            </span>

            <h3 className="mt-6 font-serif text-xl text-[#c8c1b4]">
                {title}
            </h3>

            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#55524c]">
                {leader}
            </p>

            <p className="mt-4 text-sm leading-7 text-[#66635d]">
                {text}
            </p>

        </div>
    );
}
