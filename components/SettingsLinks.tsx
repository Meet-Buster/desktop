"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
      name: "settings",
      href: "/settings",
      active: "/settings" === pathname,
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
          className={`font-semibold capitalize ${
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
