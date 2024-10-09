import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email invalide",
  }),
  password: z.string().min(1, {
    message: "Un mot de passe est requis",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email invalide",
  }),
  password: z.string().min(6, {
    message: "6 caractères minimum requis",
  }),

  name: z.string().min(1, {
    message: "Un nom est requis",
  }),
});
