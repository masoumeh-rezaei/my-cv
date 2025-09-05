import Image from "next/image";
import ImgSelf from '../../public/Images/a girl.png'
import Link from "next/link";
import { FaGithub, FaVoicemail, FaLinkedinIn } from "react-icons/fa";

const About = () => {
    
    return (
        <div>
            <div className="min-h-screen max-h-[100%] bg-gradient-to-r from-[#282f44] to-[#634258] pt-20" id="about">
                <div className="container mx-auto">
                    <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-between lg:items-center">
                        {/* content sec */}
                                                <div className="order-2 lg:order-1   " data-aos="fade-right">
                                                    <div className="flex  items-center justify-center flex-col gap-10 mx-auto   lg:justify-start lg:items-start w-[80%] lg:ml-0 ">
                                                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500 lg:block hidden"><span className="text-slate-300">About</span> Masoumeh</h1>
                                                        <p className="text-slate-300 text-center lg:text-left">A Detailed-oriented 21-year-old Front End Developer with 3 years experience in this field, working with HTML , CSS , JavaScript , React and Next.js and 5 years experience of being in a collaborative place as a teacher. highly adapted at both independent and collaborative projects ,with an emphasis on landing website developement . </p>
                                                   
                        </div>
                    </div>
                    {/*Img Section */}
                    <div className=" order1 lg:order-2  flex items-center justify-center lg:w-[80%]" >
                        <div className="img-box relative rounded-full p-4 ">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500 block lg:hidden pb-10 text-center"><span className="text-slate-300">About</span> Masoumeh</h1>
                            <Image src={ImgSelf} width={400} height={100} alt="img" className=" border-4   w-[300px] md:w-[100%] " data-aos="fade-left"/>
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-center lg:justify-between lg:items-center lg:mt-20 mt-10 m-4 lg:ml-0" >
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500 block pb-2 lg:text-left text-center">Working Experience</h1>
                        <div className="mb-10 lg:ml-0 ">
                            <div className="border border-[#9ad1aa] text-slate-300 p-2 ml-0">
                                <div className="flex flex-col gap-y-2">
                                    <h1 className="text-xl text-slate-400">Frontend developer</h1>
                                    <h3 className="text-md text-blue-300">Freelancer</h3>
                                    <small className="text-lime-500">06/1402 - now</small>
                                </div>
                                <hr className="text-[#9ad1aa] mx-5 my-2"/>
                                <div className="flex flex-col gap-y-2">
                                    <h1 className="text-xl text-slate-400">Frontend developer</h1>
                                    <h3 className="text-md text-blue-300">MiliTrans(german)</h3>
                                    <small className="text-lime-500">02/1404 - 06/1404</small>
                                </div>
                                <hr className="text-[#9ad1aa] mx-5 my-2"/>
                                <div className="flex flex-col gap-y-2">
                                    <h1 className="text-xl text-slate-400">English Teacher</h1>
                                    <h3 className="text-md text-blue-300">Zaban Sara</h3>
                                    <small className="text-lime-500">02/1401 - 06/1403</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500 block pb-2 lg:text-left text-center">Education</h1>
                        <div className="mb-10 lg:ml-0 ">
                            <div className="border border-[#9ad1aa] text-slate-300 p-2 ml-0">
                                <div className="flex flex-col gap-y-2">
                                    <h1 className="text-xl text-slate-400">Bachelor degree in computer software engeneering</h1>
                                    <h3 className="text-md text-blue-300">Tehran Jonob University</h3>
                                    <small className="text-lime-500">06/1403 - studing</small>
                                </div>
                                <hr className="text-[#9ad1aa] mx-5 my-2"/>
                                <div className="flex flex-col gap-y-2">
                                    <h1 className="text-xl text-slate-400">Associate's degree in  computer engeneering</h1>
                                    <h3 className="text-md text-blue-300">Yadegar Emam University</h3>
                                    <small className="text-lime-500">06/1401 - 06/1403</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-3 mb-4">


                        <Link href={'https://www.linkedin.com/in/masomeh-rezaei-b597b5285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }target="-blank">
                            <div className="group text-[#9ad1aa]  cursor-pointer">
                                <div className="flex justify-center items-center gap-x-2 p-2 rounded-md border border-[#9ad1aa] h-10 w-23 cursor-pointer
                            transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-500
                            group-hover:shadow-lg group-hover:shadow-blue-500/50">
                                    <FaLinkedinIn/><h1 className="">Linkdin</h1>
                                </div>
                            </div>
                        </Link>

                        <Link href={'https://github.com/masoumeh-rezaei'} target="-blank">
                            <div className="group text-[#9ad1aa] cursor-pointer">
                                <div className="flex justify-center items-center gap-x-2 p-2 rounded-md border border-[#9ad1aa] h-10 w-23 cursor-pointer
                            transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:border-lime-500
                            group-hover:shadow-lg group-hover:shadow-lime-500/50">
                                    <FaGithub/><h1 className="">Github</h1>
                                </div>
                            </div></Link>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
}

export default About;