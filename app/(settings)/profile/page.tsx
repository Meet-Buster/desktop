"use client";

import SettingsLinks from "@/components/SettingsLinks";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserStore } from "@/stores/useUserStore";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function Profile() {
  const { user } = useUserStore();

  const [userData, setUserData] = useState(user);
  const [openDialog, setOpenDialog] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState("");

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [],
      "image/jpg": [],
      "image/jpeg": [],
    },
  });

  useEffect(() => {
    setUserData(user);
  }, [user]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setAvatarSrc(URL.createObjectURL(acceptedFiles[0]));
      setOpenDialog(true);
    }
  }, [acceptedFiles]);

  function changeUsername() {
    toast.info("This should change your username account.");
  }

  function changeEmail() {
    toast.info("This should change your email account.");
  }

  function changePassword() {
    toast.info("This should change your password account.");
  }

  function changeAvatar() {
    toast.info("This should change your account picture.");
  }

  function deleteAccount() {
    toast.info("oh sh*t your account has been deleted 😢.");
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Dialog open={openDialog} onOpenChange={() => setOpenDialog(!openDialog)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Avatar</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <Image
            src={avatarSrc}
            alt="your avatar"
            width={300}
            height={300}
            className="m-auto object-cover w-[320px] h-[320px] rounded-full"
          />
          <DialogFooter className="flex">
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={() => {
                changeAvatar();
                setOpenDialog(false);
              }}
            >
              Upload it 🚀
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 py-4 md:gap-8 md:py-10">
        <div className="mx-auto grid w-full items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <SettingsLinks />
          <div className="grid gap-6">
            <h3 className="text-3xl">User Information</h3>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Upload your picture</CardTitle>
                <CardDescription>
                  Let others see your smiling face 🙂.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <section className="container border border-dashed rounded min-h-80 h-full flex items-center justify-center">
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <p className="text-muted-foreground">
                        Upload your picture (.png, .jpg, .jpeg) only
                      </p>
                    </div>
                  </section>
                  <Image
                    // TODO: This should be user Image
                    src={avatarSrc}
                    alt="current account avatar"
                    width={300}
                    height={300}
                    className="m-auto object-cover h-80 rounded"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Change your username</CardTitle>
                <CardDescription>Change your looking name.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        placeholder="Max"
                        value={userData?.name}
                        // onChange={(e) =>
                        //   setUserData({ ...userData, name: e.target.value })
                        // }
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={() => changeUsername()}>Change it ✨</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Change your email</CardTitle>
                <CardDescription>Change your looking email.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="m@gmail.com"
                        value={userData?.email}
                        // onChange={(e) =>
                        //   setUserData({ ...userData, email: e.target.value })
                        // }
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={() => changeEmail()}>Change it ✨</Button>
              </CardFooter>
            </Card>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Change your password</CardTitle>
                <CardDescription>
                  Feeling unsafe? just do it, just change it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="username">Old Password</Label>
                      <Input
                        id="password"
                        type="password"
                        // onChange={(e) =>
                        //   setUserData({ ...userData, name: e.target.value })
                        // }
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="username">New Password</Label>
                      <Input
                        id="password"
                        type="password"
                        // onChange={(e) =>
                        //   setUserData({ ...userData, name: e.target.value })
                        // }
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="username">Confirm Password</Label>
                      <Input
                        id="password"
                        type="password"
                        // onChange={(e) =>
                        //   setUserData({ ...userData, name: e.target.value })
                        // }
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={() => changePassword()}>Change it ✨</Button>
              </CardFooter>
            </Card>
            <h3 className="text-3xl">Danger Zone</h3>
            <AlertDialog>
              <Card className="w-full border-destructive">
                <CardHeader>
                  <CardTitle>Delete your account</CardTitle>
                  <CardDescription>
                    Remove your account completely from our database.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end">
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete</Button>
                  </AlertDialogTrigger>
                </CardFooter>
              </Card>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => deleteAccount()}>
                    Delete it permanently 💀
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </main>
    </div>
  );
}
