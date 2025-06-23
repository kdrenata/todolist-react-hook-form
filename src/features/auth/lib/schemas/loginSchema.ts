import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {message: 'Invalid email or password'}),
  password: z.string(),
  rememberMe: z.boolean(),
});

export type LoginInputs = z.infer<typeof loginSchema>