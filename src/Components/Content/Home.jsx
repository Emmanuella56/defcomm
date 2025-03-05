import { RxDoubleArrowDown } from "react-icons/rx";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import deffcommhomeimage from "../../assets/deffcommhomeimage.png"
import RedBlack from "../../assets/Red&BlackLogo.png"
import RedBlackTwo from "../../assets/Red&BlackLogoTwo.png"
import RedBlackThree from "../../assets/Red&BlackLogoThree.png"
import NavyLogo from "../../assets/navylogo.png"
import SarsLogo from "../../assets/sarslogo.png"
import SvgOne from "../Pages/SvgOne.jsx"
import SvgTwo from "../Pages/SvgTwo.jsx"
import SvgThree from "../Pages/SvgThree.jsx"
// import SvgFour from "../Pages/SvgFour.jsx";
import SvgFive from "../Pages/SvgFive.jsx";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
// import { use } from "react";




function Home() {

  const targetRef = useRef(null);
  const {scrollY} = useScroll() 

  useMotionValueEvent(scrollY, "change", (val) => {
      console.log(val)
  })

  const rotationYscroll = useTransform(scrollY, [1, 200], ["0deg", "360deg"])
  const moveDown = useTransform(scrollY, [0, 200], [0, 260])
  const moveUp = useTransform(scrollY, [0, 200], [0, -100])


     // Auto-slide every 3 seconds
      const images = [NavyLogo, RedBlack, RedBlackTwo, RedBlackThree, SarsLogo];

      
        const [index, setIndex] = useState(0);
      
   
        useEffect(() => {
          const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
          }, 3000);
          
          return () => clearInterval(interval); // Cleanup function
        }, []);





    return (
      <>
        
        <div className="relative md:pt-[105px] pt-[80px] md:pt-[109px] bg-linear-gradient md:overflow-none w-full  ">
          <motion.div
        initial={{y:500, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{
          duration:0.9, 
          stiffness:120
        }}>

        <div className="md:hidden absolute pt-[180px]"><SvgFive /></div>
            <div className='relative text-white -ml-[240px] md:ml-[0px] h-[500px] md:h-[550px] md:pl-[100px] '>
                <img src={deffcommhomeimage} alt="DeffComm HomeImage" className='h-[500px]  md:h-[550px] ' />
              
                
                <div className='hidden md:flex absolute bottom-[2px]  md:left-[-1px] '>
                    <SvgFive />
                </div>





                <motion.div
                className="hidden md:block absolute text-white  mt-[-200px] translate-y-0 duration-100 left-[240px] "
                style={{ y: moveUp }}

                >
                    <SvgOne />
                    <p className="pt-4">USB Detectors Automatic.</p>
                    <p>Wipes With Foreign Elements</p>
                </motion.div>
                



                <motion.div
                className="hidden md:block absolute md:right-[0px] mt-[-200px] right-[420px] "
                style={{y: moveUp}}
                >
                    <SvgTwo/>
                    <p className="pt-4">Built-In TPM Chips Provide Hardware-Brand</p>
                    <p>Cryptographic Fuctions, Secure Key Storage</p>
                </motion.div>



                <motion.div
                className="hidden md:block mt-[-520px] translate-y-0  absolute md:left-[270px]"
                style={{y: moveDown }}
                transition={{delay:0.1, duration:2}}
                >
                <p className="pb-4">Killer Switch</p>
                <p><SvgThree /></p>
                </motion.div>
               
                
                <motion.div
                className="absolute -top-[15px] right-4 md:top-6 md:right-40 text-white"
                style={{rotate: rotationYscroll}}
                ref={targetRef}
                
                >
                <div className="relative w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-lime-800 text-white text-4xl rounded-full">
                  <p className="bg-black p-1 rounded-full text-[18px]">
                    <LiaLongArrowAltDownSolid />
                  </p>
                  <svg className="absolute w-[60px] h-[60px]" viewBox="0 0 60 60">
                    <defs>
                      {/* The path below creates a circular arc with center at (30,30) and radius 25 */}
                      <path id="circlePath" d="M30,5 A25,25 0 1,1 29.99,5" fill="transparent" />
                    </defs>
                    <text className="text-[6px] md:text-[8px] tracking-[6px] fill-white">
                      {/* startOffset="50%" with textAnchor="middle" centers the text along the path */}
                      <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                        Absolute  Privacy
                      </textPath>
                    </text>
                  </svg>
                </div>
                </motion.div>


            </div>

            <div className='flex gap-4 md:gap-60 items-center py-1 md:pl-10  '>
                <div className="flex items-center gap-2 md:gap-6">
                   <p className="text-white p-2 md:p-4 border rounded-[50%] md:w-[50px]"><RxDoubleArrowDown /></p> 
                   <p className="text-white text-sm md:text-xl  w-[60px] md:w-[200px]">BRAND'S DIGITAL IDENTITY</p>
                </div>






                <div className="relative w-[900px] h-[80px] overflow-hidden ">
                <div className=" border-b border-t border-l border-lime-400 h-[75px]">
                    <div
                            className="flex  transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                          >
                            {images.map((img, i) => (
                              <img key={i} src={img} alt={`Logo ${i + 1}`} className="h-[70px]  flex-shrink-0" />
                            ))}
                          </div>
                        </div>
                  </div>
                </div>
             
            </motion.div>
        </div>
        </>
    )
}

export default Home
