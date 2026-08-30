import Link from "next/link";

const acts = [
  {
    number: "I",
    title: "The Kingless Land",
    level: "LEVEL 3 → 4",
    location: "THORNMARCH",
    description:
      "The party arrives in a kingdom that has survived a century without a monarch. Monsters threaten the borders, tax collectors prey upon the people, and rumors spread that the Hollow Crown has resurfaced.",
    events: [
      "Arrival in Thornmarch",
      "Clash between the three factions",
      "Recovery of the map fragment",
      "Meeting the faction envoys",
      "First major decision",
    ],
    decision: "Who receives the map?",
  },
  {
    number: "II",
    title: "The Dreadmoor",
    level: "LEVEL 4 → 6",
    location: "DREADMOOR",
    description:
      "Following the map, the party enters a mist-shrouded swamp filled with twisted fey, undead, and whispers that tempt those who listen. Deep within the mire stands the Sunken Cathedral.",
    events: [
      "Journey through the Dreadmoor",
      "Encounters with fey and undead",
      "The three trials of the Grey Warden",
      "Discovery of Sylara",
      "The factions arrive at the Crown",
    ],
    decision: "What becomes of the Crown?",
  },
  {
    number: "III",
    title: "Crownfall",
    level: "LEVEL 6 → 7",
    location: "THORNMARCH",
    description:
      "The consequences of the party's choice spread across the kingdom. Alliances fracture, rebellions rise, and the future of Thornmarch hangs between order, liberty, prosperity, and freedom.",
    events: [
      "Political upheaval",
      "Faction conflict",
      "Resistance or consolidation",
      "The truth of the binding",
      "Final choice",
    ],
    decision: "What should become of Sylara?",
  },
];

const choices = [
  {
    number: "01",
    title: "The Iron Vow",
    result:
      "Valerius wears the Crown and becomes a holy tyrant. Thornmarch stabilizes through fear as Sylara twists his justice into merciless crusades.",
  },
  {
    number: "02",
    title: "The Coven of Rust",
    result:
      "The Crown is shattered. Sylara is released in a cataclysm of wild magic, while the Dreadmoor spreads into the kingdom.",
  },
  {
    number: "03",
    title: "The Silent Exchequer",
    result:
      "Joras seals the Crown inside a lead vault and exploits its magic. Thornmarch becomes a prosperous but tightly controlled plutocracy.",
  },
  {
    number: "04",
    title: "Wear the Crown",
    result:
      "A party member becomes Sylara's vessel. The campaign becomes a struggle for contested legitimacy as every faction turns against the new host.",
  },
  {
    number: "05",
    title: "Break the Binding",
    result:
      "The party attempts a hidden rite requiring a rare component and profound personal sacrifice. If successful, Sylara departs and the Crown becomes mundane.",
  },
];

const endings = [
  {
    title: "Order",
    subtitle: "Enforce the Binding",
    text: "The existing order survives. Sylara remains bound and the status quo is preserved.",
  },
  {
    title: "Liberty",
    subtitle: "Free Sylara",
    text: "The binding is broken and Sylara is freed, whatever chaos her freedom may bring.",
  },
  {
    title: "Power",
    subtitle: "Usurp the Binding",
    text: "The binding is claimed for another purpose, trapping Sylara in a new vessel and establishing dominion.",
  },
  {
    title: "Freedom",
    subtitle: "Dissolve the Magic",
    text: "The magic is destroyed entirely, ending divine fey interference in mortal affairs.",
  },
];

