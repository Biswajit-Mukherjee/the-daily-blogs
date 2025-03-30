import "@/styles/globals.css";
import type { Metadata, NextPage } from "next";
import { Inter } from "next/font/google";
import { type NextTypes } from "@/@types";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { SITE } from "@/lib/data";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Daily Blogs",
    template: "%s — The Daily Blogs",
  },
  metadataBase: new URL(SITE.url),
  description: "Get the latest and greatest of the world of blogs",
  keywords: ["the daily blogs", "thedailyblogs", "blog", "article"],
};

const RootLayout: NextPage<NextTypes.Layout> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="w-full mt-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
