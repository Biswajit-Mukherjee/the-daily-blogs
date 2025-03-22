import * as React from "react";
import { type SanityTypes } from "@/@types";
import { Label } from "@/components/ui/label";
import BlogCard from "@/components/shared/blog-card";

type Props = Readonly<{ query: string; blogs: SanityTypes.Blog[] }>;

const FilteredBlogs: React.FC<Props> = ({ query = "", blogs }) => {
  return (
    <div className="w-full max-w-5xl mt-6 mx-auto mb-20">
      {query && (
        <Label className="block text-xl leading-normal font-medium text-center text-muted-foreground">
          Results for{" "}
          <span className="text-foreground font-semibold">{`"${query}"`}</span>
        </Label>
      )}

      <div className="flex flex-wrap gap-4 w-full mt-10">
        {blogs.map((blog: SanityTypes.Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default FilteredBlogs;
