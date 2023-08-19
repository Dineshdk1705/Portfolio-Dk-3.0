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
            "Stay ahead of the weather with our intuitive app! Search for any city and instantly access up-to-date weather information. Powered by the OpenWeatherMap API, our app delivers accurate forecasts. With a seamless searchable dropdown from Headless UI and RapidAPI's city search, finding weather updates has never been easier!"
          }
          link={"https://dineshdk1705.github.io/expensetrackerapp1/"}
        />
        <ProjectCard
          ImageURL={FcTodoList}
          name={"Todo App"}
          about={
            "Stay ahead of the weather with our intuitive app! Search for any city and instantly access up-to-date weather information. Powered by the OpenWeatherMap API, our app delivers accurate forecasts. With a seamless searchable dropdown from Headless UI and RapidAPI's city search, finding weather updates has never been easier!"
          }
          link={"https://react-type-script-todo-775a.vercel.app/"}
        />
        <ProjectCard
          ImageURL={AiFillFacebook}
          name={"Facebook Clone"}
          about={
            "Stay ahead of the weather with our intuitive app! Search for any city and instantly access up-to-date weather information. Powered by the OpenWeatherMap API, our app delivers accurate forecasts. With a seamless searchable dropdown from Headless UI and RapidAPI's city search, finding weather updates has never been easier!"
          }
          link={"https://facebook-clone-app-27031.web.app/"}
        />
        <ProjectCard
          ImageURL={FcBusinessman}
          name={"Responsive CV"}
          about={
            "Stay ahead of the weather with our intuitive app! Search for any city and instantly access up-to-date weather information. Powered by the OpenWeatherMap API, our app delivers accurate forecasts. With a seamless searchable dropdown from Headless UI and RapidAPI's city search, finding weather updates has never been easier!"
          }
          link={"https://dineshdk1705.github.io/myresponsivecv.github.io/"}
        />
      </div>
      {/* <div className="absolute top-[30%] left-0 h-[400px] w-full bg-[#F7AB8A] opacity-5 -skew-y-12" /> */}
    </div>
  );
}
