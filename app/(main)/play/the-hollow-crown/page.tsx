"use client";

import { useState } from "react";
import Link from "next/link";

type Choice = {
    id: string;
    title: string;
    description: string;
    next: string;
};

const scenes = {
    opening: {
        act: "ACT I",
        location: "THE KINGLESS LAND",
        title: "The Road Back",
        text: [
            "Five years have passed since Caelan Veyr was expelled from the Border Wardens.",
            "Five years since Greyhaven.",
            "Five years since you opened the gates when the Regency ordered them closed.",
            "You have spent those years as a mercenary, caravan guard, monster hunter, and bounty hunter.",
            "Then, three weeks ago, a message found you.",
        ],
        quote: "The Hollow Crown has been found.",
        choices: [
            {
                id: "return",
                title: "Return to Thornmarch",
                description: "You have to see what is happening for yourself.",
                next: "thornmarch",
            },
            {
                id: "ignore",
                title: "Ignore the message",
                description: "The kingdom abandoned you. You owe it nothing.",
                next: "ignore",
            },
        ],
    },

    thornmarch: {
        act: "ACT I",
        location: "THE KINGLESS LAND",
        title: "Thornmarch",
        text: [
            "The border appears exactly as you remember it.",
            "Broken watchtowers stand against the horizon. Villages cling to muddy roads. The banners of the Regency hang from walls that desperately need repair.",
            "But something has changed.",
            "Soldiers are everywhere.",
            "Everyone seems to be looking for something.",
        ],
        quote: "They say the Crown is real.",
        choices: [
            {
                id: "city",
                title: "Enter Greyhaven",
                description: "Find out what the soldiers are searching for.",
                next: "greyhaven",
            },
            {
                id: "observe",
                title: "Watch the soldiers",
                description: "You learned long ago that information comes before action.",
                next: "soldiers",
            },
            {
                id: "avoid",
                title: "Avoid the city",
                description: "You have no desire to be recognized by the Regency.",
                next: "road",
            },
        ],
    },

    greyhaven: {
        act: "ACT I",
        location: "GREYHAVEN",
        title: "The Gates",
        text: [
            "Greyhaven's gates rise before you.",
            "You remember these walls.",
            "You remember the refugees outside them.",
            "You remember the order to keep the gates shut.",
            "And you remember disobeying.",
            "A wounded stranger suddenly stumbles from an alley and grabs your sleeve.",
        ],
        quote: "Don't let them find the map.",
        choices: [
            {
                id: "help",
                title: "Help the stranger",
                description: "Whatever happened, leaving someone to die isn't an option.",
                next: "stranger",
            },
            {
                id: "question",
                title: "Question him",
                description: "Ask who is looking for the map.",
                next: "stranger",
            },
            {
                id: "leave",
                title: "Walk away",
                description: "You have survived by knowing when not to get involved.",
                next: "clash",
            },
        ],
    },

    soldiers: {
        act: "ACT I",
        location: "GREYHAVEN ROAD",
        title: "Eyes in the Mist",
        text: [
            "You stay outside the city and watch.",
            "The soldiers are not ordinary Regency troops.",
            "Their armor bears a familiar symbol.",
            "The Iron Vow.",
            "They are searching every wagon entering Thornmarch.",
            "Then another group appears on the opposite road.",
        ],
        quote: "Three factions. One secret.",
        choices: [
            {
                id: "follow",
                title: "Follow the Iron Vow",
                description: "Find out what they know.",
                next: "clash",
            },
            {
                id: "cross",
                title: "Approach the newcomers",
                description: "Learn who else has come searching.",
                next: "clash",
            },
        ],
    },

    road: {
        act: "ACT I",
        location: "OLD KING'S ROAD",
        title: "A Familiar Road",
        text: [
            "You leave the main road and travel through the old forest.",
            "You had hoped to avoid Thornmarch's politics.",
            "Instead, politics finds you.",
            "Smoke rises beyond the trees.",
            "Then you hear steel.",
        ],
        quote: "Someone is fighting.",
        choices: [
            {
                id: "investigate",
                title: "Investigate",
                description: "Whatever is happening, you need to know.",
                next: "clash",
            },
            {
                id: "continue",
                title: "Keep moving",
                description: "You have survived this long by refusing unnecessary fights.",
                next: "clash",
            },
        ],
    },

    stranger: {
        act: "ACT I",
        location: "GREYHAVEN",
        title: "The Fragment",
        text: [
            "The stranger reaches beneath his coat.",
            "He pulls out a piece of old parchment.",
            "The markings are unlike any modern map.",
            "Before you can ask another question, a crossbow bolt strikes the wall beside your head.",
            "The stranger falls.",
            "Three groups emerge from the streets.",
        ],
        quote: "Give us the map.",
        choices: [
            {
                id: "fight",
                title: "Protect the stranger",
                description: "Draw your weapon and face whoever comes through the streets.",
                next: "clash",
            },
            {
                id: "escape",
                title: "Take the fragment and run",
                description: "You don't know what it is, but you know everyone wants it.",
                next: "clash",
            },
        ],
    },

    clash: {
        act: "ACT I",
        location: "GREYHAVEN",
        title: "Three Factions",
        text: [
            "The streets erupt into violence.",
            "The Iron Vow advances beneath polished steel.",
            "The Coven of Rust answers with fire and strange magic.",
            "Agents of the Silent Exchequer move through the chaos almost unnoticed.",
            "And in the middle of it all lies the map fragment.",
        ],
        quote: "The Hollow Crown is real.",
        choices: [
            {
                id: "iron",
                title: "Stand with the Iron Vow",
                description: "Order may be the only thing keeping Thornmarch alive.",
                next: "choice",
            },
            {
                id: "coven",
                title: "Help the Coven of Rust",
                description: "Perhaps the Crown should never belong to anyone.",
                next: "choice",
            },
            {
                id: "exchequer",
                title: "Deal with the Exchequer",
                description: "Information and resources may matter more than ideals.",
                next: "choice",
            },
            {
                id: "neutral",
                title: "Take the fragment yourself",
                description: "You trust none of them.",
                next: "choice",
            },
        ],
    },

    choice: {
        act: "ACT I",
        location: "GREYHAVEN",
        title: "The First Choice",
        text: [
            "By nightfall, the fighting has stopped.",
            "You possess the first complete fragment of the map.",
            "Three envoys arrive.",
            "Lord-Commander Valerius speaks for the Iron Vow.",
            "Morwen the Unchained speaks for the Coven.",
            "Syndic Joras represents the Silent Exchequer.",
            "Each offers you something.",
            "Each warns you about the others.",
        ],
        quote: "Who do you trust?",
        choices: [
            {
                id: "sell",
                title: "Sell the map",
                description: "Give it to the Silent Exchequer for gold and protection.",
                next: "ending",
            },
            {
                id: "give-iron",
                title: "Give it to the Iron Vow",
                description: "Accept military support and access to forbidden archives.",
                next: "ending",
            },
            {
                id: "give-coven",
                title: "Share it with the Coven",
                description: "Gain secret paths and allies among the common folk.",
                next: "ending",
            },
            {
                id: "deception",
                title: "Play all sides",
                description: "Try to deceive everyone and gather information from each faction.",
                next: "ending",
            },
        ],
    },

    ending: {
        act: "ACT I",
        location: "THE KINGDOM OF THORNMARCH",
        title: "The Road Ahead",
        text: [
            "The decision has been made.",
            "The fragment changes hands.",
            "But its final markings reveal something none of the factions expected.",
            "The Crown is not in Thornmarch.",
            "It lies deep within the Dreadmoor.",
            "Inside a place called the Sunken Cathedral.",
        ],
        quote: "The Crown is waiting.",
        choices: [
            {
                id: "continue",
                title: "Enter the Dreadmoor",
                description: "Continue the campaign.",
                next: "opening",
            },
        ],
    },

    ignore: {
        act: "ACT I",
        location: "BEYOND THORNMARCH",
        title: "The Choice to Walk Away",
        text: [
            "You burn the message.",
            "Thornmarch is no longer your kingdom.",
            "But kingdoms have a way of dragging their ghosts behind them.",
            "Weeks later, refugees arrive in the settlement where you have been working.",
            "They speak of war.",
            "They speak of the Crown.",
            "And they speak your name.",
        ],
        quote: "You can leave Thornmarch. Thornmarch cannot leave you.",
        choices: [
            {
                id: "return",
                title: "Return to Thornmarch",
                description: "Perhaps you were never finished with the kingdom.",
                next: "thornmarch",
            },
        ],
    },
};

