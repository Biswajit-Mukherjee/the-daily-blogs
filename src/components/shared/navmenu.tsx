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
            className="w-full rounded-sm overflow-hidden hover:bg-primary/10 hover:text-primary active:text-primary cursor-pointer"
          >
            <Link
              className={cn(
                "w-full h-full block border-b-2 border-transparent text-center p-2.5",
                pathname === navlink.pathname &&
                  "text-primary font-semibold border-primary"
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
