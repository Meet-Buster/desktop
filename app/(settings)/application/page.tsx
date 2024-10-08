import SettingsLinks from "@/components/SettingsLinks";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function Application() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <SettingsLinks />
          <div className="grid gap-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Change theme</CardTitle>
                <CardDescription>
                  Change the colors of your application.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {[...new Array(8)].map((theme) => (
                  <div
                    className="aspect-square w-full h-full bg-muted rounded relative cursor-pointer"
                    key={theme}
                  >
                    <Checkbox className="absolute top-2 left-2" />
                    {theme}
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Open application on startup</CardTitle>
                <CardDescription>
                  This is for you if you want to start meetings whenever you
                  open your system.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {["Yes", "No"].map((theme) => (
                  <div
                    className="aspect-square w-full h-full bg-muted rounded relative cursor-pointer flex items-center justify-center"
                    key={theme}
                  >
                    <Checkbox className="absolute top-2 left-2" />
                    {theme}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
