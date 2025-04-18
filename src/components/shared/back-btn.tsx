"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button
      variant="link"
      aria-label="back-nav-link"
      className="p-0 hover:no-underline active:no-underline"
      onClick={handleClick}
    >
      <div className="w-fit flex flex-row items-center gap-2 text-muted-foreground hover:text-primary active:text-primary text-base font-normal leading-normal antialiased">
        <IoMdArrowBack size={20} />
        <span>Back</span>
      </div>
      <span className="sr-only">Go back</span>
    </Button>
  );
};

export default BackButton;
