'use client'
import Image from "next/image";
import './../../app/globals.css';
import MyPic from './../../public/Images/my-pic.jpg';
import { ReactTyped } from "react-typed"; 
import { animate, motion } from "framer-motion";
import Button from "../button";
import Socials from "../socials";
const Hero = () => {
    console.log("Hero rendered")
     const sliderVarient={
        initial:{
            x:0,
            
        },
        animate:{
            x:'-50%',
            opacity:1,
            transition:{
                repeat:Infinity,
                repeatType:'mirror',
                duration:10,
                
            }

        }
     }
    return (
        <>
            <div className="pt-[100px] bg-gradient-to-r  from-[#282f44] to-[#634258] dark:from-[#1A1A1D] dark:to-[#37353E] h-screen  overflow-hidden   max-w-screen ">
                <div className="container mx-auto overflow-hidden">
                    <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-around lg:items-center overflow-hidden ">
                        {/* content sec */}
                        <div className="order-2 lg:order-1 flex flex-col items-center text-center">
                            <div className="flex items-center justify-center flex-col gap-10 mx-auto w-full">
                                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500">Masoumeh Reazaei</h1>
                            <div className="relative w-full  flex items-center justify-start">
    <h2 className="text-3xl text-white flex items-center">
        I`m a 
        <span className="ml-2 inline-block relative ">
            <span className="absolute top-0  w-full h-full flex items-center   md:text-nowrap text-wrap">
                <ReactTyped
                    strings={[
                        "Frontend Developer",
                        "UI/UX Designer",
                        
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={2000}
                    loop
                    className="text-[#9ad1aa]"
                />
            </span>
        </span>
    </h2>
</div>

                            <div className="z-20 flex justify-center items-center flex-col">
                                <Button key={''} text={'Download My CV'} download  className='my-5' classNameBTN={'px-6 py-3'} href={'/downloads/my.cv.pdf'}/>
                                <Socials className='my-5'/>
                            </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#282f44] to-[#634258] p-0 m-0 overflow-hidden hidden lg:block">
                            <motion.div 
    className="slider-text-section justify-start z-10 p-0 m-0 max-w-full  overflow-hidden"
    draggable='false'
    variants={sliderVarient} 
    initial="initial" 
    animate="animate"
>
     Web Designer 
</motion.div>
                            </div>
                    
                        </div>

                        {/* img sec */}
                        <div className="home-img order1 lg:order-2">
                            <div className="img-box relative rounded-full p-4">
                               
                    <motion.div 
                        className="relative flex items-center justify-center lg:mt-8 mb-5  "
                        animate={{ y: [0, -10, 0] }} // افکت شناور
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                        {/* photo */}
                        <Image 
                            src={MyPic}
                            width={400}
                            height={400}
                            alt="Profile"
                            priority='true'
                            className="rounded-full border-4  shadow-lg w-[300px] md:w-[400px] "
                        />

                       
                        <motion.div
                            className="absolute md:w-103 w-80 h-80  md:h-103 border-t-4 border-violet-300 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        />

                       
                        <motion.div
                            className="absolute md:w-110 w-90 h-90 md:h-110 border-b-4 border-[#9ad1aa] rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                        />
                    </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
