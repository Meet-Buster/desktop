"use server";

import { cookies } from "next/headers";
import { RegisterData, LoginData } from "@/types";

export const registerAccount = async (registerData: RegisterData) => {
  const response = await fetch("https://api.example.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });

  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  const data = await response.json();
  return data;
};

export const loginAccount = async (loginData: LoginData) => {
  const response = await fetch("https://api.example.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }

  const data = await response.json();
  return data;
};

export const getCookie = (cookie: string): string | undefined => {
  return cookies().get(cookie)?.value;
};
