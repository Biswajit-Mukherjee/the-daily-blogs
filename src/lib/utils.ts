import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { sanityClient } from "./sanity";
import { type SanityTypes } from "@/@types";
import { MOST_RECENT_BLOGS, NUMBER_OF_BLOGS_PER_PAGE } from "./data";

/** Merge tailwind classes */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Fetch most recent blogs from Sanity in descending order of creation date */
export async function getMostRecentBlogs(): Promise<SanityTypes.Blog[]> {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) [0...${MOST_RECENT_BLOGS}] {
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
export async function getBlog(slug: string): Promise<SanityTypes.BlogDetails> {
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

  const data: SanityTypes.BlogDetails = await sanityClient.fetch(query, {
    slug,
  });
  return data;
}

/** Fetch user profile details from Sanity */
export async function getProfile() {
  const query = `
    *[_type == 'profile'] {
    name,
    education,
    description,
    image,
    email
}
  `;

  const data: SanityTypes.Profile[] = await sanityClient.fetch(query);
  return data[0];
}

/** Fetch blogs by search query */
export async function getBlogsByQuery(
  searchQuery: string,
  startIndex: number = 0
): Promise<SanityTypes.Blog[]> {
  const endIndex = startIndex + NUMBER_OF_BLOGS_PER_PAGE;

  // GROQ query to fetch blogs that contains the queried string
  const query = searchQuery
    ? `
    *[_type == 'blog' && (title match "*${searchQuery}*" || description match "*${searchQuery}*")] | order(_createdAt desc) [${startIndex}...${endIndex}] {
    "id": _id,
    "createdAt": _createdAt,
    "slug": slug.current,
    description,
    title,
    image
}
  `
    : `
    *[_type == 'blog'] | order(_createdAt desc) [${startIndex}...${endIndex}] {
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
