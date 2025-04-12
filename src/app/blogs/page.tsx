import * as React from "react";
import { redirect } from "next/navigation";
import { type SanityTypes } from "@/@types";
import { getBlogsByQuery } from "@/lib/utils";
import SearchBox from "@/components/ui/search-box";
import PageNav from "@/components/ui/page-nav";
import Loader from "@/components/shared/loader";
import FilteredBlogs from "@/components/shared/filtered-blogs";
import BlogsNotFound from "@/components/shared/blogs-not-found";

type Props = Readonly<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams?: Promise<any>;
}>;

const Blogs: React.FC<Props> = async ({ searchParams }) => {
  const params = await searchParams;
  const query = params ? params?.query : "";
  const page = params ? params?.page : "1";
  const startIndex = params ? params?.startIndex : "0";

  if (!params.page) {
    redirect("/blogs?page=1");
  }

  const filteredBlogs: SanityTypes.Blog[] = await getBlogsByQuery(
    query,
    startIndex
  );

  return (
    <div className="w-full min-h-screen bg-muted/50 dark:bg-muted grid gap-10 px-4 py-10">
      <div className="w-full max-w-[440px] mx-auto" data-uia="search">
        <SearchBox searchQuery={query} />
      </div>

      <PageNav
        page={page}
        query={query}
        startIndex={startIndex}
        prevDisabled={page === "1"}
        nextDisabled={filteredBlogs.length === 0}
      />

      <div data-uia="blogs-container">
        {filteredBlogs.length ? (
          <React.Suspense fallback={<Loader />}>
            <FilteredBlogs query={query} blogs={filteredBlogs} />
          </React.Suspense>
        ) : (
          !query && (
            <div className="w-full min-h-[240px] max-w-xs m-auto text-muted-foreground text-center">
              {"No more blogs to display :("}
            </div>
          )
        )}

        {query && (
          <React.Suspense fallback={<Loader />}>
            <BlogsNotFound query={query} />
          </React.Suspense>
        )}
      </div>
    </div>
  );
};

export default Blogs;
