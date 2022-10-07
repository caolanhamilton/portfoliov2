import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { BsArrowUpCircle } from "react-icons/bs";
import Link from "next/link";
type Props = {};

export const Contact = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flew-row max-w-[2000px] xl:px-10 mx-auto justify-center xl:space-y-0 items-center"
    >
      <h3 className="absolute top-24 tracking-[15px] uppercase text-white text-2xl">
        Contact me
      </h3>
      <div className="flex flex-col space-y-10 w-full px-20">
        <p className="text-white italic text-2xl text-center md:text-2xl md:mt-2">
          Lets chat! Feel free to{" "}
          <span className="decoration-yellow-500 underline">email</span> me and
          connect on{" "}
          <span className="decoration-yellow-500 underline">LinkedIn</span>
          <span className=""> or </span>
          <span className="decoration-yellow-500 underline">GitHub</span>.
        </p>
        <div className="flex flex-row items-center justify-center">
          {""}
          <SocialIcon
            url="https://www.linkedin.com/in/caolanhamilton/"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 140, width: 140 }}
          />
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 150, width: 150 }}
            url="mailto:caolanhamilton75@gmail.com"
          />
          <SocialIcon
            url="https://www.github.com/caolanhamilton/"
            fgColor="white"
            bgColor="transparent"
            style={{ height: 130, width: 140 }}
          />
        </div>
      </div>
      <footer className="absolute bottom-4">
        <Link href="#hero">
          <BsArrowUpCircle className="text-gray-200 text-6xl animate-bounce" />
        </Link>{" "}
      </footer>
    </motion.div>
  );
};
