// app/layout.tsx
import { Sidebar } from "@/components/dashboard";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <main className="flex-1 mt-10">{children}</main>{" "}
          {/* Rend le contenu enfant ici */}
        </div>
      </body>
    </html>
  );
}
