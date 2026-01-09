import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/header";
import CurrentSectionContextProvider from "@/context/current-section";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/footer";
import ThemeSwitch from "@/components/ui/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew Williams | Software Engineer",
  description:
    "Andrew Williams is a Full Stack Software Engineer with 5+ years of experience building web and mobile applications with React, React-Native, TypeScript, Next.js and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}  bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 `}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <div className="bg-[#fbe2e3]  absolute top-[-1rem] -z-10 right-[10rem]  h-[55.25rem] w-[30.25rem] rounded-full blur-[10rem] sm:w-[60.75rem]"></div>
        <div className="bg-[#dbd7fb]  absolute top-[-1rem] -z-10 left-[-25rem]  h-[55.25rem] w-[55rem] rounded-full blur-[10rem] sm:w-[60.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem]"></div>
        <CurrentSectionContextProvider>
        <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
        </CurrentSectionContextProvider>
      </body>
    </html>
  );
}
