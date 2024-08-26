"use server";

import { cookies } from "next/headers";
import { RegisterData, LoginData } from "@/types";

export const registerAccount = async (registerData: RegisterData) => {
  const name = registerData.first_name + " " + registerData.last_name;

  return fetch(`${process.env.API_URL}/auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      ...registerData,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const loginAccount = async (loginData: LoginData) => {
  return fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getLoggedUser = async () => {
  return fetch(`${process.env.API_URL}/user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "Unauthenticated.") {
        return false;
      }
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return false;
    });
};

export const logoutUser = async () => {
  const token = await getCookie("token");
  return fetch(`${process.env.API_URL}/auth/logout`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => {
      if (data.status === 204) {
        return true;
      }
      return false;
    })
    .catch((error) => {
      console.error("Error:", error);
      return false;
    });
};

export const getCookie = (cookie: string): string | undefined => {
  return cookies().get(cookie)?.value;
};
