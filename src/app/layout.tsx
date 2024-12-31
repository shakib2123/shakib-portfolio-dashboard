import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/shared/Sidebar";
import MobileSidebar from "@/components/shared/MobileSidebar";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "Shakib Al Furqan - Portfolio | Dashboard",
  description: "Shakib Al Furqan Portfolio Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <Navbar />
          <div className="lg:flex">
            <Sidebar />
            <div className="p-4 z-20 w-full">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
