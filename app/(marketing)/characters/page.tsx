import Link from "next/link";

const characters = [
  {
    name: "Caelan Veyr",
    title: "The Exile of Thornmarch",
    role: "Main Character",
    description:
      "A former Border Warden who refused to obey the wrong order. Branded a traitor, Caelan returns to Thornmarch when the Hollow Crown resurfaces.",
    faction: "Unaffiliated",
    level: "3",
    href: "/characters/caelan-veyr",
    featured: true,
  },
  {
    name: "Lord-Commander Valerius",
    title: "The Iron Commander",
    role: "Faction Leader",
    description:
      "A grim and honorable paladin who believes Thornmarch can only survive through order and a legitimate ruler.",
    faction: "The Iron Vow",
    level: "—",
    href: "/characters/valerius",
  },
  {
    name: "Morwen the Unchained",
    title: "The Voice of Rust",
    role: "Faction Leader",
    description:
      "A fierce warlock who believes the Crown represents everything wrong with monarchy and inherited power.",
    faction: "The Coven of Rust",
    level: "—",
    href: "/characters/morwen",
  },
  {
    name: "Syndic Joras",
    title: "The Silent Hand",
    role: "Faction Leader",
    description:
      "A cunning spymaster who sees the Hollow Crown as a tool capable of controlling trade, magic, and the future of Thornmarch.",
    faction: "The Silent Exchequer",
    level: "—",
    href: "/characters/joras",
  },
  {
    name: "Sylara",
    title: "The Bound Archfey",
    role: "The Hollow Crown",
    description:
      "An archfey of truth and vengeance bound within the Crown. Her freedom could reshape the land itself.",
    faction: "The Dreadmoor",
    level: "—",
    href: "/characters/sylara",
  },
  {
    name: "The Grey Warden",
    title: "Guardian of the Sunken Cathedral",
    role: "Ancient Guardian",
    description:
      "An immortal knight who guards the Crown's resting place and judges those who seek to claim it.",
    faction: "Unknown",
    level: "—",
    href: "/characters/grey-warden",
  },
];

export default function CharactersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(121,96,59,0.18),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-[#9f8965]">
              The Hollow Crown
            </p>

            <h1 className="mt-6 font-serif text-6xl tracking-tight text-[#eee7da] md:text-8xl">
              Characters
            </h1>

            <div className="mt-8 h-px w-24 bg-[#9f8965]" />

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#817c74]">
              Kings, rebels, merchants, wardens, and creatures of the Dreadmoor.
              Every person has a reason to want the Crown—and every reason to
              fear what it might become.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#706b63]">
              The People of Thornmarch
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#d8d0c2]">
              Those who shape the Crownfall
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#69655f]">
            No one stands entirely on the side of good or evil. Their choices
            are shaped by what they believe Thornmarch needs.
          </p>
        </div>
      </section>

      {/* FEATURED CHARACTER */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-12">
        <Link
          href="/characters/caelan-veyr"
          className="group relative block overflow-hidden border border-white/10 bg-[#111113]"
        >
          <div className="grid min-h-140 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Image */}
            <div className="relative min-h-100 overflow-hidden bg-[#171719]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#494238_0%,#24211e_35%,#101012_75%)] transition duration-700 group-hover:scale-105" />

              {/* Placeholder silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-full border border-[#9f8965]/20 text-7xl opacity-50">
                  ⚔
                </div>
              </div>

              <div className="absolute bottom-6 left-6">
                <span className="border border-[#c0aa84]/30 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#bba887] backdrop-blur">
                  Main Character
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="text-xs uppercase tracking-[0.3em] text-[#9f8965]">
                The Exile of Thornmarch
              </p>

              <h2 className="mt-5 font-serif text-5xl text-[#e4dccf] md:text-6xl">
                Caelan Veyr
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#9a9389]">
                A former protector of Thornmarch who lost everything because
                they refused to obey the wrong order.
              </p>

              <div className="my-8 h-px w-full bg-white/10" />

              <div className="grid grid-cols-2 gap-6">
                <Info label="Origin" value="Thornmarch" />
                <Info label="Age" value="27" />
                <Info label="Background" value="Disgraced Warden" />
                <Info label="Starting Level" value="3" />
              </div>

              <div className="mt-10 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#a99576]">
                Read Character
                <span className="transition-transform group-hover:translate-x-2">
                  →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="h-px bg-white/10" />
      </div>

      {/* FACTION LEADERS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
            The Three Powers
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#ddd5c8] md:text-5xl">
            Leaders of Thornmarch
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {characters.slice(1, 4).map((character) => (
            <CharacterCard key={character.name} character={character} />
          ))}
        </div>
      </section>

      {/* OTHER CHARACTERS */}
      <section className="border-y border-white/10 bg-[#101012]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
              Beyond the Factions
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#ddd5c8] md:text-5xl">
              Figures of the Crownfall
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {characters.slice(4).map((character) => (
              <CharacterCard key={character.name} character={character} large />
            ))}
          </div>
        </div>
      </section>

      {/* CHARACTER PHILOSOPHY */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
          A Kingdom of Choices
        </p>

        <blockquote className="mt-8 font-serif text-4xl leading-tight text-[#ded6c8] md:text-5xl">
          “Every faction is capable of saving Thornmarch—
          <br className="hidden md:block" />
          and destroying it.”
        </blockquote>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#74706a]">
          The people of The Hollow Crown are not defined by simple morality.
          Their beliefs, loyalties, secrets, and sacrifices shape the fate of
          the kingdom.
        </p>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/10 bg-[#0e0e10]">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#716b62]">
            Continue exploring
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              href="/factions"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#a7a097] transition hover:border-[#9f8965] hover:text-white"
            >
              Factions
            </Link>

            <Link
              href="/lore"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#a7a097] transition hover:border-[#9f8965] hover:text-white"
            >
              Lore
            </Link>

            <Link
              href="/campaigns"
              className="bg-[#a99576] px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#14120f] transition hover:bg-[#c0ab89]"
            >
              Campaign
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.25em] text-[#65615b]">
        {label}
      </p>

      <p className="mt-2 text-sm text-[#b8b0a3]">{value}</p>
    </div>
  );
}

function CharacterCard({
  character,
  large = false,
}: {
  character: (typeof characters)[number];
  large?: boolean;
}) {
  return (
    <Link
      href={character.href}
      className={`group block overflow-hidden border border-white/10 bg-[#0d0d0f] transition hover:border-[#8e795a]/40 ${
        large ? "md:grid md:grid-cols-[0.8fr_1.2fr]" : ""
      }`}
    >
      {/* Portrait */}
      <div
        className={`relative overflow-hidden bg-[#19191b] ${
          large ? "min-h-70" : "aspect-4/3"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#403a32_0%,#211f1d_35%,#101012_75%)] transition duration-700 group-hover:scale-105" />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-30">
            {character.faction === "The Iron Vow"
              ? "⚔"
              : character.faction === "The Coven of Rust"
                ? "🔥"
                : character.faction === "The Silent Exchequer"
                  ? "🪙"
                  : "✦"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#8e795a]">
          {character.role}
        </p>

        <h3 className="mt-3 font-serif text-2xl text-[#d9d1c4]">
          {character.name}
        </h3>

        <p className="mt-1 text-sm text-[#77716a]">{character.title}</p>

        <p className="mt-5 text-sm leading-7 text-[#77736d]">
          {character.description}
        </p>

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#625e58]">
            {character.faction}
          </span>

          <span className="text-xs text-[#9f8965] transition-transform group-hover:translate-x-1">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
