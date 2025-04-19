"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Button, LoadingButton } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Please provide your full name." })
    .max(60, {
      message: "Name must not exceed 60 characters.",
    }),
  email: z.string().email({ message: "Please provide a valid email address." }),
  subject: z
    .string()
    .min(1, { message: "Please provide a subject for your message." })
    .max(60, {
      message: "Subject must not exceed 60 characters.",
    }),
  subscriber: z.string().optional(),
  message: z.string().min(1, { message: "Message cannot be empty." }).max(60, {
    message: "Message must not exceed 60 characters.",
  }),
});

const ContactForm: React.FC = () => {
  const [submitting, setSubmitting] = React.useState<boolean>(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
      subscriber: "",
    },
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

      // ✅ Show success notification.
      toast.success("Your message has been sent!");
    }, 5000);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[540px] mx-auto grid gap-5 mt-10"
      >
        {/* Mandatory fields */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col flex-1">
              <FormLabel className="text-foreground text-base font-normal antialiased">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-background w-full min-h-12 shadow-none flex-1 aria-invalid:border-destructive rounded-sm focus-visible:ring-2 ring-offset-2 text-base"
                  placeholder="Enter your full name"
                  aria-label="name"
                  disabled={submitting}
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm font-normal leading-normal antialiased" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col flex-1">
              <FormLabel className="text-foreground text-base font-normal antialiased">
                Email address
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-background w-full min-h-12 shadow-none flex-1 rounded-sm aria-invalid:border-destructive focus-visible:ring-2 ring-offset-2 text-base"
                  placeholder="Enter your email address"
                  aria-label="email"
                  disabled={submitting}
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm font-normal leading-normal antialiased" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="flex flex-col flex-1">
              <FormLabel className="text-foreground text-base font-normal antialiased">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-background w-full min-h-12 shadow-none flex-1 rounded-sm aria-invalid:border-destructive focus-visible:ring-2 ring-offset-2 text-base"
                  placeholder="What is your message about?"
                  aria-label="subject"
                  disabled={submitting}
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-sm font-normal leading-normal antialiased" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground text-base font-normal antialiased">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  className="bg-background w-full min-h-40 shadow-none aria-invalid:border-destructive focus-visible:ring-2 ring-offset-2"
                  placeholder="Enter your message"
                  aria-label="message"
                  disabled={submitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Optional field */}
        <FormField
          control={form.control}
          name="subscriber"
          render={({ field }) => (
            <FormItem className="flex flex-col flex-1">
              <FormLabel className="text-foreground text-base font-normal antialiased">
                Are you a subscriber on my youtube? (optional)
              </FormLabel>

              <Select
                disabled={submitting}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl className="bg-background w-full min-h-12 shadow-none flex-1 rounded-sm focus-visible:ring-2 ring-offset-2 text-base">
                  <SelectTrigger className="text-sm font-normal antialiased">
                    <SelectValue
                      aria-label="default-value"
                      placeholder="Please choose an option"
                    />
                  </SelectTrigger>
                </FormControl>

                <SelectContent aria-label="subscriber-select">
                  <SelectItem
                    className="w-full my-2 text-sm font-normal antialiased cursor-pointer"
                    aria-label="option — yes"
                    value="yes"
                  >
                    Yes
                  </SelectItem>

                  <SelectItem
                    className="w-full my-2 text-sm font-normal antialiased cursor-pointer"
                    aria-label="option — no"
                    value="no"
                  >
                    No
                  </SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <div className="w-full mt-6" data-uia="btn-container">
          {!submitting && (
            <Button
              id="al"
              type="submit"
              aria-label="contact-form-cta"
              className="w-full h-14 text-xl font-normal text-white rounded-sm"
              aria-disabled={submitting}
              disabled={submitting}
            >
              Submit
            </Button>
          )}

          {submitting && <LoadingButton className="w-full h-14 rounded-sm" />}
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
