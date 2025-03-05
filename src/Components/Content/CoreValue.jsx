import React from 'react'
import { motion } from "framer-motion"
function CoreValue() {

    const textVariants = {
        hidden:{
            y: 100,
            opacity: 0
        },
       visible:{
            y: 0,
            opacity:1,
        transition:{
            delay:0.2, 
            duration:0.9,
        } }
    }


    const imgtwoVariants = {
        slidehidden:{
            x: 0,
            opacity: 0,
        },
        slidevisible:{
            x: 0,
            opacity: 1,
        transition:{
            delay:0.2, 
            duration:1,
        } }
    }

    return (
        <div className='grid grid-row-2  font-[poppins] md:flex md:justify-between bg-linear-gradientone md:h-[615px] py-20 pl-4 md:pl-20'>
            
            <motion.div className='flex flex-col col-reverse justify-center  border-l-2 border-lime-600'
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}>
                <div className=' border-l-2 border-lime-600 p-6 md:p-10 rounded-md  text-white' >
                    <h1 className='text-gray-400 text-2xl  '>Why Choose Us?</h1>
                    <br/>
                    <h1 className='font-bolder md:text-4xl'>What are Our Advantage?</h1>
                    <p className='text-xs mt-4 leading-6'>when you combine drone with the goggles and motion <br/> controller, fight becomes accessible to all.</p>
                    <div className='py-1 px-6 rounded-[100px] w-[150px] text-center my-8 text-lime-400 border border-lime-400 hover:bg-lime-600 cursor-pointer hover:border-lime-300 hover:text-white hover:scale-110  hover:transition delay-150 duration-300 ease-in-out'>Learn More</div>
                    <h2 className='text-gray-400 text-2xl'>Practice Makes Perfect! </h2>
                </div>
            </motion.div>

            <motion.div className='bg-white h-[300px]  md:w-[650px] md:h-full'
            variants={imgtwoVariants}
            initial="slidehidden"
            whileInView="slidevisible"
            viewport={{once: true}}>

            </motion.div>
        </div>
    )
}

export default CoreValue
