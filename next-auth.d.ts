import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

// Étendre l'utilisateur pour inclure le rôle
export type ExtendedUser = DefaultSession["user"] & {
  role?: UserRole;
};

// Déclaration pour le module "next-auth"
declare module "next-auth" {
  interface User {
    role?: UserRole; // Ajoute le rôle ici
  }

  interface Session {
    user: ExtendedUser; // Utilise le type ExtendedUser ici
  }
}
