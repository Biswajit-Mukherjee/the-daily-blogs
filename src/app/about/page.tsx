import * as React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { Briefcase, Mail } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getProfile } from "@/lib/utils";
import { urlFor } from "@/lib/sanity";
import { type SanityTypes } from "@/@types";
import { PortableText } from "next-sanity";
import { Separator } from "@/components/ui/separator";

const About: NextPage = async () => {
  const profile: SanityTypes.Profile = await getProfile();

  return (
    <div className="w-full min-h-screen bg-muted grid gap-10 px-4 py-10">
      <div className="w-full max-w-5xl mx-auto mt-10 mb-20 flex flex-col md:flex-row gap-10">
        <div
          data-uia="profile-image"
          className="min-w-[180px] sm:min-w-[240px] md:min-w-[320px] h-[180px] sm:h-[240px] md:h-[320px] overflow-hidden mx-auto relative rounded-full border-[8px] border-primary/80 bg-slate-300"
        >
          <AspectRatio ratio={1 / 1}>
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
        <div className="w-full select-none" data-uia="profile-description">
          <div className="w-full text-center md:text-left grid gap-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black antialiased">
              {profile.name}
            </h2>
            <div className="flex items-center gap-2.5 text-muted-foreground w-fit mx-auto md:mx-0">
              <Briefcase />
              <h3 className="text-lg font-medium antialiased">
                {profile.education}
              </h3>
            </div>
          </div>

          <div className="text-base leading-normal antialiased prose dark:prose-invert mt-10">
            <PortableText value={profile.description} />
          </div>

          <Separator className="w-full bg-muted-foreground/25 mt-10 mb-5" />

          <div className="w-full prose dark:prose-invert">
            <h4 className="text-lg antialiased">Contact me</h4>
            <div className="flex items-center gap-2.5">
              <Mail />
              <a
                className="text-muted-foreground"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
