/** This is a client component that records view count for a blog post */

"use client";

import * as React from "react";

type Props = Readonly<{ slug: string }>;

export const ReportView: React.FC<Props> = ({ slug }) => {
  React.useEffect(() => {
    fetch("/api/increment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
  }, [slug]);

  return null;
};
