import React from "react";
import { motion } from "framer-motion";
import { ExpCard } from "./ExpCard";
type Props = {};

const experience = [
  {
    photoUrl:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bmpcglw3rxipjxnctyan",
    position: "Delivery Consultant",
    company: "GlobalLogic",
    date: "Sept 22 - Present",
    summaryPoints: [
      "Training in academy for 3 months",
      "Learning Development, DevOps & Testing",
      "Trained in presentation and soft skills",
    ],
  },
  {
    photoUrl:
      "https://media-exp1.licdn.com/dms/image/C4D0BAQFvuv0bbFovrA/company-logo_200_200/0/1606747044273?e=1671667200&v=beta&t=lO0vVLbYePmTwebNVWVSkiHjVsOY90Qze-JI1Vi-jPI",
    position: "Student Software Engineer",
    company: "Northcoders",
    date: "April 22 - Jul 22",
    summaryPoints: [
      "Completed full-stack development course",
      "Learnt React, Express, Node, REST APIs, PSQL",
    ],
  },
  {
    photoUrl:
      "https://media-exp1.licdn.com/dms/image/C560BAQHAe-roNpTebg/company-logo_200_200/0/1657119739427?e=1671667200&v=beta&t=l5ip5UPGpQwnTQmSKFU3mW-e00vmMtZDl5SLgEhmNBo",
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
      "https://media-exp1.licdn.com/dms/image/C560BAQEYpS-SHXO1Mg/company-logo_200_200/0/1519900649377?e=1671667200&v=beta&t=__c2fdMyRQJMLBHD7ul_MieJMuvvfmylPLCUmEqgA0g",
    position: "Technical Support Rep",
    company: "Uni of Manchester",
    date: "Aug 15 - Jun 16",
    summaryPoints: [
      "Provided first line technical support to customers",
      "Liaised with customers onsite and remotely",
    ],
  },
];

export default function Experience({}: Props) {
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
