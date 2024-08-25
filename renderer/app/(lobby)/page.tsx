"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-8 max-w-[700px] items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center leading-10">
          Meet <span className="text-primary">Buster</span>, Meet our amazing
          One-To-One meeting app
        </h1>
        <div className="flex gap-2">
          <Button
            onClick={() =>
              toast.info("This should make a new meeting session.")
            }
          >
            Create new session
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Join Meeting</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Join Meeting</DialogTitle>
                <DialogDescription>
                  Join your one-to-one meeting forever 🔥
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-2 items-start">
                <Label htmlFor="meeting-serial-id" className="text-right">
                  Meeting Serial ID
                </Label>
                <Input
                  id="meeting-serial-id"
                  placeholder="XXX-XXX-XXX"
                  className="col-span-3"
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={() =>
                    toast.info("This should join a new meeting session.")
                  }
                >
                  Enter Meet 👉
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}
