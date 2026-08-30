import Link from "next/link";

const factions = [
  {
    name: "The Iron Vow",
    symbol: "⚔",
    description:
      "They remember Caelan as a capable warden who made the wrong choice. Valerius offers a path back into service—but at the cost of obedience.",
    quote: "Kingdoms cannot survive if every soldier decides for themselves.",
    tone: "Order",
  },
  {
    name: "The Coven of Rust",
    symbol: "🔥",
    description:
      "The Coven sees Caelan as proof that Thornmarch's ruling system is fundamentally broken.",
    quote: "They called you a traitor because you chose people over a throne.",
    tone: "Freedom",
  },
  {
    name: "The Silent Exchequer",
    symbol: "🪙",
    description:
      "The Exchequer knows more about Greyhaven than it should—and possesses records that may expose what really happened.",
    quote: "Truth has a price. The question is whether you can afford it.",
    tone: "Prosperity",
  },
];

const timeline = [
  {
    year: "0",
    title: "Born in Thornmarch",
    description:
      "Caelan grows up on the kingdom's border, raised between their father's faith in the old kingdom and their mother's distrust of its nobles.",
  },
  {
    year: "16",
    title: "Joins the Border Wardens",
    description:
      "Caelan enters the Thornmarch Border Wardens and begins protecting villages from the horrors emerging from the Dreadmoor.",
  },
  {
    year: "22",
    title: "The Greyhaven Incident",
    description:
      "When the Regency orders the fortress gates closed against fleeing villagers, Caelan disobeys and opens them. Hundreds survive—but infected creatures enter the fortress.",
  },
  {
    year: "22–27",
    title: "Five Years in Exile",
    description:
      "Stripped of rank and branded a traitor, Caelan survives as a mercenary, caravan guard, monster hunter, and bounty hunter.",
  },
  {
    year: "27",
    title: "The Hollow Crown",
    description:
      "News that the Crown has resurfaced draws Caelan back to Thornmarch—and toward a mystery that may involve their own father.",
  },
];

