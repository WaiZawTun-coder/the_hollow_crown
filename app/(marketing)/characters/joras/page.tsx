import Link from "next/link";

export default function JorasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-180 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(88,91,82,0.18),transparent_35%),linear-gradient(115deg,#0b0b0d_20%,#141514_65%,#0b0b0d)]" />

        {/* Cold atmosphere */}
        <div className="absolute right-[8%] top-[10%] h-125 w-125 rounded-full bg-[#777966]/10 blur-[160px]" />

        <div className="relative mx-auto flex min-h-180 max-w-7xl items-center px-6 py-24 lg:px-12">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* INTRO */}
            <div>
              <Link
                href="/characters"
                className="text-xs uppercase tracking-[0.3em] text-[#716b62] transition hover:text-[#aaa88f]"
              >
                ← Characters
              </Link>

              <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#9b9b80]">
                The Silent Exchequer · Faction Leader
              </p>

              <h1 className="mt-6 font-serif text-6xl tracking-tight text-[#eee7da] md:text-8xl">
                Syndic
                <br />
                <span className="text-[#aaa88f]">Joras</span>
              </h1>

              <div className="mt-8 h-px w-24 bg-[#929374]" />

              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#b9b2a5]">
                The Silent Hand
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#858078]">
                A cunning spymaster who sees the Hollow Crown not as a symbol of
                legitimacy, but as a source of leverage capable of controlling
                trade, magic, and the future of Thornmarch.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/factions"
                  className="border border-white/15 px-6 py-3 text-sm uppercase tracking-widest text-[#aaa88f] transition hover:border-[#929374] hover:text-white"
                >
                  Silent Exchequer
                </Link>

                <Link
                  href="/campaigns"
                  className="bg-[#aaa88f] px-6 py-3 text-sm uppercase tracking-widest text-[#141512] transition hover:bg-[#c0c1a6]"
                >
                  The Campaign
                </Link>
              </div>
            </div>

            {/* PORTRAIT */}
            <div className="relative mx-auto w-full max-w-105">
              <div className="aspect-3/4 overflow-hidden border border-white/10 bg-[#151615]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#41433b_0%,#242622_35%,#101111_75%)]" />

                <div className="relative flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#929374]/30 text-6xl opacity-60">
                      🪙
                    </div>

                    <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#746e65]">
                      Character Portrait
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 border border-[#929374]/30 bg-[#111112] px-6 py-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#716b62]">
                  Allegiance
                </p>

                <p className="mt-1 font-serif text-xl text-[#d8d2bd]">
                  Silent Exchequer
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
          <ProfileStat label="Archetype" value="Spymaster" />
          <ProfileStat label="Faction" value="Silent Exchequer" />
          <ProfileStat label="Method" value="Leverage" />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9b9b80]">
          The Silent Exchequer
        </p>

        <blockquote className="mt-8 font-serif text-4xl leading-tight text-[#ded8ca] md:text-6xl">
          “Power does not always need
          <br />
          to wear a crown.”
        </blockquote>

        <p className="mx-auto mt-9 max-w-2xl leading-8 text-[#77736d]">
          Joras understands that the person controlling information can be just
          as powerful as the person sitting on a throne.
        </p>
      </section>

      {/* BELIEF */}
      <section className="border-y border-white/10 bg-[#0e0e10]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#9b9b80]">
                His Belief
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-5xl">
                Prosperity through control
              </h2>

              <p className="mt-8 text-lg leading-9 text-[#aaa196]">
                The Silent Exchequer wants the Crown because it represents
                something more useful than political legitimacy.
              </p>

              <p className="mt-6 leading-8 text-[#77736d]">
                To Joras, the Crown is a mechanism capable of influencing trade
                routes, magic, and the balance of power throughout Thornmarch.
              </p>

              <p className="mt-6 leading-8 text-[#77736d]">
                He does not need to become king. He only needs to make sure that
                everyone who matters depends on him.
              </p>
            </div>

            {/* IDEOLOGY */}
            <div className="border border-white/10 bg-[#111113] p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#716b62]">
                The Exchequer&apos;s Principles
              </p>

              <div className="mt-8 space-y-7">
                <BeliefRow
                  title="Information"
                  text="Knowledge is leverage, and leverage is power."
                />

                <BeliefRow
                  title="Trade"
                  text="Control the flow of goods and you influence everyone who depends on them."
                />

                <BeliefRow
                  title="Magic"
                  text="Powerful magic is another resource to be managed, controlled, and exploited."
                />

                <BeliefRow
                  title="Stability"
                  text="Prosperity matters more than the ideals people use to justify political power."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAELAN CONNECTION */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#9b9b80]">
              The Greyhaven Records
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-5xl">
              Joras & Caelan
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#aaa196]">
              The Exchequer knows far more about Greyhaven than it should.
            </p>

            <p className="mt-6 leading-8 text-[#77736d]">
              Joras possesses records suggesting that the fortress may not have
              been accidentally exposed to the creatures.
            </p>

            <p className="mt-6 leading-8 text-[#77736d]">
              Someone may have deliberately allowed the attack to happen.
            </p>

            <div className="mt-10 border border-white/10 bg-[#111113] p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#716b62]">
                Classified Information
              </p>

              <div className="mt-6 flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-sm text-[#77736d]">Greyhaven</span>

                <span className="text-xs uppercase tracking-[0.2em] text-[#9b9b80]">
                  Restricted
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-[#77736d]">Cause of breach</span>

                <span className="font-serif text-lg text-[#b4b39b]">
                  Unknown
                </span>
              </div>
            </div>

            <p className="mt-8 leading-8 text-[#77736d]">
              Joras offers Caelan access to the information—but never for free.
              The truth has become another bargaining chip.
            </p>
          </div>
        </div>
      </section>

      {/* THE BARGAIN */}
      <section className="border-y border-white/10 bg-[#101012]">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9b9b80]">
            Every Truth Has a Price
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-6xl">
            Joras does not give information.
          </h2>

          <p className="mt-3 font-serif text-4xl text-[#aaa88f] md:text-6xl">
            He trades it.
          </p>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736d]">
            The Exchequer offers Caelan information about Greyhaven in exchange
            for cooperation. The more valuable the truth, the greater the price.
          </p>

          <div className="mx-auto mt-14 grid max-w-2xl gap-px bg-white/10 md:grid-cols-3">
            <TradeCard
              title="Information"
              text="Secrets others would kill to keep."
            />

            <TradeCard
              title="Influence"
              text="Access to people and institutions."
            />

            <TradeCard title="Debt" text="Every favor creates an obligation." />
          </div>
        </div>
      </section>

      {/* THE CROWN */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#9b9b80]">
              The Hollow Crown
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-5xl">
              A Crown without a King
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#aaa196]">
              Joras does not intend to wear the Crown.
            </p>

            <p className="mt-6 leading-8 text-[#77736d]">
              Instead, the Silent Exchequer wants to secure it inside a lead
              vault and use its magic to manipulate trade routes and futures.
            </p>

            <p className="mt-6 leading-8 text-[#77736d]">
              The result would not look like traditional tyranny. There may be
              prosperity. There may be stability. But the kingdom&apos;s most
              important decisions would quietly become controlled by the
              Exchequer.
            </p>

            <div className="mt-10 border-l border-[#929374]/40 pl-7">
              <p className="font-serif text-2xl italic leading-9 text-[#b4b39b]">
                “You don&apos;t need the throne when everyone needs what you
                control.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSSIBLE FUTURE */}
      <section className="border-y border-white/10 bg-[#101012]">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9b9b80]">
            Possible Future
          </p>

          <h2 className="mt-6 font-serif text-4xl text-[#ddd5c7] md:text-6xl">
            The Corporate Police State
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736d]">
            If the Exchequer controls the Crown, a silent coup transforms
            Thornmarch into a plutocracy.
          </p>

          <div className="mx-auto mt-14 max-w-xl border border-[#929374]/25 bg-[#0d0d0f] p-9">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#716b62]">
              The Exchequer&apos;s Promise
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#c1c1a9]">
              Order. Prosperity. Control.
            </h3>

            <p className="mt-5 text-sm leading-8 text-[#77736d]">
              The kingdom prospers—but freedom becomes increasingly conditional.
              Those who oppose the system find themselves isolated, monitored,
              bought, or removed.
            </p>
          </div>
        </div>
      </section>

      {/* MORAL CONFLICT */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9b9b80]">
            The Price of Prosperity
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#ddd5c7] md:text-5xl">
            Joras&apos;s contradiction
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ConflictCard
            title="His Strength"
            text="Intelligence, patience, strategy, and the ability to see power where others overlook it."
          />

          <ConflictCard
            title="His Danger"
            text="He treats people, secrets, and even political institutions as assets that can be traded."
          />

          <ConflictCard
            title="His Question"
            text="If prosperity and stability improve people's lives, does it matter who quietly controls them?"
          />
        </div>
      </section>

      {/* FINAL */}
      <section className="border-t border-white/10 bg-[#0e0e10]">
        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9b9b80]">
            The Question
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#e0d8cb] md:text-6xl">
            What if tyranny
            <br />
            looks like prosperity?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736d]">
            Joras does not promise freedom. He promises a functioning
            kingdom—and believes that is worth almost any price.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/factions"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#a7a097] transition hover:border-[#929374] hover:text-white"
            >
              Explore the Exchequer
            </Link>

            <Link
              href="/characters"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#a7a097] transition hover:border-[#929374] hover:text-white"
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

function TradeCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-[#0d0d0f] p-7">
      <h3 className="font-serif text-xl text-[#cfcab9]">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-[#706c66]">{text}</p>
    </div>
  );
}

function ConflictCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="border border-white/10 bg-[#101012] p-8">
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b9b80]">
        {title}
      </p>

      <p className="mt-5 leading-8 text-[#77736d]">{text}</p>
    </article>
  );
}
