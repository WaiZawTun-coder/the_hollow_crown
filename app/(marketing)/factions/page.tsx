import Link from "next/link";

const factions = [
  {
    number: "I",
    name: "The Iron Vow",
    title: "Order Through the Crown",
    leader: "Lord-Commander Valerius",
    role: "Militant Royalists",
    color: "rgba(168,139,74,0.12)",
    symbol: "⚔",
    philosophy: "Only a true heir can restore order to Thornmarch.",
    description:
      "The Iron Vow believes the kingdom's suffering is the consequence of a realm without legitimate authority. To them, the Hollow Crown represents the ancient right to rule—and the only path toward restoring stability.",
    strength:
      "Military discipline, royal legitimacy, and access to forbidden archives.",
    flaw: "Their pursuit of order can become a military crackdown on dissent.",
    consequence:
      "If given the Crown, Valerius may become a holy tyrant, stabilizing Thornmarch through fear.",
  },
  {
    number: "II",
    name: "The Coven of Rust",
    title: "Freedom From the Throne",
    leader: "Morwen the Unchained",
    role: "Radical Democrats & Hedge Witches",
    color: "rgba(122,37,37,0.12)",
    symbol: "✦",
    philosophy: "The Crown is a symbol of tyranny and should be destroyed.",
    description:
      "The Coven of Rust rejects the idea that Thornmarch needs a monarch at all. They believe the Crown represents centuries of concentrated power and that destroying it is the only way to prevent another tyrant from claiming the throne.",
    strength: "Secret paths, common-folk allies, and unconventional magic.",
    flaw: "Their radical vision risks replacing political oppression with dangerous chaos.",
    consequence:
      "Destroying the Crown could release Sylara and allow the Dreadmoor to spread across the kingdom.",
  },
  {
    number: "III",
    name: "The Silent Exchequer",
    title: "Prosperity Through Control",
    leader: "Syndic Joras",
    role: "Merchant Guild & Spymasters",
    color: "rgba(120,120,120,0.10)",
    symbol: "◇",
    philosophy: "Power belongs to whoever can control the kingdom's resources.",
    description:
      "The Silent Exchequer sees the Crown less as a symbol and more as an instrument. Rather than wearing it, they intend to control its power from behind the scenes and use it to shape trade, magic, and the future of Thornmarch.",
    strength:
      "Gold, information networks, political influence, and economic power.",
    flaw: "Their pursuit of prosperity can transform Thornmarch into a corporate police state.",
    consequence:
      "If they control the Crown, order and prosperity may follow—but freedom becomes increasingly expensive.",
  },
];

const values = [
  {
    label: "IRON VOW",
    value: "STABILITY",
  },
  {
    label: "COVEN OF RUST",
    value: "LIBERTY",
  },
  {
    label: "SILENT EXCHEQUER",
    value: "PROSPERITY",
  },
];

