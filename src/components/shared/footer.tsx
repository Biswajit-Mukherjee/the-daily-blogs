import * as React from "react";
import Logo from "@/components/shared/logo";

const Footer: React.FC = () => {
  return (
    <footer className="w-full min-h-36 p-6 flex flex-col sm:flex-row items-center justify-between gap-8 bg-background border-t border-border">
      <Logo />
      <div className="text-sm font-normal leading-normal antialiased">
        &copy; Copyright 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
