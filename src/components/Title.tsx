import { motion } from "framer-motion";

import { textVariant2 } from "../utils/motion";
type TitleProps = {
  text: string;
  subText: string;
};

const Title = ({ text, subText }: TitleProps) => {
  return (
    <motion.h1
      className=" text-[32px]  font-TLogo min-[320px]:text-[45px] capitalize md:text-5xl   lg:text-6xl my-8 md:my-12 lg:my-24 "
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
    >
      {text}
      <span className=" mx-2  text-secondary">{subText}</span>
    </motion.h1>
  );
};

export default Title;
