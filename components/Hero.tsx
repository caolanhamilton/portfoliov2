import { addScaleCorrector, motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import headshot from "../public/headshot.jpeg";
import Link from "next/link";

type Props = {};

export const Hero = ({}: Props) =>{
  const [text] = useTypewriter({
    words: ["Hi, I am Caolán!"],
    loop: 1,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-8 text-center overflow-hidden snap-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2.5,
        }}
      >
        <Image
          src={headshot}
          alt="Caolán's face"
          height={300}
          width={300}
          className="rounded-full drop-shadow-sm mb-2"
        ></Image>{" "}
        <h2 className="text-1xl uppercase my-6 md:my-2 text-gray-200 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-white text-6xl lg:text-8xl  font-semibold">
          {text}
          <Cursor></Cursor>
        </h1>
        <div className="pt-8">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
