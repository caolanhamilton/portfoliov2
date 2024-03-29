import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import GlutenFreeEatAPIPortfolioCover from "../public/GlutenFreeEatAPIPortfolioCover.png";
import GlutenFreeEatPortfolioCover from "../public/GlutenFreeEatPortfolioCover.png";
import NCNewsAPI from "../public/NCNewsAPI.jpeg";
import NCNewsFrontEnd from "../public/NCNewsFrontEnd.png";
const projects = [
  {
    imgUrl: GlutenFreeEatPortfolioCover,
    name: "Gluten Free Eats App",
    frontOrBack: "Front-end",
    summary:
      "iOS and Android App to help sufferers of Celiac disease or gluten intolerance find safe places to dine out. Made with React Native & Expo.",
    gitHub: "https://github.com/caolanhamilton/GlutenFreeEatsApp",
    videoUrl: "",
  },
  {
    imgUrl: GlutenFreeEatAPIPortfolioCover,
    name: "Gluten Free Eats API",
    frontOrBack: "Back-end",
    summary:
      "Gluten Free Eats API provides a REST API that allows sufferers of celiac disease and gluten intolerance to crowdsource safe places to dine out.",
    gitHub: "https://github.com/caolanhamilton/GlutenFreeEatsAPI",
    videoUrl: "",
  },
  {
    imgUrl: NCNewsAPI,
    name: "Northcoders News API",
    frontOrBack: "Back-end",
    summary:
      "API designed to be the backend of a news app with similar functionality to Reddit.com. Made with Node.js, Express and PSQL. Tested with Jest.",
    gitHub: "https://github.com/caolanhamilton/NC-News",
    videoUrl: "",
  },
  {
    imgUrl: NCNewsFrontEnd,
    name: "Northcoders News",
    frontOrBack: "Front-end",
    summary:
      "Northcoders News is a responsive blog application it was a project started durning my time at Northcoders made with TypeScript, Next.js, React & Tailwind CSS. It implements SSR for improved performance",
    gitHub: "https://github.com/caolanhamilton/nc-news-fe-v2",
    videoUrl: "",
  },
  {
    name: "StudyOut App",
    frontOrBack: "Full-stack",
    summary:
      "Full-stack mobile app made with React Native, Expo, Go Lang and PSQL. The app allows students to find alternative study spaces.",
    gitHub: "https://github.com/OneInfiniteLoops/studyout",
    videoUrl: "https://www.youtube.com/watch?v=yF6A6Rio4Js",
  },
];

export const Projects = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-start">
      <div className="pt-20 text-center">
        <h3 className="tracking-[15px] uppercase text-white text-2xl">
          Projects
        </h3>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1.5 }}
        className="h-full flex relative flex-col text-left md:text-left md:flex-row max-w-full  justify-evenly mx-auto items-center overflow-hidden"
      >
        <div className="h-full w-full m-auto flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500 px-10 pb-20 pt-10 md:p-10  snap-x snap-mandatory">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project}></ProjectCard>;
          })}
        </div>
      </motion.div>
    </div>
  );
};
