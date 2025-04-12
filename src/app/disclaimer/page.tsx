import * as React from "react";
import { NextPage } from "next";
import { PortableText } from "next-sanity";
import dayjs from "dayjs";
import { type SanityTypes } from "@/@types";
import { getDisclaimer } from "@/lib/utils";

const Disclaimer: NextPage = async () => {
  const disclaimer: SanityTypes.Disclaimer = await getDisclaimer();

  return (
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
  );
};

export default Disclaimer;
