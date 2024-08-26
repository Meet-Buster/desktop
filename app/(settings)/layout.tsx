import BackButton from "@/components/BackButton";
import React from "react";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-muted/40">
      <div className="container">
        <BackButton />
        {children}
      </div>
    </main>
  );
}
