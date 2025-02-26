import { TfiArrowTopRight } from "react-icons/tfi";
import SvgFour from "../Pages/SvgFour.jsx"
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";

function Footer() {

   


    return (
        <div className='bg-linear-gradient font-[poppins]  text-white'>
            <h1 className='font-bold pt-4 text-[28px] md:text-[40px] mx-auto text-center'>Request More Information</h1>
            <p className='text-xs md:text-lg md:mt-4 text-gray-400 leading-6 mx-auto text-center'>Dronely.Inc is a company producing the highest quality VR Drones with the latest technology</p>
            <div className=' flex gap-2 md:gap-4 items-center justify-center mx-auto mt-10 py-2 px-2 md:px-4 rounded-[100px] w-[160px] text-center my-8 text-black bg-lime-400 border border-lime-400 hover:bg-lime-600 cursor-pointer hover:text-white hover:scale-110  hover:transition delay-150 duration-300 ease-in-out '>
                            Contact Us
                            <TfiArrowTopRight />
            </div>
            <div className="flex relative flex-col md:flex-row justify-center  items-center mb-8">
                 <ul className=" flex flex-col gap-6 md:flex-row justify-center md:w-[1300px] items-center md:gap-10">
                    <li className="underline underline-offset-4">PRODUCT</li>
                    <li className="underline underline-offset-4">SUPPORT</li>
                    <li className="underline underline-offset-4">COOPERATION</li>
                    <li className="underline underline-offset-4">COMMUNITY</li>
                </ul>
                <div className="absolute right-4 top-[120px] md:top-0 md:right-0 md:static text-lime-400 p-4 border border-lime-400 rounded-[50%] w-[50px]">
                <LiaLongArrowAltUpSolid />
                </div>
            </div>
            
            <hr className="text-stone-900 md:w-[1200px] mx-auto text-center"/>

            <div className="flex flex-col justify-center text-center py-4 md:flex-row md:py-10 md:justify-between md:items-center  md:w-[1200px] mx-auto md:text-center">
               <div className="flex p-4 justify-between">
                    <div className="flex gap-2 md:gap-4 md:items-center justify-center">
                        <p><SvgFour /></p>
                        <p className="text-2xl font-bold">DRONERLY</p>
                        
                    </div>
                    <div className="flex md:hidden gap-4 ">
                        <p className="p-2 border border-1 border-stone-800 rounded-[50%]"><ImFacebook /></p>
                        <p className="p-2 border border-1 border-stone-800 rounded-[50%]"><GrInstagram /></p>
                        <p className="p-2 border border-1 border-stone-800 rounded-[50%]"><IoLogoYoutube /></p>
                    </div>
                </div> 

                <div><p className="text-xs text-gray-400">&copy; Copyright Dronerly, All Rights Reserved</p></div>
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
