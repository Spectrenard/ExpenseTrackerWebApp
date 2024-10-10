"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Transactions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Envoi des données vers l'API
    const response = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount, description }),
    });

    if (response.ok) {
      // Gérer le succès, par exemple, fermer la modale
      setIsModalOpen(false);
      setAmount("");
      setDescription("");
      alert("Transaction ajoutée avec succès !");
    } else {
      alert("Erreur lors de l'ajout de la transaction");
    }
  };

  return (
    <main className="">
      <p className="text-black text-xl">Gérer vos transactions</p>
      <div className="pt-4">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md"
          onClick={() => setIsModalOpen(true)}
        >
          Ajouter une transaction
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Ajouter une transaction
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm">Montant</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border rounded-md w-full p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-1 bg-gray-300 rounded-md"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-1 bg-blue-600 text-white rounded-md"
                >
                  Soumettre
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
