import React from "react";
import { motion } from "framer-motion";
import {
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoMongodb,
  BiLogoHtml5,
  BiLogoJava,
} from "react-icons/bi";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="relative flex min-h-screen flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto px-10 justify-center items-center">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase text-sm text-gray-500 tracking-[3px]">
        Hover over a skill for proficiency
      </h3>

      <div className="grid grid-cols-3 gap-5">
        <BiLogoHtml5 className="w-20 h-20 text-[#FF9002] hover:scale-150 transition-all duration-200" />
        <BiLogoCss3 className="w-20 h-20 text-[#264DE4] hover:scale-150 transition-all duration-200" />
        <BiLogoTailwindCss className="w-20 h-20 text-[#00B8D5] hover:scale-150 transition-all duration-200" />
        <BiLogoJavascript className="w-20 h-20 text-yellow-300 hover:scale-150 transition-all duration-200" />
        <BiLogoReact className="w-20 h-20 text-[#60DBFB] hover:scale-150 transition-all duration-200" />
        <BiLogoTypescript className="w-20 h-20 text-[#3077C6] hover:scale-150 transition-all duration-200" />
        <BiLogoNodejs className="w-20 h-20 text-[#83CD29] hover:scale-150 transition-all duration-200" />
        <BiLogoMongodb className="w-20 h-20 text-[#4FAA41] hover:scale-150 transition-all duration-200" />
        <BiLogoJava className="w-20 h-20 text-[#dd7b47] hover:scale-150 transition-all duration-200" />
      </div>
    </motion.div>
  );
}
