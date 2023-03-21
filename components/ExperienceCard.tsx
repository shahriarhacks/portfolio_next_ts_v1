import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col py-2 rounded-lg bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden items-center space-y-7 flex-shrink-0 w-[500px] md-[600px] xl:[900px] snap-center">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/mine.jpg"
        alt="Mine"
        className="w-32 h-32 rounded-full object-cover object-top"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Founder & CEO</h4>
        <p className="font-semibold text-xl mt-1">OffCarry Environment Inc.</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work .... - Ended
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg m-0">
          <li>Summery Points Summery Points Summery Points Summery Points</li>
          <li>Summery Points Summery Points Summery Points Summery Points</li>
          <li>Summery Points Summery Points Summery Points Summery Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
