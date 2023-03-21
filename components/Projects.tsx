import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-green-300/40 z-20">
        {projects.map((project, i) => (
          <Project key={i} />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#475841]/30 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
