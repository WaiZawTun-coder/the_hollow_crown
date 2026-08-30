import Link from "next/link";

export default function ValeriusPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-180 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(126,103,65,0.18),transparent_35%),linear-gradient(115deg,#0b0b0d_20%,#171513_65%,#0b0b0d)]" />

        {/* Atmospheric glow */}
        <div className="absolute right-[10%] top-[10%] h-125 w-125 rounded-full bg-[#8d754f]/10 blur-[150px]" />

        <div className="relative mx-auto flex min-h-180 max-w-7xl items-center px-6 py-24 lg:px-12">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* CHARACTER INTRO */}
            <div>
              <Link
                href="/characters"
                className="text-xs uppercase tracking-[0.3em] text-[#716b62] transition hover:text-[#b09a77]"
              >
                ← Characters
              </Link>

              <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#9f8965]">
                The Iron Vow · Faction Leader
              </p>

              <h1 className="mt-6 font-serif text-6xl tracking-tight text-[#eee7da] md:text-8xl">
                Lord-Commander
                <br />
                <span className="text-[#a99576]">Valerius</span>
              </h1>

              <div className="mt-8 h-px w-24 bg-[#9f8965]" />

              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#b9b2a5]">
                The Iron Commander
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#858078]">
                A grim and honorable paladin who believes that Thornmarch can
                only be restored through order and a legitimate ruler.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/factions"
                  className="border border-white/15 px-6 py-3 text-sm uppercase tracking-widest text-[#aaa195] transition hover:border-[#9f8965] hover:text-white"
                >
                  Iron Vow
                </Link>

                <Link
                  href="/campaigns"
                  className="bg-[#a99576] px-6 py-3 text-sm uppercase tracking-widest text-[#14120f] transition hover:bg-[#c0ab89]"
                >
                  The Campaign
                </Link>
              </div>
            </div>

            {/* PORTRAIT */}
            <div className="relative mx-auto w-full max-w-105">
              <div className="aspect-3/4 overflow-hidden border border-white/10 bg-[#171719]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4b4438_0%,#24221f_35%,#111113_75%)]" />

                <div className="relative flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#9f8965]/30 text-6xl opacity-60">
                      ⚔
                    </div>

                    <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#746e65]">
                      Character Portrait
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-5 -left-5 border border-[#9f8965]/30 bg-[#111112] px-6 py-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#716b62]">
                  Allegiance
                </p>

                <p className="mt-1 font-serif text-xl text-[#d8cbb6]">
                  The Iron Vow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHARACTER PROFILE */}
      <section className="border-b border-white/10 bg-[#101012]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          <ProfileStat label="Role" value="Faction Leader" />
          <ProfileStat label="Class" value="Paladin" />
          <ProfileStat label="Faction" value="Iron Vow" />
          <ProfileStat label="Ideal" value="Order" />
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
          The Iron Vow
        </p>

        <blockquote className="mt-8 font-serif text-4xl leading-tight text-[#ded6c8] md:text-6xl">
          “Kingdoms cannot survive if every soldier decides
          <br className="hidden md:block" />
          that for themselves.”
        </blockquote>

        <p className="mx-auto mt-9 max-w-2xl leading-8 text-[#77736d]">
          Valerius believes that Thornmarch&apos;s greatest weakness is not a
          lack of strength, but a lack of legitimate authority. To him, order is
          necessary for the kingdom to survive.
        </p>
      </section>

      {/* BELIEF */}
      <section className="border-y border-white/10 bg-[#0e0e10]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
                His Belief
              </p>

              <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-5xl">
                Order before freedom
              </h2>

              <p className="mt-8 text-lg leading-9 text-[#aaa196]">
                The Iron Vow believes that only a true heir can restore order to
                Thornmarch.
              </p>

              <p className="mt-6 leading-8 text-[#77736d]">
                For Valerius, the return of the Hollow Crown represents an
                opportunity to restore legitimate rule to a kingdom that has
                spent a century without a monarch.
              </p>

              <p className="mt-6 leading-8 text-[#77736d]">
                His conviction is powerful—but the same conviction could turn
                into something far more dangerous if justice becomes
                indistinguishable from obedience.
              </p>
            </div>

            {/* Ideology panel */}
            <div className="border border-white/10 bg-[#111113] p-8 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#6f6a63]">
                The Iron Vow
              </p>

              <div className="mt-8 space-y-7">
                <BeliefRow
                  title="Order"
                  text="A kingdom cannot survive without authority."
                />

                <BeliefRow
                  title="Legitimacy"
                  text="The throne should belong to a true heir."
                />

                <BeliefRow
                  title="Duty"
                  text="Soldiers must obey—even when obedience becomes difficult."
                />

                <BeliefRow
                  title="Stability"
                  text="Thornmarch needs a ruler capable of restoring peace."
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
            <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
              A Complicated Respect
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-5xl">
              Valerius & Caelan
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#aaa196]">
              The Iron Vow remembers Caelan.
            </p>

            <p className="mt-6 leading-8 text-[#77736d]">
              Lord-Commander Valerius knew Caelan&apos;s former commander and
              believes Caelan made a terrible mistake at Greyhaven.
            </p>

            <p className="mt-6 leading-8 text-[#77736d]">
              But he also respects the courage behind Caelan&apos;s decision.
            </p>

            <div className="mt-10 border-l border-[#9f8965]/40 pl-7">
              <p className="font-serif text-xl italic leading-8 text-[#b4a384]">
                “You disobeyed an order. Perhaps the order deserved to be
                disobeyed.”
              </p>

              <p className="mt-4 font-serif text-xl italic leading-8 text-[#b4a384]">
                “But kingdoms cannot survive if every soldier decides that for
                themselves.”
              </p>
            </div>

            <p className="mt-8 leading-8 text-[#77736d]">
              Valerius offers Caelan a path back into service. Whether that
              offer is redemption, manipulation, or both is left for Caelan to
              decide.
            </p>
          </div>
        </div>
      </section>

      {/* THE CROWN */}
      <section className="border-y border-white/10 bg-[#101012]">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
            The Crown
          </p>

          <h2 className="mt-5 font-serif text-4xl text-[#ddd5c7] md:text-6xl">
            When justice becomes tyranny
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736d]">
            If the party gives the Hollow Crown to the Iron Vow, Valerius puts
            it on and becomes a holy tyrant. Sylara&apos;s influence twists his
            sense of justice into merciless crusades.
          </p>

          <div className="mx-auto mt-14 max-w-xl border border-[#9f8965]/25 bg-[#0d0d0f] p-9">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#716b62]">
              Possible Future
            </p>

            <h3 className="mt-5 font-serif text-3xl text-[#cbbda4]">
              The Holy Tyrant
            </h3>

            <p className="mt-5 text-sm leading-8 text-[#77736d]">
              The kingdom stabilizes through fear. Justice becomes absolute.
              Dissent becomes rebellion. And the man who believed in order
              becomes the very thing he once claimed to prevent.
            </p>
          </div>
        </div>
      </section>

      {/* MORAL CONFLICT */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <ConflictCard
            title="His Strength"
            text="Discipline, conviction, courage, and an unwavering belief in duty."
          />

          <ConflictCard
            title="His Blind Spot"
            text="The belief that authority must be obeyed can make justice dependent on whoever holds power."
          />

          <ConflictCard
            title="His Fear"
            text="A Thornmarch without legitimate authority collapsing into permanent disorder."
          />
        </div>
      </section>

      {/* FINAL QUESTION */}
      <section className="border-t border-white/10 bg-[#0e0e10]">
        <div className="mx-auto max-w-4xl px-6 py-32 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9f8965]">
            The Question
          </p>

          <h2 className="mt-8 font-serif text-4xl leading-tight text-[#e0d8cb] md:text-6xl">
            What happens when a good man
            <br />
            is given absolute power?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-[#77736d]">
            Valerius is not simply an enemy. He represents the seductive
            argument that sometimes people must surrender freedom to preserve
            order.
          </p>

          <div className="mt-12">
            <Link
              href="/characters"
              className="inline-block border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#a7a097] transition hover:border-[#9f8965] hover:text-white"
            >
              ← Back to Characters
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
      <p className="text-[10px] uppercase tracking-[0.3em] text-[#9f8965]">
        {title}
      </p>

      <p className="mt-5 leading-8 text-[#77736d]">{text}</p>
    </article>
  );
}
