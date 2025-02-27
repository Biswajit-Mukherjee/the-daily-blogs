import * as React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { redirect } from "next/navigation";
import { CalendarIcon } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { getBlog } from "@/lib/utils";
import { type SanityTypes } from "@/@types";
import { urlFor } from "@/lib/sanity";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = Readonly<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Promise<any>;
}>;

const BlogDetails: React.FC<Props> = async ({ params }) => {
  const pageParams = await params;

  if (!params) {
    redirect("/");
  }

  const blogSlug = pageParams?.slug || "";
  const blog: SanityTypes.BlogDetails = await getBlog(blogSlug);

  return (
    <div className="w-full h-full flex p-4 items-center justify-center">
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
              alt={blog.title}
              quality={80}
              priority
              fill
            />
          </AspectRatio>
        </div>

        <div
          data-uia="blog-description"
          className="w-full mt-6 text-center text-gray-500 text-lg leading-normal antialiased"
        >
          {blog.description}
        </div>

        <div
          data-uia="blog-user"
          className="w-full mt-10 flex items-center justify-center relative"
        >
          <hr className="w-full border-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-[1]" />
          <div className="w-fit bg-background flex items-center justify-center gap-2 px-1.5">
            <Avatar className="border border-border">
              <AvatarImage
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
          className="w-full max-w-full mt-16 mx-0 mb-24 prose text-foreground leading-normal antialiased"
        >
          <PortableText value={blog.content} />
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
