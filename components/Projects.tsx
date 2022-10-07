import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
const projects = [
  {
    imgUrl:
      "https://www.caolanhamilton.co.uk/images/GlutenFreeEatPortfolioCover.png",
    name: "Gluten Free Eats App",
    frontOrBack: "Front-end",
    summary:
      "iOS and Android App to help sufferers of Celiac disease or gluten intolerance find safe places to dine out. Made with React Native & Expo.",
    gitHub: "https://github.com/caolanhamilton/GlutenFreeEatsApp",
    videoUrl: "",
  },
  {
    imgUrl:
      "https://www.caolanhamilton.co.uk/images/GlutenFreeEatAPIPortfolioCover.png",
    name: "Gluten Free Eats API",
    frontOrBack: "Back-end",
    summary:
      "Gluten Free Eats API provides a REST API for consumption by an iOS and Android app that allows sufferers of celiac disease and gluten intolerance to crowdsource safe places to dine out.",
    gitHub: "https://github.com/caolanhamilton/GlutenFreeEatsAPI",
    videoUrl: "",
  },
  {
    imgUrl: "https://www.caolanhamilton.co.uk/images/NCNewsAPI.jpg",
    name: "Northcoders News API",
    frontOrBack: "Back-end",
    summary:
      "API designed to be the backend of a news app with similar functionality to Reddit.com. Made with Node.js, Express and PSQL. Tested with Jest.",
    gitHub: "https://github.com/caolanhamilton/NC-News",
    videoUrl: "",
  },
  {
    imgUrl: "https://www.caolanhamilton.co.uk/images/NCNewsFrontEnd.png",
    name: "Northcoders News App",
    frontOrBack: "Front-end",
    summary:
      "A mobile-first web application made with React. It is designed to be the front-end of a news app with similar functionality to Reddit.com. The app consumes my Northrcoders News API.",
    gitHub: "https://github.com/caolanhamilton/nc-news-fe",
    videoUrl: "",
  },
  {
    imgUrl: "",
    name: "StudyOut App",
    frontOrBack: "Full-stack",
    summary:
      "A mobile-first web application made with React. It is designed to be the front-end of a news app with similar functionality to Reddit.com. The app consumes my Northrcoders News API.",
    gitHub: "https://github.com/OneInfiniteLoops/studyout",
    videoUrl: "https://www.youtube.com/watch?v=yF6A6Rio4Js",
  },
];

type Props = {};

export const Projects = ({}: Props) =>{
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-left md:text-left md:flex-row max-w-full  justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 tracking-[15px] uppercase text-white text-2xl">
        Projects
      </h3>
      <div className="w-full m-auto flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-900 p-10 snap-x snap-mandatory">
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project}></ProjectCard>;
        })}
      </div>
    </motion.div>
  );
}
