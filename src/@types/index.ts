/* eslint-disable @typescript-eslint/no-namespace */

import * as React from "react";
import { type SanityImageAssetDocument } from "next-sanity";
import { type ContactPage } from "schema-dts";

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
    updatedAt: Date;
    description: string;
    image: SanityImageAssetDocument;
    author: { name: string };
    seo: string | string[];
    numberOfCharacters: number;
    estimatedWordCount: number;
    estimatedReadingTimeInMins: number;
  }>;

  export type Profile = Readonly<{
    name: string;
    jobTitle: string;
    description: never;
    image: SanityImageAssetDocument;
    email: string;
    facebook: string;
    youtube: string;
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

  export type PrivacyPolicy = Readonly<{
    title: string;
    description: never;
    createdAt: Date;
    updatedAt: Date;
  }>;

  export type Terms = Readonly<{
    title: string;
    description: never;
    createdAt: Date;
  }>;

  export type Disclaimer = Readonly<{
    title: string;
    description: never;
    createdAt: Date;
  }>;

  export type AboutSite = Readonly<{
    title: string;
    description: never;
    largeDescription: never;
    hero: SanityImageAssetDocument;
  }>;

  export type Contact = Readonly<{
    title: string;
    description: never;
    hero: SanityImageAssetDocument;
  }>;

  export type Homepage = Readonly<{
    title: string;
    image: SanityImageAssetDocument;
    intro: never;
  }>;
}

// Schema data types
export type TContactPage = ContactPage &
  Readonly<{
    contactPoint: {
      "@type": string;
      contactType: string;
      email: string;
      url: string;
    };
  }>;

// Navlink types
export type Navlinks = Readonly<{ label: string; navlinks: Navlink[] }>;

export type Navlink = Readonly<{
  _key: string;
  label: string;
  pathname: string;
  href: string;
}>;
