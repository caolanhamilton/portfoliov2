import Image from "next/image";
import React from "react";

type Props = {};

interface ExperienceProps {
  photoUrl: string;
  position: string;
  company: string;
  date: string;
  summaryPoints: string[];
}

export const ExpCard: React.FC<ExperienceProps> = (
  experience: ExperienceProps
) => {
  return (
    <article className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[100%] md:w-[500px] snap-center bg-purple-500 p-6 drop-shadow-xl">
      <div className="w-20 h-20  md:w-32 md:h-32 rounded-full object-cover object-center drop-shadow-xl">
        <Image
          className="w-20 h-20  md:w-32 md:h-32 rounded-full object-cover object-center"
          src={experience.photoUrl}
          alt="Company logo"
          layout="fill"
          objectFit="cover"
          priority={true}
        ></Image>
      </div>
      <div className="px-2 flex flex-col items-start md:px-10">
        <h4 className="text-2xl md:text-4xl font-bold text-white mb-2">
          {experience.position}
        </h4>
        <p className="text-xl md:text-2xl text-gray-100">
          {experience.company}
        </p>
        <p className="text-gray-300 text-lg md:text-1xl py-3">
          {experience.date}
        </p>

        <ul className="list-disc space-y-1 ml-5 text-lg">
          {experience.summaryPoints.map((point: string, index: number) => {
            return (
              <li key={index} className="text-white">
                {point}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
};
