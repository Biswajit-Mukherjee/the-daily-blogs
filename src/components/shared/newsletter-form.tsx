"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email address." }),
});

const NewsLetterForm: React.FC = () => {
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | null>(null);

  /** Reset success message after 5s */
  React.useEffect(() => {
    setTimeout(() => {
      // Reset success message
      setMessage(null);
    }, 5000);
  }, [message]);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    setTimeout(() => {
      console.log(values);

      // Reset form values
      form.reset();

      // Reset form status
      setSubmitting(false);

      // Set success message
      setMessage("You're now subscribed to our newsletter!");
    }, 5000);
  }

  return (
    <div
      className="w-full max-w-xl mx-auto grid gap-2.5"
      data-uia="form-container"
    >
      {message && (
        <div className="w-full text-center align-middle leading-normal font-normal text-sm antialiased text-green-500 flex items-center justify-center">
          <div className="w-full flex flex-row items-center gap-1 flex-1">
            <span data-uia="icon">
              <FaCheckCircle size={20} />
            </span>
            <span data-uia="message">{message}</span>
          </div>
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full grid gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full flex flex-col flex-1">
                <FormControl>
                  <Input
                    className="bg-background w-full min-h-12 shadow-none flex-1 rounded-sm aria-invalid:border-destructive focus-visible:ring-2 ring-offset-2 text-base"
                    type="email"
                    placeholder="Email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm font-normal leading-normal antialiased" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            aria-label="newsletter-form-cta"
            className="w-full h-12 text-base leading-none font-medium text-white rounded-sm"
            aria-disabled={submitting}
            disabled={submitting}
          >
            Subscribe
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsLetterForm;
