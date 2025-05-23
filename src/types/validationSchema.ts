// src/validation/userSchema.ts
import { z } from "zod";

export const userRegistrationSchema = z.object({
  first_name: z.string().min(1, "Jina la kwanza ni lazima"),
  middle_name: z.string().optional(),
  last_name: z.string().min(1, "Jina la mwisho ni lazima"),
  phone_number: z
    .string()
    .min(10, "Namba ya simu si sahihi")
    .max(15, "Namba ya simu ni ndefu mno"),
  email: z.string().email("Barua pepe si sahihi"),
  password: z.string().min(6, "Neno la siri lazima liwe angalau herufi 6"),
  role: z.enum(["buyer", "seller"]),
});
