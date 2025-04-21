import * as React from "react";
import type { Metadata, NextPage } from "next";
import { PortableText } from "@portabletext/react";
import { WebPage, WithContext } from "schema-dts";
import dayjs from "dayjs";
import type { SanityTypes } from "@/@types";
import { getDisclaimer } from "@/lib/utils";
import StructuredData from "@/components/structured-data";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "Disclaimer | The Daily Blogs – General Advice, Health Content & Liability Info",
  metadataBase: new URL(SITE.url),
  description:
    "Read our disclaimer to understand the limits of our health, fitness, and lifestyle advice. The Daily Blogs provides educational content, not professional medical or psychological guidance.",
  keywords: [
    "disclaimer",
    "health advice disclaimer",
    "fitness blog disclaimer",
    "mental health content",
    "liability notice",
    "general wellness info",
    "The Daily Blogs",
  ],
  alternates: {
    canonical: new URL(SITE.url + "/disclaimer"),
  },
  robots: "index,noarchive,follow,max-image-preview:large",
  authors: [{ name: SITE.creator }],
};

const Disclaimer: NextPage = async () => {
  const disclaimer: SanityTypes.Disclaimer = await getDisclaimer();

  const schemaData: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer",
    url: "https://www.the-daily-blogs.com/disclaimer",
    description:
      "Read our disclaimer to understand the limits of our health, fitness, and lifestyle advice. The Daily Blogs provides educational content, not professional medical or psychological guidance.",
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
              {disclaimer.title}
            </h1>

            <div data-uia="creation-date">
              <strong>Effective Date:</strong>{" "}
              {dayjs(disclaimer.createdAt).format("MMMM D, YYYY")}
            </div>
          </div>

          <article
            data-uia="disclaimer-description"
            className="disclaimer w-full max-w-full mt-16 mx-0 mb-24 prose dark:prose-invert text-foreground text-base font-normal leading-normal antialiased"
          >
            <PortableText value={disclaimer.description} />
          </article>
        </section>
      </div>
    </>
  );
};

export default Disclaimer;
