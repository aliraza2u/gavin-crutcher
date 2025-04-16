"use client";
import Image from "next/image";

import { Libre_Caslon_Display, Roboto } from "next/font/google";

const caslon = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[url(/gavin-crutcher-cover-lg.jpeg)] sm:bg-[url(/gavin-crutcher-cover-md.jpeg)] xl:bg-[url(/gavin-crutcher-cover-lg.jpeg)] bg-center sm:bg-left xl:bg-center bg-cover bg-no-repeat">
      <div className="absolute top-[6%] inset-x-0 sm:inset-x-auto sm:top-[10%] sm:left-[42%] md:left-[50%] xl:left-[63%] text-white z-10 max-w-md flex flex-col items-center sm:bg-[#ffffff4d] py-7 px-8 rounded-xl">
        <Image
          src="/logo.png"
          alt="Gavin Crutcher"
          width={300}
          height={200}
          className="mb-3 hidden sm:block"
        />
        <Image
          src="/logo.png"
          alt="Gavin Crutcher"
          width={230}
          height={200}
          className="mb-3 block sm:hidden"
        />
        <p className={`${caslon.className} text-2xl mb-6 italic text-center text-[#443830]`}>
          Days That I Miss
        </p>
        <a
          href="https://www.linktree.com/gavincrutcher"
          target="_blank"
          rel="noopener noreferrer"
          className={`${roboto.className} hidden sm:block animate__heartBeat text-lg tracking-wide bg-[#a36b2a] border border-[#b3640c] px-6 py-1.5 rounded-full font-semibold text-white cursor-pointer transition active:scale-95`}
        >
          Listen Now
        </a>
      </div>
      <a
        href="https://www.linktree.com/gavincrutcher"
        target="_blank"
        rel="noopener noreferrer"
        className={`${roboto.className} text-center w-[75%] animate__heartBeat sm:hidden  absolute bottom-[4%] right-[10%] text-lg tracking-wide px-5 py-1.5 rounded-full font-semibold  bg-[#a36b2a] border border-[#b3640c] text-white cursor-pointer transition active:scale-95`}
      >
        Listen Now
      </a>
    </section>
  );
}
