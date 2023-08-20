import React from "react";
import ProjectCard from "./ProjectCard";
import { FcCalculator, FcTodoList, FcBusinessman } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="relative flex h-screen overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto justify-evenly items-center z-0">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="flex w-full md:w-[450px] mt-20 space-x-5 overflow-x-scroll p-10 snap snap-x snap-mandatory">
        <ProjectCard
          ImageURL={FcCalculator}
          name={"Expense Tracker"}
          about={
            "The Expense Tracker app built on ReactJS is a user-friendly and efficient financial management tool designed to help users monitor, manage, and analyze their expenses in a streamlined manner. With its modern and intuitive interface, the app offers a comprehensive solution for individuals and households to gain better control over their spending habits and financial goals."
          }
          link={"https://dineshdk1705.github.io/expensetrackerapp1/"}
        />
        <ProjectCard
          ImageURL={FcTodoList}
          name={"Todo App"}
          about={
            "The Todo App built on ReactJS is a user-friendly and organized task management tool designed to help individuals and teams effectively plan, track, and complete tasks and activities. Featuring a modern and intuitive interface, the app offers a seamless solution for users to stay productive and focused on their goals."
          }
          link={"https://react-type-script-todo-775a.vercel.app/"}
        />
        <ProjectCard
          ImageURL={AiFillFacebook}
          name={"Facebook Clone"}
          about={
            "The Facebook Clone Web App built on ReactJS is a feature-rich and visually appealing social networking platform designed to emulate the core functionalities and user experience of the popular social media platform, Facebook. With its modern design and interactive features, the app provides users with a familiar environment for connecting, sharing, and engaging with friends and peers online."
          }
          link={"https://facebook-clone-app-27031.web.app/"}
        />
        <ProjectCard
          ImageURL={FcBusinessman}
          name={"Responsive CV"}
          about={
            "The Responsive CV Web App, built using HTML, CSS, and JavaScript, is a versatile and visually appealing online platform designed to showcase an individual's professional background, skills, work experience, education, and accomplishments in an interactive and accessible manner. This web app adapts seamlessly to various devices and screen sizes, ensuring that the user's CV can be easily viewed and appreciated by potential employers or collaborators."
          }
          link={"https://dineshdk1705.github.io/myresponsivecv.github.io/"}
        />
      </div>
      {/* <div className="absolute top-[30%] left-0 h-[400px] w-full bg-[#F7AB8A] opacity-5 -skew-y-12" /> */}
    </div>
  );
}
