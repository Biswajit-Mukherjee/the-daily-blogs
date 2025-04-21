import * as React from "react";
import type { Metadata, NextPage } from "next";
import { PortableText } from "@portabletext/react";
import { WebPage, WithContext } from "schema-dts";
import dayjs from "dayjs";
import type { SanityTypes } from "@/@types";
import { getPrivacyPolicy } from "@/lib/utils";
import { SITE } from "@/lib/data";
import StructuredData from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy | The Daily Blogs – Your Data, Your Trust",
  metadataBase: new URL(SITE.url),
  description:
    "Read the privacy policy for The Daily Blogs to learn how we collect, use, and protect your personal data when you visit our wellness, lifestyle, and mental health blog.",
  keywords: [
    "privacy",
    "privacy policy",
    "data protection",
    "user data privacy",
    "wellness blog privacy",
    "lifestyle blog terms",
    "The Daily Blogs policy",
    "personal data use",
    "GDPR",
  ],
  alternates: {
    canonical: new URL(SITE.url + '/privacy'),
  },
  robots: "index,noarchive,follow,max-image-preview:large",
  authors: [{ name: SITE.creator }],
};

const Privacy: NextPage = async () => {
  const policy: SanityTypes.PrivacyPolicy = await getPrivacyPolicy();

  const schemaData: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://www.the-daily-blogs.com/privacy",
    description:
      "Read the privacy policy for The Daily Blogs to learn how we collect, use, and protect your personal data when you visit our wellness, lifestyle, and mental health blog.",
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
              {policy.title}
            </h1>

            <div data-uia="creation-date">
              <strong>Effective Date:</strong>{" "}
              {dayjs(policy.createdAt).format("MMMM D, YYYY")}
            </div>
          </div>

          <article
            data-uia="policy-description"
            className="policy w-full max-w-full mt-16 mx-0 mb-24 prose dark:prose-invert text-foreground text-base font-normal leading-normal antialiased"
          >
            <PortableText value={policy.description} />

            <div className="mt-10" data-uia="updation-date">
              <strong>Last Updated:</strong>{" "}
              {dayjs(policy.updatedAt).format("MMMM D, YYYY")}
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Privacy;
