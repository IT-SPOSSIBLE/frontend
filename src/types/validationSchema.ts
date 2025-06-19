// validationSchema.ts
import { z } from "zod";

export const userRegistrationSchema = z
  .object({
    first_name: z.string().min(1, "Jina la kwanza linahitajika"),
    middle_name: z.string().min(1, "Jina la kati linahitajika"),
    last_name: z.string().min(1, "Jina la mwisho linahitajika"),
    phone_number: z.string().min(10, "Namba ya simu si sahihi"),
    email: z.string().email("Barua pepe si sahihi"),
    password: z.string().min(6, "Neno la siri linapaswa kuwa angalau herufi 6"),
    confirmPassword: z.string().min(1, "Tafadhali rudia neno la siri"),
    role: z.enum(["buyer", "seller"], {
      errorMap: () => ({ message: "Chagua aina ya mtumiaji" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Neno la siri halifanani",
    path: ["confirmPassword"], 
  });
