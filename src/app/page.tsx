import * as React from "react";
import { NextPage } from "next";
import { getMostRecentBlogs } from "@/lib/utils";
import { type SanityTypes } from "@/@types";
import BlogCard from "@/components/shared/blog-card";
import Jumbotron from "@/components/shared/jumbotron";
import { WebSite, WithContext } from "schema-dts";
import StructuredData from "@/components/structured-data";

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
          <div className="w-full max-w-xs mx-auto mb-8 relative">
            <div className="w-fit p-2 bg-muted/50 dark:bg-muted mx-auto">
              <h2 className=" bg-inherit text-lg sm:text-xl md:text-2xl text-center font-semibold antialiased">
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
