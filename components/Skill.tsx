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
        <div className="rounded-full border-4 drop-shadow-lg border-gray-300 object-cover h-16 w-16 md:h-28 md:w-28  mx-2">
          <Image
            className="rounded-full border-4 border-gray-300 object-cover h-16 w-16 md:h-28 md:w-28  mx-2"
            src={skill.img}
            alt="Skill logo"
            layout="fill"
            objectFit="cover"
            priority={true}
          ></Image>
        </div>
        <figcaption className="text-gray-200 m-1">{skill.skillName}</figcaption>
      </figure>
    </div>
  );
};
