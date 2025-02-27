"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const formSchema = z.object({
  query: z.string().max(60, {
    message: "Search query must not exceed 60 characters.",
  }),
});

type Props = Readonly<{ searchQuery: string }>;

const SearchBox: React.FC<Props> = ({ searchQuery }) => {
  // Initilize router instance
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { query: "" },
  });

  const { getValues } = form;

  const searchValue = getValues("query");

  // Run side-effect
  React.useEffect(() => {
    if (!searchValue.trim().length && searchQuery) {
      router.replace("/");
    }
  }, [router, searchValue, searchQuery]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    // Update page query params
    if (!values.query.trim()) {
      router.push("/");
    } else {
      router.push(`/?query=${values.query}`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="flex flex-col flex-1">
              <FormLabel className="sr-only">
                Search articles, blogs, posts
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-background w-full min-h-10 flex-1 rounded-sm focus-visible:ring-2 ring-offset-2"
                  placeholder="Search articles, blogs, posts"
                  style={{ marginTop: 0 }}
                  type="search"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          id="al"
          type="submit"
          aria-label="Search Button"
          className="min-h-10 rounded-sm"
        >
          <SearchIcon size={24} />
        </Button>
      </form>
    </Form>
  );
};

export default SearchBox;
