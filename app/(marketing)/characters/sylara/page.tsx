import Link from "next/link";

export default function SylaraPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-190 overflow-hidden border-b border-white/10">
        {/* Otherworldly background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(83,103,104,0.28),transparent_32%),radial-gradient(circle_at_35%_70%,rgba(78,65,91,0.18),transparent_35%),linear-gradient(120deg,#08090c_15%,#101519_55%,#08090c)]" />

        <div className="absolute right-[5%] top-[10%] h-150 w-150 rounded-full bg-[#728889]/10 blur-[180px]" />

        {/* Mist */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-[#08090c] to-transparent" />

        <div className="relative mx-auto flex min-h-190 max-w-7xl items-center px-6 py-24 lg:px-12">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* INTRO */}
            <div>
              <Link
                href="/characters"
                className="text-xs uppercase tracking-[0.3em] text-[#666e6e] transition hover:text-[#a7b9b8]"
              >
                ← Characters
              </Link>

              <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#829594]">
                The Dreadmoor · Bound Archfey
              </p>

              <h1 className="mt-6 font-serif text-7xl tracking-tight text-[#eeeae0] md:text-9xl">
                Sylara
              </h1>

              <div className="mt-8 h-px w-24 bg-[#829594]" />

              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#b8c0bb]">
                The Bound Archfey
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#7e8986]">
                An archfey of truth and vengeance, imprisoned within the Hollow
                Crown by an ancient pact. She does not lie. Her truth is simply
                more absolute than mortals are prepared to endure.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/lore"
                  className="border border-white/15 px-6 py-3 text-sm uppercase tracking-widest text-[#9ba9a7] transition hover:border-[#829594] hover:text-white"
                >
                  Explore the Lore
                </Link>

                <Link
                  href="/campaigns"
                  className="bg-[#829594] px-6 py-3 text-sm uppercase tracking-widest text-[#101413] transition hover:bg-[#a2b4b1]"
                >
                  The Hollow Crown
                </Link>
              </div>
            </div>

            {/* PORTRAIT */}
            <div className="relative mx-auto w-full max-w-105">
              <div className="aspect-3/4 overflow-hidden border border-white/10 bg-[#101417]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#485c5b_0%,#263334_30%,#101417_68%,#08090c_100%)]" />

                {/* Fey symbol */}
                <div className="relative flex h-full items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-16 rounded-full border border-[#829594]/10" />
                    <div className="absolute -inset-10 rounded-full border border-[#829594]/10" />

                    <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#829594]/30 text-6xl text-[#a6bab7] opacity-70">
                      ✦
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6">
                  <span className="border border-[#829594]/30 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#a3b6b3] backdrop-blur">
                    Archfey
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 border border-[#829594]/30 bg-[#0c0f11] px-6 py-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#646d6b]">
                  Status
                </p>

                <p className="mt-1 font-serif text-xl text-[#c0cbc6]">Bound</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="border-b border-white/10 bg-[#0d1012]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          <ProfileStat label="Nature" value="Archfey" />

          <ProfileStat label="Domain" value="Truth" />

          <ProfileStat label="Other Domain" value="Vengeance" />

          <ProfileStat label="Status" value="Bound" />
        </div>
      </section>

      {/* THE TRUTH */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#829594]">
          Fey Truth
        </p>

        <blockquote className="mt-8 font-serif text-4xl leading-tight text-[#dce2dd] md:text-6xl">
          “The Crown never lies.
          <br />
          It only tells the truth.”
        </blockquote>

        <p className="mx-auto mt-9 max-w-2xl leading-8 text-[#707a78]">
          Sylara&apos;s truth is not gentle, merciful, or necessarily useful. It
          is absolute. It strips away excuses, intentions, and convenient
          versions of history.
        </p>
      </section>

      {/* THE BINDING */}
      <section className="border-y border-white/10 bg-[#0c0f11]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#829594]">
                The Ancient Pact
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#dce1db] md:text-5xl">
                A prisoner inside a crown
              </h2>

              <p className="mt-8 text-lg leading-9 text-[#a1aaa6]">
                The Hollow Crown is not an empty relic.
              </p>

              <p className="mt-6 leading-8 text-[#707a78]">
                Sylara has been bound inside it for centuries, waiting for
                someone to decide what should become of her.
              </p>

              <p className="mt-6 leading-8 text-[#707a78]">
                Whoever wears the Crown becomes her vessel, gaining immense
                power while surrendering part of their will to her influence.
              </p>
            </div>

            <div className="border border-white/10 bg-[#101416] p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#68716f]">
                The Crown
              </p>

              <div className="mt-8 space-y-7">
                <BindingRow
                  title="Power"
                  text="The wearer gains immense power."
                />

                <BindingRow
                  title="Influence"
                  text="Sylara's presence begins to shape the vessel."
                />

                <BindingRow
                  title="Will"
                  text="The wearer surrenders part of their own will."
                />

                <BindingRow
                  title="Truth"
                  text="Sylara cannot simply lie her way into control."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN MYSTERY */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#829594]">
          The Hidden Truth
        </p>

        <h2 className="mt-6 font-serif text-4xl text-[#dce1db] md:text-6xl">
          Why was Sylara bound?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#707a78]">
          The truth behind the binding is not what the people of Thornmarch
          believe.
        </p>

        <div className="mx-auto mt-14 max-w-xl border border-[#829594]/25 bg-[#0e1214] p-9">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#68716f]">
            The Revelation
          </p>

          <h3 className="mt-5 font-serif text-3xl text-[#b8c7c2]">
            She gave mortals free will.
          </h3>

          <p className="mt-5 text-sm leading-8 text-[#707a78]">
            Sylara was not trapped by a mortal king. She was bound by her own
            kind for daring to grant free will to mortals.
          </p>
        </div>
      </section>

      {/* THE THREE CHOICES */}
      <section className="border-y border-white/10 bg-[#0c0f11]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-[#829594]">
              The Crown&apos;s Fate
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#dce1db] md:text-5xl">
              What will you do with Sylara?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ChoiceCard
              number="I"
              title="Bind Her"
              label="Order"
              text="Maintain the binding and preserve the existing order."
            />

            <ChoiceCard
              number="II"
              title="Free Her"
              label="Liberty"
              text="Release Sylara and accept whatever chaos follows."
            />

            <ChoiceCard
              number="III"
              title="Usurp the Binding"
              label="Power"
              text="Trap Sylara in a new vessel and claim dominion."
            />

            <ChoiceCard
              number="IV"
              title="Dissolve the Magic"
              label="Freedom"
              text="End divine fey interference in mortal affairs entirely."
            />
          </div>
        </div>
      </section>

      {/* SHATTERED CROWN */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#829594]">
          If the Crown is Destroyed
        </p>

        <h2 className="mt-6 font-serif text-4xl text-[#dce1db] md:text-6xl">
          The Queen of the Dreadmoor
        </h2>

        <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#707a78]">
          Shattering the Crown releases Sylara in a cataclysmic explosion of
          wild magic. She is free—but no longer bound.
        </p>

        <div className="mt-14 border border-[#829594]/20 bg-[#0d1113] p-9">
          <div className="grid gap-8 md:grid-cols-3">
            <Outcome title="Sylara" text="The archfey is finally free." />

            <Outcome
              title="Dreadmoor"
              text="The Dreadmoor spreads into the kingdom."
            />

            <Outcome
              title="Thornmarch"
              text="The people are freed from monarchy forever."
            />
          </div>
        </div>
      </section>

      {/* MORAL CONFLICT */}
      <section className="border-y border-white/10 bg-[#0c0f11]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-[#829594]">
              The Archfey
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#dce1db] md:text-5xl">
              Sylara&apos;s contradiction
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ConflictCard
              title="Her Gift"
              text="She gave mortals free will, challenging the authority of her own kind."
            />

            <ConflictCard
              title="Her Nature"
              text="Truth and vengeance make Sylara incapable of seeing morality in the simple terms mortals prefer."
            />

            <ConflictCard
              title="Her Danger"
              text="Freedom does not make her harmless. An unbound archfey can reshape the land itself."
            />
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="border-t border-white/10 bg-[#08090c]">
        <div className="mx-auto max-w-4xl px-6 py-36 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#829594]">
            The Final Truth
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#e1e6df] md:text-6xl">
            Freedom is not the same
            <br />
            as mercy.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#707a78]">
            Sylara offers liberation from the Crown—but liberation always
            carries a price.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/lore"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#9ba5a2] transition hover:border-[#829594] hover:text-white"
            >
              Explore the Lore
            </Link>

            <Link
              href="/characters"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#9ba5a2] transition hover:border-[#829594] hover:text-white"
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
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#646b69]">
        {label}
      </p>

      <p className="mt-2 font-serif text-lg text-[#c1c9c4]">{value}</p>
    </div>
  );
}

function BindingRow({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
      <h3 className="font-serif text-xl text-[#cdd5d0]">{title}</h3>

      <p className="mt-2 text-sm leading-7 text-[#707a78]">{text}</p>
    </div>
  );
}

function ChoiceCard({
  number,
  title,
  label,
  text,
}: {
  number: string;
  title: string;
  label: string;
  text: string;
}) {
  return (
    <article className="group border border-white/10 bg-[#101416] p-8 transition hover:border-[#829594]/40">
      <div className="flex items-start justify-between">
        <span className="font-serif text-4xl text-[#536260]">{number}</span>

        <span className="text-[10px] uppercase tracking-[0.25em] text-[#829594]">
          {label}
        </span>
      </div>

      <h3 className="mt-8 font-serif text-2xl text-[#d4dcd6]">{title}</h3>

      <p className="mt-4 leading-8 text-[#707a78]">{text}</p>
    </article>
  );
}

function Outcome({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="font-serif text-xl text-[#c7d0ca]">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-[#707a78]">{text}</p>
    </div>
  );
}

function ConflictCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="border border-white/10 bg-[#101416] p-8">
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#829594]">
        {title}
      </p>

      <p className="mt-5 leading-8 text-[#707a78]">{text}</p>
    </article>
  );
}
