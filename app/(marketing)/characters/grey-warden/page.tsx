import Link from "next/link";

export default function GreyWardenPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-190 overflow-hidden border-b border-white/10">
        {/* Ancient cathedral atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_38%,rgba(102,105,99,0.18),transparent_30%),linear-gradient(120deg,#08090a_15%,#171817_55%,#090a0b)]" />

        <div className="absolute right-[8%] top-[12%] h-140 w-140 rounded-full bg-[#89877b]/10 blur-[180px]" />

        {/* Stone-like vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,#090a0b_100%)]" />

        <div className="relative mx-auto flex min-h-190 max-w-7xl items-center px-6 py-24 lg:px-12">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* INTRO */}
            <div>
              <Link
                href="/characters"
                className="text-xs uppercase tracking-[0.3em] text-[#6d6d67] transition hover:text-[#aaa89d]"
              >
                ← Characters
              </Link>

              <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#929188]">
                Sunken Cathedral · Eternal Guardian
              </p>

              <h1 className="mt-6 font-serif text-6xl tracking-tight text-[#eee9dd] md:text-8xl">
                Grey
                <br />
                <span className="text-[#aaa89d]">Warden</span>
              </h1>

              <div className="mt-8 h-px w-24 bg-[#8b897f]" />

              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#b7b3a8]">
                The Keeper of the Crown
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#807d76]">
                An immortal knight who has guarded the Sunken Cathedral for
                ages, standing between the mortal world and the Hollow Crown.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/lore"
                  className="border border-white/15 px-6 py-3 text-sm uppercase tracking-widest text-[#aaa89d] transition hover:border-[#8b897f] hover:text-white"
                >
                  Sunken Cathedral
                </Link>

                <Link
                  href="/campaigns"
                  className="bg-[#8b897f] px-6 py-3 text-sm uppercase tracking-widest text-[#121312] transition hover:bg-[#aaa89d]"
                >
                  The Hollow Crown
                </Link>
              </div>
            </div>

            {/* PORTRAIT */}
            <div className="relative mx-auto w-full max-w-105">
              <div className="aspect-3/4 overflow-hidden border border-white/10 bg-[#151616]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4b4b46_0%,#282925_30%,#111212_70%,#08090a_100%)]" />

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
                  <span className="border border-[#aaa89d]/25 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#aaa89d] backdrop-blur">
                    Immortal Knight
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 border border-[#8b897f]/30 bg-[#101111] px-6 py-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#65645f]">
                  Purpose
                </p>

                <p className="mt-1 font-serif text-xl text-[#d0cbc0]">
                  To Judge
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="border-b border-white/10 bg-[#0e0f10]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          <ProfileStat label="Nature" value="Immortal Knight" />

          <ProfileStat label="Domain" value="Sunken Cathedral" />

          <ProfileStat label="Role" value="Guardian" />

          <ProfileStat label="Purpose" value="Judge Kingship" />
        </div>
      </section>

      {/* THE SENTENCE */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#8b897f]">
          The Warden&apos;s Law
        </p>

        <blockquote className="mt-8 font-serif text-4xl leading-tight text-[#ded9cd] md:text-6xl">
          “Only those who
          <br />
          understand kingship may enter.”
        </blockquote>

        <p className="mx-auto mt-9 max-w-2xl leading-8 text-[#73716b]">
          The Warden does not simply guard a door. He determines whether those
          who seek the Crown understand what it means to possess the right to
          rule.
        </p>
      </section>

      {/* THE CATHEDRAL */}
      <section className="border-y border-white/10 bg-[#0c0d0e]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#8b897f]">
                The Dreadmoor
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#ddd8cc] md:text-5xl">
                The last gate
              </h2>

              <p className="mt-8 text-lg leading-9 text-[#a5a198]">
                Deep inside the mist-shrouded Dreadmoor lies the Sunken
                Cathedral.
              </p>

              <p className="mt-6 leading-8 text-[#73716b]">
                The Crown rests beyond its ancient halls, protected not by an
                army, but by the Grey Warden.
              </p>

              <p className="mt-6 leading-8 text-[#73716b]">
                Those who reach him cannot simply fight their way through. They
                must prove themselves worthy of entering the Crown&apos;s
                chamber.
              </p>
            </div>

            <div className="border border-white/10 bg-[#111212] p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#686761]">
                Guardian&apos;s Rule
              </p>

              <div className="mt-8">
                <div className="border-b border-white/10 pb-7">
                  <span className="font-serif text-5xl text-[#77766e]">I</span>

                  <h3 className="mt-4 font-serif text-2xl text-[#d1ccc0]">
                    Prove yourself
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#706e68]">
                    Strength alone is not enough.
                  </p>
                </div>

                <div className="border-b border-white/10 py-7">
                  <span className="font-serif text-5xl text-[#77766e]">II</span>

                  <h3 className="mt-4 font-serif text-2xl text-[#d1ccc0]">
                    Understand kingship
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#706e68]">
                    Those who seek power must understand its responsibility.
                  </p>
                </div>

                <div className="pt-7">
                  <span className="font-serif text-5xl text-[#77766e]">
                    III
                  </span>

                  <h3 className="mt-4 font-serif text-2xl text-[#d1ccc0]">
                    Enter
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#706e68]">
                    Only those who pass may reach the Crown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE TRIALS */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8b897f]">
            The Warden&apos;s Trial
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#ddd8cc] md:text-5xl">
            Three tests of kingship
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#73716b]">
            The Warden tests the party in three different ways. Each trial
            examines something that simple strength cannot provide.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <TrialCard
            number="I"
            title="Combat"
            subtitle="Strength"
            text="A physical trial that tests whether the party can survive what stands between them and the Crown."
          />

          <TrialCard
            number="II"
            title="Riddle"
            subtitle="Wisdom"
            text="A test of understanding rather than force, requiring the party to think beyond the obvious answer."
          />

          <TrialCard
            number="III"
            title="Moral Dilemma"
            subtitle="Judgment"
            text="A choice that asks the party what kingship truly means when power and morality collide."
          />
        </div>
      </section>

      {/* WHAT HE GUARDS */}
      <section className="border-y border-white/10 bg-[#0c0d0e]">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8b897f]">
            Beyond the Gate
          </p>

          <h2 className="mt-6 font-serif text-4xl text-[#ddd8cc] md:text-6xl">
            The Crown is not empty.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#73716b]">
            Passing the Warden reveals the truth hidden within the Sunken
            Cathedral.
          </p>

          <div className="mx-auto mt-14 border border-[#8b897f]/20 bg-[#101112] p-9">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#686761]">
              What Lies Within
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#c8c3b7]">Sylara</h3>

            <p className="mt-5 text-sm leading-8 text-[#706e68]">
              An archfey of truth and vengeance is bound inside the Hollow Crown
              by an ancient pact.
            </p>

            <Link
              href="/characters/sylara"
              className="mt-7 inline-block border border-white/15 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#aaa69c] transition hover:border-[#8b897f] hover:text-white"
            >
              Meet Sylara
            </Link>
          </div>
        </div>
      </section>

      {/* KINGSHP */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#8b897f]">
              The Question
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#ddd8cc] md:text-5xl">
              What does a king owe his people?
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#a5a198]">
              The Grey Warden&apos;s trials are ultimately about kingship.
            </p>

            <p className="mt-6 leading-8 text-[#73716b]">
              The campaign&apos;s factions each have their own answer.
            </p>

            <div className="mt-10 space-y-5">
              <AnswerRow faction="Iron Vow" answer="Order" />

              <AnswerRow faction="Coven of Rust" answer="Freedom" />

              <AnswerRow faction="Silent Exchequer" answer="Prosperity" />

              <AnswerRow faction="The Warden" answer="Understanding" />
            </div>
          </div>
        </div>
      </section>

      {/* MORAL CONFLICT */}
      <section className="border-y border-white/10 bg-[#0c0d0e]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-[#8b897f]">
              The Immortal
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#ddd8cc] md:text-5xl">
              The Grey Warden&apos;s mystery
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ConflictCard
              title="Why does he remain?"
              text="The Warden has guarded the Cathedral long enough to become part of the mystery surrounding the Crown."
            />

            <ConflictCard
              title="What has he witnessed?"
              text="An immortal guardian has had centuries to watch rulers rise, fall, and make the same mistakes."
            />

            <ConflictCard
              title="What will he allow?"
              text="The Warden's purpose is not to claim the Crown, but to determine whether those who seek it understand kingship."
            />
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="border-t border-white/10 bg-[#08090a]">
        <div className="mx-auto max-w-4xl px-6 py-36 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8b897f]">
            The Final Gate
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#e1ddd2] md:text-6xl">
            The Crown does not ask
            <br />
            who is strongest.
          </h2>

          <p className="mt-3 font-serif text-4xl text-[#aaa69c] md:text-6xl">
            The Warden does.
          </p>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#73716b]">
            Before the party can decide who should rule Thornmarch, they must
            first prove that they understand what ruling actually means.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/lore"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#9d9a91] transition hover:border-[#8b897f] hover:text-white"
            >
              Explore the Lore
            </Link>

            <Link
              href="/characters"
              className="border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#9d9a91] transition hover:border-[#8b897f] hover:text-white"
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
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#64635e]">
        {label}
      </p>

      <p className="mt-2 font-serif text-lg text-[#c4bfb3]">{value}</p>
    </div>
  );
}

function TrialCard({
  number,
  title,
  subtitle,
  text,
}: {
  number: string;
  title: string;
  subtitle: string;
  text: string;
}) {
  return (
    <article className="group border border-white/10 bg-[#101112] p-8 transition hover:border-[#8b897f]/40">
      <div className="flex items-start justify-between">
        <span className="font-serif text-5xl text-[#62625d]">{number}</span>

        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8b897f]">
          {subtitle}
        </span>
      </div>

      <h3 className="mt-8 font-serif text-2xl text-[#d4cfc3]">{title}</h3>

      <p className="mt-4 leading-8 text-[#706e68]">{text}</p>
    </article>
  );
}

function AnswerRow({ faction, answer }: { faction: string; answer: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-5">
      <span className="text-sm text-[#77746e]">{faction}</span>

      <span className="font-serif text-xl text-[#aaa69c]">{answer}</span>
    </div>
  );
}

function ConflictCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="border border-white/10 bg-[#101112] p-8">
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b897f]">
        {title}
      </p>

      <p className="mt-5 leading-8 text-[#73716b]">{text}</p>
    </article>
  );
}
