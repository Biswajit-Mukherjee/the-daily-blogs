import * as React from "react";
import { Metadata, NextPage } from "next";
import { PortableText } from "next-sanity";
import dayjs from "dayjs";
import { type SanityTypes } from "@/@types";
import { getTermsAndConditions } from "@/lib/utils";
import { SITE } from "@/lib/data";
import { WebPage, WithContext } from "schema-dts";
import StructuredData from "@/components/structured-data";

export const metadata: Metadata = {
  title:
    "Terms and Conditions | The Daily Blogs – Usage Guidelines & Legal Terms",
  metadataBase: new URL(SITE.url),
  description:
    "Review the terms and conditions for using The Daily Blogs, a wellness and lifestyle platform promoting fitness, mental health, and personal growth. Understand your rights and responsibilities.",
  keywords: [
    "terms and conditions",
    "usage terms",
    "legal terms",
    "blog rules",
    "fitness blog terms",
    "wellness content use",
    "The Daily Blogs terms",
  ],
  alternates: {
    canonical: new URL(SITE.url + '/terms-and-conditions'),
  },
  robots: "index,noarchive,follow,max-image-preview:large",
  authors: [{ name: SITE.creator }],
};

const TermsAndConditions: NextPage = async () => {
  const terms: SanityTypes.Terms = await getTermsAndConditions();

  const schemaData: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: "https://www.the-daily-blogs.com/terms-and-conditions",
    description:
      "Review the terms and conditions for using The Daily Blogs, a wellness and lifestyle platform promoting fitness, mental health, and personal growth. Understand your rights and responsibilities.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "The Daily Blogs",
      url: "https://www.the-daily-blogs.com",
    },
  };

  return (
    <>
      <StructuredData data={schemaData} />

      <div className="w-full min-h-screen bg-muted/50 dark:bg-muted grid gap-10">
        <section
          className="w-full max-w-5xl mt-10 mx-auto mb-5 px-4 py-10 relative"
          data-layout="section"
        >
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold antialiased">
              {terms.title}
            </h1>

            <div data-uia="creation-date">
              <strong>Effective Date:</strong>{" "}
              {dayjs(terms.createdAt).format("MMMM D, YYYY")}
            </div>
          </div>

          <article
            data-uia="terms-description"
            className="terms w-full max-w-full mt-16 mx-0 mb-24 prose dark:prose-invert text-foreground text-base font-normal leading-normal antialiased"
          >
            <PortableText value={terms.description} />
          </article>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
