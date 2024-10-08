"use client";
import { useState } from "react";

export default function Balance() {
  const [balance, setBalance] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleBalanceChange = (e: any) => {
    setBalance(e.target.value);
  };

  const handleSubmit = async () => {
    if (!balance) {
      setIsValid(false);
      return;
    }
    setIsValid(true);

    // Envoi du solde au backend via une requête POST
    try {
      const response = await fetch("/api/balance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ balance }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Solde mis à jour avec succès!");
      } else {
        alert("Erreur: " + data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du solde:", error);
    }
  };

  return (
    <div className="border-solid border-2 border-sky-500 p-4">
      <h1 className="text-xl">Votre solde actuel</h1>
      <input
        type="number"
        value={balance}
        onChange={handleBalanceChange}
        placeholder="Exemple : 1000€"
        className="border border-gray-300 p-2 rounded mt-2"
      />
      <button
        onClick={handleSubmit}
        className="border border-gray-300 p-2 rounded mt-2"
      >
        Valider
      </button>
      {!isValid && (
        <span className="text-red-500">
          Veuillez insérer votre solde actuel
        </span>
      )}
    </div>
  );
}
