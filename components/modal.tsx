"use client";
import { useState } from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (amount: number, category: string) => void;
}

export default function Modal({ isVisible, onClose, onSubmit }: ModalProps) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Loisirs");

  if (!isVisible) return null;

  const handleSubmit = () => {
    if (amount) {
      onSubmit(parseFloat(amount), category);
      onClose();
    } else {
      alert("Le montant est requis !");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Ajouter une transaction</h2>
        <div>
          <input
            type="number"
            placeholder="Montant"
            className="border p-2 mb-4 w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            className="border p-2 mb-4 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Loisirs">Loisirs</option>
            <option value="Courses">Courses</option>
            <option value="Shopping">Shopping</option>
            <option value="Autres">Autres</option>
          </select>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-md"
          onClick={handleSubmit}
        >
          Ajouter
        </button>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md ml-2"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
