
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-20 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 tracking-[15px] uppercase text-white text-2xl">
        About
      </h3>
      <img
        src="https://www.caolanhamilton.co.uk/images/meonmoutaintopinspain.jpg"
        className="rounded-full object-cover md:rounded-lg h-56 w-56 md:w-auto md:h-64 xl:w-[500px] xl:h-[500px]"
      ></img>

      <div className="space-y-10 px-0 md:px-20">
        <p className="text-white text-s md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Perspiciatis, temporibus repudiandae beatae error ex vitae esse in,
          nostrum autem, possimus officiis ipsa quibusdam sunt voluptatem
          asperiores impedit soluta. Unde, rem! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Architecto et optio accusamus quia
          molestias. Velit vero qui dignissimos, eius odit, accusamus ex nihil
          exercitationem quisquam beatae incidunt possimus alias provident!
        </p>
      </div>
    </motion.div>
  );
}
