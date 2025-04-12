import * as React from "react";
import { NextPage } from "next";
import { PortableText } from "next-sanity";
import dayjs from "dayjs";
import { type SanityTypes } from "@/@types";
import { getPrivacyPolicy } from "@/lib/utils";

const Privacy: NextPage = async () => {
  const policy: SanityTypes.PrivacyPolicy = await getPrivacyPolicy();

  return (
    <div className="w-full min-h-screen bg-muted/50 grid gap-10">
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
  );
};

export default Privacy;
