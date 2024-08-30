"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SettingsLinks() {
  const pathname = usePathname();

  const links = [
    {
      name: "profile",
      href: "/profile",
      active: "/profile" === pathname,
    },
    {
      name: "meetings",
      href: "/meetings",
      active: "/meetings" === pathname,
    },
    {
      name: "application",
      href: "/application",
      active: "/application" === pathname,
    },
    {
      name: "support",
      href: "/support",
      active: "/support" === pathname,
    },
  ];

  return (
    <nav className="grid gap-4 text-sm text-muted-foreground">
      {links.map((item, idx) => (
        <Link
          href={item.href}
          className={`font-semibold uppercase tracking-widest ${
            item.active ? "text-primary" : ""
          }`}
          key={idx}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
