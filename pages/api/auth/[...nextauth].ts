import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GithubProvider from "next-auth/providers/github";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
  throw new Error("Missing GITHUB_ID or GITHUB_SECRET");
}

const authConfig = {
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
  ],

  adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions;

export default NextAuth(authConfig);
