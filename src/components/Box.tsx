import { motion } from "framer-motion";

type BoxProps = {
  text: string;
};

const Box = ({ text }: BoxProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, x: -33 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
      className="bg-slate-500  font-medium text-lg  rounded-md p-3 text-center lg:justify-start flex items-center justify-center  drop-shadow-md"
    >
      {text}
    </motion.p>
  );
};

export default Box;
