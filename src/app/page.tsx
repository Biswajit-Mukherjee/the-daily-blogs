import * as React from "react";
import { Metadata, NextPage } from "next";
import { getMostRecentBlogs } from "@/lib/utils";
import { type SanityTypes } from "@/@types";
import BlogCard from "@/components/shared/blog-card";
import Jumbotron from "@/components/shared/jumbotron";
import { WebSite, WithContext } from "schema-dts";
import StructuredData from "@/components/structured-data";
import { SITE } from "@/lib/data";

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

      <div className="w-full min-h-screen bg-muted/50 dark:bg-muted grid gap-10 px-4 py-10">
        <Jumbotron />

        <div data-uia="blogs-container" className="w-full mt-10 mx-auto mb-20">
          <p className="w-full max-w-5xl text-center m-auto mb-16 text-foreground text-base leading-normal antialiased">
            Welcome to <strong>The Daily Blogs</strong> — your one-stop shop to
            explore the latest and greatest blogs on fitness, lifestyle, mental health,
            self-transformation, well-being, and sociology. Discover content
            that inspires growth, positivity, and purpose.
          </p>

          <div className="w-full max-w-xs mx-auto mb-8 relative">
            <div className="w-fit p-2 mx-auto">
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
        </div>
      </div>
    </>
  );
};

export default Home;
