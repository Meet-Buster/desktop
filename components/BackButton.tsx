import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function BackButton() {
  return (
    <Button size="icon" variant="secondary" className="mt-8" asChild>
      <Link href="/">
        <ArrowLeftIcon />
      </Link>
    </Button>
  );
}
