import { z, type ZodIssue } from "zod";

export type ContactFormState = {
  success?: boolean;
  fields?: Record<string, FormDataEntryValue>;
  issues?: ZodIssue[];
};

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be atleast 2 characters")
    .max(50, "Name can't be longer than 50 characters"),
  email: z.string().trim().email("Invalid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be atleast 10 characters")
    .max(1000, "Message must be atleast 1000 characters"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
