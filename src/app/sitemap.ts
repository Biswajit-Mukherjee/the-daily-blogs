import { MetadataRoute } from "next";
import { getMostRecentBlogs } from "@/lib/utils";
import { type SanityTypes } from "@/@types";
import { SITE } from "@/lib/data";
import dayjs from "dayjs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getMostRecentBlogs();
  const blog = blogs?.map((blog: SanityTypes.Blog) => {
    return {
      url: `${SITE.url}/blog/${blog.slug}`,
      lastModified: dayjs(blog?.createdAt).format("YYYY-MM-DD"),
    };
  });

  return [
    {
      url: SITE.url,
      lastModified: dayjs(new Date()).format("YYYY-MM-DD"),
    },
    ...blog,
  ];
}
