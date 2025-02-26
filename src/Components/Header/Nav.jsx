import Logo from "../../assets/defcommlogo.png";
import { PiArrowBendDownRightThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

function Nav() {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropDown);
  };

  return (
    <>
      <div className="fixed z-10 top-0 left-0 flex bg-lime-900 bg-opacity-40 w-full h-[70px] md:justify-between items-center text-white px-6 md:px-10">
        <div className="w-[80px]">
          <img src={Logo} alt="DeffComm Logo" className="w-[50px] md:w-0" />
        </div>

        <div className="flex-1">
          <ul className="hidden md:flex justify-center mx-auto items-center gap-6">
            <li className="border-r-2 py-2 px-4 border-stone-900">Home</li>
            <li className="border-r-2 py-2 px-4 border-stone-900">Service</li>
            <li className="border-r-2 py-2 px-4 border-stone-900">Technology</li>
            <li className="flex justify-center gap-4 py-2 px-4 border-r-2 border-stone-900 items-center">
              <p>Feature</p>
              <p>
                <PiArrowBendDownRightThin />
              </p>
            </li>
          </ul>
        </div>

        <div className="ml-auto mr-2 md:mr-0 flex items-center justify-center gap-2 md:gap-4">
          <div className="p-2 rounded-[50%] bg-stone-500">
            <CiSearch />
          </div>
          <div className="p-1 px-2 md:px-4 rounded-2xl bg-white text-black text-center">
            Login
          </div>
        </div>

        
        <div onClick={handleClick} className="md:hidden cursor-pointer">
          {dropDown ? <RiCloseLargeFill /> : <FaBarsStaggered />}
        </div>
      </div>
      <ul
          className={`fixed top-0 right-[-30px] h-[600px] w-[220px] z-20 shadow-xl bg-linear-gradient border-r border-lime-500 opacity-2  transition-transform duration-300 ease-in-out 
          ${dropDown ? "translate-x-0" : "translate-x-full"}`}
        >
          <li className="p-4 text-white text-lg" onClick={() => setDropDown(false)}><RiCloseLargeFill /> </li>
          <li className="p-4 text-white hover:bg-lime-800 hover:translaition-transform hover:shadow-xl duration-300 ease-in-out 200">Home</li>
          <li className="p-4 text-white hover:bg-lime-800 hover:translaition-transform hover:shadow-xl duration-300 ease-in-out 200">Service</li>
          <li className="p-4 text-white hover:bg-lime-800 hover:translaition-transform hover:shadow-xl duration-300 ease-in-out 200">Technology</li>
          <li className="p-4 text-white hover:bg-lime-800 hover:translaition-transform hover:shadow-xl duration-300 ease-in-out 200">Featured</li>
          <li className="p-4 text-white hover:bg-lime-800 hover:translaition-transform hover:shadow-xl duration-300 ease-in-out 200">Careers</li>
          <li className="p-4 text-white hover:bg-lime-800 hover:translaition-transform hover:shadow-xl duration-300 ease-in-out 200">Contact Us</li>
        </ul>
    </>
  );
}

export default Nav;
