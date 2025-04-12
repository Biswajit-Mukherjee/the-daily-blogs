"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  listClassName?: string;
};

const NavMenu: React.FC<Props> = ({ className = "", listClassName = "" }) => {
  const pathname = usePathname();

  return (
    <nav className={cn("flex-1", className)}>
      <ul className={cn(listClassName)}>
        <li className="hover:text-primary active:text-primary hover:bg-muted active:bg-muted md:hover:bg-inherit md:active:bg-inherit cursor-pointer p-4">
          <Link
            className={cn("block text-center", pathname === "/" && "text-primary font-semibold border-b-2 border-primary")}
            href="/"
          >
            Home
          </Link>
        </li>

        <li className="hover:text-primary active:text-primary hover:bg-muted active:bg-muted md:hover:bg-inherit md:active:bg-inherit cursor-pointer p-4">
          <Link
            className={cn(
              "block text-center",
              pathname === "/blogs" && "text-primary font-semibold border-b-2 border-primary"
            )}
            href="/blogs?page=1"
          >
            Blogs
          </Link>
        </li>

        <li className="hover:text-primary active:text-primary hover:bg-muted active:bg-muted md:hover:bg-inherit md:active:bg-inherit cursor-pointer p-4">
          <Link
            className={cn(
              "block text-center",
              pathname === "/about" && "text-primary font-semibold border-b-2 border-primary"
            )}
            href="/about"
          >
            About
          </Link>
        </li>

        <li className="hover:text-primary active:text-primary hover:bg-muted active:bg-muted md:hover:bg-inherit md:active:bg-inherit cursor-pointer p-4">
          <Link
            className={cn(
              "block text-center",
              pathname === "/contact-us" && "text-primary font-semibold border-b-2 border-primary"
            )}
            href="/contact-us"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
