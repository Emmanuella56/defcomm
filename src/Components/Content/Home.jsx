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
import SvgFour from "../Pages/SvgFour.jsx";
import SvgFive from "../Pages/SvgFive.jsx";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "motion/react"

function Home() {

    //For rotating the icon round when users scroll   
    const [rotation, setRotation] = useState(0);

    //For Rotate Icon
    // Use a ref to store the previous scroll position
    const lastScrollY = useRef(window.scrollY);
    useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        // Calculate the change in scroll position
        const delta = currentScrollY - lastScrollY.current;
        // Update the rotation based on scroll delta.
        // Adjust the multiplier (0.1) as needed for sensitivity.
        setRotation((prev) => prev + delta * 1);
        // Update lastScrollY for the next scroll event
        lastScrollY.current = currentScrollY;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    //For left bottom vector
    const [bottom, setBottom] = useState(60);
    const [bottomScrollY, setBottomScrollY] = useState(0);

    //For left bottom vector
    useEffect(() => {
    const vectorScroll = () => {

      const scrollY = window.scrollY;
      if (scrollY > bottomScrollY) {
        // Scrolling down → move up, but stop at 110
        setBottom((prev) => Math.min(110, prev + 2));
      } else {
        // Scrolling up → move back to 60
        setBottom((prev) => Math.max(60, prev - 2));
      }
      setBottomScrollY(scrollY);
    };
        window.addEventListener("scroll", vectorScroll);
        return () => window.removeEventListener("scroll", vectorScroll);
    }, [bottomScrollY]);

    //For right bottom vector
    const [bottomTwo, setBottomTwo] = useState(120);
    const [bottomScrollYTwo, setBottomScrollYTwo] = useState(0);
    

    //For right bottom Vector
    useEffect(() => {
        
        const vectorTwoScroll = () => {
          const scrollYTwo = window.scrollY;
          if (scrollYTwo > bottomScrollYTwo) {
            // Scrolling down → move up (reduce bottomTwo), stops at 110
            setBottomTwo((prev) => Math.max(140, prev - 2));
          } else {
            // Scrolling up → move down (increase bottomTwo), stops at 135
            setBottomTwo((prev) => Math.min(120, prev + 2));
          }
          setBottomScrollYTwo(scrollYTwo)// Update last scroll position
        };

        window.addEventListener("scroll", vectorTwoScroll);
        return () => window.removeEventListener("scroll", vectorTwoScroll);
      }, [bottomScrollYTwo]);



      //For Left Top Vector 
    const [top, setTop] = useState(-30)
    
    useEffect(() => {
        let topScrollY = window.scrollY; // Track previous scroll position
    
        const vectorTopScroll = () => {
          const scrollY = window.scrollY;
    
          if (scrollY > topScrollY) {
            // Scrolling down → move down, stop at 5px
            setTop((prev) => Math.min(100, prev + 2));
          } else {
            // Scrolling up → move up, stop at -20px
            setTop((prev) => Math.max(-30, prev - 2));
          }
    
          topScrollY = scrollY; // Update last scroll position
        };
    
        window.addEventListener("scroll", vectorTopScroll);
        return () => {
          window.removeEventListener("scroll", vectorTopScroll);
        };
      }, [top]);

        


      const images = [NavyLogo, RedBlack, RedBlackTwo, RedBlackThree, SarsLogo];

      
        const [index, setIndex] = useState(0);
      
        // Auto-slide every 3 seconds
        useEffect(() => {
          const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
          }, 3000);
          
          return () => clearInterval(interval); // Cleanup function
        }, []);





    return (
      <>
        
        <div className="relative md:pt-[155px] pt-[100px] bg-linear-gradient md:overflow-none w-full  ">
        <div className="md:hidden absolute pt-[180px]"><SvgFive /></div>
            <div className='relative text-white -ml-[240px] md:ml-[0px] h-[500px] md:h-[550px] md:pl-[100px] '>
                <img src={deffcommhomeimage} alt="DeffComm HomeImage" className='h-[500px]  md:h-[550px] ' />
                <div className='hidden md:flex absolute bottom-[2px]  md:left-[20px] '>
                    <SvgFive />
                </div>

                <div
                className="hidden md:block absolute text-white  md:left-[200px] transition-all duration-300"
                style={{ bottom: `${bottom}px` }}
                >
                    <SvgOne />
                    <p className="pt-4">USB Detectors Automatic.</p>
                    <p>Wipes With Foreign Elements</p>
                </div>
                
                <div
                className="hidden md:block absolute md:right-[0px] right-[420px] transition-all duration-300"
                style={{ bottom: `${bottomTwo}px` }}
                >
                    <SvgTwo/>
                    <p className="pt-4">Built-In TPM Chips Provide Hardware-Brand</p>
                    <p>Cryptographic Fuctions, Secure Key Storage</p>
                </div>

                <motion.div
                className="hidden md:block absolute md:left-[300px] transition-all duration-50"
                style={{ top: `${top}px` }}
                >
                <p className="pb-4 ">Killer Switch</p>
                <SvgThree />
                </motion.div>
               
                
                <div
                className="absolute -top-[15px] right-4 md:top-6 md:right-40 text-white"
                // Apply the rotation to the container div
                style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s linear' }}
                >
                <div className="relative w-[70px] h-[70px] md:w-[80px]  md:h-[80px] flex items-center justify-center  bg-lime-800 text-white text-4xl rounded-full" >
                    <p className="bg-black p-1 rounded-full text-[18px]"  >
                    <LiaLongArrowAltDownSolid />
                    </p>

                    
                    <svg className="absolute w-[65px] h-[65px] " viewBox="0 0 200 200">
                    <defs>
                        <path id="textPath" d="M 100, 10 A 85,85 0 1,1 99,10" fill="transparent" />
                    </defs>
                    <text className="text-sm md:text-xl  font-bold tracking-[6px] fill-black font-bold">
                        <textPath href="#textPath" startOffset="50%" textAnchor="middle" >
                        EXPLORE MORE     SCROLL DOWN     
                        </textPath>
                    </text>
                    </svg>
                </div>
                </div>
            </div>

            <div className='flex gap-4 md:gap-60 items-center bg-gray-950 py-1 md:pl-10  '>
                <div className="flex items-center gap-2 md:gap-6">
                   <p className="text-white p-2 md:p-4 border rounded-[50%] md:w-[50px]"><RxDoubleArrowDown /></p> 
                   <p className="text-white text-sm md:text-xl  w-[60px] md:w-[200px]">BRAND'S DIGITAL IDENTITY</p>
                </div>

                <div className="relative w-[200px] h-[80px] overflow-hidden">
                    <div
                      className="flex transition-transform duration-700 ease-in-out"
                      style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                      {images.map((img, i) => (
                        <img key={i} src={img} alt={`Logo ${i + 1}`} className="h-[80px] w-[80px] flex-shrink-0" />
                      ))}
                    </div>
                  </div>
            </div>
        </div>
        </>
    )
}

export default Home
