import React from "react";
import Image from "next/image";

type Props = {};

interface SkillProps {
  skillName: string;
  img: string;
}

export const Skill: React.FC<SkillProps> = (skill: SkillProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <figure className="flex flex-col items-center justify-center">
        <img
          className="rounded-full border-4 border-gray-300 object-cover h-12 w-12 md:h-28 md:w-28  mx-2 drop-shadow-lg "
          src={skill.img}
          alt="Skill logo"
        ></img>
        <figcaption className="text-gray-200 text-xs md:text-lg m-1">{skill.skillName}</figcaption>
      </figure>
    </div>
  );
};
