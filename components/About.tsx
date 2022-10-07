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
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left  max-w-7xl px-8 md:px-20 justify-center mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-20 tracking-[15px] uppercase text-white text-2xl">
        About me
      </h3>
      <figure className="flex flex-col items-center mb-2">
        <div className="rounded-full object-cover md:rounded-3xl h-60 w-60 md:my-0 md:w-[600px] md:h-[350px] mb-2">
          <Image
            src={meonmoutaintopinspain}
            className="rounded-full object-cover md:rounded-3xl h-60 w-60 md:my-0 md:w-[600px] md:h-[350px] mb-2"
            alt="Caolán on a mountain top in Spain"
          ></Image>
        </div>

        <figcaption className="text-gray-200 text-l md:text-lg italic">
          Me on a mountain in Valencia
        </figcaption>
      </figure>

      <div className="pt-4 space-y-10 w-full text-left px-0 md:px-20">
        <p className="text-gray-200 text-lg  md:text-xl md:mt-2">
          I decided to become a programmer because I am inspired by its
          potential to make people’s lives easier and better. I love the
          creative, problem-solving nature of software engineering and the
          amazing feeling I get when solving hard problems, especially when
          working in a team. You can find my work experience, projects or
          contact me on this site!
        </p>
      </div>
    </motion.div>
  );
};
