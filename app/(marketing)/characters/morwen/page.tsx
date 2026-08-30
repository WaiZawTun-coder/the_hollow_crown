import Link from "next/link";

export default function MorwenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-180 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(105,77,83,0.2),transparent_35%),linear-gradient(115deg,#0b0b0d_20%,#181315_65%,#0b0b0d)]" />

        {/* Occult atmosphere */}
        <div className="absolute right-[8%] top-[12%] h-125 w-125 rounded-full bg-[#73515b]/10 blur-[160px]" />

        <div className="relative mx-auto flex min-h-180 max-w-7xl items-center px-6 py-24 lg:px-12">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* INTRO */}
            <div>
              <Link
                href="/characters"
                className="text-xs uppercase tracking-[0.3em] text-[#716b62] transition hover:text-[#aa858e]"
              >
                ← Characters
              </Link>

              <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#a57982]">
                The Coven of Rust · Faction Leader
              </p>

              <h1 className="mt-6 font-serif text-6xl tracking-tight text-[#eee7da] md:text-8xl">
                Morwen
                <br />
                <span className="text-[#a87982]">the Unchained</span>
              </h1>

              <div className="mt-8 h-px w-24 bg-[#9d727b]" />

              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#b9b2a5]">
                The Voice of Rust
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#858078]">
                A fierce warlock who sees the Hollow Crown as a symbol of
                tyranny—and believes Thornmarch must be freed from the systems
                that keep ordinary people powerless.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/factions"
                  className="border border-white/15 px-6 py-3 text-sm uppercase tracking-widest text-[#aaa195] transition hover:border-[#a57982] hover:text-white"
                >
                  Coven of Rust
                </Link>

                <Link
                  href="/campaigns"
                  className="bg-[#a57982] px-6 py-3 text-sm uppercase tracking-widest text-[#141113] transition hover:bg-[#bd9199]"
                >
                  The Campaign
                </Link>
              </div>
            </div>

            {/* PORTRAIT */}
            <div className="relative mx-auto w-full max-w-105">
              <div className="aspect-3/4 overflow-hidden border border-white/10 bg-[#171315]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#47373d_0%,#261f22_35%,#111113_75%)]" />

                <div className="relative flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#a57982]/30 text-6xl opacity-60">
                      ✦
                    </div>

                    <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#746e65]">
                      Character Portrait
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 border border-[#a57982]/30 bg-[#111112] px-6 py-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#716b62]">
                  Allegiance
                </p>

                <p className="mt-1 font-serif text-xl text-[#d8cbb6]">
                  Coven of Rust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="border-b border-white/10 bg-[#101012]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          <ProfileStat label="Role" value="Faction Leader" />
          <ProfileStat label="Class" value="Warlock" />
          <ProfileStat label="Faction" value="Coven of Rust" />
          <ProfileStat label="Ideal" value="Freedom" />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#a57982]">
          The Coven of Rust
        </p>

        <blockquote className="mt-8 font-serif text-4xl leading-tight text-[#ded6c8] md:text-6xl">
          “They called you a traitor
          <br />
          because you chose people over a throne.”
        </blockquote>

        <p className="mx-auto mt-9 max-w-2xl leading-8 text-[#77736d]">
          To Morwen, Caelan&apos;s fall is not an isolated tragedy. It is
          evidence of a system designed to protect authority before the people
          it claims to govern.
        </p>
      </section>

      {/* BELIEF */}
      <section className="border-y border-white/10 bg-[#0e0e10]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#a57982]">
                Her Belief
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-5xl">
                Freedom before the throne
              </h2>

              <p className="mt-8 text-lg leading-9 text-[#aaa196]">
                The Coven of Rust believes the Hollow Crown is a symbol of
                tyranny that should be destroyed.
              </p>

              <p className="mt-6 leading-8 text-[#77736d]">
                Morwen believes that no kingdom should place its future in the
                hands of a monarch simply because an ancient relic declares that
                person worthy of rule.
              </p>

              <p className="mt-6 leading-8 text-[#77736d]">
                But the Coven&apos;s commitment to freedom has a dangerous edge.
                Their methods are increasingly radical, and their vision of
                liberation may demand sacrifices of its own.
              </p>
            </div>

            {/* IDEOLOGY */}
            <div className="border border-white/10 bg-[#111113] p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#716b62]">
                The Coven&apos;s Principles
              </p>

              <div className="mt-8 space-y-7">
                <BeliefRow
                  title="Freedom"
                  text="No ruler should possess unquestioned authority over the people."
                />

                <BeliefRow
                  title="Resistance"
                  text="A broken system cannot always be repaired from within."
                />

                <BeliefRow
                  title="Equality"
                  text="Birth and ancient claims should not determine who holds power."
                />

                <BeliefRow
                  title="Revolution"
                  text="Sometimes destroying the old order is the only way to create something new."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAELAN */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#a57982]">
              The Traitor
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-5xl">
              Morwen & Caelan
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#aaa196]">
              Morwen knows about Greyhaven.
            </p>

            <p className="mt-6 leading-8 text-[#77736d]">
              Where the Iron Vow sees Caelan&apos;s decision as dangerous
              disobedience, Morwen sees something entirely different.
            </p>

            <p className="mt-6 leading-8 text-[#77736d]">
              Caelan chose ordinary people over an order from the Regency. To
              Morwen, that makes Caelan living evidence that the system itself
              is broken.
            </p>

            <div className="mt-10 border-l border-[#a57982]/40 pl-7">
              <p className="font-serif text-2xl italic leading-9 text-[#b58b93]">
                “They called you a traitor because you chose people over a
                throne.”
              </p>
            </div>

            <p className="mt-8 leading-8 text-[#77736d]">
              The Coven offers Caelan friendship and common-folk allies—but
              their increasingly radical methods force Caelan to question
              whether freedom without restraint can become another form of
              oppression.
            </p>
          </div>
        </div>
      </section>

      {/* THE CROWN */}
      <section className="border-y border-white/10 bg-[#101012]">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#a57982]">
            The Hollow Crown
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-6xl">
            Destroy the throne
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736d]">
            When the factions reach the Crown&apos;s chamber, the Coven demands
            that the Crown be destroyed rather than placed in the hands of
            another ruler.
          </p>

          <div className="mx-auto mt-14 max-w-xl border border-[#a57982]/25 bg-[#0d0d0f] p-9">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#716b62]">
              Possible Future
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#c7a0a6]">
              The Crown Shattered
            </h3>

            <p className="mt-5 text-sm leading-8 text-[#77736d]">
              Shattering the Crown releases Sylara in a cataclysmic explosion of
              wild magic. The archfey is free, but the Dreadmoor spreads, making
              part of Thornmarch uninhabitable.
            </p>

            <div className="my-7 h-px bg-white/10" />

            <p className="text-sm leading-8 text-[#77736d]">
              The people are freed from monarchy forever—but freedom comes with
              a devastating price.
            </p>
          </div>
        </div>
      </section>

      {/* MORAL CONFLICT */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#a57982]">
            The Cost of Freedom
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#ddd5c7] md:text-5xl">
            Morwen&apos;s contradiction
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ConflictCard
            title="Her Strength"
            text="Conviction, courage, independence, and the willingness to challenge authority."
          />

          <ConflictCard
            title="Her Danger"
            text="The Coven's methods become increasingly radical as its resistance turns toward revolution."
          />

          <ConflictCard
            title="Her Question"
            text="How much destruction can be justified in the name of freedom?"
          />
        </div>
      </section>

      {/* POSSIBLE OUTCOME */}
      <section className="border-t border-white/10 bg-[#0e0e10]">
        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#a57982]">
            Her Path
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#e0d8cb] md:text-6xl">
            Freedom has consequences.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736d]">
            Morwen wants Thornmarch to belong to its people. But destroying the
            Crown may unleash something far older and more dangerous than the
            monarchy she seeks to overthrow.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/factions"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#a7a097] transition hover:border-[#a57982] hover:text-white"
            >
              Explore the Coven
            </Link>

            <Link
              href="/characters"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#a7a097] transition hover:border-[#a57982] hover:text-white"
            >
              ← Characters
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-8 text-center md:px-8">
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#67635d]">
        {label}
      </p>

      <p className="mt-2 font-serif text-lg text-[#c5bcad]">{value}</p>
    </div>
  );
}

function BeliefRow({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
      <h3 className="font-serif text-xl text-[#cfc6b8]">{title}</h3>

      <p className="mt-2 text-sm leading-7 text-[#706c66]">{text}</p>
    </div>
  );
}

function ConflictCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="border border-white/10 bg-[#101012] p-8">
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#a57982]">
        {title}
      </p>

      <p className="mt-5 leading-8 text-[#77736d]">{text}</p>
    </article>
  );
}
