import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1.0 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left mx-auto max-w-7xl px-10 justify-evenly items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="aboutPic.jpeg"
        alt="about-image"
        className="md:mt-20 mt-32 md:mb-0 mb-5 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:h-94 md:w-64 xl:w-[500px] xl:h-[600px] object-cover object-top"
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-2xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#F7AB0A]/50 underline">little</span>{" "}
          about me
        </h4>
        <div className="font-sm overflow-scroll h-52">
          <p className="text-base">
            I'm a passionate frontend developer with a keen eye for detail and a
            love for crafting engaging user experiences. With expertise in HTML,
            CSS, JavaScript, ReactJS, NextJS and more. I specialize in creating
            visually appealing, responsive websites. My portfolio showcases a
            range of projects that highlight my dedication to clean code and
            innovative solutions. I'm constantly expanding my skills and staying
            up to date with the latest trends in frontend development. I'm
            excited to work on impactful projects and contribute my expertise to
            deliver exceptional results. Let's connect and discuss how I can
            bring value to your team. Thank you !
          </p>
        </div>
        {/* <div className=" w-28 mt-0 pt-0">
          <Link href="/Dinesh-Resume.pdf" target="_blank" download>
            <p className="text-center mt-2 py-2 border border-white rounded-full uppercase text-xs tracking-widest text-white transition-all hover:border-[#F7ABBA]/40 hover:text-[#F7ABBA]/40">
              Resume
            </p>
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
}
