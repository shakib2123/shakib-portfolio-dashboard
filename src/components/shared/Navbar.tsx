import { montserrat } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/s-logo.png";

export default function Navbar() {
  return (
    <section className="sticky top-0 z-50 bg-black/30 backdrop-blur-md shadow-custom-shadow-1 py-4">
      <div className="max-w-screen-xl mx-auto px-3">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="w-6 md:w-8"
          />
          <h1
            className={`text-xl md:text-2xl font-semibold  ${montserrat.className}`}
          >
            SHAKIB
          </h1>
        </Link>
      </div>
    </section>
  );
}
