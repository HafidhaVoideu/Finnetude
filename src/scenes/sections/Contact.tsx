import Title from "../../components/Title";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="section mb-16 drop-shadow-xl" id="contact">
      <Title subText="Today" text="Get In Touch " />

      <div className="flex flex-col w-full md:flex-row gap-y-4 lg:gap-5 bg-white  ">
        {/* Get in Touch Section */}
        <section className=" bg-gradient-to-t order-last md:order-first from-lavender via-secondary to-secondary  text-white py-8  px-8  ">
          <h2 className="mb-8  font-bold text-xl "> Get In Touch</h2>

          <div className=" grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-1 gap-8  w-full ">
            <article>
              <span className="font-medium text-lg ">Visit Us</span>
              <p className="mt-4 max-w-[400px]">
                lot n° 187 2eme etage, boudiaf mohamed e, Ouled Fayet 16094
              </p>
            </article>

            <article>
              <span className="font-medium text-lg">Chat With Us</span>
              <p className="mt-4 max-w-[400px]">
                lot n° 187 2eme etage, boudiaf mohamed e, Ouled Fayet 16094
              </p>
            </article>

            <article>
              <span className="font-medium text-lg">Call Us</span>
              <p className="mt-4 max-w-[400px]">
                Mon-Fir from 8am to 5pm +213 666-55-55-55
              </p>
            </article>
            <article>
              <span className="font-medium text-lg ">Social Media</span>
              <div className="mt-4 flex gap-4 ">
                <a href="#" className="text-xl">
                  <BsInstagram />
                </a>
                <a href="#" className="text-xl">
                  <BsTwitter />
                </a>
                <a href="#" className="text-xl">
                  <BsLinkedin />
                </a>
                <a href="#" className="text-xl">
                  <BsFacebook />
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Form Section*/}

        <form className="max-w-screen-lg ">
          <section className="  p-4 md:p-8     bg-white   grid grid-cols-1 gap-4 md:grid-cols-2 ">
            <p className="mt-1 text-sm lg:text-md  leading-6 text-gray-600  md:col-span-2  ">
              We would love to hear about your ideas and how we can help you
              realize them.
            </p>

            <fieldset className=" md:col-span-2 ">
              <legend className=" mt-8 text-sm font-semibold leading-6 text-gray-900">
                Interest in A solution*
              </legend>
              <div className="mt-6  p-2  flex gap-4    items-center  text-sm flex-wrap  ">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="alpha"
                      name="Alpha+"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-indigo-400"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="comments"
                      className="font-medium text-gray-900"
                    >
                      Alpha+
                    </label>
                  </div>
                </div>

                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="e-trading"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-indigo-400"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="e-trading"
                      className="font-medium text-gray-900"
                    >
                      E-trading
                    </label>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="other"
                      name="other"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-secondary focus:ring-indigo-400"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="other"
                      className="font-medium text-gray-900"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Personal Information */}

            <div className=" md:col-span-2 ">
              <h2 className="text-sm sm:text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-xs sm:text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>

            {/* First Name*/}

            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Phone*/}

            <div>
              <label
                htmlFor="eamil"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="emai"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Company */}

            <div className=" md:col-span-2 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Description */}

            <div className=" md:col-span-2 ">
              <label
                htmlFor="description"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2 ">
                <textarea
                  id="des"
                  name="des"
                  rows={7}
                  placeholder="Enter a description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className=" mt-3 place-self-center md:place-self-start   md:col-span-2 w-7/12  bg-secondary px-3  py-3 sm:py-5  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </section>
        </form>
      </div>
    </section>
  );
};

export default Contact;
