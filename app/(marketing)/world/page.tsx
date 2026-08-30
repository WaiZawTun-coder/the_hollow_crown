import Link from "next/link";

const locations = [
  {
    number: "I",
    name: "Thornmarch",
    type: "The Kingless Kingdom",
    description:
      "A crumbling border kingdom that has stood without a monarch for a century. A weak Regency Council struggles to maintain order while monstrous incursions and brutal taxation wear down its people.",
  },
  {
    number: "II",
    name: "The Dreadmoor",
    type: "The Mist-Shrouded Wilds",
    description:
      "A vast and corrupted swamp where twisted fey creatures and undead roam beneath unnatural mists. The deeper one travels, the more the mist seems to whisper directly to the mind.",
  },
  {
    number: "III",
    name: "The Sunken Cathedral",
    type: "Ruins Beneath the Moor",
    description:
      "An ancient cathedral swallowed by the Dreadmoor. Somewhere within its drowned halls lies the Hollow Crown, protected by an immortal knight and trials meant to test those who would claim it.",
  },
];

const history = [
  {
    year: "100 YEARS AGO",
    title: "The Empty Throne",
    text: "Thornmarch loses its monarch. No ruler has successfully claimed the throne since.",
  },
  {
    year: "THE LONG REGENCY",
    title: "A Kingdom Without a King",
    text: "The Regency Council assumes control. Order survives, but the kingdom slowly decays.",
  },
  {
    year: "THE PRESENT",
    title: "The Crown Returns",
    text: "Rumors spread that the Hollow Crown has been found somewhere within the Dreadmoor.",
  },
];

