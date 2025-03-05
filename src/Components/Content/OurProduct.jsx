import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import {   motion, AnimatePresence, useScroll, easeOut } from "framer-motion";
import { useEffect, useState, useRef } from 'react'


function OurProduct() {

    const [deleteText, setDeleteText] = useState(true)
    


    useEffect(() => {
       
        const timeOut = setTimeout(() => {
        setDeleteText(false)
    }, 5000)

    return () => clearTimeout(timeOut)
    }, [])

    const {scrollYProgress} = useScroll()
    // const scrollanimate = useTransform(scrollYProgress, [0, 1], [{y:-1000}, {y:0}])
    // const slideUp = {
    //    {
    //      hidden:{
    //         y:-1000,
    //     },
    //     visible:{
    //         y:0
    //     }
    // }

    const scrollRef   = useRef(null)
    const screenVariants = {
        hidden:{
            y: 150,
            opacity: 0,
        },
        visible:{
            y:0,
            opacity: 1,
        transition:{
            delay:0.1, 
            duration:0.3,
        } }
    }

    const imgVariants = {
        slidehidden:{
            x: -20,
            opacity: 0,
        },
        slidevisible:{
            x: 0,
            opacity: 1,
        transition:{
            delay:0.2, 
            duration:1,
            type: "easeOut"
        } }
    }

    const imgtwoVariants = {
        slidehidden:{
            x: 20,
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


    const buttonsVariants = {
        hover:{
            scale: [1.1, 1, 1.1, 1, 1.1, 1],
            boxShadow: "0px 0px 8px rgb(164, 245, 24)",
            color: "rgb(255, 255, 255)",
            backgroundColor:["rgba(164, 245, 24, 0.03)", "rgb(164, 245, 24)"," rgba(255, 255, 255, 0)"],
            transition: {
                // delay: 0.8,
                duration: 3,
             
            }
        }
    }

    const btnVariants = {
        hover:{
            x:[-10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0],
            boxShadow: "0px 0px 8px rgb(164, 245, 24)",
            transition: {       
                duration: 10,

            }
        },
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


    return (
        <motion.div className="relative bg-linear-gradienttwo font-[poppins] ">
        
        <div >
            <AnimatePresence>
                  {deleteText && (<motion.div className="hidden md:block absolute top-[600px] left-[100px]  text-[250px] text-stone-600 rotate-90 opacity-10 "
                  exit={{x: -1000}}> "DEFCOMM"  </motion.div>)}
            </AnimatePresence>
        </div>
        



        <div className='  pb-6 '>
            <motion.div
            ref={scrollRef}
            variants={screenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            >
             <h1 className='mx-auto text-center pt-10 md:font-bold text-[30px] md:text-[40px] text-white z-10'>The Best Our Product</h1>
             <p className='mx-auto text-center text-xs md:text-lg md:mt-2 text-gray-400 leading-6 z-10'>Products with advanced technology premium quality with <br/>various features.</p>
            </motion.div>   



            <div className=' flex flex-col md:flex-row pt-4 md:pt-10 z-10'>
               
                <motion.div className='bg-gray-200 w-full h-[400px]'
                variants={imgVariants}
                initial="slidehidden"
                whileInView="slidevisible"
                viewport={{once: true}}>

                </motion.div>

                <div className='flex flex-col justify-center  w-full'>
                    <motion.div className=' p-4 md:pl-20 rounded-md  text-white' 
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}>
                        <h1 className='text-lime-400 text-lg md:text-xl  '>Dr. Google V.2</h1>
                        
                        <h1 className='font-bolder  py-2 text-2xl md:text-4xl'>Get A Sensation Like Flying</h1>
                        <p className='text-lg mt-4 text-gray-400 leading-6'>Enjoy next level comfort and convenient with DJI Google 2 Now <br/> smaller, lighter, and equiped with micro OLED screens.</p>
                        
                        <motion.div className='py-1 px-6 rounded-[100px] w-[150px] text-center my-8 text-lime-400 border border-lime-400 cursor-pointer '
                        variants={buttonsVariants }
                        whileHover="hover"
                        >$72.20 USD
                        </motion.div>
                        
                    </motion.div>
                </div>
            </div>

            <div className=' flex flex-col flex-col-reverse md:flex-row pt-4 md:pt-10 z-10'>
                <div className='flex flex-col justify-center  w-full'>
                    <motion.div className='  p-4 md:pl-20 rounded-md  text-white' 
                     variants={textVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true}}>
                        <h1 className='text-lime-400  text-lg md:text-xl'>DR Motion Controller V.2</h1>
                        <br/>
                        <h1 className='font-bolder py-2 text-2xl md:text-4xl'>Enjoy Driving In The Sky</h1>
                        <p className='text-lg mt-4 text-gray-400 leading-6'>With the DJI Motion Controller, intuitive fight is in your hands. <br/> Squeeze the trigger and bolt forward with the swivel of your wrist.</p>
                        <motion.div className='py-1 px-6 rounded-[100px] w-[150px] text-center my-8 text-lime-400 border border-lime-400 cursor-pointer'
                         variants={buttonsVariants }
                         whileHover="hover">$41.32 USD
                         </motion.div>
                        
                    </motion.div>
                </div>
                <motion.div className='bg-gray-200 w-full h-[400px]'
                variants={imgtwoVariants}
                initial="slidehidden"
                whileInView="slidevisible"
                viewport={{once: true}}>

                </motion.div>
            </div>

            <div className=' flex flex-col md:flex-row md:pt-10 z-10'>
                <motion.div className='bg-gray-200 w-full h-[400px]'
                variants={imgVariants}
                initial="slidehidden"
                whileInView="slidevisible"
                viewport={{once: true}}>

                </motion.div>
                <div className='flex  justify-center  w-full'>
                    <motion.div className=' p-4 md:pl-20 rounded-md  text-white'
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}>

                        <h1 className='text-lime-400 text-lg md:text-xl'>DR Avata V.2</h1>
                        <br/>
                        <h1 className='font-bolder text-2xl md:text-4xl'>Where Agility Meets Thoughness</h1>
                        <p className='text-lg mt-4 text-gray-400 leading-6'>Compact and lightweight, DJI Avata is nimble in tight spaces. Every<br/>aspect of its design was made for you to be bold</p>
                        <motion.div className='py-1 px-6 rounded-[100px] w-[150px] text-center my-8 text-lime-400 border border-lime-400 cursor-pointer'
                         variants={buttonsVariants }
                         whileHover="hover">
                            $41.32 USD
                            </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div className=' flex gap-2 md:gap-4 items-center justify-center mx-auto  py-2 px-2 md:px-4 rounded-[100px] w-[120px] md:w-[150px] text-center my-3 md:my-8 text-black bg-lime-400 border border-lime-400 cursor-pointer z-10 '
            variants={ btnVariants}
            whileHover="hover"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}>
                View All
                <LiaLongArrowAltRightSolid />
            </motion.div>
        </div>
        </motion.div>
        
    )
}

export default OurProduct
