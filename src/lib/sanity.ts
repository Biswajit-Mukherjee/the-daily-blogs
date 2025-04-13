import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";

/** Create Sanity client */
export const sanityClient = createClient({
  projectId: "d2lxyr39",
  dataset: "production",
  useCdn: false,
  apiVersion: "2025-02-09",
});

/** Build image url from Sanity */
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
