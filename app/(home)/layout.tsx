import { Poppins } from "next/font/google";
import { Sidebar } from "@/components/dashboard"; // Assure-toi que ce composant existe
import { cn } from "@/lib/utils";

// Utilisation de Google Font Poppins
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={cn(font.className)}>
      <body className="flex h-screen">
        {/* Sidebar permanente */}
        <aside className="w-72 text-white">
          <Sidebar />
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 bg-gray-100 p-6">
          {children} {/* Ici, s'affiche le contenu des pages */}
        </main>
      </body>
    </html>
  );
}
