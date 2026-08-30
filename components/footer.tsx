import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-[#A88B4A]/10 bg-[#080807] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <Link href="/" className="font-serif text-sm tracking-[0.25em]">
            THE HOLLOW CROWN
          </Link>

          <p className="mt-2 text-xs text-[#8E887D]">
            A kingdom without a rightful king.
          </p>
        </div>

        <div className="flex justify-center gap-8 text-[9px] uppercase tracking-[0.25em] text-[#8E887D] md:justify-end">
          <Link href="/world" className="hover:text-[#D8D0C0]">
            World
          </Link>
          <Link href="/lore" className="hover:text-[#D8D0C0]">
            Lore
          </Link>
          <Link href="/factions" className="hover:text-[#D8D0C0]">
            Factions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
