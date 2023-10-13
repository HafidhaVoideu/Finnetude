import logo from "../assets/logo.svg";

type LogoProps = {
  component: "footer" | "header";
};

const Logo = ({ component }: LogoProps) => {
  return (
    <div
      className={`flex  items-center gap-1  ${
        component === "footer" ? "justify-start" : "justify-center"
      } `}
    >
      <img
        src={logo}
        alt="logo"
        className="w-[25px]  md:w-[50px]  lg-w[70px] "
      />
      <span className="text-white  font-TLogo  text-base  md:text-xl  ">
        Finnetude
      </span>
    </div>
  );
};

export default Logo;