export default function CaelanVeyrPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-180 overflow-hidden border-b border-white/10">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(117,92,55,0.2),transparent_35%),linear-gradient(115deg,#0b0b0d_25%,#151311_65%,#0b0b0d)]" />

        {/* Decorative mist */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[55%] top-[15%] h-125 w-125 rounded-full bg-stone-500 blur-[150px]" />
        </div>

        <div className="relative mx-auto flex min-h-180 max-w-7xl items-center px-6 py-24 lg:px-12">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* Character information */}
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#9f8965]">
                The Hollow Crown · Main Character
              </p>

              <h1 className="max-w-4xl font-serif text-6xl font-medium tracking-tight text-[#f1eadc] md:text-8xl">
                Caelan
                <br />
                <span className="text-[#a99576]">Veyr</span>
              </h1>

              <div className="mt-8 h-px w-24 bg-[#9f8965]" />

              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#b9b2a5]">
                The Exile of Thornmarch
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#858078]">
                A former Border Warden who refused to obey the wrong order.
                Branded a traitor, Caelan spent five years in exile before the
                return of the Hollow Crown drew them back to the kingdom they
                once swore to protect.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/characters"
                  className="border border-white/15 px-6 py-3 text-sm uppercase tracking-widest text-[#d7d0c3] transition hover:border-[#a99576] hover:text-white"
                >
                  ← Characters
                </Link>

                <Link
                  href="/campaigns/the-hollow-crown"
                  className="bg-[#a99576] px-6 py-3 text-sm uppercase tracking-widest text-[#14120f] transition hover:bg-[#c0ab89]"
                >
                  Enter the Story
                </Link>
              </div>
            </div>

            {/* Character portrait placeholder */}
            <div className="relative mx-auto w-full max-w-105">
              <div className="aspect-3/4 overflow-hidden border border-white/10 bg-[#171719]">
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,#413a31_0%,#211f1d_35%,#111113_75%)]">
                  <div className="text-center">
                    <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#9f8965]/40 text-5xl">
                      ⚔
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#746e65]">
                      Character Portrait
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 border border-[#9f8965]/30 bg-[#111112] px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#716b62]">
                  Starting Level
                </p>
                <p className="mt-1 font-serif text-2xl text-[#d8cbb6]">
                  Level 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHARACTER STATS */}
      <section className="border-b border-white/10 bg-[#101012]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          <Stat label="Origin" value="Thornmarch" />
          <Stat label="Age" value="27" />
          <Stat label="Background" value="Disgraced Warden" />
          <Stat label="Alignment" value="Player Defined" />
        </div>
      </section>

      {/* THE QUESTION */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
          The Central Question
        </p>

        <blockquote className="mt-8 font-serif text-4xl leading-tight text-[#ded6c8] md:text-6xl">
          “When laws become unjust,
          <br />
          who decides when they can be broken?”
        </blockquote>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736d]">
          Caelan&apos;s personal struggle mirrors the central question of the
          campaign: who deserves the right to rule—and what are we willing to
          sacrifice for a better kingdom?
        </p>
      </section>

      {/* PAST */}
      <section className="border-y border-white/10 bg-[#0e0e10]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <SectionHeading
            eyebrow="The Past"
            title="A Protector Who Disobeyed"
          />

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-9 text-[#b7b0a4]">
                Caelan was born in a small border settlement on the outskirts of
                Thornmarch. Their father served as a soldier under the old royal
                army, while their mother worked as a healer for travelers and
                soldiers.
              </p>

              <p className="mt-6 leading-8 text-[#77736d]">
                They grew up hearing stories about the old kingdom—not stories
                of glorious kings, but stories of broken promises.
              </p>

              <p className="mt-6 leading-8 text-[#77736d]">
                At sixteen, Caelan joined the Thornmarch Border Wardens. For
                years they fought bandits, undead, fey creatures, and whatever
                else crawled out of the Dreadmoor.
              </p>
            </div>

            <div className="border-l border-[#9f8965]/30 pl-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#716b62]">
                The Incident
              </p>

              <h3 className="mt-4 font-serif text-3xl text-[#d9d0c0]">
                Greyhaven
              </h3>

              <p className="mt-5 leading-8 text-[#878178]">
                When hundreds of villagers fled a monster attack, the Regency
                Council ordered Caelan to keep the fortress gates closed.
              </p>

              <p className="mt-5 leading-8 text-[#878178]">Caelan refused.</p>

              <p className="mt-5 leading-8 text-[#878178]">
                They opened the gates and saved hundreds of lives. But infected
                creatures entered the fortress. Dozens died, and the Regency
                needed someone to blame.
              </p>

              <p className="mt-6 font-serif text-xl italic text-[#b5a487]">
                “Caelan chose people over a throne.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <SectionHeading eyebrow="Five Years of Exile" title="The Road Back" />

        <div className="mt-16">
          {timeline.map((item) => (
            <div
              key={item.title}
              className="grid border-t border-white/10 py-8 md:grid-cols-[100px_1fr_2fr] md:gap-10"
            >
              <span className="font-serif text-2xl text-[#9f8965]">
                {item.year}
              </span>

              <h3 className="mt-2 font-serif text-2xl text-[#d9d0c0] md:mt-0">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-[#77736d] md:mt-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FACTIONS */}
      <section className="border-y border-white/10 bg-[#0e0e10]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <SectionHeading
            eyebrow="Three Paths"
            title="Everyone Wants Something From Caelan"
          />

          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
            {factions.map((faction) => (
              <article
                key={faction.name}
                className="bg-[#101012] p-8 transition hover:bg-[#151517]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{faction.symbol}</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#716b62]">
                    {faction.tone}
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-2xl text-[#ddd5c7]">
                  {faction.name}
                </h3>

                <p className="mt-5 leading-8 text-[#77736d]">
                  {faction.description}
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-serif text-lg italic leading-7 text-[#a99576]">
                    “{faction.quote}”
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECRET */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(92,71,45,0.13),transparent_55%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
            The Secret
          </p>

          <h2 className="mt-6 font-serif text-4xl text-[#ddd5c7] md:text-6xl">
            The Father Who Shouldn&apos;t Be There
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[#858078]">
            Caelan&apos;s father supposedly died fighting in the Dreadmoor. But
            his name appears in an ancient royal archive as one of the people
            assigned to guard the Hollow Crown.
          </p>

          <div className="mx-auto mt-12 max-w-xl border border-[#9f8965]/25 bg-[#121214] p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[#716b62]">
              Archive Record
            </p>

            <p className="mt-5 font-serif text-2xl text-[#c6b89f]">
              “Assigned to the Crown Guard.”
            </p>

            <div className="my-6 h-px bg-white/10" />

            <p className="text-sm leading-7 text-[#706c66]">
              The record is dated six years before Caelan was born.
            </p>
          </div>
        </div>
      </section>

      {/* CHARACTER ARC */}
      <section className="border-t border-white/10 bg-[#101012]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <SectionHeading
            eyebrow="Character Arc"
            title="From Survivor to Choice"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ArcCard
              number="I"
              title="The Survivor"
              quote="I don't care who sits on the throne."
              description="Caelan tries to remain neutral, caring only about ordinary people caught between powerful factions."
            />

            <ArcCard
              number="II"
              title="The Witness"
              quote="What if everything I remember is wrong?"
              description="The Hollow Crown reveals that the history Caelan believed may have been deliberately fabricated."
            />

            <ArcCard
              number="III"
              title="The Choice"
              quote="What is worth sacrificing?"
              description="Caelan must decide whether the price of a better kingdom is their life, memories, freedom, morality—or their right to decide for everyone else."
            />
          </div>
        </div>
      </section>

      {/* ENDING */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
          The Hollow Crown
        </p>

        <h2 className="mt-6 font-serif text-4xl leading-tight text-[#e2dacd] md:text-6xl">
          There is no perfect ruler.
        </h2>

        <p className="mt-8 text-lg leading-9 text-[#77736d]">
          There are only choices—and the price we are willing to pay for them.
        </p>

        <div className="mt-12">
          <Link
            href="/lore"
            className="inline-block border border-white/15 px-7 py-3 text-sm uppercase tracking-widest text-[#aaa195] transition hover:border-[#a99576] hover:text-white"
          >
            Explore the Lore
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-8 text-center md:px-8">
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#67635d]">
        {label}
      </p>
      <p className="mt-2 font-serif text-lg text-[#c5bcad]">{value}</p>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
        {eyebrow}
      </p>

      <h2 className="mt-4 max-w-3xl font-serif text-4xl text-[#ddd5c7] md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function ArcCard({
  number,
  title,
  quote,
  description,
}: {
  number: string;
  title: string;
  quote: string;
  description: string;
}) {
  return (
    <article className="border border-white/10 bg-[#0d0d0f] p-8">
      <span className="font-serif text-4xl text-[#75664f]">{number}</span>

      <h3 className="mt-8 font-serif text-2xl text-[#d8d0c2]">{title}</h3>

      <p className="mt-5 font-serif text-lg italic text-[#a99576]">“{quote}”</p>

      <p className="mt-5 leading-8 text-[#77736d]">{description}</p>
    </article>
  );
}
