import * as React from "react";
import Link from "next/link";
import type { Metadata, NextPage } from "next";
import { PortableText } from "next-sanity";
import { WebSite, WithContext } from "schema-dts";
import { getHomepageDetails, getMostRecentBlogs } from "@/lib/utils";
import type { SanityTypes } from "@/@types";
import BlogCard from "@/components/shared/blog-card";
import Jumbotron from "@/components/shared/jumbotron";
import StructuredData from "@/components/structured-data";
import AllBlogsButton from "@/components/shared/all-blogs-btn";
import NewsLetterForm from "@/components/shared/newsletter-form";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/lib/sanity";
import { SITE } from "@/lib/data";

/** Runtime */
export const runtime = "edge";

export const metadata: Metadata = {
  title:
    "The Daily Blogs | Your Source for Fitness, Positivity & Life Transformation",
  metadataBase: new URL(SITE.url),
  description:
    "Welcome to The Daily Blogs – explore powerful insights on fitness, lifestyle, mental health, self-transformation, well-being, and sociology. Discover content that inspires growth, positivity, and purpose.",
  keywords: [
    "fitness blog",
    "mental health",
    "lifestyle tips",
    "life transformation",
    "positive living",
    "blog",
    "well-being blog",
    "sociology articles",
    "personal growth",
    "motivation",
  ],
  robots: "index,noarchive,follow,max-image-preview:large",
  openGraph: {
    title:
      "The Daily Blogs | Your Source for Fitness, Positivity & Life Transformation",
    description:
      "Explore inspiring blog posts on fitness, lifestyle, mental wellness, positivity, and sociology. Discover daily insights for a better you.",
    images: new URL(SITE.url + "/assets/blogs-cover.webp"),
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: new URL(SITE.url),
  },
};

const Home: NextPage = async () => {
  const home: SanityTypes.Homepage = await getHomepageDetails();
  const blogs: SanityTypes.Blog[] = await getMostRecentBlogs();

  const schemaData: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Daily Blogs",
    url: "https://www.the-daily-blogs.com",
    description:
      "The Daily Blogs shares uplifting content on fitness, lifestyle, mental health, well-being, positivity, and personal transformation to inspire and empower everyday lives.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "The Daily Blogs",
      url: "https://www.the-daily-blogs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.the-daily-blogs.com/favicon.ico",
      },
    },
  };

  return (
    <>
      <StructuredData data={schemaData} />

      <main className="w-full min-h-screen bg-muted/50 dark:bg-muted grid gap-10 px-4 py-10">
        <section className="w-full mt-0 mx-auto mb-0">
          <Jumbotron title={home.title} image={urlFor(home.image).url()} />
        </section>

        <section
          data-uia="blogs-container"
          className="w-full mt-8 mx-auto mb-6"
        >
          <div className="w-full max-w-5xl text-center mt-0 mx-auto mb-16 text-foreground prose dark:prose-invert text-base leading-normal antialiased">
            <PortableText value={home.intro} />
          </div>

          <div className="w-full max-w-xs mt-0 mx-auto mb-8 relative">
            <div className="w-fit mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-nowrap antialiased">
                Most recent blogs
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 w-full max-w-5xl mx-auto">
            {blogs.length &&
              blogs.map((blog: SanityTypes.Blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
          </div>
        </section>

        <section
          data-uia="load-all-blogs"
          className="w-full max-w-5xl mx-auto my-0 flex items-center justify-center"
        >
          <AllBlogsButton />
        </section>

        <Separator className="w-full max-w-5xl mx-auto bg-muted-foreground/10 dark:bg-muted-foreground/25" />

        <section
          data-uia="newsletter"
          className="w-full max-w-5xl mt-8 mx-auto mb-16"
        >
          <h3
            aria-label="newsletter-form-title"
            className="w-full mt-0 mx-auto mb-8 align-middle text-xl sm:text-2xl md:text-3xl text-center font-bold text-nowrap antialiased"
          >
            Subscribe to our newsletter
          </h3>

          <NewsLetterForm />

          <div
            aria-label="privacy-text"
            className="w-full mt-5 text-center align-middle text-sm leading-normal font-normal antialiased text-muted-foreground"
          >
            We care about your data. Read our{" "}
            <strong className="hover:underline active:underline underline-offset-2">
              <Link href="/privacy">Privacy policy</Link>
            </strong>
            .
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