export default function FactionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,139,74,0.06),transparent_45%)]" />

        <div className="absolute left-[8%] top-32 h-56 w-px bg-linear-to-b from-transparent via-[#A88B4A]/25 to-transparent" />

        <div className="absolute right-[8%] top-32 h-56 w-px bg-linear-to-b from-transparent via-[#A88B4A]/25 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.6em] text-[#A88B4A]">
            The Powers of Thornmarch
          </p>

          <h1 className="font-serif text-6xl uppercase leading-[0.9] tracking-[0.08em] sm:text-7xl md:text-9xl">
            Three
            <br />
            <span className="text-[#A88B4A]">Factions</span>
          </h1>

          <div className="mx-auto my-10 h-px w-24 bg-[#A88B4A]/50" />

          <p className="mx-auto max-w-2xl font-serif text-lg leading-8 text-[#8E887D] md:text-xl">
            Three visions for Thornmarch.
            <br />
            Three paths to power.
            <br />
            None without a price.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#8E887D]/40">
            Choose carefully
          </span>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            There Are No Heroes Here
          </p>

          <h2 className="font-serif text-4xl uppercase leading-tight md:text-6xl">
            Every faction
            <br />
            believes it is right.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-8 text-[#8E887D]">
            The factions of Thornmarch are not divided between good and evil.
            Each has a vision for the kingdom. Each has the power to make that
            vision real. And each carries the seed of its own downfall.
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-serif text-lg italic text-[#D8D0C0]/60">
            The question is not who is right.
            <br />
            The question is what you are willing to sacrifice.
          </p>
        </div>
      </section>

      {/* FACTION CARDS */}
      <section className="bg-[#0B0A09] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-px bg-[#A88B4A]/10">
            {factions.map((faction, index) => (
              <article
                key={faction.name}
                className="group relative overflow-hidden bg-[#0B0A09] px-8 py-16 transition hover:bg-[#11100E] md:px-16 md:py-20"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at ${
                      index % 2 === 0 ? "20%" : "80%"
                    } 50%, ${faction.color}, transparent 45%)`,
                  }}
                />

                <div className="relative grid gap-12 lg:grid-cols-[180px_1fr_1fr] lg:items-start">
                  {/* Number / symbol */}
                  <div>
                    <span className="font-serif text-6xl text-[#A88B4A]/20">
                      {faction.number}
                    </span>

                    <div className="mt-8 font-serif text-5xl text-[#A88B4A]/50">
                      {faction.symbol}
                    </div>
                  </div>

                  {/* Main information */}
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#A88B4A]">
                      {faction.role}
                    </p>

                    <h2 className="mt-4 font-serif text-4xl uppercase leading-tight md:text-5xl">
                      {faction.name}
                    </h2>

                    <p className="mt-3 font-serif text-lg italic text-[#8E887D]">
                      {faction.title}
                    </p>

                    <div className="my-8 h-px w-12 bg-[#A88B4A]/40 transition-all duration-500 group-hover:w-24" />

                    <p className="font-serif text-xl leading-8 text-[#D8D0C0]/80">
                      “{faction.philosophy}”
                    </p>

                    <p className="mt-8 text-sm leading-8 text-[#8E887D]">
                      {faction.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="border-l border-[#A88B4A]/10 pl-8 lg:mt-14">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.35em] text-[#A88B4A]">
                        Leader
                      </p>

                      <p className="mt-3 font-serif text-lg text-[#D8D0C0]">
                        {faction.leader}
                      </p>
                    </div>

                    <div className="mt-10">
                      <p className="text-[9px] uppercase tracking-[0.35em] text-[#A88B4A]">
                        Strength
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#8E887D]">
                        {faction.strength}
                      </p>
                    </div>

                    <div className="mt-10">
                      <p className="text-[9px] uppercase tracking-[0.35em] text-[#7A2525]">
                        Fatal Flaw
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#8E887D]">
                        {faction.flaw}
                      </p>
                    </div>

                    <div className="mt-10 border-t border-[#A88B4A]/10 pt-8">
                      <p className="text-[9px] uppercase tracking-[0.35em] text-[#A88B4A]">
                        If They Win
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#8E887D]">
                        {faction.consequence}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THREE IDEALS */}
      <section className="border-y border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              Three Visions
            </p>

            <h2 className="font-serif text-5xl uppercase md:text-6xl">
              What do you value?
            </h2>
          </div>

          <div className="grid gap-px bg-[#A88B4A]/10 md:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={item.label}
                className="group bg-[#0F0E0C] p-12 text-center transition hover:bg-[#151310]"
              >
                <span className="font-serif text-4xl text-[#A88B4A]/30">
                  0{index + 1}
                </span>

                <p className="mt-10 text-[9px] uppercase tracking-[0.35em] text-[#8E887D]">
                  {item.label}
                </p>

                <h3 className="mt-4 font-serif text-3xl uppercase text-[#D8D0C0]">
                  {item.value}
                </h3>

                <div className="mx-auto mt-6 h-px w-10 bg-[#A88B4A]/40 transition-all group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERS */}
      <section className="bg-[#0B0A09] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              Those Who Lead
            </p>

            <h2 className="font-serif text-5xl uppercase md:text-7xl">
              The Three
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {factions.map((faction) => (
              <div
                key={faction.leader}
                className="group relative aspect-3/4 overflow-hidden border border-[#A88B4A]/10 bg-[#151310]"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[140px] text-[#A88B4A]/10 transition duration-500 group-hover:text-[#A88B4A]/20">
                    {faction.symbol}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#080807] via-[#080807]/80 to-transparent p-8 pt-32">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#A88B4A]">
                    {faction.name}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl uppercase">
                    {faction.leader}
                  </h3>

                  <p className="mt-2 text-xs italic text-[#8E887D]">
                    {faction.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAYER CHOICE */}
      <section className="relative overflow-hidden border-y border-[#A88B4A]/10 bg-[#11100E] py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,37,37,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            The Choice Is Yours
          </p>

          <h2 className="font-serif text-5xl uppercase leading-tight md:text-7xl">
            Pick a side.
            <br />
            <span className="text-[#A88B4A]">Or betray them all.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-8 text-[#8E887D]">
            The factions will offer you gold, knowledge, protection, allies, and
            power. They will also expect something in return.
          </p>

          <p className="mx-auto mt-6 font-serif text-lg italic text-[#D8D0C0]/60">
            Every alliance has a consequence.
          </p>

          <Link
            href="/play"
            className="mt-12 inline-block border border-[#A88B4A] bg-[#A88B4A] px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-[#0B0A09] transition hover:bg-transparent hover:text-[#A88B4A]"
          >
            Enter Thornmarch
          </Link>
        </div>
      </section>
    </>
  );
}
