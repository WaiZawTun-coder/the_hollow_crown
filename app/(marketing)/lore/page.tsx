import Link from "next/link";

const loreEntries = [
  {
    number: "I",
    title: "The Hollow Crown",
    subtitle: "A symbol of kingship",
    text: "For generations, the Crown was believed to grant the ancient right to rule Thornmarch. Its return has awakened old ambitions and drawn three powerful factions toward the Dreadmoor.",
  },
  {
    number: "II",
    title: "The Binding",
    subtitle: "A prison disguised as a crown",
    text: "The Crown is not merely a relic. Bound within it is Sylara, an archfey of truth and vengeance. Whoever wears the Crown becomes her vessel, gaining immense power while surrendering part of their will to her influence.",
  },
  {
    number: "III",
    title: "Sylara",
    subtitle: "Truth without mercy",
    text: "Sylara does not lie. Her truth is fey truth—absolute, unforgiving, and alien to mortal morality. Her freedom could reshape the land itself.",
  },
];

const truths = [
  {
    title: "Truth",
    text: "The Crown never lies.",
  },
  {
    title: "Power",
    text: "The one who wears it becomes Sylara's vessel.",
  },
  {
    title: "Price",
    text: "Immense power comes at the cost of one's will.",
  },
  {
    title: "Freedom",
    text: "The binding can potentially be broken—but not without sacrifice.",
  },
];

const revelations = [
  {
    stage: "THE FIRST REVELATION",
    title: "The Crown Has Returned",
    text: "Rumors lead the factions toward the Dreadmoor. What begins as a struggle over political legitimacy soon becomes a search for something far more dangerous.",
  },
  {
    stage: "THE SECOND REVELATION",
    title: "The Crown Is Not Empty",
    text: "At the heart of the Sunken Cathedral, the party discovers that the Crown contains something—or someone—that has been bound there for centuries.",
  },
  {
    stage: "THE FINAL REVELATION",
    title: "The Binding Was Never What It Seemed",
    text: "Sylara was not imprisoned by a mortal king. She was bound by her own kind for daring to grant free will to mortals.",
  },
];

