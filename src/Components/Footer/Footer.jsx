import { TfiArrowTopRight } from "react-icons/tfi";
import SvgFour from "../Pages/SvgFour.jsx"
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";

function Footer() {
    return (
        <div className='bg-black text-white'>
            <h1 className='font-bolder text-[40px] mx-auto text-center'>Request More Information</h1>
            <p className='text-lg mt-4 text-gray-400 leading-6 mx-auto text-center'>Dronely.Inc is a company producing the highest quality VR Drones <br/> with the latest technology</p>
            <div className=' flex gap-4 items-center justify-center mx-auto mt-10 py-2 px-4 rounded-[100px] w-[160px] text-center my-8 text-black bg-lime-400 border border-lime-400 hover:bg-lime-600 cursor-pointer hover:text-white hover:scale-110  hover:transition delay-150 duration-300 ease-in-out '>
                            Contact Us
                            <TfiArrowTopRight />
            </div>
            <div className="flex justify-center gap-40 items-center mb-8">
                 <ul className=" flex justify-center w-[900px] items-center gap-10">
                    <li className="underline underline-offset-4">PRODUCT</li>
                    <li className="underline underline-offset-4">SUPPORT</li>
                    <li className="underline underline-offset-4">COOPERATION</li>
                    <li className="underline underline-offset-4">COMMUNITY</li>
                </ul>
                <div className="text-lime-400 p-4 border border-lime-400 rounded-[50%] w-[50px]">
                <LiaLongArrowAltUpSolid />
                </div>
            </div>
            
            <hr className="text-stone-900 w-[1200px] mx-auto text-center"/>

            <div className="flex py-10 justify-between items-center  w-[1200px] mx-auto text-center">
                <div className="flex gap-4 items-center justify-center">
                    <p><SvgFour /></p>
                    <p className="text-2xl font-bold">DRONERLY</p>
                </div>
                <div><p className="text-gray-400">&copy; Copyright Dronerly, All Rights Reserved</p></div>
                <div className="flex gap-10 ">
                    <p className="p-4 border border-1 border-stone-800 rounded-[50%]"><ImFacebook /></p>
                    <p className="p-4 border border-1 border-stone-800 rounded-[50%]"><GrInstagram /></p>
                    <p className="p-4 border border-1 border-stone-800 rounded-[50%]"><IoLogoYoutube /></p>
                </div>
            </div>
                             
        </div>
    )
}

export default Footer
