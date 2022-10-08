import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import meonmoutaintopinspain from "../public/meonmoutaintopinspain.jpeg";

type Props = {};

export const About = ({}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left  max-w-7xl px-8 md:px-20 justify-center mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-20 tracking-[15px] uppercase text-white text-2xl">
        About me
      </h3>
      <figure className="flex flex-col items-center mb-2">
        <img
          src={meonmoutaintopinspain.src}
          className="rounded-full border-4 drop-shadow-lg object-cover h-48 w-48 md:h-80 md:rounded-lg md:w-[600px] mx-2"
          alt="Caolán on a mountain top in Spain"
        ></img>
        <figcaption className="text-gray-200 text-sm md:text-lg italic mt-2">
          Me on a mountain in Valencia
        </figcaption>
      </figure>
      <div className="pt-4 space-y-10 w-full text-left px-0 md:px-20">
        <p className="text-gray-200 text-md  md:text-xl md:mt-2">
          I decided to become a programmer because I am inspired by its
          potential to make people’s lives easier and better. I love the
          creative, problem-solving nature of software engineering and the
          amazing feeling I get when solving hard problems, especially when
          working in a team. In my free time I love to travel and hike. 
        </p>
      </div>
    </motion.div>
  );
};