type SceneKey = keyof typeof scenes;

export default function PlayHollowCrownPage() {
    const [sceneKey, setSceneKey] = useState<SceneKey>("opening");
    const [history, setHistory] = useState<SceneKey[]>([]);
    const [journalOpen, setJournalOpen] = useState(false);

    const scene = scenes[sceneKey];

    function choose(next: string) {
        setHistory((current) => [...current, sceneKey]);
        setSceneKey(next as SceneKey);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function goBack() {
        const previous = history[history.length - 1];

        if (!previous) return;

        setHistory((current) => current.slice(0, -1));
        setSceneKey(previous);
    }

    return (
        <main className="min-h-screen bg-[#08090b] text-[#e5dfd2]">

            {/* TOP BAR */}
            <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090a0c]/95 backdrop-blur">

                <div className="mx-auto flex h-16 max-w-350 items-center justify-between px-4 sm:px-6">

                    <div className="flex items-center gap-5">

                        <Link
                            href="/dashboard"
                            className="text-xs text-[#625f58] transition hover:text-[#aaa38f]"
                        >
                            ← Dashboard
                        </Link>

                        <div className="hidden h-4 w-px bg-white/10 sm:block" />

                        <div>

                            <p className="font-serif text-sm text-[#bbb4a7]">
                                The Hollow Crown
                            </p>

                            <p className="text-[8px] uppercase tracking-[0.25em] text-[#4f4d48]">
                                Campaign
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-3">

                        <button
                            type="button"
                            onClick={() => setJournalOpen((value) => !value)}
                            className="border border-white/10 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-[#77736b] transition hover:border-[#9f936b]/30 hover:text-[#aaa38f]"
                        >
                            Journal
                        </button>

                        <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#111214] font-serif text-sm text-[#aaa38f]"
                        >
                            C
                        </button>

                    </div>

                </div>

            </header>

            {/* GAME LAYOUT */}
            <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-350 lg:grid-cols-[1fr_300px]">

                {/* STORY */}
                <section className="relative">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(159,147,107,0.07),transparent_32%)] pointer-events-none" />

                    <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

                        {/* ACT HEADER */}
                        <div className="mb-16 text-center">

                            <p className="text-[9px] uppercase tracking-[0.4em] text-[#9f936b]">
                                {scene.act}
                            </p>

                            <div className="mx-auto mt-5 flex items-center justify-center gap-4">

                                <span className="h-px w-12 bg-white/10" />

                                <span className="text-[9px] uppercase tracking-[0.3em] text-[#4f4d48]">
                                    {scene.location}
                                </span>

                                <span className="h-px w-12 bg-white/10" />

                            </div>

                        </div>

                        {/* SCENE */}
                        <article>

                            <h1 className="text-center font-serif text-4xl leading-tight text-[#ddd7ca] sm:text-5xl">
                                {scene.title}
                            </h1>

                            <div className="mx-auto mt-8 h-px w-12 bg-[#9f936b]/40" />

                            <div className="mt-12 space-y-6 text-[15px] leading-8 text-[#77736b]">

                                {scene.text.map((paragraph, index) => (
                                    <p key={index}>
                                        {paragraph}
                                    </p>
                                ))}

                            </div>

                            {/* QUOTE */}
                            <div className="my-14 border-y border-white/10 py-10 text-center">

                                <span className="font-serif text-2xl italic leading-relaxed text-[#aaa38f]">
                                    “{scene.quote}”
                                </span>

                            </div>

                        </article>

                        {/* CHOICES */}
                        <section>

                            <p className="mb-6 text-center text-[9px] uppercase tracking-[0.3em] text-[#55524c]">
                                What do you do?
                            </p>

                            <div className="space-y-3">

                                {scene.choices.map((choice, index) => (
                                    <button
                                        key={choice.id}
                                        type="button"
                                        onClick={() => choose(choice.next)}
                                        className="group w-full border border-white/10 bg-[#0d0e10] p-5 text-left transition hover:border-[#9f936b]/30 hover:bg-[#121311]"
                                    >

                                        <div className="flex gap-5">

                                            <span className="pt-0.5 font-serif text-lg text-[#45433f] transition group-hover:text-[#9f936b]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <div className="min-w-0">

                                                <h2 className="font-serif text-lg text-[#bdb6a8] transition group-hover:text-[#ded8ca]">
                                                    {choice.title}
                                                </h2>

                                                <p className="mt-2 text-xs leading-6 text-[#5f5c56]">
                                                    {choice.description}
                                                </p>

                                            </div>

                                            <span className="ml-auto self-center text-[#45433f] transition group-hover:translate-x-1 group-hover:text-[#9f936b]">
                                                →
                                            </span>

                                        </div>

                                    </button>
                                ))}

                            </div>

                        </section>

                        {/* NAVIGATION */}
                        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">

                            <button
                                type="button"
                                disabled={!history.length}
                                onClick={goBack}
                                className="text-[9px] uppercase tracking-[0.2em] text-[#55524c] transition hover:text-[#aaa38f] disabled:pointer-events-none disabled:opacity-20"
                            >
                                ← Previous
                            </button>

                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#45433f]">
                                Your story
                            </span>

                            <span className="text-[9px] uppercase tracking-[0.2em] text-[#55524c]">
                                Act I
                            </span>

                        </div>

                    </div>

                </section>

                {/* PLAYER PANEL */}
                <aside className="border-l border-white/10 bg-[#0b0c0e]">

                    <div className="sticky top-16">

                        {/* CHARACTER */}
                        <div className="border-b border-white/10 p-6">

                            <p className="text-[8px] uppercase tracking-[0.3em] text-[#9f936b]">
                                Character
                            </p>

                            <div className="mt-5 flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#141516] font-serif text-xl text-[#aaa38f]">
                                    C
                                </div>

                                <div>

                                    <h2 className="font-serif text-lg text-[#c8c1b4]">
                                        Caelan Veyr
                                    </h2>

                                    <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-[#55524c]">
                                        Level 3 · Exile
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* VITALS */}
                        <div className="border-b border-white/10 p-6">

                            <p className="text-[8px] uppercase tracking-[0.3em] text-[#55524c]">
                                Condition
                            </p>

                            <div className="mt-5">

                                <div className="flex justify-between text-[9px] uppercase tracking-[0.15em]">

                                    <span className="text-[#55524c]">
                                        Health
                                    </span>

                                    <span className="text-[#77736b]">
                                        28 / 28
                                    </span>

                                </div>

                                <div className="mt-2 h-1 bg-[#20211f]">
                                    <div className="h-full w-full bg-[#6d6257]" />
                                </div>

                            </div>

                            <div className="mt-5">

                                <div className="flex justify-between text-[9px] uppercase tracking-[0.15em]">

                                    <span className="text-[#55524c]">
                                        Experience
                                    </span>

                                    <span className="text-[#77736b]">
                                        0 / 300
                                    </span>

                                </div>

                                <div className="mt-2 h-1 bg-[#20211f]">
                                    <div className="h-full w-0 bg-[#9f936b]" />
                                </div>

                            </div>

                        </div>

                        {/* RELATIONSHIPS */}
                        <div className="border-b border-white/10 p-6">

                            <p className="text-[8px] uppercase tracking-[0.3em] text-[#55524c]">
                                Faction Relations
                            </p>

                            <div className="mt-5 space-y-5">

                                <Relation
                                    symbol="⚔"
                                    name="Iron Vow"
                                    value="Neutral"
                                />

                                <Relation
                                    symbol="🔥"
                                    name="Coven of Rust"
                                    value="Neutral"
                                />

                                <Relation
                                    symbol="◈"
                                    name="Silent Exchequer"
                                    value="Neutral"
                                />

                            </div>

                        </div>

                        {/* INVENTORY */}
                        <div className="border-b border-white/10 p-6">

                            <p className="text-[8px] uppercase tracking-[0.3em] text-[#55524c]">
                                Inventory
                            </p>

                            <div className="mt-5 grid grid-cols-4 gap-2">

                                <InventoryItem label="Sword" />
                                <InventoryItem label="Bow" />
                                <InventoryItem label="Potion" />
                                <InventoryItem label="Empty" />

                            </div>

                        </div>

                        {/* CAMPAIGN */}
                        <div className="p-6">

                            <div className="flex items-center justify-between">

                                <p className="text-[8px] uppercase tracking-[0.3em] text-[#55524c]">
                                    Campaign
                                </p>

                                <span className="text-[9px] text-[#55524c]">
                                    1 / 3
                                </span>

                            </div>

                            <div className="mt-4 flex gap-1">

                                <div className="h-1 flex-1 bg-[#9f936b]" />
                                <div className="h-1 flex-1 bg-[#292a27]" />
                                <div className="h-1 flex-1 bg-[#292a27]" />

                            </div>

                            <p className="mt-4 text-xs text-[#55524c]">
                                The Kingless Land
                            </p>

                        </div>

                    </div>

                </aside>

            </div>

            {/* JOURNAL DRAWER */}
            {journalOpen && (
                <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-white/10 bg-[#0b0c0e] shadow-2xl">

                    <div className="flex h-full flex-col">

                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

                            <div>

                                <p className="text-[8px] uppercase tracking-[0.3em] text-[#9f936b]">
                                    Chronicle
                                </p>

                                <h2 className="mt-2 font-serif text-xl text-[#c8c1b4]">
                                    Caelan&apos;s Journal
                                </h2>

                            </div>

                            <button
                                type="button"
                                onClick={() => setJournalOpen(false)}
                                className="text-[#55524c] hover:text-[#aaa38f]"
                            >
                                ✕
                            </button>

                        </div>

                        <div className="flex-1 space-y-8 overflow-y-auto p-6">

                            <JournalEntry
                                title="Five Years in Exile"
                                text="You returned to Thornmarch after receiving word that the Hollow Crown had been found."
                            />

                            <JournalEntry
                                title="The Hollow Crown"
                                text="Someone claims the ancient Crown has resurfaced. Three factions are searching for it."
                            />

                            <JournalEntry
                                title="Current Lead"
                                text="A fragment of an ancient map may reveal the Crown's location."
                            />

                        </div>

                    </div>

                </div>
            )}

        </main>
    );
}

function Relation({
    symbol,
    name,
    value,
}: {
    symbol: string;
    name: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

                <span className="text-sm text-[#66635d]">
                    {symbol}
                </span>

                <span className="text-xs text-[#77736b]">
                    {name}
                </span>

            </div>

            <span className="text-[9px] uppercase tracking-[0.15em] text-[#4e4c47]">
                {value}
            </span>

        </div>
    );
}

function InventoryItem({
    label,
}: {
    label: string;
}) {
    return (
        <div className="aspect-square border border-white/10 bg-[#101113]">

            <div className="flex h-full items-center justify-center text-center">

                <span className="text-[8px] uppercase tracking-widest text-[#4d4b46]">
                    {label}
                </span>

            </div>

        </div>
    );
}

function JournalEntry({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <article>

            <p className="text-[8px] uppercase tracking-[0.25em] text-[#9f936b]">
                {title}
            </p>

            <p className="mt-3 text-sm leading-7 text-[#69665f]">
                {text}
            </p>

        </article>
    );
}