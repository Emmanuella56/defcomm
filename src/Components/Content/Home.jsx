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

function Home() {
    return (
        <div className="pt-[70px]">
            <div className='relative bg-black h-[615px] pl-[160px] text-white z-[-10]'>
                <img src={deffcommhomeimage} alt="DeffComm HomeImage" className='h-[618px]' />
                <div className='absolute bottom-[110px] left-60'>
                    <SvgOne />
                    <p>Extra Dynamo Power.</p>
                    <p>Waterproof And Anti-Dust</p>
                </div>
                <div className='absolute right-[200px] top-[300px]'>   
                    <SvgTwo />
                    <p>The Propeller is As Stron As</p>
                    <p>Steel As Light As A Feather</p>
                </div>
                <div className='absolute bottom-[400px] left-[400px]'>
                    <p>Latest Version Of Wireless</p>
                    <p>Remote Sensor Technology</p>
                    <SvgThree />
                </div>
                
                <div className="absolute top-20 right-40 text-white">
                    <div className="relative w-[125px] h-[125px] flex items-center justify-center bg-lime-800 text-white text-4xl rounded-[50%]">
                        <p className="bg-black p-2 rounded-[50%]"><LiaLongArrowAltDownSolid /></p>

                        
                        <svg className="absolute w-[100px] text-white animate-rotate" viewBox="0 0 200 200">
                            <defs>
                                <path id="textPath" d="M 100, 10 A 85,85 0 1,1 99,10" fill="transparent" />
                            </defs>
                            <text className="text-xl font-bold tracking-[6px] fill-white">
                                <textPath href="#textPath" startOffset="50%" textAnchor="middle">
                                    SCROLL DOWN  •    EXPLORE MORE   •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='flex gap-60 items-center bg-gray-950  py-1 pl-10 z-10 '>
                <div className="flex items-center gap-6">
                   <p className="text-white p-4 border rounded-[50%] w-[50px]"><RxDoubleArrowDown /></p> 
                   <p className="text-white text-xl w-[200px]">BRAND'S DIGITAL IDENTITY</p>
                </div>
                <div className=" flex justify-center gap-10 items-center ">
                    <img src={NavyLogo} alt="Logo1" className=" h-[80px] w-[100px]" />
                    <img src={RedBlack} alt="logo2" className=" h-[80px] w-[120px]" />
                    <img src={RedBlackTwo} alt="Logo3" className=" h-[80px] w-[120px]" />
                    <img src={RedBlackThree} alt="Logo4" className=" h-[80px] w-[100px]" />
                    <img src={SarsLogo} alt="Logo5" className=" h-[80px] w-[80px]"/>
                </div>
            </div>
        </div>
    )
}

export default Home