export default function LorePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,37,37,0.10),transparent_42%)]" />

        <div className="absolute left-[10%] top-1/4 h-64 w-px bg-linear-to-b from-transparent via-[#A88B4A]/20 to-transparent" />

        <div className="absolute right-[10%] top-1/4 h-64 w-px bg-linear-to-b from-transparent via-[#A88B4A]/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.6em] text-[#A88B4A]">
            Forbidden Knowledge
          </p>

          <h1 className="font-serif text-6xl uppercase leading-[0.9] tracking-[0.08em] sm:text-7xl md:text-9xl">
            The
            <br />
            <span className="text-[#A88B4A]">Lore</span>
          </h1>

          <div className="mx-auto my-10 h-px w-24 bg-[#A88B4A]/50" />

          <p className="mx-auto max-w-2xl font-serif text-lg leading-8 text-[#8E887D] md:text-xl">
            Every kingdom has its legends.
            <br />
            Thornmarch has its secrets.
          </p>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#8E887D]/70">
            What follows is what remains of the truth.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#8E887D]/40">
            Read carefully
          </span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            An Old Story
          </p>

          <h2 className="font-serif text-4xl uppercase leading-tight md:text-6xl">
            Some crowns
            <br />
            are made to rule.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-8 text-[#8E887D]">
            The Hollow Crown was thought to be a relic of Thornmarch&apos;s
            forgotten monarchy. A symbol of ancient authority. A claim to the
            throne.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#8E887D]">
            But the truth is considerably older—and considerably more dangerous.
          </p>
        </div>
      </section>

      {/* THREE LORE ENTRIES */}
      <section className="bg-[#0B0A09] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              The Forbidden Chronicle
            </p>

            <h2 className="font-serif text-5xl uppercase md:text-7xl">
              What We Know
            </h2>
          </div>

          <div className="grid gap-px bg-[#A88B4A]/10 md:grid-cols-3">
            {loreEntries.map((entry) => (
              <article
                key={entry.title}
                className="group bg-[#0B0A09] p-10 transition hover:bg-[#151310]"
              >
                <span className="font-serif text-4xl text-[#A88B4A]/30">
                  {entry.number}
                </span>

                <div className="mt-16">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#A88B4A]">
                    {entry.subtitle}
                  </p>

                  <h3 className="mt-4 font-serif text-2xl uppercase">
                    {entry.title}
                  </h3>

                  <div className="my-6 h-px w-10 bg-[#A88B4A]/40 transition-all duration-300 group-hover:w-20" />

                  <p className="text-sm leading-8 text-[#8E887D]">
                    {entry.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CROWN */}
      <section className="relative overflow-hidden border-y border-[#A88B4A]/10 bg-[#11100E] py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,139,74,0.08),transparent_40%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            The Relic
          </p>

          <div className="my-10 font-serif text-[120px] leading-none text-[#A88B4A]/15">
            ♔
          </div>

          <h2 className="font-serif text-5xl uppercase md:text-7xl">
            The Hollow Crown
          </h2>

          <div className="mx-auto my-8 h-px w-20 bg-[#A88B4A]/50" />

          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#8E887D]">
            An ancient crown that grants the right to rule. Or so the legends
            claim.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#8E887D]">
            The truth is that the Crown is a prison. Within it waits Sylara, an
            archfey of truth and vengeance.
          </p>

          <div className="mx-auto mt-16 grid max-w-3xl gap-px bg-[#A88B4A]/10 sm:grid-cols-2">
            {truths.map((truth) => (
              <div key={truth.title} className="bg-[#11100E] p-8 text-left">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#A88B4A]">
                  {truth.title}
                </p>

                <p className="mt-4 font-serif text-lg text-[#D8D0C0]/80">
                  {truth.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYLARA */}
      <section className="bg-[#0B0A09] py-40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            {/* Symbol */}
            <div className="relative flex aspect-square items-center justify-center border border-[#A88B4A]/10 bg-[#0F0E0C]">
              <div className="absolute inset-8 border border-[#A88B4A]/10" />

              <div className="text-center">
                <div className="font-serif text-8xl text-[#7A2525]/40">✦</div>

                <p className="mt-8 font-serif text-xl uppercase tracking-[0.25em] text-[#8E887D]">
                  Sylara
                </p>

                <p className="mt-3 text-[8px] uppercase tracking-[0.35em] text-[#A88B4A]/50">
                  Truth & Vengeance
                </p>
              </div>
            </div>

            {/* Story */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
                The One Within
              </p>

              <h2 className="font-serif text-5xl uppercase md:text-6xl">
                Sylara
              </h2>

              <p className="mt-2 font-serif text-lg italic text-[#8E887D]">
                Archfey of Truth and Vengeance
              </p>

              <div className="my-8 h-px w-16 bg-[#A88B4A]/50" />

              <p className="text-sm leading-8 text-[#8E887D]">
                Sylara is bound within the Hollow Crown. Her presence gives the
                relic its terrible power and makes its wearer more than a ruler.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#8E887D]">
                She speaks directly into the minds of those who reach the Crown.
                She offers choices, but never lies.
              </p>

              <blockquote className="mt-10 border-l border-[#7A2525]/60 pl-6">
                <p className="font-serif text-xl italic leading-8 text-[#D8D0C0]/70">
                  “Truth does not require kindness.”
                </p>

                <footer className="mt-3 text-[9px] uppercase tracking-[0.3em] text-[#8E887D]/50">
                  — Attributed to Sylara
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* REVELATIONS */}
      <section className="border-y border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              The Chronicle Unfolds
            </p>

            <h2 className="font-serif text-5xl uppercase md:text-6xl">
              Three Revelations
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#8E887D]">
              The truth reveals itself slowly. Each revelation changes what the
              Crown means.
            </p>
          </div>

          <div className="space-y-px bg-[#A88B4A]/10">
            {revelations.map((revelation, index) => (
              <article
                key={revelation.title}
                className="group grid gap-8 bg-[#0F0E0C] p-8 transition hover:bg-[#151310] md:grid-cols-[120px_1fr]"
              >
                <div>
                  <span className="font-serif text-4xl text-[#A88B4A]/30">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#A88B4A]">
                    {revelation.stage}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl uppercase">
                    {revelation.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-8 text-[#8E887D]">
                    {revelation.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE BINDING */}
      <section className="relative overflow-hidden bg-[#0B0A09] py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(122,37,37,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            The Ancient Pact
          </p>

          <h2 className="font-serif text-5xl uppercase leading-tight md:text-7xl">
            Someone bound her.
          </h2>

          <div className="mx-auto my-10 h-px w-20 bg-[#A88B4A]/50" />

          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#8E887D]">
            The deepest truth is not that Sylara was imprisoned.
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-serif text-xl leading-9 text-[#D8D0C0]/80">
            It is why.
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#8E887D]">
            Sylara was bound by her own kind for daring to grant free will to
            mortals.
          </p>

          <div className="mx-auto mt-12 h-px w-12 bg-[#7A2525]/60" />

          <p className="mx-auto mt-8 max-w-xl text-xs uppercase tracking-[0.2em] leading-7 text-[#8E887D]/50">
            The truth of the binding waits at the end of the Crown&apos;s story.
          </p>
        </div>
      </section>

      {/* ENDINGS TEASER */}
      <section className="border-t border-[#A88B4A]/10 bg-[#11100E] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              The Final Question
            </p>

            <h2 className="font-serif text-4xl uppercase md:text-6xl">
              What should become of the Crown?
            </h2>
          </div>

          <div className="grid gap-px bg-[#A88B4A]/10 md:grid-cols-4">
            <div className="bg-[#11100E] p-8 text-center">
              <p className="font-serif text-2xl text-[#A88B4A]">Order</p>
              <p className="mt-4 text-xs leading-6 text-[#8E887D]">
                Enforce the binding.
              </p>
            </div>

            <div className="bg-[#11100E] p-8 text-center">
              <p className="font-serif text-2xl text-[#A88B4A]">Liberty</p>
              <p className="mt-4 text-xs leading-6 text-[#8E887D]">
                Free Sylara and accept the chaos.
              </p>
            </div>

            <div className="bg-[#11100E] p-8 text-center">
              <p className="font-serif text-2xl text-[#A88B4A]">Power</p>
              <p className="mt-4 text-xs leading-6 text-[#8E887D]">
                Usurp the binding.
              </p>
            </div>

            <div className="bg-[#11100E] p-8 text-center">
              <p className="font-serif text-2xl text-[#A88B4A]">Freedom</p>
              <p className="mt-4 text-xs leading-6 text-[#8E887D]">
                Dissolve the magic entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B0A09] py-40 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            The Chronicle Awaits
          </p>

          <h2 className="font-serif text-5xl uppercase leading-tight md:text-7xl">
            Knowledge is
            <br />
            <span className="text-[#A88B4A]">a dangerous gift.</span>
          </h2>

          <Link
            href="/play"
            className="mt-12 inline-block border border-[#A88B4A] bg-[#A88B4A] px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-[#0B0A09] transition hover:bg-transparent hover:text-[#A88B4A]"
          >
            Begin Your Chronicle
          </Link>
        </div>
      </section>
    </>
  );
}
