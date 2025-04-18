"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Navlink } from "@/@types";

type Props = {
  label: string;
  className?: string;
  listClassName?: string;
  navlinks: Navlink[];
};

const NavMenu: React.FC<Props> = ({
  label = "",
  className = "",
  listClassName = "",
  navlinks = [],
  ...props
}) => {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className={cn("flex-1", className)} {...props}>
      <ul role="list" className={cn(listClassName)}>
        {navlinks?.map((navlink: Navlink) => (
          <li
            role="listitem"
            key={navlink._key}
            aria-label={navlink.label.toLowerCase().replaceAll(" ", "-")}
            className="w-full hover:text-primary active:text-primary hover:bg-muted active:bg-muted md:hover:bg-inherit md:active:bg-inherit cursor-pointer"
          >
            <Link
              className={cn(
                "block text-center",
                pathname === navlink.pathname &&
                  "text-primary font-semibold border-b-2 border-primary p-2.5"
              )}
              href={navlink.href}
            >
              {navlink.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
