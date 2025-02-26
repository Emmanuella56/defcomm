import { LiaLongArrowAltRightSolid } from "react-icons/lia";

function OurProduct() {
    return (
        <div className="relative  font-[poppins]">
        <div className="hidden md:block absolute top-[700px] left-[180px] font-bold text-[250px] text-stone-600 rotate-90 opacity-10 ">
            DRONERLY
        </div>
        <div className=' bg-linear-gradienttwo pb-6 '>
             <h1 className='mx-auto text-center py-2 md:font-bold text-[30px] md:text-[40px] text-white z-10'>The Best Our Product</h1>
             <p className='mx-auto text-center text-xs md:text-lg md:mt-2 text-gray-400 leading-6 z-10'>Products with advanced technology premium quality with <br/>various features.</p>
                        
            <div className=' flex flex-col md:flex-row pt-4 md:pt-10 z-10'>
               
                <div className='bg-gray-200 w-full h-[400px]'>

                </div>
                <div className='flex flex-col justify-center  w-full'>
                    <div className=' p-4 md:pl-20 rounded-md  text-white' >
                        <h1 className='text-lime-400 text-lg md:text-xl  '>Dr. Google V.2</h1>
                        
                        <h1 className='font-bolder  py-2 text-2xl md:text-4xl'>Get A Sensation Like Flying</h1>
                        <p className='text-lg mt-4 text-gray-400 leading-6'>Enjoy next level comfort and convenient with DJI Google 2 Now <br/> smaller, lighter, and equiped with micro OLED screens.</p>
                        <div className='py-1 px-6 rounded-[100px] w-[150px] text-center my-8 text-lime-400 border border-lime-400 hover:bg-lime-600 cursor-pointer hover:border-lime-300 hover:text-white hover:scale-110  hover:transition delay-150 duration-300 ease-in-out '>$72.20 USD</div>
                        
                    </div>
                </div>
            </div>

            <div className=' flex flex-col flex-col-reverse md:flex-row pt-4 md:pt-10 z-10'>
                <div className='flex flex-col justify-center  w-full'>
                    <div className='  p-4 md:pl-20 rounded-md  text-white' >
                        <h1 className='text-lime-400  text-lg md:text-xl'>DR Motion Controller V.2</h1>
                        <br/>
                        <h1 className='font-bolder py-2 text-2xl md:text-4xl'>Enjoy Driving In The Sky</h1>
                        <p className='text-lg mt-4 text-gray-400 leading-6'>With the DJI Motion Controller, intuitive fight is in your hands. <br/> Squeeze the trigger and bolt forward with the swivel of your wrist.</p>
                        <div className='py-1 px-6 rounded-[100px] w-[150px] text-center my-8 text-lime-400 border border-lime-400 hover:bg-lime-600 cursor-pointer hover:border-lime-300 hover:text-white hover:scale-110  hover:transition delay-150 duration-300 ease-in-out '>$41.32 USD</div>
                        
                    </div>
                </div>
                <div className='bg-gray-200 w-full h-[400px]'>

                </div>
            </div>

            <div className=' flex flex-col md:flex-row md:pt-10 z-10'>
                <div className='bg-gray-200 w-full h-[400px]'>

                </div>
                <div className='flex  justify-center  w-full'>
                    <div className=' p-4 md:pl-20 rounded-md  text-white' >
                        <h1 className='text-lime-400 text-lg md:text-xl'>DR Avata V.2</h1>
                        <br/>
                        <h1 className='font-bolder text-2xl md:text-4xl'>Where Agility Meets Thoughness</h1>
                        <p className='text-lg mt-4 text-gray-400 leading-6'>Compact and lightweight, DJI Avata is nimble in tight spaces. Every<br/>aspect of its design was made for you to be bold</p>
                        <div className='py-1 px-6 rounded-[100px] w-[150px] text-center my-8 text-lime-400 border border-lime-400 hover:bg-lime-600 cursor-pointer hover:border-lime-300 hover:text-white hover:scale-110  hover:transition delay-150 duration-300 ease-in-out '>$41.32 USD</div>
                    </div>
                </div>
            </div>

            <div className=' flex gap-2 md:gap-4 items-center justify-center mx-auto  py-2 px-2 md:px-4 rounded-[100px] w-[120px] md:w-[150px] text-center my-3 md:my-8 text-black bg-lime-400 border border-lime-400 hover:bg-lime-600 cursor-pointer hover:text-white hover:scale-110  z-10 hover:transition delay-150 duration-300 ease-in-out '>
                View All
                <LiaLongArrowAltRightSolid />
            </div>
        </div>
        </div>
        
    )
}

export default OurProduct
