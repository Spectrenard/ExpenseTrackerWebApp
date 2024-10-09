"use client";
import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={async () => {
        await signIn();
      }}
      className="btn btn-primary"
    >
      Login
    </button>
  );
};
