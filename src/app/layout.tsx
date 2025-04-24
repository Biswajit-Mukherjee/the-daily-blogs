import "@/styles/globals.css";
import type { Metadata, NextPage } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Bounce, ToastContainer } from "react-toastify";
import type { NextTypes } from "@/@types";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { SITE } from "@/lib/data";
import { redirect } from "next/navigation";

// If loading a variable font, you don't need to specify the font weight
const ff = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "The Daily Blogs",
    template: "%s — The Daily Blogs",
  },
  metadataBase: new URL(SITE.url),
  description:
    "Explore our latest blog posts on topics that matter. Stay updated with insights, tips, and stories tailored for curious minds and passionate creators.",
  keywords: [
    "the daily blogs",
    "thedailyblogs",
    "blog",
    "blog post",
    "article",
  ],
  alternates: {
    canonical: new URL(SITE.url),
  },
};

export const revalidate = 3600; // revalidate at most every hour

const RootLayout: NextPage<NextTypes.Layout> = ({ children }) => {
  redirect('https://www.modernlivinglifestyle.com/');

  return (
    <html lang="en">
      <body className={`${ff.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="w-full bg-background mt-20">{children}</div>
          <Footer />
        </ThemeProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="colored"
          transition={Bounce}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
