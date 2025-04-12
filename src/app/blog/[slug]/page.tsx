/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import dayjs from "dayjs";
import { redirect } from "next/navigation";
import { CalendarIcon } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { BlogPosting, WithContext } from "schema-dts";
import { getBlog } from "@/lib/utils";
import { type SanityTypes } from "@/@types";
import { SITE } from "@/lib/data";
import { urlFor } from "@/lib/sanity";
import StructuredData from "@/components/structured-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";

type Props = Readonly<{ params: Promise<any> }>;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageParams = await params;
  const blog: SanityTypes.BlogDetails = await getBlog(pageParams?.slug ?? "");

  return {
    applicationName: SITE.name,
    creator: SITE.creator,
    metadataBase: new URL(SITE.url),
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: urlFor(blog.image).url(),
      type: "article",
      locale: "en_IN",
    },
    alternates: {
      canonical: new URL(`${SITE.url}/blog/${blog.slug}`),
    },
    keywords: blog.seo ? blog.seo.concat(blog.title) : blog.title,
    robots: "index,noarchive,follow,max-image-preview:large",
    authors: [{ name: SITE.creator }],
  };
}

const BlogDetails = async ({ params }: { params: Promise<any> }) => {
  const pageParams = await params;

  if (!pageParams) {
    redirect("/");
  }

  const blogSlug = pageParams?.slug || "";
  const blog: SanityTypes.BlogDetails = await getBlog(blogSlug);

  if (!blog) {
    redirect("/");
  }

  const schemaData: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: urlFor(blog.image).url() ?? "",
    author: {
      "@type": "Person",
      name: blog.author?.name,
      image: urlFor(blog.author?.image).url() ?? "",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE.url,
    },
    keywords: blog.seo ? blog.seo.concat(blog.title) : blog.title,
    datePublished: dayjs(blog.createdAt).format("MMMM D, YYYY"),
    publisher: {
      "@type": "Person",
      name: blog.author?.name,
    },
  };

  return (
    <>
      <StructuredData data={schemaData} />

      <div className="w-full h-full bg-muted/50 flex p-4 items-center justify-center">
        <div className="w-full max-w-5xl min-h-screen mx-auto select-none">
          <div
            data-uia="blog-date"
            className="w-full mt-4 flex items-center gap-2 text-sm leading-normal font-medium antialiased"
          >
            <CalendarIcon className="text-primary" size={24} />
            <div>{dayjs(blog.createdAt).format("MMMM D, YYYY")}</div>
          </div>

          <h1
            data-uia="blog-title"
            className="w-full mt-6 text-wrap text-2xl sm:text-3xl md:text-4xl text-foreground font-black leading-normal antialiased"
          >
            {blog.title}
          </h1>

          <div data-uia="blog-image" className="w-full mt-8 relative">
            <AspectRatio ratio={16 / 9}>
              <Image
                className="w-full h-full object-cover aspect-auto"
                blurDataURL={urlFor(blog.image).url()}
                src={urlFor(blog.image).url()}
                placeholder="blur"
                title={blog.title}
                alt={blog.title}
                quality={80}
                priority
                fill
              />
            </AspectRatio>
          </div>

          <div
            className="px-0 py-6 text-muted-foreground/80 leading-normal antialiased lowercase flex flex-row flex-wrap items-center justify-center gap-3"
            data-uia="blog-keywords"
          >
            {blog.seo?.map((keyword, index) => (
              <span key={index}>{`#${keyword}`}</span>
            ))}
          </div>

          <div
            data-uia="blog-description"
            className="w-full mt-6 text-center text-muted-foreground text-lg font-medium leading-normal antialiased"
          >
            {blog.description}
          </div>

          <div
            data-uia="blog-user"
            className="w-full mt-10 flex items-center justify-center relative"
          >
            <Separator className="w-full bg-muted-foreground/25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="w-fit relative z-10 bg-muted flex items-center justify-center gap-2 px-1.5">
              <Avatar className="border border-border">
                <AvatarImage
                  className="object-cover"
                  src={urlFor(blog.author?.image).url()}
                  alt={blog.author?.name}
                />
                <AvatarFallback>
                  {blog.author?.name[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <p className="text-lg leading-normal font-semibold antialiased align-middle">
                {blog.author?.name}
              </p>
            </div>
          </div>

          <article
            data-uia="blog-content"
            className="w-full max-w-full mt-16 mx-0 mb-24 prose dark:prose-invert text-foreground leading-normal antialiased"
          >
            <PortableText value={blog.content} />
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
