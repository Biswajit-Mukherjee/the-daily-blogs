import * as React from "react";
import { NextPage } from "next";
import { getMostRecentBlogs } from "@/lib/utils";
import { type SanityTypes } from "@/@types";
import BlogCard from "@/components/shared/blog-card";
import Jumbotron from "@/components/shared/jumbotron";
import { Separator } from "@/components/ui/separator";

const Home: NextPage = async () => {
  const blogs: SanityTypes.Blog[] = await getMostRecentBlogs();

  return (
    <div className="w-full min-h-screen bg-muted grid gap-10 px-4 py-10">
      <Jumbotron />

      <div data-uia="blogs-container" className="w-full mt-10 mx-auto mb-20">
        <div className="w-full max-w-xs mx-auto mb-8 relative">
          <Separator className="w-full bg-muted-foreground/25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-fit p-2 bg-muted mx-auto relative z-10">
            <h2 className="text-lg sm:text-xl md:text-2xl text-center font-semibold antialiased">
              Most recent blogs
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 w-full max-w-5xl mx-auto">
          {blogs.length &&
            blogs.map((blog: SanityTypes.Blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
