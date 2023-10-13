import Title from "../../components/Title";

import image from "../../assets/Landing-page 1.png";
const Solutions = () => {
  return (
    <section className="section" id="solutions">
      <Title text="More" subText="Solutions" />

      <section className=" flex flex-col  items-start  gap-14   md:flex-row  sm:items-center justify-between ">
        <div>
          <h2 className="font-Theading font-bold text-2xl md:text-3xl mb-8   ">
            {" "}
            E-Trade (External Commerce)
          </h2>

          <p className="md:max-w-[550px] text-basis">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            mollitia commodi eos itaque in quia consequatur, fuga deleniti modi
            accusamus quas atque porro doloribus, quo accusantium repellendus!
            Quia, consectetur nesciunt.
          </p>

          <div className="mt-6  flex  gap-2 flex-col  min-[320px]:flex-row  max-w-[400px] ">
            <button className="border-secondary border-solid border-2  rounded-md py-2 flex-1 text-secondary">
              Get Started
            </button>
            <button className="bg-secondary text-white rounded-md py-2 flex-1   ">
              See More
            </button>
          </div>
        </div>

        <div>
          <img src={image} alt="trading" />
        </div>
      </section>
    </section>
  );
};

export default Solutions;
