import * as React from "react";
import Link from "next/link";
import Logo from "@/components/shared/logo";
import { ModeToggle } from "@/components/shared/mode-toggle";

const Header: React.FC = () => {
  return (
    <header className="w-full h-20 px-2.5 sm:px-5 flex items-center justify-between bg-background border-b border-border">
      <Link href="/" sr-only="Home Page">
        <Logo className="cursor-pointer" />
      </Link>
      <ModeToggle />
    </header>
  );
};

export default Header;