export default function CampaignsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,139,74,0.07),transparent_45%)]" />

        <div className="absolute left-[8%] top-32 h-56 w-px bg-linear-to-b from-transparent via-[#A88B4A]/25 to-transparent" />

        <div className="absolute right-[8%] top-32 h-56 w-px bg-linear-to-b from-transparent via-[#A88B4A]/25 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.6em] text-[#A88B4A]">
            A Campaign of Political Intrigue
          </p>

          <h1 className="font-serif text-6xl uppercase leading-[0.9] tracking-[0.08em] sm:text-7xl md:text-9xl">
            The
            <br />
            <span className="text-[#A88B4A]">Campaign</span>
          </h1>

          <div className="mx-auto my-10 h-px w-24 bg-[#A88B4A]/50" />

          <p className="mx-auto max-w-2xl font-serif text-lg leading-8 text-[#8E887D] md:text-xl">
            One kingdom.
            <br />
            Three factions.
            <br />
            Five paths forward.
          </p>

          <div className="mt-12 flex justify-center gap-12 text-[9px] uppercase tracking-[0.3em] text-[#8E887D]/60">
            <span>LEVEL 3</span>
            <span>—</span>
            <span>LEVEL 7</span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#8E887D]/40">
            The story begins
          </span>
        </div>
      </section>

      {/* CAMPAIGN OVERVIEW */}
      <section className="border-y border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            Campaign Overview
          </p>

          <h2 className="font-serif text-4xl uppercase leading-tight md:text-6xl">
            A kingdom without a king.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-sm leading-8 text-[#8E887D]">
            The Hollow Crown is a dark-fantasy campaign built around political
            intrigue, moral ambiguity, and consequential choices.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#8E887D]">
            An ancient crown has resurfaced in Thornmarch. Three factions race
            to claim it, while the party is caught between their competing
            visions for the kingdom.
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-serif text-lg italic text-[#D8D0C0]/60">
            But the Crown is not a treasure.
            <br />
            It is a prison.
          </p>
        </div>
      </section>

      {/* CAMPAIGN STRUCTURE */}
      <section className="bg-[#0B0A09] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              The Story
            </p>

            <h2 className="font-serif text-5xl uppercase md:text-7xl">
              Three Acts
            </h2>
          </div>

          <div className="space-y-px bg-[#A88B4A]/10">
            {acts.map((act) => (
              <article
                key={act.number}
                className="group bg-[#0B0A09] p-8 transition hover:bg-[#11100E] md:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-[150px_1fr_1fr]">
                  {/* Act number */}
                  <div>
                    <span className="font-serif text-7xl text-[#A88B4A]/20">
                      {act.number}
                    </span>

                    <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-[#A88B4A]">
                      {act.level}
                    </p>
                  </div>

                  {/* Main */}
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#A88B4A]">
                      {act.location}
                    </p>

                    <h3 className="mt-4 font-serif text-4xl uppercase">
                      {act.title}
                    </h3>

                    <div className="my-7 h-px w-10 bg-[#A88B4A]/40 transition-all duration-500 group-hover:w-20" />

                    <p className="max-w-xl text-sm leading-8 text-[#8E887D]">
                      {act.description}
                    </p>
                  </div>

                  {/* Events */}
                  <div className="border-l border-[#A88B4A]/10 pl-8">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#8E887D]/60">
                      Key Events
                    </p>

                    <ol className="mt-6 space-y-4">
                      {act.events.map((event, index) => (
                        <li
                          key={event}
                          className="flex gap-4 text-xs text-[#8E887D]"
                        >
                          <span className="font-serif text-[#A88B4A]/50">
                            0{index + 1}
                          </span>
                          <span>{event}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="mt-8 border-t border-[#A88B4A]/10 pt-6">
                      <p className="text-[8px] uppercase tracking-[0.3em] text-[#A88B4A]">
                        Major Decision
                      </p>

                      <p className="mt-2 font-serif text-lg text-[#D8D0C0]/80">
                        {act.decision}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DECISION TREE */}
      <section className="border-y border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              The Turning Point
            </p>

            <h2 className="font-serif text-5xl uppercase md:text-6xl">
              One Crown.
              <br />
              Many Futures.
            </h2>
          </div>

          <div className="relative">
            {/* Center */}
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-[#A88B4A]/30 bg-[#11100E]">
              <div className="text-center">
                <div className="font-serif text-4xl text-[#A88B4A]/60">♔</div>

                <p className="mt-2 text-[7px] uppercase tracking-[0.25em] text-[#A88B4A]">
                  The Crown
                </p>
              </div>
            </div>

            {/* Connecting line */}
            <div className="mx-auto h-16 w-px bg-[#A88B4A]/20" />

            {/* Choices */}
            <div className="grid gap-px bg-[#A88B4A]/10 md:grid-cols-5">
              {choices.map((choice) => (
                <div
                  key={choice.number}
                  className="group bg-[#0F0E0C] p-7 text-center transition hover:bg-[#151310]"
                >
                  <span className="font-serif text-3xl text-[#A88B4A]/30">
                    {choice.number}
                  </span>

                  <h3 className="mt-6 font-serif text-lg uppercase">
                    {choice.title}
                  </h3>

                  <div className="mx-auto my-5 h-px w-8 bg-[#A88B4A]/40 transition-all group-hover:w-14" />

                  <p className="text-xs leading-7 text-[#8E887D]">
                    {choice.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DREADMOOR */}
      <section className="relative overflow-hidden bg-[#0B0A09] py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,37,37,0.08),transparent_50%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            The Journey
          </p>

          <h2 className="font-serif text-5xl uppercase md:text-7xl">
            Into the
            <br />
            <span className="text-[#A88B4A]">Dreadmoor</span>
          </h2>

          <div className="mx-auto my-10 h-px w-20 bg-[#A88B4A]/50" />

          <p className="mx-auto max-w-2xl text-sm leading-8 text-[#8E887D]">
            The road to the Crown leads through a swamp filled with twisted fey,
            undead, and mists that whisper temptations to those who enter.
          </p>

          <div className="mx-auto mt-16 grid max-w-3xl gap-px bg-[#A88B4A]/10 sm:grid-cols-3">
            <div className="bg-[#0B0A09] p-8">
              <p className="font-serif text-3xl text-[#A88B4A]/60">I</p>
              <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-[#8E887D]">
                The Swamp
              </p>
            </div>

            <div className="bg-[#0B0A09] p-8">
              <p className="font-serif text-3xl text-[#A88B4A]/60">II</p>
              <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-[#8E887D]">
                The Warden
              </p>
            </div>

            <div className="bg-[#0B0A09] p-8">
              <p className="font-serif text-3xl text-[#A88B4A]/60">III</p>
              <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-[#8E887D]">
                The Cathedral
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GREY WARDEN */}
      <section className="border-y border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr] md:items-center">
            <div className="flex aspect-square items-center justify-center border border-[#A88B4A]/10 bg-[#11100E]">
              <div className="text-center">
                <div className="font-serif text-8xl text-[#A88B4A]/15">⚔</div>

                <p className="mt-8 font-serif text-xl uppercase tracking-[0.2em]">
                  The Grey Warden
                </p>

                <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-[#8E887D]/50">
                  Immortal Guardian
                </p>
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
                Guardian of the Cathedral
              </p>

              <h2 className="font-serif text-5xl uppercase md:text-6xl">
                The Three Trials
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-8 text-[#8E887D]">
                The Sunken Cathedral is guarded by the Grey Warden, an immortal
                knight who tests those seeking the Crown.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="border border-[#A88B4A]/10 p-6">
                  <p className="font-serif text-2xl text-[#A88B4A]">I</p>
                  <p className="mt-4 text-[9px] uppercase tracking-[0.25em]">
                    Combat
                  </p>
                </div>

                <div className="border border-[#A88B4A]/10 p-6">
                  <p className="font-serif text-2xl text-[#A88B4A]">II</p>
                  <p className="mt-4 text-[9px] uppercase tracking-[0.25em]">
                    Riddle
                  </p>
                </div>

                <div className="border border-[#A88B4A]/10 p-6">
                  <p className="font-serif text-2xl text-[#A88B4A]">III</p>
                  <p className="mt-4 text-[9px] uppercase tracking-[0.25em]">
                    Moral Dilemma
                  </p>
                </div>
              </div>

              <p className="mt-10 border-l border-[#A88B4A]/40 pl-6 font-serif text-lg italic text-[#D8D0C0]/70">
                “Only those who understand kingship may enter.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL ENDINGS */}
      <section className="bg-[#0B0A09] py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
              The Final Choice
            </p>

            <h2 className="font-serif text-5xl uppercase md:text-7xl">
              Four Endings
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#8E887D]">
              Every path eventually leads to the truth of the ancient binding.
            </p>
          </div>

          <div className="grid gap-px bg-[#A88B4A]/10 md:grid-cols-4">
            {endings.map((ending, index) => (
              <article
                key={ending.title}
                className="group bg-[#0B0A09] p-10 text-center transition hover:bg-[#151310]"
              >
                <span className="font-serif text-4xl text-[#A88B4A]/25">
                  0{index + 1}
                </span>

                <h3 className="mt-10 font-serif text-3xl uppercase">
                  {ending.title}
                </h3>

                <div className="mx-auto my-6 h-px w-10 bg-[#A88B4A]/40 transition-all group-hover:w-20" />

                <p className="text-[9px] uppercase tracking-[0.25em] text-[#A88B4A]">
                  {ending.subtitle}
                </p>

                <p className="mt-6 text-xs leading-7 text-[#8E887D]">
                  {ending.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN THEMES */}
      <section className="border-y border-[#A88B4A]/10 bg-[#0F0E0C] py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            What This Campaign Asks
          </p>

          <h2 className="font-serif text-5xl uppercase md:text-6xl">
            What matters most?
          </h2>

          <div className="mx-auto mt-16 grid gap-px bg-[#A88B4A]/10 sm:grid-cols-2">
            <div className="bg-[#0F0E0C] p-10">
              <p className="font-serif text-3xl">Stability</p>
              <p className="mt-4 text-xs leading-7 text-[#8E887D]">
                Is a controlled kingdom better than a broken one?
              </p>
            </div>

            <div className="bg-[#0F0E0C] p-10">
              <p className="font-serif text-3xl">Liberty</p>
              <p className="mt-4 text-xs leading-7 text-[#8E887D]">
                Is freedom worth the chaos it may create?
              </p>
            </div>

            <div className="bg-[#0F0E0C] p-10">
              <p className="font-serif text-3xl">Prosperity</p>
              <p className="mt-4 text-xs leading-7 text-[#8E887D]">
                How much freedom would you trade for security and wealth?
              </p>
            </div>

            <div className="bg-[#0F0E0C] p-10">
              <p className="font-serif text-3xl">Self-Determination</p>
              <p className="mt-4 text-xs leading-7 text-[#8E887D]">
                Should mortals decide their own future without fey interference?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0B0A09] py-40 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,139,74,0.07),transparent_45%)]" />

        <div className="relative mx-auto max-w-3xl px-6">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#A88B4A]">
            Your Story Begins Here
          </p>

          <h2 className="font-serif text-5xl uppercase leading-tight md:text-7xl">
            The throne
            <br />
            <span className="text-[#A88B4A]">is waiting.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#8E887D]">
            Enter Thornmarch. Choose your allies. Face the Crown. And decide
            what kind of future deserves to survive.
          </p>

          <Link
            href="/play"
            className="mt-12 inline-block border border-[#A88B4A] bg-[#A88B4A] px-10 py-4 text-[10px] uppercase tracking-[0.3em] text-[#0B0A09] transition hover:bg-transparent hover:text-[#A88B4A]"
          >
            Begin Campaign
          </Link>
        </div>
      </section>
    </>
  );
}
