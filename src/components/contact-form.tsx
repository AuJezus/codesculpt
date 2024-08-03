"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldPath, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { handleEmailMessageNotification } from "@/server/actions";
import { useEffect, useRef, useState } from "react";
import { type ContactFormSchema, contactFormSchema } from "@/lib/form-schemas";
import { useFormState } from "react-dom";
import { cn } from "@/lib/utils";
import { FaRegPaperPlane } from "react-icons/fa6";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(handleEmailMessageNotification, {});
  const [isPending, setIsPending] = useState(false);

  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      ...(state.fields ?? {}),
    },
  });

  useEffect(() => {
    if (state.success) return;

    state.issues?.forEach((issue) =>
      form.setError(issue.path.join(".") as FieldPath<ContactFormSchema>, {
        message: issue.message,
      }),
    );
  }, [state, form]);

  function onSubmit() {
    formAction(new FormData(formRef.current!));
  }

  useEffect(() => {
    setIsPending(false);
  }, [state, setIsPending]);

  return (
    <div className="relative">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-700",
          state.success && "opacity-100",
        )}
      >
        <h3 className="mb-4 font-secondary text-4xl font-semibold">
          Thank You!
        </h3>

        <p className="mb-10 text-muted-foreground">
          We recieved your message and will respond as soon as possible.
        </p>

        <FaRegPaperPlane className="animate-bounce text-6xl" />
      </div>

      <Form {...form}>
        <form
          method="POST"
          ref={formRef}
          action={formAction}
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "space-y-4 transition-opacity duration-700",
            state.success && "opacity-0",
          )}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your name</FormLabel>
                <FormControl>
                  <Input placeholder="Name Namington" {...field} />
                </FormControl>
                <FormDescription>
                  We&apos;d love to know your name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your email</FormLabel>
                <FormControl>
                  <Input placeholder="namington@name.com" {...field} />
                </FormControl>
                <FormDescription>
                  Drop your email here so we can stay connected!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="I need a website, ASAP!"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Pour your thoughts here! Share your idea with us. No need to
                  be formal :)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {!!state.issues && (
            <ul className="text-sm text-destructive">
              {state.issues.map((issue) => (
                <li key={issue.message}>{issue.message}</li>
              ))}
            </ul>
          )}

          <Button
            onClick={() => setIsPending(true)}
            type="submit"
            className="group gap-2"
          >
            Submit
            <span
              className={cn(
                "inline-block h-4 w-0 animate-spin rounded-full border-2 border-t-primary-foreground opacity-0 transition-all",
                isPending && "w-4 opacity-100",
              )}
            />
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
