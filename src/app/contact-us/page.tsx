import * as React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { FaEnvelopesBulk } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { type SanityTypes } from "@/@types";
import { getProfile } from "@/lib/utils";
import ContactForm from "@/components/shared/contact-form";

const ContactUs: NextPage = async () => {
  const profile: SanityTypes.Profile = await getProfile();

  return (
    <div className="w-full min-h-screen bg-muted/50 grid gap-10">
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
            Contact
          </h1>

          <p className="text-gray-100 font-normal text-lg leading-normal antialiased prose mt-5">
            Stuck in the process or just want to say{" "}
            <span className="text-xl font-bold">Hi</span> 😉
          </p>
        </div>
      </section>

      <section
        className="w-full max-w-6xl mt-10 mx-auto mb-5 px-4 py-10 relative"
        data-layout="section"
      >
        <div className="w-1/2 h-auto aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] absolute bg-muted/60 rounded-full" />

        <div className="w-full grid gap-10 relative z-10">
          <h1 className="text-center text-foreground text-3xl sm:text-4xl md:text-5xl font-bold leading-normal antialiased mx-auto">
            Get in Touch
          </h1>

          <p className="text-base font-normal leading-normal antialiased text-center text-muted-foreground prose mx-auto">
            Don’t hesitate to get help or just to chit chat with me 🙂 You can
            reach me on the platforms below !
          </p>

          <div
            data-layout="container"
            className="flex flex-col md:flex-row items-center justify-center gap-10"
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
  );
};

export default ContactUs;
