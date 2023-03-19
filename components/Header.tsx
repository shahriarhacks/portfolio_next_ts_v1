import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-20 p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {/* <SocialIcon
          url="https://www.github.com/shahriar7ahmed"
          fgColor="gray"
          bgColor="transparent"
        />{" "} */}
        <SocialIcon
          url="https://www.linkedin.com/in/shahriar7ahmed"
          fgColor="gray"
          bgColor="transparent"
        />
        {/* <SocialIcon
          url="https://www.pinterest.com/shahriar7ahmed"
          fgColor="gray"
          bgColor="transparent"
        />{" "}
        <SocialIcon
          url="https://www.medium.com/@shahriar7ahmed"
          fgColor="gray"
          bgColor="transparent"
        />{" "} */}
        <SocialIcon
          url="https://www.facebook.com/shifat.talukd"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com/shahriar7ahmed"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/shahriar7ahmed"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="cursor-pointer flex flex-row items-center text-gray-300"
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};
export default Header;
