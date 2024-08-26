import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension";
import { User } from "@/types";

interface UserState {
  user: User | undefined;
  updateUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: undefined,
        updateUser: (user) => set(() => ({ user: user })),
      }),
      {
        name: "user-storage",
      }
    )
  )
);
