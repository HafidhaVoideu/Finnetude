import { motion } from "framer-motion";
import { textVariant2 } from "../../utils/motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "linear", duration: 0.5 }}
      className="   w-full b flex justify-center  items-center  bg-section  "
      id="home"
    >
      <div className=" w-full px-4 mt-12   lg:mt-24  mb-14 text-white text-center   grid place-items-center  gap-6 md:gap-12   ">
        <motion.h1
          className="font-TLogo font-extrabold  leading-10 text-4xl md:text-6xl lg:text-7xl drop-shadow-lg leading-1oose max-w-[1000px]  "
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
        >
          <span className="inline-block mb-1 md:mb-5">
            {" "}
            The 1st Trading Simulation
          </span>
          Platform In Algeria
        </motion.h1>

        <p className="font-Tparagraph  text-sm sm:text-lg lg:text-xl  max-w-2xl  ">
          If you have a business and you need to reach your employees or
          students Alpha + trading is the best platform that gives you access to
          a wide variety of trading options.
        </p>

        <div className=" capitalize text-white flex flex-col items-center justify-center gap-4  md:flex-row  font-bold  mt-6">
          <button className="bg-ternery px-6 py-2  bg-ternary  rounded-lg  hover:bg-opacity-80 duration-300    text-md  md:text-lg lg:text-xl ">
            Get your version now
          </button>

          <button className="border-ternary   px-6 py-2  border-solid border-2 rounded-lg hover:border-red-600 duration-300  text-md  md:text-lg lg:text-xl ">
            Learn more
          </button>
        </div>

        <h2 className="   max-w-2xl   font-TLogo font-bold  text-md sm:text-xl  md:text-2xl  mt-4 ">
          Create a trading game between you traders and see who's the expert
        </h2>
      </div>
    </motion.section>
  );
};

export default Home;
