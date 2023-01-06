import React from "react";
import { motion } from "framer-motion";
import { ExpCard } from "./ExpCard";

const experience = [
  {
    photoUrl:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bmpcglw3rxipjxnctyan",
    position: "Delivery Consultant",
    company: "GlobalLogic",
    date: "Sept 22 - Present",
    summaryPoints: [
      "Worked on internal projects utilising Node.js, Express, Cypress, Jest, AWS with Terraform and Jenkins.",
      "Utilised DevOps and Agile practices.",
    ],
  },
  {
    photoUrl:
      "https://pbs.twimg.com/profile_images/1333392601450426370/x_DT51WI_400x400.jpg",
    position: "Student Software Engineer",
    company: "Northcoders",
    date: "April 22 - Jul 22",
    summaryPoints: [
      "Completed 13 week full-stack development course.",
      "Learnt React, Express, Node, REST APIs, PSQL.",
    ],
  },
  {
    photoUrl:
      "https://pbs.twimg.com/profile_images/1414663234288709633/JtPIaOe6_400x400.jpg",
    position: "Search Engine Evaluator",
    company: "Telus International AI",
    date: "Jan 19 - April 22",
    summaryPoints: [
      "Provided feedback on accuracy and trustworthiness of search results",
      "Clients included worlds largest search engines",
    ],
  },
  {
    photoUrl:
      "https://scontent-man2-1.xx.fbcdn.net/v/t1.18169-9/12003313_1199441630082259_4602572450153020544_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uDmq0aGD10kAX95dEv_&_nc_ht=scontent-man2-1.xx&oh=00_AfCDfOtQZe18mC5ZQuExVYWH7elKU4DXcw3OokKj6NV2gw&oe=63DFBFF5",
    position: "Technical Support Rep",
    company: "Uni of Manchester",
    date: "Aug 15 - Jun 16",
    summaryPoints: [
      "Provided first line technical support to customers",
      "Liaised with customers onsite and remotely",
    ],
  },
];

export default function Experience() {
  return (
    <div className="h-screen flex flex-col items-center justify-start">
      <div className="pt-20 text-center">
        <h3 className="tracking-[15px] uppercase text-white text-2xl">
          Experience
        </h3>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        className="h-full flex relative flex-col text-left md:text-left md:flex-row max-w-full  justify-evenly mx-auto  items-center overflow-hidden"
      >
        <div className="w-full h-full m-auto flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-900 px-10 pb-20 pt-10 md:p-20 snap-x snap-mandatory">
          {experience.map((experience, index) => {
            return <ExpCard {...experience} key={index}></ExpCard>;
          })}
        </div>
      </motion.div>
    </div>
  );
}
