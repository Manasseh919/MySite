import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Software Consulting"
          des="Providing expert advice and guidance to clients regarding various aspects of
           software development This can include assessing existing software systems, identifying areas for improvement, 
           and recommending solutions to help clients achieve their software-related goals."
        />
        <Card
          title="Web App Development"
          des="Designing, building, and maintaining software applications that run on web browsers
           and can be accessed on any device with an internet connection"
          icon={<AiFillAppstore />}
        />
        {/* <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        /> */}
        <Card
          title="Mobile Development"
          des="Creating software applications designed to run on mobile devices such as 
          smartphones and tablets, with the aim of providing a specific service or functionality."
          icon={<FaMobile />}
        />
        {/* <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        /> */}
        <Card
          title="Hosting Websites"
          des="This service that allows individuals and organizations to make 
          their websites accessible on the internet by storing them on a server 
          connected to the internet 24/7."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
