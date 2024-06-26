import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import { BgBottom, BgTop } from "./component/imgs/bg-top-bottom";
const KumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={KumbhSans.className}>
        <main className="flex h-screen justify-center items-center bg-Dark-cyan ">
          <BgTop />
          <BgBottom />
          {children}
        </main>
      </body>
    </html>
  );
}
