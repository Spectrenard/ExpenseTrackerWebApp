import { db } from "@/lib/db"; // Vérifie bien ton chemin
import { NextResponse } from "next/server";

type TransactionRequest = {
  amount: number;
  category: string;
  userId: string; // Ajoute le userId ici
};

export async function POST(req: Request) {
  const { amount, category, userId }: TransactionRequest = await req.json();

  try {
    const transaction = await db.transaction.create({
      data: {
        amount: parseFloat(amount.toString()), // Assure-toi que 'amount' est un nombre
        description: category, // On enregistre la catégorie dans la description
        userId: userId, // Ajoute l'id de l'utilisateur ici
      },
    });

    return NextResponse.json(transaction, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la création de la transaction: ", error);
    return NextResponse.json(
      { message: "Erreur lors de l'ajout" },
      { status: 500 }
    );
  }
}
