import Link from "next/link";
import { Home, ArrowUpDown, ChartPie, ReceiptEuro } from "lucide-react";
import SettingsPage from "@/app/(protected)/settings/page";

export function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white  min-h-screen flex flex-col rounded-r-2xl shadow-lg">
      <div className="flex items-center pl-7 h-16 border-b border-gray-700 rounded-t-lg">
        <h1 className="text-3xl font-extrabold tracking-tight font-caveat text-gray-200">
          SmartWallet
        </h1>
      </div>

      <nav className="flex-1 p-4 rounded-b-lg">
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 p-3 rounded-[8px] transition-all duration-200 hover:bg-gray-700 focus:bg-gray-600 "
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/budgets"
              className="flex items-center gap-2 p-3 rounded-[8px]  transition-all duration-200 hover:bg-gray-700 focus:bg-gray-600 "
            >
              <ArrowUpDown className="h-5 w-5" />
              Budgets
            </Link>
          </li>
          <li>
            <Link
              href="/transactions"
              className="flex items-center gap-2 p-3 rounded-[8px]  transition-all duration-200 hover:bg-gray-700 focus:bg-gray-600 "
            >
              <ChartPie className="h-5 w-5" />
              Transactions
            </Link>
          </li>
          <li>
            <Link
              href="/abonnements"
              className="flex items-center gap-2 p-3 rounded-[8px]  transition-all duration-200 hover:bg-gray-700 focus:bg-gray-600 "
            >
              <ReceiptEuro className="h-5 w-5" />
              Abonnements
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <SettingsPage />
      </div>
    </aside>
  );
}
