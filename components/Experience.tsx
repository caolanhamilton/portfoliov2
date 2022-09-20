import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";
type Props = {};

export default function Experience({}: Props) {
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
        Experience
      </h3>
      <div className="w-full m-auto flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
      </div>
    </motion.div>
  );
}
