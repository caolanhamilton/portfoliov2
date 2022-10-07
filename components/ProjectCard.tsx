import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

interface ProjectCardProps { 
  imgUrl: string;
  name: string;
  frontOrBack: string;
  summary: string;
  gitHub: string;
  videoUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = (project: ProjectCardProps) => {
  return (
    <article className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[100%] md:w-[500px] snap-center bg-purple-500 p-0 drop-shadow-xl">
      {project.imgUrl ? (
        <img
          className="w-full h-42 md:h-60 object-cover object-center rounded-t-lg"
          src={project.imgUrl}
          alt="Project image"
        ></img>
      ) : (
        <iframe
          className="w-full h-42 md:h-60 rounded-t-lg"
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
        <p className="font-bold text-l md:text-2xl mt-1 text-white">
          {project.frontOrBack}
        </p>
        <p className="text-gray-200 py-1 md:py-5">{project.summary}</p>
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
}
