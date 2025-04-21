import * as React from "react";
import { cn } from "@/lib/utils";

type Props = Readonly<{ className?: string }>;

const Logo: React.FC<Props> = ({ className = "" }) => {
  return (
    <span aria-label="site-logo" className={cn(className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="220"
        height="60"
        viewBox="0 0 280 72"
        fill="none"
      >
        {/* Blue Circle */}
        <circle cx="30" cy="30" r="24" fill="hsl(221.2, 83.2%, 53.3%)" />

        {/* Diagonal Stripe */}
        <rect
          x="4"
          y="32"
          width="30"
          height="4"
          fill="white"
          transform="rotate(45 20 32)"
        />

        {/* Logo Text */}
        <text
          x="60"
          y="37"
          fontFamily="Helvetica, Arial, sans-serif"
          fontSize="28"
          fontWeight="bold"
          fill="hsl(221.2, 83.2%, 53.3%)"
        >
          The Daily Blogs
        </text>
      </svg>
    </span>
  );
};

export default Logo;
