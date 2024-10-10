"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Transactions() {
  return (
    <main className="">
      <p className="text-black text-xl">Gérer vos transactions</p>
      <div className="pt-4">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md"
          // onClick={}
        >
          Ajouter une transaction
        </button>
      </div>
    </main>
  );
}
