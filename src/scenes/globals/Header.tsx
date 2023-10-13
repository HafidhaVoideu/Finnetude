import Logo from "../../components/Logo";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

type ListProps = {
  style: "desktop" | "mobile";
  isMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) setIsScroll(true);
    else setIsScroll(false);
    if (window.scrollY > 500) setShowTopButton(true);
    else setShowTopButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const List = ({ style, isMenu }: ListProps) => {
    const desktopStyle = "  text-white  hover:text-coquelicot duration-300";
    const mobileStyle =
      "text-white hover:text-green sm:text-3xl    duration-300";
    const menu = [
      { tag: "Home", ref: "#home" },
      { tag: "Solutions", ref: "#solutions" },
      { tag: "Career", ref: "#career" },
      { tag: "Blog", ref: "#news" },
      { tag: "About us", ref: "#about" },
    ];
    return menu.map((item) => (
      <li
        key={item.tag}
        onClick={() => isMenu(false)}
        className={`${
          style === "desktop" ? desktopStyle : mobileStyle
        }  active:text-blue-200   font-Theading  hover:text-secondary duration-300  `}
      >
        <a href={item.ref}> {item.tag} </a>
      </li>
    ));
  };
  return (
    <header className="flex justify-between px-2  h-[8vh] md:h-[9vh] lg:h-[11vh]  md:px-4 bg-primary    ">
      <Logo component="header" />

      {/* Mobile nav */}

      <button
        onClick={() => setIsMenu(true)}
        className="block lg:hidden bg-primary p-2   text-white rounded-md   text-xl  sm:text-3xl"
      >
        <HiMenu />
      </button>

      {isMenu && (
        <motion.nav
          initial={{ y: "-100vh" }}
          animate={{ y: "0vh" }}
          transition={{
            ease: "linear",
            duration: 0.2,
          }}
          className=" min-h-full w-full  fixed inset-0   flex flex-col items-center justify-center  bg-primary z-50 gap-32 "
        >
          <button
            className=" absolute top-4 right-4  bg-blackfogra_3 text-white text-xl self-end  rounded-md p-2"
            onClick={() => setIsMenu(false)}
          >
            <AiOutlineClose />{" "}
          </button>
          <ul className="flex flex-col items-center justify-center gap-10 ">
            <List style="mobile" isMenu={setIsMenu} />
          </ul>
        </motion.nav>
      )}

      {showTopButton && (
        <button
          className={`fixed bottom-10 right-4 lg:right-8 text-4xl  text-secondary z-20 drop-shadow-lg   hover:text-lightgray `}
          onClick={scrollToTop}
        >
          <BsFillArrowUpSquareFill />
        </button>
      )}

      {/* Desktop nav */}

      <div className="hidden lg:flex gap-20 items-center ">
        <nav>
          <ul className="flex gap-8">
            <List style="desktop" isMenu={setIsMenu} />
          </ul>
        </nav>

        <a
          href="#contact"
          className="bg-secondary  hover:bg-opacity-80 duration-300  text-center text-white  font-Tbutton  p-2 px-4  "
        >
          Contact us
        </a>
      </div>
    </header>
  );
};

export default Header;
