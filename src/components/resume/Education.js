import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - till date</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Ghana,Legon (2019 - To Date)"
            // result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="General Science"
            subTitle="Ghana Secondary Technical School (2016 - 2019)"
            // result="4.75/5"
            des="Secondary Education"
          />
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - till date</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web developer"
            subTitle="Ampe Digital - (OCT 2022 - JAN 2023)"
            result="Hybrid"
            des="Building a website for a client as a web developer intern using WordPress was a great learning experience. 
            I had to use my problem-solving skills to troubleshoot 
            issues that arose during the development process. I also had 
            to ensure that the website was responsive and user-friendly."
          />
          <ResumeCard
            title="Marketer (Internship)"
            subTitle="Zenith Bank Ghana - (SEP 2022 - OCT 2022)"
            result="Ghana,Sekondi-Takoradi"
            des="My experience working with senior marketers has allowed me 
            to develop skills in market research, developing marketing plans, 
            and executing marketing campaigns across multiple channels. 
            I have gained experience in using various digital marketing tools"
          />
          <ResumeCard
            title="Web Developer (Internship)"
            subTitle="Creation Unite - (MAR 2022 - AUG 2022)"
            result="Oman"
            des="I have gained valuable skills in developing and designing high-quality websites. 
            During my internship, I worked on several projects that involved building user-friendly 
            interfaces and implementing responsive designs that adapt to different screen sizes."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
