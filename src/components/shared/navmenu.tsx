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
        <li className="hover:underline active:underline underline-offset-2 hover:bg-muted active:bg-muted md:hover:bg-inherit md:active:bg-inherit cursor-pointer p-4">
          <Link
            className={cn("block text-center", pathname === "/" && "font-bold")}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="hover:underline active:underline underline-offset-2 hover:bg-muted active:bg-muted md:hover:bg-inherit md:active:bg-inherit cursor-pointer p-4">
          <Link
            className={cn(
              "block text-center",
              pathname === "/blogs" && "font-bold"
            )}
            href="/blogs?page=1"
          >
            Blogs
          </Link>
        </li>
        <li className="hover:underline active:underline underline-offset-2 hover:bg-muted active:bg-muted md:hover:bg-inherit md:active:bg-inherit cursor-pointer p-4">
          <Link
            className={cn(
              "block text-center",
              pathname === "/about" && "font-bold"
            )}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
