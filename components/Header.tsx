import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export const Header = () =>{
  return (
    <header className="sticky top-0 flex items-start max-w-6xl mx-auto z-50">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        {/* social icon */}
        <SocialIcon
          url="https://www.linkedin.com/in/caolanhamilton/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/caolanhamilton"
          fgColor="white"
          bgColor="transparent"
        ></SocialIcon>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="white"
          bgColor="transparent"
          url="mailto:caolanhamilton75@gmail.com"
        />
      </motion.div>
    </header>
  );
}
