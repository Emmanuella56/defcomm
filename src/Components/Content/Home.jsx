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

        









    return (
        <div className="pt-[155px]  bg-linear-gradient  ">
            <div className='relative text-white  h-[550px] pl-[160px] '>
                <img src={deffcommhomeimage} alt="DeffComm HomeImage" className='h-[550px]' />
                <div className='absolute bottom-[2px]  left-[20px] '>
                    <SvgFive />
                </div>

                <div
                className="absolute text-white left-[220px] transition-all duration-300"
                style={{ bottom: `${bottom}px` }}
                >
                    <SvgOne />
                    <p className="pt-4">USB Detectors Automatic.</p>
                    <p>Wipes With Foreign Elements</p>
                </div>
                
                <div
                className="absolute right-[220px] transition-all duration-300"
                style={{ bottom: `${bottomTwo}px` }}
                >
                    <SvgTwo/>
                    <p className="pt-4">Built-In TPM Chips Provide Hardware-Brand</p>
                    <p>Cryptographic Fuctions, Secure Key Storage</p>
                </div>

                <div
                className="absolute left-[320px] transition-all duration-50"
                style={{ top: `${top}px` }}
                >
                <p className="pb-4">Killer Switch</p>
                <SvgThree />
                </div>
               
                
                <div
                className="absolute top-6 right-40 text-white"
                // Apply the rotation to the container div
                style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s linear' }}
                >
                <div className="relative w-[80px] h-[80px]  flex items-center justify-center bg-lime-800 text-white text-4xl rounded-full" >
                    <p className="bg-black p-1 rounded-full"  >
                    <LiaLongArrowAltDownSolid />
                    </p>

                    {/* Removed the animate-rotate class so the svg doesn't spin on its own */}
                    <svg className="absolute w-[65px] h-[65px] " viewBox="0 0 200 200">
                    <defs>
                        <path id="textPath" d="M 100, 10 A 85,85 0 1,1 99,10" fill="transparent" />
                    </defs>
                    <text className="text-xl font-bold tracking-[6px] fill-black font-bold">
                        <textPath href="#textPath" startOffset="50%" textAnchor="middle">
                        EXPLORE MORE     SCROLL DOWN     
                        </textPath>
                    </text>
                    </svg>
                </div>
                </div>
            </div>

            <div className='flex gap-60 items-center bg-gray-950   py-1 pl-10  '>
                <div className="flex items-center gap-6">
                   <p className="text-white p-4 border rounded-[50%] w-[50px]"><RxDoubleArrowDown /></p> 
                   <p className="text-white text-xl w-[200px]">BRAND'S DIGITAL IDENTITY</p>
                </div>
                <div className=" flex justify-center gap-10 items-center z-40">
                    <img src={NavyLogo} alt="Logo1" className="my-slide h-[60px] w-[60px]" />
                    <img src={RedBlack} alt="logo2" className="my-slide  h-[60px] w-[90px]" />
                    <img src={RedBlackTwo} alt="Logo3" className="my-slide  h-[60px] w-[80px]" />
                    <img src={RedBlackThree} alt="Logo4" className="my-slide  h-[60px] w-[60px]" />
                    <img src={SarsLogo} alt="Logo5" className="my-slide  h-[60px] w-[60px]"/>
                </div>
            </div>
        </div>
    )
}

export default Home
