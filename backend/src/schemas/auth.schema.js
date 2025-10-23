import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().nonempty({
    message: "Username is required",
  }),
  email: z
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .nonempty({
      message: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});

export const loginSchema = z.object({
  email: z
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
    
  password: z
    .string()
    .nonempty({
      message: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    }),
});
