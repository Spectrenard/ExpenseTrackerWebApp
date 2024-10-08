"use client";
import { useState, useEffect } from "react";

export default function Balance() {
  const [balance, setBalance] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isBalanceSet, setIsBalanceSet] = useState(false); // État pour vérifier si le solde est défini

  // Charger le solde depuis le localStorage au démarrage
  useEffect(() => {
    const storedBalance = localStorage.getItem("balance");
    if (storedBalance) {
      setBalance(storedBalance);
      setIsBalanceSet(true); // Si un solde est trouvé, le marquer comme défini
    }
  }, []);

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
        console.log("Solde mis à jour avec succès!");
        setIsBalanceSet(true); // Met à jour l'état pour indiquer que le solde est défini
        localStorage.setItem("balance", balance); // Enregistre le solde dans le localStorage
      } else {
        alert("Erreur: " + data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du solde:", error);
    }
  };

  return (
    <div className="bg-gray-950 text-white rounded-xl shadow-lg p-6 max-w-sm mx-auto">
      <h1 className="text-sm text-gray-400  mb-4">Votre solde actuel</h1>
      {!isBalanceSet ? ( // Vérifie si le solde est défini
        <>
          <input
            type="number"
            value={balance}
            onChange={handleBalanceChange}
            placeholder="Exemple : 1000€"
            className="border border-gray-600 p-2 rounded mt-2 w-full"
          />
          <button
            onClick={handleSubmit}
            className="bg-sky-500 text-white border border-sky-600 p-2 rounded mt-2 w-full hover:bg-sky-400 transition-colors"
          >
            Valider
          </button>
        </>
      ) : (
        <span className="text-4xl font-medium mt-4">€{balance}</span> // Affiche le solde
      )}
      {!isValid && (
        <span className="text-red-500 mt-2">
          Veuillez insérer votre solde actuel
        </span>
      )}
    </div>
  );
}
