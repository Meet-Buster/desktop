import SettingsLinks from "@/components/SettingsLinks";

export default function Support() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <SettingsLinks />
          <div className="w-full flex flex-col gap-3">
            <h3>Are you really going to support?</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
