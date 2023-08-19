import React from "react";
import { motion } from "framer-motion";
import ExperiencedCard from "./ExperiencedCard";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex h-screen overflow-hidden flex-col text-center md:text-left md:flex-row max-w-full mx-auto px-10 justify-center items-center"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="flex w-full md:w-[450px] mt-20 space-x-5 overflow-x-scroll p-10 snap snap-x snap-mandatory">
        <ExperiencedCard
          logo="wizLogo.webp"
          designation="Software Engineer"
          company="Wiz Freight"
          start="14 Mar 2022"
          work={[
            "Collaborated closely with product managers and UX designers to understand project requirements and business objectives, translating them into intuitive and visually appealing user interfaces.",
            "Designed UIs within frontend web frameworks, leveraging associated templates and tools to streamline development processes and achieve faster delivery times.",
            "Contributing to documentation and knowledge sharing.",
            "Staying up-to-date with new technologies and best practices in frontend development",
            "Working in an Agile development environment.",
          ]}
        />
      </div>
    </motion.div>
  );
}
