import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col gap-3 items-center justify-center ltr">
      <div className="flex items-center">
        <h2>This page does not exist</h2>
        <span className="mx-2 font-bold">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <h1 className="font-semibold text-xl">404</h1>
      </div>
      <Link href="/auth/login">
        <Button variant="secondary" className="ml-2 w-32">
          😔 Go back
        </Button>
      </Link>
    </div>
  );
}
