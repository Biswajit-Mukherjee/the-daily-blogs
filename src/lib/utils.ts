import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { sanityClient } from "./sanity";
import { SanityTypes } from "@/@types";

/** Merge tailwind classes */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Fetch all blogs from Sanity in descending order of creation date */
export async function getBlogs(): Promise<SanityTypes.Blog[]> {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
    "id": _id,
    "createdAt": _createdAt,
    "slug": slug.current,
    description,
    title,
    image
}
  `;

  const data: SanityTypes.Blog[] = await sanityClient.fetch(query);
  return data;
}

/** Fetch blog by slug from Sanity */
export async function getBlog(slug: string): Promise<SanityTypes.BlogDetails>  {
  const query = `
    *[_type == 'blog' && slug.current == $slug][0] {
    "id": _id,
    "createdAt": _createdAt,
    "slug": slug.current,
    description,
    content,
    title,
    image,
    author-> { name, image }
  }
`;

  const data: SanityTypes.BlogDetails = await sanityClient.fetch(query, { slug });
  return data;
}
