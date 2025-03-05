import Logo from "../../assets/defcommlogo.png";
import { PiArrowBendDownRightThin } from "react-icons/pi";
// import { CiSearch } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import defcommlogo from "../../assets/Defcomm-03 1.png"
import { motion } from "framer-motion"




function Nav() {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropDown);
  };


const initialVariant = {
  hidden:{
    opacity: 0
  },
  visible:{
    opacity: 10,
    transition:{
      delay:0.5, 
      
    }
  }
}



  return (
    <motion.div
    variants={initialVariant}
    initial="hidden"
    animate="visible"
   >
      <div className="fixed z-10 py-2 md:py-0 left-0 flex bg-nav-background  w-full md:justify-between items-center text-white px-6 md:px-10">
        <div className=" ">
          <img src={defcommlogo} alt="DeffComm Logo" className="w-[150px] md:w-[250px]  " />
        </div>

        <motion.div 
        className="flex-1"
        >

          <ul className="hidden md:flex justify-center mx-auto items-center gap-6">
            <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="border-r py-2 px-3 border-stone-600 ">Home</motion.li>
            <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="border-r py-2 px-3 border-stone-600">Service</motion.li>
            <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="border-r py-2 px-3 border-stone-600">Technology</motion.li>
            <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="flex justify-center gap-4 py-2 px-3 border-r border-stone-600 items-center">
              <p>Feature</p>
              <p>
                <PiArrowBendDownRightThin />
              </p>
            </motion.li>
          </ul>
        </motion.div>

        <div className="ml-auto mr-2 md:mr-0 flex items-center justify-center gap-2 md:gap-4">
          {/* <div className="p-2 rounded-[50%] bg-stone-500">
            <CiSearch />
          </div> */}
          <motion.div whileHover={{scale:1.1, fontWeight:"bold", boxShadow:"0px 0px 8px rgb(255,255,255)"}} className="p-1 px-2 md:px-4 rounded-2xl bg-white text-black text-center">
            Login
          </motion.div>
        </div>

        
        <div onClick={handleClick} className="md:hidden cursor-pointer">
          {dropDown ? <RiCloseLargeFill /> : <FaBarsStaggered />}
        </div>
      </div>


      <ul
          className={`fixed top-0 right-[-30px] h-[600px] w-[220px] z-20 shadow-xl bg-linear-gradient border-r border-lime-500 opacity-2  transition-transform duration-300 ease-in-out 
          ${dropDown ? "translate-x-0" : "translate-x-full"}`}
        >
          <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="p-4 text-white text-lg" onClick={() => setDropDown(false)}><RiCloseLargeFill /> </motion.li>
          <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="p-4 text-white hover:bg-lime-800  hover:shadow-xl duration-300 ease-in-out 200">Home</motion.li>
          <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="p-4 text-white hover:bg-lime-800  hover:shadow-xl duration-300 ease-in-out 200">Service</motion.li>
          <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="p-4 text-white hover:bg-lime-800  hover:shadow-xl duration-300 ease-in-out 200">Technology</motion.li>
          <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="p-4 text-white hover:bg-lime-800  hover:shadow-xl duration-300 ease-in-out 200">Featured</motion.li>
          <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="p-4 text-white hover:bg-lime-800  hover:shadow-xl duration-300 ease-in-out 200">Careers</motion.li>
          <motion.li whileHover={{scale:1.1, fontWeight:"bold", textShadow:"0px 0px 8px rgb(255,255,255)"}} className="p-4 text-white hover:bg-lime-800  hover:shadow-xl duration-300 ease-in-out 200">Contact Us</motion.li>
        </ul>
    </motion.div>
  );
}

export default Nav;
