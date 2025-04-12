import * as React from "react";
import { Metadata, NextPage } from "next";
import Image from "next/image";
import { FaEnvelopesBulk } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { type TContactPage, type SanityTypes } from "@/@types";
import { getContactUsDetails, getProfile } from "@/lib/utils";
import ContactForm from "@/components/shared/contact-form";
import { SITE } from "@/lib/data";
import { PortableText } from "next-sanity";
import { WithContext } from "schema-dts";
import StructuredData from "@/components/structured-data";

export const metadata: Metadata = {
  title:
    "Contact Us | The Daily Blogs – Let's Connect on Wellness, Lifestyle & Growth",
  metadataBase: new URL(SITE.url),
  description:
    "Get in touch with The Daily Blogs for questions, collaborations, or feedback related to fitness, lifestyle, mental health, and personal growth. We're here to connect with you!",
  keywords: [
    "contact The Daily Blogs",
    "fitness blog contact",
    "mental health blog",
    "lifestyle blogger email",
    "collaborate wellness blog",
    "personal growth blog",
  ],
  alternates: {
    canonical: new URL(SITE.url),
  },
};

const ContactUs: NextPage = async () => {
  const profile: SanityTypes.Profile = await getProfile();
  const contact: SanityTypes.Contact = await getContactUsDetails();

  const schemaData: WithContext<TContactPage> = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    url: "https://www.the-daily-blogs.com/contact-us",
    description:
      "Get in touch with The Daily Blogs for questions, collaborations, or feedback related to fitness, lifestyle, mental health, and personal growth.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "The Daily Blogs",
      url: "https://www.the-daily-blogs.com",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: SITE.email,
      url: "https://www.the-daily-blogs.com/contact-us",
    },
  };

  return (
    <>
      <StructuredData data={schemaData} />

      <div className="w-full min-h-screen bg-muted/50 dark:bg-muted grid gap-10">
        <section
          data-layout="section"
          className="w-full h-[75vh] rounded-tl-[8rem] rounded-br-[8rem] overflow-hidden relative"
        >
          <div className="w-full h-full top-0 left-0 absolute z-10 bg-black/50" />
          <Image
            className="object-contain bg-center aspect-auto"
            blurDataURL="/assets/contact-bg.svg"
            src="/assets/contact-bg.svg"
            placeholder="blur"
            alt="contact-us"
            priority
            fill
          />
          <div className="absolute top-1/2 left-[20%] -translate-x-[20%] -translate-y-1/2 z-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-normal antialiased">
              {contact.title}
            </h1>

            <div className="text-gray-100 font-normal text-lg leading-normal antialiased prose mt-5">
              <PortableText value={contact.subtitle} />
            </div>
          </div>
        </section>

        <section
          className="w-full max-w-6xl mt-10 mx-auto mb-5 px-4 py-10 relative"
          data-layout="section"
        >
          <div className="w-full grid gap-10 relative z-10">
            <h1 className="text-center text-foreground text-3xl sm:text-4xl md:text-5xl font-bold leading-normal antialiased mx-auto">
              Get in Touch
            </h1>

            <article className="w-full mx-auto text-base font-normal leading-normal antialiased prose dark:prose-invert mb-10">
              <PortableText value={contact.description} />
            </article>
          </div>
        </section>

        <section className="w-full max-w-6xl mx-auto mt-10 mb-20 relative">
          <div className="w-1/2 h-auto aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] absolute bg-muted/60 rounded-full" />

          <div
            data-layout="container"
            className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10"
          >
            <div className="w-fit h-fit aspect-square flex flex-1 flex-col gap-3 p-10 shadow-xl bg-background text-card-foreground rounded-2xl overflow-hidden">
              <div className="w-20 h-20 aspect-square rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <FaEnvelopesBulk size={40} />
              </div>
              <h3 className="text-2xl font-bold leading-normal antialiased text-foreground">
                Email Me
              </h3>
              <div className="text-base leading-normal antialiased text-muted-foreground">
                {profile.email}
              </div>
            </div>

            <div className="w-fit h-fit aspect-square flex flex-1 flex-col gap-3 p-10 shadow-xl bg-background text-card-foreground rounded-2xl overflow-hidden">
              <div className="w-20 h-20 aspect-square rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <FaFacebook size={40} />
              </div>
              <h3 className="text-2xl font-bold leading-normal antialiased text-foreground">
                Connect on Facebook
              </h3>
              <div className="text-base leading-normal antialiased text-muted-foreground">
                {profile.facebook.split("facebook.com/")[1]}
              </div>
            </div>

            <div className="w-fit h-fit aspect-square flex flex-1 flex-col gap-3 p-10 shadow-xl bg-background text-card-foreground rounded-2xl overflow-hidden">
              <div className="w-20 h-20 aspect-square rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <FaYoutube size={40} />
              </div>
              <h3 className="text-2xl font-bold leading-normal antialiased text-foreground">
                Subscribe on YouTube
              </h3>
              <div className="text-base leading-normal antialiased text-muted-foreground">
                {profile.youtube.split("youtube.com/")[1]}
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full max-w-6xl grid mt-20 mx-auto mb-32"
          data-layout="section"
        >
          <h1 className="text-center text-foreground text-3xl sm:text-4xl md:text-5xl font-bold leading-normal antialiased mx-auto">
            Send a Message
          </h1>

          <p className="text-base font-normal leading-normal antialiased text-center text-muted-foreground prose mx-auto mt-4">
            I would love to hear from you!
          </p>

          <div className="w-full grid gap-5">
            <ContactForm />

            <p className="text-muted-foreground font-normal text-base leading-normal antialiased text-center prose mt-2.5 mx-auto mb-0">
              Don&apos;t worry, we don&apos;t send any spam messages 😉
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
