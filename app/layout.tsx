import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";

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
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-100 text-gray-950 relative`}
      >
        <div className="bg-[#fbe2e3] absolte top-[-6rem] -z-10 right[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolte top-[-1rem] -z-10 left[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem]"></div>
        <Header/>
      </body>
    </html>
  );
}
