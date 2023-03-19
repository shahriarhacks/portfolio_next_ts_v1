import BackgroundCircle from "@/pages/BackgroundCircle";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am SHAHRIAR AHMED",
      "<Coding_Reading_Typing_Research/>",
      "Eat-Sleep-Code-Repeat.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src="/mine.jpg"
        alt="SHAHRIAR AHMED"
        width={100}
        height={100}
        className="rounded-full relative mx-auto h-32 w-32"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Full Stack Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7A52A" cursorStyle="_" />
        </h1>
        <h2 className="text-sm uppercase text-gray-500 pt-4 tracking-[15px]">
          MERN Stack Developer
        </h2>
        <div className="mt-5">
          <Link href="#about" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              About
            </button>
          </Link>
          <Link href="#experience" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              Experience
            </button>
          </Link>
          <Link href="#skills" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              Skills
            </button>
          </Link>
          <Link href="#projects" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              Projects
            </button>
          </Link>
          <Link href="#contact" className="cursor-pointer">
            <button className="hero-btn hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/30">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
