import Link from "next/link";

const factions = [
  {
    name: "The Royalists",
    description:
      "Those who believe the old bloodline alone has the right to rule.",
    symbol: "I",
  },
  {
    name: "The Exiles",
    description:
      "A coalition of nobles, rebels, and survivors who want the throne destroyed.",
    symbol: "II",
  },
  {
    name: "The Veiled Court",
    description:
      "A secretive power whose true allegiance may lie beyond the kingdom itself.",
    symbol: "III",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,37,37,0.10),transparent_45%)]" />

        <div className="absolute bottom-0 left-1/2 h-[45%] w-[80%] -translate-x-1/2 bg-[#151310] opacity-60 blur-3xl" />

        {/* Decorative lines */}
        <div className="absolute left-8 top-32 h-32 w-px bg-linear-to-b from-transparent via-[#A88B4A]/30 to-transparent" />
        <div className="absolute right-8 top-32 h-32 w-px bg-linear-to-b from-transparent via-[#A88B4A]/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.6em] text-[#A88B4A]">
            A Dark Fantasy Campaign
          </p>

          <h1 className="font-serif text-6xl font-medium uppercase tracking-[0.08em] text-[#D8D0C0] sm:text-7xl md:text-9xl">
            The
            <br />
            <span className="text-[#A88B4A]">Hollow</span> Crown
          </h1>

          <div className="mx-auto my-10 h-px w-24 bg-[#A88B4A]/50" />

          <p className="font-serif text-xl uppercase tracking-[0.25em] text-[#D8D0C0]/80 md:text-2xl">
            Three factions.
            <br className="md:hidden" /> One crown.
            <br className="md:hidden" /> No rightful king.
          </p>

          <p className="mx-auto mt-8 max-w-xl font-sans text-sm leading-7 text-[#8E887D]">
            An ancient crown has resurfaced after centuries of silence. Three
            powerful factions race to claim it—and those caught between them
            must decide what they are willing to sacrifice for power.
          </p>

          <div className="mt-12">
            <Link
              href="/play"
              className="group inline-flex items-center gap-4 border border-[#A88B4A] px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#A88B4A] transition duration-300 hover:bg-[#A88B4A] hover:text-[#0B0A09]"
            >
              Enter Thornmarch
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#8E887D]">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.4em]">
              Descend
            </span>
            <span className="h-8 w-px bg-[#A88B4A]/40" />
          </div>
        </div>
      </section>

      {/* WORLD */}
      <section
        id="world"
        className="border-t border-[#A88B4A]/10 bg-[#0F0E0C] py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#A88B4A]">
                The Kingdom
              </p>

              <h2 className="font-serif text-5xl uppercase leading-tight text-[#D8D0C0] md:text-6xl">
                The throne
                <br />
                stands empty.
              </h2>

              <div className="my-8 h-px w-20 bg-[#A88B4A]/50" />

              <p className="max-w-lg text-sm leading-8 text-[#8E887D]">
                Thornmarch has survived wars, betrayals, and the fall of its
                royal house. For generations, the kingdom endured without a
                crown.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-8 text-[#8E887D]">
                Now the Hollow Crown has returned. Whoever possesses it may
                possess the ancient right to rule.
              </p>

              <Link
                href="/world"
                className="mt-8 inline-block text-xs uppercase tracking-[0.3em] text-[#A88B4A] transition hover:text-[#D8D0C0]"
              >
                Discover Thornmarch →
              </Link>
            </div>

            {/* Throne visual */}
            <div className="relative flex aspect-4/5 items-center justify-center border border-[#A88B4A]/10 bg-[#151310]">
              <div className="absolute inset-8 border border-[#A88B4A]/10" />

              <div className="text-center">
                <div className="mb-6 font-serif text-8xl text-[#A88B4A]/20">
                  ♔
                </div>

                <p className="font-serif text-2xl uppercase tracking-[0.2em] text-[#8E887D]">
                  The Empty Throne
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#8E887D]/50">
                  Thornmarch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LORE */}
      <section id="lore" className="bg-[#0B0A09] py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#A88B4A]">
            The Chronicle
          </p>

          <h2 className="font-serif text-5xl uppercase text-[#D8D0C0] md:text-7xl">
            Power has a price.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#8E887D]">
            There are no heroes written into this story. There are only choices,
            consequences, alliances, betrayals—and the question of what kind of
            ruler Thornmarch deserves.
          </p>
        </div>
      </section>

      {/* FACTIONS */}
      <section
        id="factions"
        className="border-y border-[#A88B4A]/10 bg-[#0F0E0C] py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#A88B4A]">
              The Players
            </p>

            <h2 className="font-serif text-5xl uppercase text-[#D8D0C0] md:text-7xl">
              Three powers.
            </h2>
          </div>

          <div className="grid gap-px bg-[#A88B4A]/10 md:grid-cols-3">
            {factions.map((faction) => (
              <article
                key={faction.name}
                className="group bg-[#0F0E0C] p-10 transition hover:bg-[#151310]"
              >
                <span className="font-serif text-4xl text-[#A88B4A]/40">
                  {faction.symbol}
                </span>

                <h3 className="mt-12 font-serif text-2xl uppercase tracking-wide text-[#D8D0C0]">
                  {faction.name}
                </h3>

                <div className="my-6 h-px w-12 bg-[#A88B4A]/40 transition-all group-hover:w-20" />

                <p className="text-sm leading-7 text-[#8E887D]">
                  {faction.description}
                </p>

                <Link
                  href="/factions"
                  className="mt-8 inline-block text-[10px] uppercase tracking-[0.3em] text-[#A88B4A]"
                >
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN */}
      <section id="campaigns" className="relative overflow-hidden py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,139,74,0.07),transparent_50%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#A88B4A]">
            Your Chronicle Begins
          </p>

          <h2 className="font-serif text-5xl uppercase leading-tight text-[#D8D0C0] md:text-7xl">
            Choose your side.
            <br />
            Or choose none.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#8E887D]">
            Create your character. Join a campaign. Shape the fate of
            Thornmarch.
          </p>

          <Link
            href="/play"
            className="mt-12 inline-block border border-[#A88B4A] bg-[#A88B4A] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#0B0A09] transition hover:bg-transparent hover:text-[#A88B4A]"
          >
            Begin Your Chronicle
          </Link>
        </div>
      </section>
    </>
  );
}
