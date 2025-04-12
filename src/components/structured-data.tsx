import * as React from "react";
import Script from "next/script";
import {
  AboutPage,
  BlogPosting,
  WebPage,
  WebSite,
  WithContext,
} from "schema-dts";
import { TContactPage } from "@/@types";

type Props = {
  data: WithContext<BlogPosting | WebPage | WebSite | AboutPage | TContactPage>;
};

const StructuredData: React.FC<Props> = ({ data }): React.JSX.Element => {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default StructuredData;
