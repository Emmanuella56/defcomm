import { TfiArrowTopRight } from "react-icons/tfi";
// import SvgFour from "../Pages/SvgFour.jsx"
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import Logo from "../../assets/defcommlogo.png"
import { motion, useScroll, useMotionValueEvent, useTransform} from "framer-motion"
import {  useRef } from 'react'

function Footer() {

      const targetRef = useRef(null);
      const {scrollYProgress } = useScroll() 
    
      useMotionValueEvent(scrollYProgress, "change", (val) => {
          console.log(val)
      })
    
      const rotationYscroll = useTransform(scrollYProgress, [0, 1], ["0deg", "360deg"])
      
    
    
      const btnVariants = {
        hover:{
            y:[-10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0,-10, 0, -10, 0, -10, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0],
            boxShadow: "0px 0px 8px rgb(164, 245, 24)",
            transition: {       
                duration: 30,

            }
        }
    }





    return (
        <div className='bg-linear-gradient font-[poppins]  text-white'>
            <h1 className='font-bold pt-4 text-[28px] md:text-[40px] mx-auto text-center'>Request More Information</h1>
            <p className='text-xs md:text-lg md:mt-4 text-gray-400 leading-6 mx-auto text-center'>Dronely.Inc is a company producing the highest quality VR Drones with the latest technology</p>
            <motion.div className=' flex gap-2 md:gap-4 items-center justify-center mx-auto mt-10 py-2 px-2 md:px-4 rounded-[100px] w-[160px] text-center my-8 text-black bg-lime-400 border border-lime-400 cursor-pointer'
            variants={btnVariants}
            whileHover={"hover"}>
                            Contact Us
                            <TfiArrowTopRight />
            </motion.div>
            <div className="flex relative flex-col md:flex-row justify-center  items-center mb-8">
                 <ul className=" flex flex-col gap-6 md:flex-row justify-center md:w-[1300px] items-center md:gap-10">
                    <li className="underline underline-offset-4">PRODUCT</li>
                    <li className="underline underline-offset-4">SUPPORT</li>
                    <li className="underline underline-offset-4">COOPERATION</li>
                    <li className="underline underline-offset-4">COMMUNITY</li>
                </ul>
                <motion.div className="fixed right-4 z-30 top-[530px] md:right-20 text-lime-400 p-4 border border-lime-400 rounded-[50%] w-[50px]"
                style={{rotate: rotationYscroll}}
                ref={targetRef}>
                <LiaLongArrowAltUpSolid />
                </motion.div>
            </div>
            
            <hr className="text-stone-900 md:w-[1200px] mx-auto text-center"/>

            <div className="flex flex-col justify-center text-center py-4 md:flex-row md:py-10 md:justify-between md:items-center  md:w-[1200px] mx-auto md:text-center">
               <div className="flex p-4 justify-between">
                    <div className="flex gap-2  md:items-center justify-center">
                        <img src={Logo} alt="Defcomm Logo" className="w-[50px]" />
                        <p className="text-2xl font-bold">DEFCOMM</p>
                        
                    </div>
                    <div className="flex md:hidden gap-4 ">
                        <p className="p-2 border border-1 border-stone-800 rounded-[50%]"><ImFacebook /></p>
                        <p className="p-2 border border-1 border-stone-800 rounded-[50%]"><GrInstagram /></p>
                        <p className="p-2 border border-1 border-stone-800 rounded-[50%]"><IoLogoYoutube /></p>
                    </div>
                </div> 

                <div><p className="text-xs text-gray-400">&copy; Copyright Defcomm, All Rights Reserved</p></div>
                <div className="hidden md:flex gap-10 ">
                    <p className="p-4 border border-1 border-stone-800 rounded-[50%]"><ImFacebook /></p>
                    <p className="p-4 border border-1 border-stone-800 rounded-[50%]"><GrInstagram /></p>
                    <p className="p-4 border border-1 border-stone-800 rounded-[50%]"><IoLogoYoutube /></p>
                </div>
            </div>
                             
        </div>
    )
}

export default Footer
