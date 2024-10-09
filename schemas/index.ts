import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email invalide",
  }),
  password: z.string().min(1, {
    message: "Un mot de passe est requis",
  }),
});
