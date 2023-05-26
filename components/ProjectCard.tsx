import { StaticImageData } from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

interface ProjectCardProps {
  imgUrl?: StaticImageData;
  name: string;
  frontOrBack: string;
  summary: string;
  gitHub: string;
  videoUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = (
  project: ProjectCardProps
) => {
  return (
    <article className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[100%] md:w-[500px] snap-center bg-[#2a4745] p-0 drop-shadow-xl">
      {project.imgUrl ? (
        <img
          className="w-full h-42 md:h-60 rounded-t-lg object-cover"
          src={project.imgUrl.src}
          alt="Project image"
        ></img>
      ) : (
        <iframe
          className="w-full h-40 md:h-60 rounded-t-lg"
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/yF6A6Rio4Js"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      <div className="px-4 md:px-10">
        <h4 className="text-2xl md:text-4xl text-white">{project.name}</h4>
        <p className="font-bold text-lg md:text-2xl mt-0 md:mt-1 text-white">
          {project.frontOrBack}
        </p>
        <p className="text-gray-200 text-lg py-0 md:py-5">{project.summary}</p>
        <div className="flex flex-row list-none text-lg items-center justify-center">
          <SocialIcon
            url={project.gitHub}
            fgColor="white"
            bgColor="transparent"
          />
        </div>
      </div>
    </article>
  );
};
