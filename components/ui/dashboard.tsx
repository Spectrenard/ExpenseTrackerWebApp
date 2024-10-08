import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-gray-950 text-white">
      <aside className="hidden bg-gray-900 rounded-br-lg rounded-tr-lg md:block">
        <div className="flex h-full flex-col gap-4 p-4">
          <div className="flex items-center border-b pb-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <Package2 className="h-8 w-8" />
              <span>Expense Track</span>
            </Link>
          </div>
          <nav className="flex-1">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-gray-700"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/budgets"
                  className="flex items-center gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-gray-700"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Budgets
                </Link>
              </li>
              <li>
                <Link
                  href="/transactions"
                  className="flex items-center gap-3 rounded-lg bg-gray-700 p-3"
                >
                  <Package className="h-5 w-5" />
                  Transactions
                </Link>
              </li>
              <li>
                <Link
                  href="/abonnements"
                  className="flex items-center gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-gray-700"
                >
                  <Users className="h-5 w-5" />
                  Paiements récurrents
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between h-16 bg-gray-900 px-4 shadow-md">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden text-white"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-950">
              <nav className="flex flex-col gap-2 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:bg-gray-700"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/budgets"
                  className="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:bg-gray-700"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Budgets
                </Link>
                <Link
                  href="/transactions"
                  className="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:bg-gray-700"
                >
                  <Package className="h-5 w-5" />
                  Transactions
                </Link>
                <Link
                  href="/abonnements"
                  className="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 hover:bg-gray-700"
                >
                  <Users className="h-5 w-5" />
                  Paiements récurrents
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
