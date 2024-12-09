import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Providers from "@/components/Providers/Providers";

export const metadata: Metadata = {
  title: "Product Listing Page",
  description:
    "Explore and browse a curated selection of products with detailed filtering, sorting, and navigation for a seamless shopping experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col font-sans antialiased`}>
        <Header />
        <div className="flex h-full w-full flex-grow py-[52px]">
          <main className="mx-auto w-full max-w-[1300px] px-5 sm:px-10 md:px-14 lg:px-20">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
