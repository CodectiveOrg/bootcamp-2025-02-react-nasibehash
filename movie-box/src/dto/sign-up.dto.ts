import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string({ required_error: "Username is required." })
    .min(3, {
      message: "Username must be longer than or equal to 3 characters",
    })
    .max(16, {
      message: "Username must be shorter than or equal to 16 characters",
    }),
  password: z
    .string({ required_error: "Username is required." })
    .min(4, {
      message: "Username must be longer than or equal to 3 characters",
    })
    .max(32, {
      message: "Username must be shorter than or equal to 16 characters",
    }),
});

export type SignUpDto = z.infer<typeof signUpSchema>;
