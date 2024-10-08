// app/layout.tsx
import { Dashboard } from "@/components/ui/dashboard";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Dashboard />
          <main className="flex-1">{children}</main>{" "}
          {/* Rend le contenu enfant ici */}
        </div>
      </body>
    </html>
  );
}
