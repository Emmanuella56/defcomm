import Logo from "../../assets/defcommlogo.png"
import { PiArrowBendDownRightThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";



function Nav() {
    return (
        <>
        <div className="fixed top-0 left-0 flex bg-black w-full h-[70px] justify-between items-center text-white px-20">
            <div className="w-[80px]"> 
                <img src={Logo} alt="DeffComm Logo" />
            </div>
            
            <div>
                <ul className="flex justify-center align-center gap-6 ">
                    <li className="border-r-2 py-2 px-4 border-stone-900">Home</li>
                    <li className="border-r-2  py-2 px-4 border-stone-900">Service</li>
                    <li className="border-r-2  py-2 px-4 border-stone-900">Technology</li>
                    <li className="flex justify-center gap-4  py-2 px-4 border-r-2 border-stone-900 items-center">
                        <p>Feature</p>
                        <p><PiArrowBendDownRightThin /></p>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center gap-4">
                <div className="p-2 rounded-[50%] bg-stone-500"><CiSearch /></div>
                <div className="p-1 px-4 rounded-2xl bg-white text-black text-center">Login</div>
            </div>
        </div>
        </>
    )
}

export default Nav
