import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Budgets() {
  return (
    <main className="">
      <p className="text-black text-lg">Bienvenu dans votre Budget</p>
    </main>
  );
}
