import React from "react";

type Props = {};

export default function ExpCard({}: Props) {
  return (
      <article className="flex flex-col items-center rounded-lg space-y-7 flex-shrink-0 w-[500px] w-auto md:w-[600px] snap-center bg-purple-500 p-6">
          <img
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src="https://www.globallogic.com/wp-content/uploads/2021/11/Symbol-29.png"
          alt="GlobalLogic logo"
        ></img>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl text-white">Delivery consultant</h4>
              <p className="font-bold text-2xl mt-1 text-white">GlobalLogic</p>
   
        <p className="text-gray-300 py-5">1/09/22 - Present</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li className="text-white">summary...</li>
        </ul>
      </div>
    </article>
  );
}
