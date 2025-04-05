/* eslint-disable @typescript-eslint/no-namespace */

import * as React from "react";
import { type SanityImageAssetDocument } from "next-sanity";

// Next types
export namespace NextTypes {
  export type Layout = Readonly<{
    children: React.ReactNode;
  }>;
}

// Sanity types
export namespace SanityTypes {
  export type Blog = Readonly<{
    id: string;
    slug: string;
    title: string;
    createdAt: Date;
    description: string;
    image: SanityImageAssetDocument;
  }>;

  export type Profile = Readonly<{
    name: string;
    education: string;
    description: never;
    image: SanityImageAssetDocument;
    email: string;
  }>;

  export type Author<T> = Readonly<{
    _id: string;
    name: string;
    image: T;
  }>;

  export type BlogDetails = Blog &
    Readonly<{
      content: never;
      author: SanityImageAssetDocument | undefined;
      seo: string[] | null | undefined;
    }>;
}
