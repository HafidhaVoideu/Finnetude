import Title from "../../components/Title";
import Box from "../../components/Box";
import graph from "../../assets/graph&market.png";
import market from "../../assets/market.png";
import { motion } from "framer-motion";
const AlphaPlatform = () => {
  const data = [
    {
      id: "e-1",
      text: " Analyse players progress",
    },
    {
      id: "e-2",
      text: "Own You Special Game Place",
    },
    {
      id: "e-3",
      text: " Find The session Winner",
    },
  ];

  return (
    <section className="bg-slate-200" id="about">
      <div className="section  flex flex-col justify-center items-center gap-6">
        <Title text="About Alpha" subText="Platform" />

        <p className="max-w-3xl  -mt-6  text-sm  md:text-base ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          blanditiis eos nemo, ea reiciendis, quae laborum alias facere ex nobis
          obcaecati ut soluta odit numquam sequi aut architecto sint
          perspiciatis. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Temporibus, blanditiis eos nemo, ea reiciendis, quae laborum
          alias facere ex nobis obcaecati ut soluta odit numquam sequi aut
          architecto sint perspiciatis.
        </p>
        <button className="bg-secondary text-white p-2 my-8  hover:bg-opacity-80 duration-300 ">
          Contact Us For Solutions
        </button>

        {/* second Section */}

        <section className="  mt-8 flex flex-col  justify-between gap-12  lg:flex-row w-full">
          <div className="    grid  md:grid-cols-3    lg:grid-cols-1 gap-8  text-white p-2 lg:max-w-[450px]   ">
            <Box text="Own your Special Game Place"></Box>

            <motion.p
              initial={{ opacity: 0, x: -33 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="bg-gray-500  rounded-md p-4  row-span-2 text-sm  drop-shadow-md "
            >
              <span className="block font-medium mb-2 text-lg  ">
                Watch the players Trading
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ab id expedita perspiciatis provident explicabo obcaecati placeat
              at magni quaerat at magni quaerat at magni quaerat.
            </motion.p>
            {data.map((element) => (
              <Box key={element.id} text={element.text} />
            ))}
          </div>

          <div className=" bg-primary rounded-md flex justify-center items-center drop-shadow-xl xl:ml-28">
            <img src={graph} alt="trading" />
          </div>
        </section>

        {/* Third Section */}

        <section className=" flex flex-col  justify-between gap-12  lg:flex-row  mt-20 w-full  ">
          <div className="  bg-primary  rounded-md  order-last lg:order-first flex justify-center items-center  drop-shadow-xl ">
            <img src={market} alt="market" />
          </div>
          <div className="  grid  md:grid-cols-3   lg:grid-cols-1 gap-8  text-white p-2 lg:max-w-[450px]  self-start">
            <motion.p
              initial={{ opacity: 0, x: -33 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              className="bg-gray-500  rounded-md p-4  row-span-2 text-sm  drop-shadow-md "
            >
              <span className="block font-medium mb-2 text-lg  ">
                Own You Special Gaming Place
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              ab id expedita perspiciatis provident explicabo obcaecati placeat
              at magni quaerat at magni quaerat at magni quaerat.
            </motion.p>

            <Box text="Watch The Players Trading"></Box>

            {data.map((element) => (
              <Box key={element.id} text={element.text} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default AlphaPlatform;
