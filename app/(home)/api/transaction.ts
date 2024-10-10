// pages/api/transactions.js
import { db } from "@/lib/db"; // Assure-toi que ce chemin est correct
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ message: "Non autorisé" });
    }

    const { amount, description } = req.body;

    try {
      const transaction = await db.transaction.create({
        data: {
          amount: parseFloat(amount),
          description: description.trim(),
          userId: session.user.id as string,
        },
      });
      return res.status(200).json(transaction);
    } catch (error) {
      console.error("Erreur lors de la création de la transaction: ", error);
      return res.status(500).json({ message: "Erreur lors de l'ajout" });
    }
  } else {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }
}
