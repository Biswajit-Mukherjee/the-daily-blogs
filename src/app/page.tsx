import * as React from "react";
import { getBlogs } from "@/lib/utils";
import { type SanityTypes } from "@/@types";
import SearchBox from "@/components/ui/search-box";
import BlogCard from "@/components/shared/blog-card";
import { Label } from "@/components/ui/label";

type Props = Readonly<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams?: Promise<any>;
}>;

const Home: React.FC<Props> = async ({ searchParams }) => {
  const params = await searchParams;
  const query = params ? params?.query : "";

  const blogs: SanityTypes.Blog[] = await getBlogs();

  const filteredBlogs: SanityTypes.Blog[] = query
    ? blogs?.filter((blog) =>
        blog.title.toLowerCase().includes(query?.toLowerCase())
      )
    : blogs;

  return (
    <div className="w-full min-h-screen bg-muted grid gap-10 px-4 py-10">
      <div className="w-full max-w-[440px] mx-auto" data-uia="search">
        <SearchBox searchQuery={query} />
      </div>

      <div
        data-uia="blogs-container"
        className="flex flex-wrap gap-4 w-full max-w-5xl mx-auto"
      >
        {filteredBlogs.length ? (
          filteredBlogs.map((blog: SanityTypes.Blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        ) : (
          <Label className="w-full text-xl leading-normal font-medium text-center">
            {"No results found :("}
          </Label>
        )}
      </div>
    </div>
  );
};

export default Home;
