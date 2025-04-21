import * as React from "react";
import { Img } from "@react-email/components";

const IMG_SRC =
  "https://res.cloudinary.com/dpuqotrbb/image/upload/v1745165321/site-logo_zauzno.png";

const Logo: React.FC = () => {
  return (
    <Img
      alt="logo"
      style={{ width: "fit-content", margin: "auto" }}
      src={IMG_SRC}
    />
  );
};

export default Logo;
