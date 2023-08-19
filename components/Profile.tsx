import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Circles from "./Circles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Profile({}: Props) {
  const [text, count] = useTypewriter({
    words: ["<Hi, I am Dinesh />"],
    delaySpeed: 2000,
    loop: true,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Circles />
      <Image
        src="/aboutPic.jpeg"
        alt=""
        width="1000"
        height="1000"
        className="relative w-32 h-32 rounded-full mx-auto object-top object-cover"
      />
      <div className="z-20">
        <h2 className="uppercase text-sm text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7ABBA" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="profileButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="profileButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="profileButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="profileButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
