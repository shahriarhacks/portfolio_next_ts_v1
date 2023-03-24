import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skills = ({ directionLeft }: Props) => {
  return (
    <div className="group relative cursor-pointer flex">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.3,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
        src="/mine.jpg"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out rounded-full z-0 group-hover:bg-white h-16 w-16">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
