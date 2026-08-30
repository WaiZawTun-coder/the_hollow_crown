import Link from "next/link";

export default function CrownPage() {
  return (
    <>

      {/* HERO */}
      <section className="relative min-h-195 overflow-hidden border-b border-white/10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(148,137,91,0.20),transparent_25%),radial-gradient(circle_at_50%_42%,rgba(86,77,47,0.15),transparent_45%),linear-gradient(180deg,#090a0c_0%,#11100d_55%,#08090b_100%)]" />

        <div className="absolute left-1/2 top-[28%] h-105 w-105 -translate-x-1/2 rounded-full bg-[#a3935b]/10 blur-[150px]" />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-[#08090b] to-transparent" />

        <div className="relative mx-auto flex min-h-195 max-w-6xl flex-col items-center justify-center px-6 text-center">

          <Link
            href="/"
            className="absolute left-6 top-10 text-xs uppercase tracking-[0.3em] text-[#69665d] transition hover:text-[#aaa58f] lg:left-12"
          >
            ← The Hollow Crown
          </Link>

          <p className="text-xs uppercase tracking-[0.45em] text-[#9f936b]">
            The Relic of Thornmarch
          </p>

          {/* Crown symbol */}
          <div className="relative mt-12">

            <div className="absolute -inset-24 rounded-full border border-[#9f936b]/10" />
            <div className="absolute -inset-16 rounded-full border border-[#9f936b]/10" />
            <div className="absolute -inset-8 rounded-full border border-[#9f936b]/15" />

            <div className="flex h-48 w-48 items-center justify-center rounded-full border border-[#9f936b]/30 bg-[#15130e] shadow-[0_0_100px_rgba(159,147,107,0.08)]">

              <div className="text-8xl text-[#b5a66e] opacity-75">
                ♔
              </div>

            </div>

          </div>

          <h1 className="mt-16 font-serif text-6xl tracking-tight text-[#eee9dc] md:text-8xl">
            The Hollow
            <br />
            <span className="text-[#b1a36f]">Crown</span>
          </h1>

          <div className="mt-8 h-px w-24 bg-[#9f936b]" />

          <p className="mt-8 max-w-2xl font-serif text-2xl leading-10 text-[#c2bcae]">
            The right to rule.
            <br />
            The prison within.
          </p>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#77736b]">
            An ancient crown that has resurfaced in the kingdom of Thornmarch.
            To some it is the symbol of legitimate rule. To others, it is the
            greatest threat the kingdom has ever known.
          </p>

        </div>

      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">

        <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
          More Than a Crown
        </p>

        <h2 className="mt-6 font-serif text-4xl text-[#ded8ca] md:text-6xl">
          It was never merely a symbol.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[#8a857c]">
          The Hollow Crown grants the right to rule—but its true nature is
          hidden beneath centuries of royal history.
        </p>

        <div className="mx-auto mt-16 max-w-3xl border-y border-white/10 py-12">

          <p className="font-serif text-3xl leading-relaxed text-[#bdb6a7] md:text-4xl">
            “The Crown is a character—
            <br />
            seductive, honest in its own way,
            <br />
            and deeply dangerous.”
          </p>

        </div>

      </section>

      {/* THE TWO TRUTHS */}
      <section className="border-y border-white/10 bg-[#0d0e10]">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="border border-white/10 bg-[#111214] p-10">

              <p className="text-xs uppercase tracking-[0.35em] text-[#77736a]">
                What Mortals Believe
              </p>

              <h3 className="mt-6 font-serif text-3xl text-[#d7d1c3]">
                The Right to Rule
              </h3>

              <p className="mt-6 leading-8 text-[#77736b]">
                The Crown has long been associated with legitimate authority.
                Whoever possesses it can claim the right to rule Thornmarch.
              </p>

              <div className="mt-8 border-l border-[#9f936b]/30 pl-6">

                <p className="font-serif text-xl italic text-[#aaa38f]">
                  “The one who wears the Crown may claim the throne.”
                </p>

              </div>

            </div>

            <div className="border border-[#9f936b]/20 bg-[#12110e] p-10">

              <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
                What Lies Beneath
              </p>

              <h3 className="mt-6 font-serif text-3xl text-[#d7d1c3]">
                A Prison
              </h3>

              <p className="mt-6 leading-8 text-[#77736b]">
                The Crown is not empty. An archfey named Sylara is bound inside
                it by an ancient pact.
              </p>

              <div className="mt-8 border-l border-[#9f936b]/30 pl-6">

                <p className="font-serif text-xl italic text-[#aaa38f]">
                  “Power always comes with something else.”
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SYLARA */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-12">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-[#9f936b]">
              The Presence Within
            </p>

            <h2 className="mt-6 font-serif text-5xl text-[#ded8ca] md:text-6xl">
              Sylara
            </h2>

            <p className="mt-4 font-serif text-2xl text-[#9f936b]">
              Archfey of Truth and Vengeance
            </p>

            <Link
              href="/characters/sylara"
              className="mt-8 inline-block border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#aaa38f] transition hover:border-[#9f936b] hover:text-white"
            >
              Enter Sylara&apos;s Story
            </Link>

          </div>

          <div>

            <p className="text-lg leading-9 text-[#aaa39a]">
              Sylara has been bound within the Crown for centuries.
            </p>

            <p className="mt-6 leading-8 text-[#77736b]">
              She is an archfey of truth and vengeance. She does not lie, but
              her truth is fey truth—absolute, unforgiving, and often far more
              dangerous than a simple deception.
            </p>

            <p className="mt-6 leading-8 text-[#77736b]">
              Whoever wears the Crown becomes her vessel. They gain immense
              power, but surrender part of their will to her influence.
            </p>

            <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">

              <InfoTile
                title="Power"
                text="Immense power"
              />

              <InfoTile
                title="Price"
                text="Part of your will"
              />

              <InfoTile
                title="Presence"
                text="Sylara"
              />

            </div>

          </div>

        </div>

      </section>

      {/* GREY WARDEN */}
      <section className="border-y border-white/10 bg-[#0c0d0f]">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-[#8d887c]">
                The Last Gate
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#ded8ca] md:text-5xl">
                The Grey Warden
              </h2>

              <p className="mt-7 leading-8 text-[#77736b]">
                Deep inside the Dreadmoor, the Sunken Cathedral is guarded by
                an immortal knight who has watched over the Crown for ages.
              </p>

              <Link
                href="/characters/grey-warden"
                className="mt-8 inline-block border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#aaa38f] transition hover:border-[#9f936b] hover:text-white"
              >
                Meet the Warden
              </Link>

            </div>

            <div>

              <p className="font-serif text-2xl leading-9 text-[#bbb4a6]">
                “Only those who understand kingship may enter.”
              </p>

              <div className="mt-10 space-y-5">

                <Trial
                  number="I"
                  title="Combat"
                  text="Strength alone cannot claim the Crown."
                />

                <Trial
                  number="II"
                  title="Riddle"
                  text="Power without understanding is meaningless."
                />

                <Trial
                  number="III"
                  title="Moral Dilemma"
                  text="The right to rule must be tested through judgment."
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* THE FIVE PATHS */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-12">

        <div className="max-w-3xl">

          <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
            The Moment of Choice
          </p>

          <h2 className="mt-6 font-serif text-5xl text-[#ded8ca] md:text-6xl">
            Five ways forward.
          </h2>

          <p className="mt-6 leading-8 text-[#77736b]">
            When the factions arrive at the Crown&apos;s chamber, the party
            must decide what should happen to it.
          </p>

        </div>

        <div className="mt-16 space-y-4">

          <CrownChoice
            number="I"
            title="The Iron Vow"
            subtitle="Order"
            description="Give the Crown to Valerius. He becomes a holy tyrant, twisting justice into merciless crusades."
            outcome="The kingdom stabilizes through fear."
          />

          <CrownChoice
            number="II"
            title="The Coven of Rust"
            subtitle="Liberty"
            description="Destroy the Crown. Sylara is released in a cataclysmic explosion of wild magic."
            outcome="The Dreadmoor spreads, but the people are freed from monarchy."
          />

          <CrownChoice
            number="III"
            title="The Silent Exchequer"
            subtitle="Prosperity"
            description="Give the Crown to Joras. He locks it inside a lead vault and uses its magic to manipulate trade routes and futures."
            outcome="Thornmarch becomes a corporate police state."
          />

          <CrownChoice
            number="IV"
            title="Wear the Crown"
            subtitle="Power"
            description="One of the party becomes Sylara&apos;s host and gains the right to contest the throne."
            outcome="The campaign becomes a struggle for contested legitimacy."
          />

          <CrownChoice
            number="V"
            title="The Hidden Rite"
            subtitle="Sacrifice"
            description="Attempt to safely unbind Sylara through a hidden ritual requiring a rare component and a profound personal sacrifice."
            outcome="Sylara departs, the Crown becomes mundane, and Thornmarch must choose its own future."
          />

        </div>

      </section>

      {/* TRUE BINDING */}
      <section className="border-y border-white/10 bg-[#0d0e10]">

        <div className="mx-auto max-w-5xl px-6 py-32 text-center">

          <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
            The Final Revelation
          </p>

          <h2 className="mt-7 font-serif text-4xl text-[#ded8ca] md:text-6xl">
            The binding was never about a king.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736b]">
            Sylara was not trapped by a mortal ruler. She was bound by her own
            kind for daring to grant free will to mortals.
          </p>

          <div className="mx-auto mt-16 max-w-3xl border border-[#9f936b]/20 bg-[#11110f] p-10">

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#726d62]">
              The Truth
            </p>

            <p className="mt-6 font-serif text-3xl leading-relaxed text-[#c5bda9]">
              She gave mortals the one thing
              <br />
              the fey could never control.
            </p>

            <p className="mt-5 font-serif text-2xl text-[#9f936b]">
              Free will.
            </p>

          </div>

        </div>

      </section>

      {/* FOUR ENDINGS */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-12">

        <div className="mb-16">

          <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
            The End of the Crown
          </p>

          <h2 className="mt-5 font-serif text-5xl text-[#ded8ca] md:text-6xl">
            Four possible truths.
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <EndingCard
            title="Order"
            label="Enforce the Binding"
            text="Maintain the status quo. Sylara remains bound and the existing order survives."
          />

          <EndingCard
            title="Liberty"
            label="Free Her"
            text="Release Sylara and accept whatever chaos follows."
          />

          <EndingCard
            title="Power"
            label="Usurp the Binding"
            text="Trap Sylara in a new vessel and claim dominion."
          />

          <EndingCard
            title="Freedom"
            label="Dissolve the Magic"
            text="End divine fey interference in mortal affairs entirely."
          />

        </div>

      </section>

      {/* THEMATIC CORE */}
      <section className="border-y border-white/10 bg-[#0c0d0f]">

        <div className="mx-auto max-w-4xl px-6 py-36 text-center">

          <p className="text-xs uppercase tracking-[0.4em] text-[#9f936b]">
            The Question
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#e2ddd1] md:text-6xl">
            Who deserves
            <br />
            the right to rule?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736b]">
            The Crown never answers the question for you. It only gives you
            enough power to make the answer matter.
          </p>

          <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-4">

            <Theme
              title="Stability"
              text="Order"
            />

            <Theme
              title="Liberty"
              text="Freedom"
            />

            <Theme
              title="Prosperity"
              text="Control"
            />

            <Theme
              title="Self-Determination"
              text="Choice"
            />

          </div>

        </div>

      </section>

      {/* FINAL */}
      <section className="bg-[#08090b]">

        <div className="mx-auto max-w-4xl px-6 py-40 text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#9f936b]/25 text-5xl text-[#a99b68]">
            ♔
          </div>

          <h2 className="mt-10 font-serif text-4xl text-[#e3ded2] md:text-6xl">
            The Crown has returned.
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#77736b]">
            Thornmarch has waited a century for a ruler.
            <br />
            Now it must decide what kind of ruler it wants.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              href="/campaigns"
              className="bg-[#9f936b] px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#12120f] transition hover:bg-[#b6a976]"
            >
              Enter the Campaign
            </Link>

            <Link
              href="/characters/sylara"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#aaa38f] transition hover:border-[#9f936b] hover:text-white"
            >
              Meet Sylara
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

function InfoTile({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#111214] p-6 text-center">

      <p className="text-[10px] uppercase tracking-[0.25em] text-[#6c6962]">
        {title}
      </p>

      <p className="mt-2 font-serif text-lg text-[#bcb5a6]">
        {text}
      </p>

    </div>
  );
}

function Trial({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-6 border-b border-white/10 pb-5 last:border-0">

      <span className="font-serif text-3xl text-[#69665f]">
        {number}
      </span>

      <div>
        <h3 className="font-serif text-xl text-[#c9c2b4]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-7 text-[#706d66]">
          {text}
        </p>
      </div>

    </div>
  );
}

function CrownChoice({
  number,
  title,
  subtitle,
  description,
  outcome,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
}) {
  return (
    <article className="group border border-white/10 bg-[#101113] p-7 transition hover:border-[#9f936b]/40 md:p-9">

      <div className="grid gap-6 md:grid-cols-[70px_220px_1fr] md:items-start">

        <span className="font-serif text-4xl text-[#66635c]">
          {number}
        </span>

        <div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#9f936b]">
            {subtitle}
          </p>

          <h3 className="mt-2 font-serif text-2xl text-[#d5cfc1]">
            {title}
          </h3>

        </div>

        <div>

          <p className="leading-8 text-[#77736b]">
            {description}
          </p>

          <p className="mt-4 text-sm text-[#aaa38f]">
            <span className="uppercase tracking-[0.15em] text-[#65625b]">
              Outcome:
            </span>{" "}
            {outcome}
          </p>

        </div>

      </div>

    </article>
  );
}

function EndingCard({
  title,
  label,
  text,
}: {
  title: string;
  label: string;
  text: string;
}) {
  return (
    <article className="border border-white/10 bg-[#101113] p-9">

      <div className="flex items-start justify-between gap-6">

        <h3 className="font-serif text-3xl text-[#d5cfc1]">
          {title}
        </h3>

        <span className="text-[10px] uppercase tracking-[0.2em] text-[#9f936b]">
          {label}
        </span>

      </div>

      <p className="mt-6 leading-8 text-[#77736b]">
        {text}
      </p>

    </article>
  );
}

function Theme({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-[#111214] p-7">

      <p className="text-[10px] uppercase tracking-[0.25em] text-[#68655e]">
        {title}
      </p>

      <p className="mt-2 font-serif text-xl text-[#aaa38f]">
        {text}
      </p>

    </div>
  );
}