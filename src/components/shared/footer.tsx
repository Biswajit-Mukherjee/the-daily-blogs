import * as React from "react";
import Logo from "@/components/shared/logo";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full min-h-40 p-6 flex flex-col gap-8 bg-background border-t border-border">
      <div className="flex-1">
        <Logo />

        <div className="mt-8 mx-0 mb-4">
          <ul className="w-full grid gap-3 text-muted-foreground">
            <li className="text-inherit underline underline-offset-2">
              <Link href="/privacy">Privacy Policy</Link>
            </li>

            <li className="text-inherit underline underline-offset-2">
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>

            <li className="text-inherit underline underline-offset-2">
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-sm font-normal leading-normal text-center antialiased mt-5 mx-auto mb-2.5">
        &copy; Copyright 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
