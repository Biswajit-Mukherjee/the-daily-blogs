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
      router.replace("/blogs?page=1");
    }
  }, [router, searchValue, searchQuery]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ This will be type-safe and validated.

    // Update page query params
    if (!values.query.trim()) {
      router.push("/blogs?page=1");
    } else {
      router.push(`/blogs?query=${values.query}&page=1`);
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
              <FormLabel className="sr-only">Search blogs</FormLabel>
              <FormControl>
                <Input
                  className="bg-background w-full min-h-12 flex-1 rounded-sm focus-visible:ring-2 ring-offset-2"
                  placeholder="Search blogs, keywords and more"
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
          className="min-h-12 rounded-sm"
          disabled={!searchValue}
          aria-disabled={!searchValue}
        >
          <SearchIcon size={24} />
        </Button>
      </form>
    </Form>
  );
};

export default SearchBox;
