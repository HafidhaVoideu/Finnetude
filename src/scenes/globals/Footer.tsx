import Logo from "../../components/Logo";

import { FaFacebookF, FaInstagram } from "react-icons/fa6";

import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

// py-20  lg:py-32
const Footer = () => {
  return (
    <section className="bg-primary">
      <footer className="section bg-transparent text-white  grid grid-cols-1 min-[320px]:grid-cols-2     sm:grid-cols-3  py-12  lg:grid-cols-5  gap-8  items-start justify-between  place-content-center    pl-20 lg:pl-6  ">
        <div>
          <div className="mb-6">
            <Logo component="footer" />
          </div>
          <p className="max-w-[220px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* About Us */}
        <ul className=" list  font-Theading flex flex-col gap-4   ">
          <li className="font-bold mb-4 "> About Us </li>
          <li>
            <a href="#"> Mission</a>
          </li>
          <li>
            <a href="#"> Our Team</a>
          </li>
          <li>
            <a href="#"> Testimonials</a>
          </li>
          <li>
            <a href="#"> Privacy Policy</a>
          </li>
        </ul>
        {/* Solutions */}

        <ul className="list   font-Theading flex flex-col gap-4 ">
          <li className="font-bold mb-4 "> Solutions </li>
          <li>
            <a href="#"> Alpha +</a>
          </li>
          <li>
            <a href="#">E-Trade</a>
          </li>
          <li>
            <a href="#"> Ask For Solutions</a>
          </li>
          <li>
            <a href="#"> Privacy Policy</a>
          </li>
        </ul>

        {/* Resources*/}

        <ul className="list    font-Theading flex flex-col gap-4  ">
          <li className="font-bold mb-4 "> Resources </li>
          <li>
            <a href="#"> Blogs</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#"> Contact us</a>
          </li>
        </ul>

        {/* Contact Us */}

        <ul className=" list font-Theading flex flex-col gap-5  ">
          <li className="font-bold mb-4 "> Contact Us</li>

          <li className="  flex gap-2 items-center ">
            <button className="bg-gray-300 rounded-lg p-1.5 text-slate-800">
              <FaFacebookF />
            </button>
            <a href="#">Facebook</a>
          </li>
          <li className="  flex gap-2 items-center ">
            <button className="bg-gray-300 rounded-lg p-1.5 text-slate-800">
              <FaInstagram />
            </button>
            <a href="#">Instagram</a>
          </li>

          <li className="  flex gap-2 items-center ">
            <button className="bg-gray-300 rounded-lg p-1.5 text-slate-800">
              <FaTwitter />{" "}
            </button>

            <a href="#">Twitter</a>
          </li>
          <li className="  flex gap-2 items-center ">
            <button className="bg-gray-300 rounded-lg p-1.5 text-slate-800">
              <FaLinkedinIn />
            </button>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Footer;
