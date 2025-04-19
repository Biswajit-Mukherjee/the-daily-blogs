import * as React from "react";
import type { Metadata, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { AboutPage, WithContext } from "schema-dts";
import { MoveRight } from "lucide-react";
import { GrMail } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import StructuredData from "@/components/structured-data";
import Jumbotron from "@/components/shared/jumbotron";
import { getProfile, getSiteInfo } from "@/lib/utils";
import type { SanityTypes } from "@/@types";
import { urlFor } from "@/lib/sanity";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title:
    "About Us | The Daily Blogs – Empowering Wellness, Positivity & Life Transformation",
  metadataBase: new URL(SITE.url),
  description:
    "Learn more about The Daily Blogs — a positive space for fitness, lifestyle, mental health, and personal growth content. Join our mission to inspire, educate, and empower.",
  keywords: [
    "fitness blog",
    "lifestyle tips",
    "mental health blog",
    "well-being",
    "personal growth",
    "positive living",
    "life transformation",
    "The Daily Blogs",
    "about The Daily Blogs",
    "fitness lifestyle blog",
    "mental wellness blog",
    "positive living",
    "personal development",
    "health and wellness blog",
    "life transformation stories",
  ],
  robots: "index,noarchive,follow,max-image-preview:large",
  alternates: {
    canonical: new URL(SITE.url + "/about"),
  },
};

const About: NextPage = async () => {
  const profile: SanityTypes.Profile = await getProfile();
  const aboutSite: SanityTypes.AboutSite = await getSiteInfo();

  const schemaData: WithContext<AboutPage> = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    url: "https://www.the-daily-blogs.com/about",
    description:
      "Learn more about The Daily Blogs — a platform that inspires healthier living through fitness, lifestyle, mental health, positivity, and personal growth content.",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: "The Daily Blogs",
      url: "https://www.the-daily-blogs.com",
    },
    author: {
      "@type": "Person",
      name: SITE.creator,
      url: "https://www.the-daily-blogs.com/about",
      sameAs: [profile.facebook, profile.youtube],
      description:
        "Author and founder of The Daily Blogs, sharing insights on fitness, lifestyle, mental health, positivity, and personal transformation.",
      image: urlFor(profile.image).url() ?? "",
      jobTitle: "Blogger & Wellness Content Creator",
      worksFor: {
        "@type": "Organization",
        name: "The Daily Blogs",
      },
    },
  };

  return (
    <>
      <StructuredData data={schemaData} />

      <div className="w-full min-h-screen bg-muted/50 dark:bg-muted grid gap-10">
        <section className="w-full mt-10 mx-auto mb-0">
          <Jumbotron
            title={aboutSite.title}
            image={urlFor(aboutSite.hero).url()}
          />
        </section>

        <div
          className="w-full max-w-6xl mx-auto grid gap-10 px-4 py-10"
          data-layout="container"
        >
          <section data-layout="section">
            <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10">
              <div>
                <h1 className="text-foreground text-3xl sm:text-4xl md:text-5xl text-center md:text-left font-bold leading-normal antialiased">
                  {aboutSite.title}
                </h1>

                <div className="w-full mt-8 font-normal text-base text-wrap leading-normal antialiased prose dark:prose-invert">
                  <PortableText value={aboutSite.description} />
                </div>

                <Link
                  className="w-full max-w-full md:max-w-xs flex items-center justify-center gap-5 bg-primary shadow-xl hover:scale-105 transition-transform duration-200 rounded-lg text-white text-xl font-semibold p-5 mt-12"
                  href="/contact-us"
                >
                  <span>Contact Us</span>
                  <MoveRight />
                </Link>
              </div>

              <div className="w-full max-w-md bg-background rounded-2xl shadow-2xl overflow-hidden relative">
                <AspectRatio ratio={1.5}>
                  <Image
                    className="w-full h-full object-contain bg-center aspect-auto"
                    blurDataURL="/assets/about-site.png"
                    src="/assets/about-site.png"
                    placeholder="blur"
                    alt="about-site"
                    priority
                    fill
                  />
                </AspectRatio>
              </div>
            </div>
          </section>

          <section
            className="w-full max-w-6xl mx-auto mt-20"
            data-layout="section"
          >
            <div className="w-full max-w-full mt-8 font-normal text-base text-wrap leading-normal antialiased prose dark:prose-invert">
              <PortableText value={aboutSite.largeDescription} />
            </div>
          </section>

          <section
            id="aboutMe"
            data-layout="section"
            className="w-full max-w-6xl mx-auto"
          >
            <h1 className="w-full pt-20 text-center text-foreground text-3xl sm:text-4xl md:text-5xl font-bold leading-normal antialiased">
              About me
            </h1>

            <div className="w-full mt-12 mb-24 flex flex-col md:flex-row gap-6">
              <div className="w-full max-w-full md:max-w-md">
                <div
                  data-uia="profile-image"
                  className="w-full overflow-hidden relative"
                >
                  <AspectRatio className="w-full h-full object-cover aspect-auto rounded-xl overflow-hidden bg-slate-300">
                    <Image
                      className="w-full h-full object-cover bg-center aspect-auto"
                      blurDataURL={urlFor(profile.image).url()}
                      src={urlFor(profile.image).url()}
                      placeholder="blur"
                      alt={profile.name}
                      priority
                      fill
                    />
                  </AspectRatio>
                </div>

                <div className="w-full text-center md:text-left grid gap-1">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold leading-normal text-center antialiased mt-5">
                    {profile.name}
                  </h2>

                  <div className="text-muted-foreground leading-normal text-center antialiased">
                    {profile.jobTitle}
                  </div>
                </div>
              </div>

              <div
                className="w-full select-none"
                data-uia="profile-description"
              >
                <div className="text-base leading-normal antialiased text-center prose dark:prose-invert mt-10">
                  <PortableText value={profile.description} />
                </div>

                <ul className="flex items-center justify-center gap-2.5 mt-5">
                  <li>
                    <Link
                      className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full"
                      href={profile.youtube}
                    >
                      <FaYoutube size={20} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full"
                      href={profile.facebook}
                    >
                      <FaFacebook size={20} />
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full"
                      href={`mailto:${profile.email}`}
                    >
                      <GrMail size={20} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
