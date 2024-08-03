import { env } from "@/env";

interface Web3FormsResponse {
  success: boolean;
  data: Record<string, string>;
  message: string;
}

export async function sendEmailMessageNotification(
  values: Record<string, unknown>,
) {
  const formData = new FormData();
  Object.entries(values).forEach(([key, value]) =>
    formData.append(key, String(value)),
  );

  formData.append("access_key", env.WEB3FORMS_ACCESS_KEY);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  const data = (await res.json()) as Web3FormsResponse;

  return data;
}
