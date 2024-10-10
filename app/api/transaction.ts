import { db } from "@/lib/db"; // Vérifie que ce chemin est correct
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession({ req }); // Change ici

  if (!session) {
    return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
  }

  const { amount, description } = await req.json(); // Utilise await req.json()

  try {
    const transaction = await db.transaction.create({
      data: {
        amount: parseFloat(amount),
        description: description.trim(),
        userId: session.user.id as string,
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
