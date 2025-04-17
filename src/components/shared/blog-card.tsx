import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { CalendarIcon } from "lucide-react";
import { type SanityTypes } from "@/@types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { urlFor } from "@/lib/sanity";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export type BlogCardProps = Readonly<{ blog: SanityTypes.Blog }>;

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card
      className="w-full max-w-full md:max-w-[320px] h-[500px] sm:h-[640px] md:h-[480px] p-5 flex flex-col bg-card shadow-lg select-none rounded-lg border border-border"
      key={blog.id}
    >
      <CardHeader className="w-full flex-1 p-0 space-y-4">
        <div className="w-full min-h-[156.38px] rounded-sm overflow-hidden relative">
          <React.Suspense
            fallback={<Skeleton className="w-full h-[156.38px] rounded-sm" />}
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                className="w-full h-full object-cover bg-top aspect-auto"
                blurDataURL={urlFor(blog.image).url()}
                src={urlFor(blog.image).url()}
                placeholder="blur"
                alt={blog.title}
                quality={60}
                fill
              />
            </AspectRatio>
          </React.Suspense>
        </div>
        <CardTitle className="w-full text-base font-extrabold leading-normal tracking-normal antialiased">
          {blog.title}
        </CardTitle>
        <CardDescription className="w-full flex-1 text-sm font-normal leading-normal tracking-normal antialiased overflow-hidden text-ellipsis">
          {blog.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex items-center justify-between p-0">
        <Link
          aria-label={blog.title}
          className="text-primary hover:underline underline-offset-2 underline-primary font-semibold antialiased"
          href={`/blog/${blog.slug}`}
        >
          Read more
          <span className="sr-only">{blog.title}</span>
        </Link>
        <div className="flex items-center gap-2 text-sm leading-normal font-medium antialiased">
          <CalendarIcon size={20} />
          <div>{dayjs(blog.createdAt).format("MMM D, YYYY")}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
