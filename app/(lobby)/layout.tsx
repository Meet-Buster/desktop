import React from "react";
import UserAccount from "@/components/UserAccount";

export default function LobbyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container">
      <UserAccount />
      {children}
    </main>
  );
}
