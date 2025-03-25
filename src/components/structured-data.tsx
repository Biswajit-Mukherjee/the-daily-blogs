import * as React from "react";
import Script from "next/script";
import { BlogPosting, WithContext } from "schema-dts";

type Props = {
  data: WithContext<BlogPosting>;
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
