"use client";

import { useCurrentUser } from "@/app/features/auth/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface navLinkType {
  id: number;
  name: string;
  href: string;
}

const NAV_LINKS: navLinkType[] = [
  {
    id: 1,
    name: "world",
    href: "/world",
  },
  {
    id: 2,
    name: "lore",
    href: "/lore",
  },
  {
    id: 3,
    name: "factions",
    href: "/factions",
  },
  {
    id: 4,
    name: "campaigns",
    href: "/campaigns",
  },
  {
    id: 5,
    name: "characters",
    href: "/characters",
  },
];

const Nav = () => {
  const { data: user, isLoading } = useCurrentUser();
  const pathname = usePathname();

  useEffect(() => {
    console.log({ user })
  }, [user])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#A88B4A]/10 bg-[#0B0A09]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-sm tracking-[0.3em]">
          THE HOLLOW CROWN
        </Link>

        <div className="hidden items-center gap-10 text-[10px] uppercase tracking-[0.25em] text-[#8E887D] md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={
                "transition hover: text-[#D8D0C0]" +
                (link.href == pathname && " text-[#A88B4A]")
              }
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href={(user || isLoading) ? "/play" : "/login"}
          className="border border-[#A88B4A]/60 px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] text-[#A88B4A] transition hover:bg-[#A88B4A] hover:text-[#0B0A09]"
        >
          {(user || isLoading) ? "Play" : "Login"}
        </Link>
      </div>
    </nav >
  );
};

export default Nav;
