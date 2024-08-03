"use server";

import { contactFormSchema, type ContactFormState } from "@/lib/form-schemas";
import { z } from "zod";
import { sendEmailMessageNotification } from "./queries";

export async function handleEmailMessageNotification(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  await new Promise((r) => setTimeout(r, 2000));

  const fields = Object.fromEntries(formData);
  const parsedData = contactFormSchema.safeParse(fields);

  if (!parsedData.success)
    return {
      success: false,
      fields,
      issues: parsedData.error.issues,
    };

  const responseData = await sendEmailMessageNotification(parsedData.data);

  if (!responseData.success)
    return {
      success: false,
      fields,
      issues: [
        {
          code: z.ZodIssueCode.custom,
          path: ["server"],
          message:
            "Seems like this form just broke! Please use our email instead.",
        },
      ],
    };

  return { success: true, fields };
}
