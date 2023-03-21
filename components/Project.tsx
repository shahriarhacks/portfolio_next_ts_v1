import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Project = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-20 py-0 h-[90vh]"
    >
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        src="/me.jpg"
        alt="Shifat"
        className="w-1/2 h-1/2"
      />
      <div className="max-w-6xl space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-medium text-center ">
          <span className="underline decoration-yellow-900/50">Case Study</span>{" "}
          1 of 5 of UPS clone
        </h4>
        <p className="text-center md:text-left">
          This is a beautiful restaurant menu template that contains an artistic
          design. The hero page consists of a beautiful demo of the restaurant
          along with its various cuisine items. We have the menu in the next
          section along with a nv bar that helps navigate the webpage with ease.
          This template makes for an amazing UI / UX experience for the user who
          is ordering food!
        </p>
      </div>
    </motion.div>
  );
};

export default Project;
