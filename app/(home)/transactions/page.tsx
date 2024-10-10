"use client";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

type Transaction = {
  amount: number;
  description: string;
};

export default function Transactions() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalBalance, setTotalBalance] = useState(0);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  // Fonction pour ajouter une transaction
  const handleAddTransaction = async (amount: number, category: string) => {
    try {
      const response = await fetch("/api/transactions", {
        method: "POST",
        body: JSON.stringify({ amount, category }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (response.ok) {
        setTransactions((prev) => [...prev, data]);
      } else {
        console.error("Erreur:", data.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de la transaction:", error);
    }
  };

  // Calculer le solde total en fonction des transactions
  useEffect(() => {
    const total = transactions.reduce(
      (acc: number, transaction: Transaction) => acc + transaction.amount,
      0
    );
    setTotalBalance(total);
  }, [transactions]);

  return (
    <main className="">
      <p className="text-black text-2xl mb-10">Gérer vos transactions</p>
      <div className="pt-4">
        <Card className="w-1/2">
          <CardHeader>
            <p className="text-lg">Veuillez inscrire un montant</p>
          </CardHeader>
          <CardContent>
            <button
              className="px-4 py-2 text-sm bg-emerald-600 text-white rounded-md"
              onClick={handleOpenModal}
            >
              Ajouter une transaction
            </button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Solde total: {totalBalance}€</h3>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.amount}€ - {transaction.description}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