export default function WorldPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,139,74,0.07),transparent_45%)]" />

        {/* Decorative vertical lines */}
        <div className="absolute left-[8%] top-32 h-48 w-px bg-linear-to-b from-transparent via-[#A88B4A]/30 to-transparent" />
        <div className="absolute right-[8%] top-32 h-48 w-px bg-linear-to-b from-transparent via-[#A88B4A]/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.6em] text-[#A88B4A]">
            The Chronicle of Thornmarch
          </p>

          <h1 className="font-serif text-6xl uppercase leading-[0.95] tracking-[0.08em] text-[#D8D0C0] sm:text-7xl md:text-9xl">
            The
            <br />
            <span className="text-[#A88B4A]">World</span>
          </h1>

          <div className="mx-auto my-10 h-px w-24 bg-[#A88B4A]/50" />

          <p className="mx-auto max-w-2xl font-serif text-lg leading-8 text-[#8E887D] md:text-xl">
            A kingdom without a monarch.
            <br />
            A wilderness that should not exist.
            <br />
            And a crown that was never meant to be worn.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#8E887D]/50">
            Explore the realm
          </span>
        </div>
      </section>

      {/* THORNMARCH */}
      <section className="border-t border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
                The Realm
              </p>

              <h2 className="font-serif text-5xl uppercase leading-tight md:text-6xl">
                Thornmarch
              </h2>

              <div className="my-8 h-px w-16 bg-[#A88B4A]/50" />

              <p className="max-w-lg text-sm leading-8 text-[#8E887D]">
                Thornmarch is a border kingdom caught between the memory of its
                former monarchy and an uncertain future.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-8 text-[#8E887D]">
                For a century, the realm has survived under the rule of a
                Regency Council. But the kingdom is deteriorating. Monsters
                emerge from the wilds, taxes grow harsher, and rumors of the
                Hollow Crown have begun to spread.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-8 text-[#8E887D]">
                Whoever claims the Crown may claim more than a throne.
              </p>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="relative aspect-4/3 overflow-hidden border border-[#A88B4A]/10 bg-[#151310]">
              <div className="absolute inset-6 border border-[#A88B4A]/10" />

              {/* Map grid */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(168,139,74,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(168,139,74,.15)_1px,transparent_1px)] bg-size-[45px_45px]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-5 font-serif text-7xl text-[#A88B4A]/20">
                    ✦
                  </div>

                  <p className="font-serif text-xl uppercase tracking-[0.3em] text-[#8E887D]">
                    Thornmarch
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.4em] text-[#8E887D]/40">
                    The Kingless Realm
                  </p>
                </div>
              </div>

              {/* Map labels */}
              <span className="absolute left-12 top-14 text-[8px] uppercase tracking-[0.25em] text-[#A88B4A]/50">
                Northern Reach
              </span>

              <span className="absolute bottom-14 right-12 text-[8px] uppercase tracking-[0.25em] text-[#A88B4A]/50">
                Dreadmoor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-[#0B0A09] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              Places of Consequence
            </p>

            <h2 className="font-serif text-5xl uppercase md:text-7xl">
              The Realm
            </h2>
          </div>

          <div className="grid gap-px bg-[#A88B4A]/10 md:grid-cols-3">
            {locations.map((location) => (
              <article
                key={location.name}
                className="group bg-[#0B0A09] p-10 transition hover:bg-[#151310]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#A88B4A]/40">
                    {location.number}
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#8E887D]/40">
                    Location
                  </span>
                </div>

                <div className="mt-16">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#A88B4A]">
                    {location.type}
                  </p>

                  <h3 className="mt-4 font-serif text-2xl uppercase">
                    {location.name}
                  </h3>

                  <div className="my-6 h-px w-10 bg-[#A88B4A]/40 transition-all duration-300 group-hover:w-20" />

                  <p className="text-sm leading-7 text-[#8E887D]">
                    {location.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DREADMOOR FEATURE */}
      <section className="relative overflow-hidden border-y border-[#A88B4A]/10 bg-[#11100E] py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,37,37,0.08),transparent_55%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            Beyond the Border
          </p>

          <h2 className="font-serif text-5xl uppercase leading-tight md:text-7xl">
            The Dreadmoor
          </h2>

          <div className="mx-auto my-8 h-px w-20 bg-[#A88B4A]/50" />

          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#8E887D]">
            The mists of the Dreadmoor do not merely obscure the path. They
            tempt, deceive, and remember. Twisted fey creatures and undead
            wander its waters, guarding secrets that have remained buried for
            generations.
          </p>

          <div className="mx-auto mt-16 grid max-w-3xl gap-px bg-[#A88B4A]/10 sm:grid-cols-3">
            <div className="bg-[#11100E] p-8">
              <p className="font-serif text-3xl text-[#A88B4A]">I</p>
              <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-[#8E887D]">
                Twisted Fey
              </p>
            </div>

            <div className="bg-[#11100E] p-8">
              <p className="font-serif text-3xl text-[#A88B4A]">II</p>
              <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-[#8E887D]">
                Undead
              </p>
            </div>

            <div className="bg-[#11100E] p-8">
              <p className="font-serif text-3xl text-[#A88B4A]">III</p>
              <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-[#8E887D]">
                Whispering Mists
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUNKEN CATHEDRAL */}
      <section className="bg-[#0B0A09] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="relative aspect-3/4 border border-[#A88B4A]/10 bg-[#151310]">
              <div className="absolute inset-8 border border-[#A88B4A]/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-8xl text-[#A88B4A]/15">♰</div>

                  <p className="mt-8 font-serif text-xl uppercase tracking-[0.2em] text-[#8E887D]">
                    Sunken Cathedral
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
                The Forgotten Sanctuary
              </p>

              <h2 className="font-serif text-5xl uppercase leading-tight md:text-6xl">
                Beneath
                <br />
                the mist.
              </h2>

              <div className="my-8 h-px w-16 bg-[#A88B4A]/50" />

              <p className="text-sm leading-8 text-[#8E887D]">
                Deep within the Dreadmoor stands the ruin of an ancient
                cathedral. Its halls have sunk into the swamp, but something
                still guards what lies within.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#8E887D]">
                The Grey Warden, an immortal knight, stands watch over the
                Crown. Those who seek it must first prove that they understand
                what kingship truly means.
              </p>

              <div className="mt-10 border-l border-[#A88B4A]/40 pl-6">
                <p className="font-serif text-lg italic text-[#D8D0C0]/70">
                  &quot;Only those who understand kingship may enter.&quot;
                </p>
                <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-[#8E887D]/50">
                  — The Grey Warden
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="border-t border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              A Fragmented History
            </p>

            <h2 className="font-serif text-5xl uppercase md:text-6xl">
              Before the Crown
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-[#A88B4A]/20 md:left-1/2" />

            <div className="space-y-16">
              {history.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative grid gap-8 md:grid-cols-2 ${
                    index % 2 === 0 ? "" : "md:text-right"
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "md:pr-16" : "md:order-2 md:pl-16"
                    } ml-12 md:ml-0`}
                  >
                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#A88B4A]">
                      {event.year}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl uppercase">
                      {event.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#8E887D]">
                      {event.text}
                    </p>
                  </div>

                  <div
                    className={`hidden md:block ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  />

                  <span className="absolute left-2.25 top-1 h-3 w-3 border border-[#A88B4A] bg-[#0F0E0C] md:left-[calc(50%-5px)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE CROWN */}
      <section className="relative overflow-hidden bg-[#0B0A09] py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,139,74,0.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            What Lies Beneath
          </p>

          <div className="mb-8 font-serif text-8xl text-[#A88B4A]/20">♔</div>

          <h2 className="font-serif text-5xl uppercase leading-tight md:text-7xl">
            The Crown
            <br />
            is not empty.
          </h2>

          <div className="mx-auto my-8 h-px w-20 bg-[#A88B4A]/50" />

          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#8E887D]">
            The Hollow Crown is more than a symbol of royal authority. An
            ancient power is bound within it, waiting for someone willing to
            wear it.
          </p>

          <Link
            href="/lore"
            className="mt-12 inline-block border border-[#A88B4A]/60 px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-[#A88B4A] transition hover:bg-[#A88B4A] hover:text-[#0B0A09]"
          >
            Read the Chronicle
          </Link>
        </div>
      </section>
    </>
  );
}
