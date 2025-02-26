import React from 'react'

function CoreValue() {
    return (
        <div className='grid grid-row-2 h-[700px] font-[poppins] md:flex md:justify-between w-[100%]  md:gap-10 bg-linear-gradientone md:h-[615px] py-20 md:pl-20'>
            
            <div className='flex flex-col col-reverse justify-center  border-l-2 border-lime-600 w-[750px]'>
                <div className=' border-l-2 border-lime-600 p-6 md:p-0 rounded-md  text-white' >
                    <h1 className='text-gray-400 text-2xl  '>Why Choose Us?</h1>
                    <br/>
                    <h1 className='font-bolder md:text-4xl'>What are Our Advantage?</h1>
                    <p className='text-xs mt-4 leading-6'>when you combine drone with the goggles and motion <br/> controller, fight becomes accessible to all.</p>
                    <div className='py-1 px-6 rounded-[100px] w-[150px] text-center my-8 text-lime-400 border border-lime-400 hover:bg-lime-600 cursor-pointer hover:border-lime-300 hover:text-white hover:scale-110  hover:transition delay-150 duration-300 ease-in-out'>Learn More</div>
                    <h2 className='text-gray-400 text-2xl '>Practice Makes Perfect! </h2>
                </div>
            </div>

            <div className='bg-white h-[300px] w-[650px]  md:w-[650px] md:h-full'>

            </div>
        </div>
    )
}

export default CoreValue
