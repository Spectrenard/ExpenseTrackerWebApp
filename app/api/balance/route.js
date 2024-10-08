import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const { balance } = await req.json();

    const filePath = path.join(process.cwd(), "data", "data.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // Mettre à jour le solde
    data[0].currentBalance = balance;

    // Écriture dans le fichier
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return new Response(JSON.stringify({ message: "Solde mis à jour" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Erreur:", error);
    return new Response(JSON.stringify({ message: "Erreur serveur" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
