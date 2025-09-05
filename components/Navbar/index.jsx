'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileNav from './MobileNav'
import DarkModeToggle from "@/components/darkmod";
const Navbar = () => {
 const pathName = usePathname()


    const [showMenue, setShowMenue] = useState(false)
    const toggleMenue=()=>{
        setShowMenue(!showMenue)
    }

const menues = [
    {
        id: 1,
        name: "Home",
        link: "/",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        ),
    },
    {
        id: 2,
        name: "Skills",
        link: "/skills",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
            </svg>
        ),
    },
    {
        id: 3,
        name: "Projects",
        link: "/projects",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
        ),
    },
    {
        id: 4,
        name: "About",
        link: "/about",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
        ),
    },
    {
        id: 5,
        name: "Contact Me",
        link: "/contact",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
            </svg>
        ),
    },
    
];


    

    return (
        <>
            <div className="  bg-gradient-to-r from-[#282f44] to-[#634258] dark:from-[#1A1A1D] dark:to-[#37353E] justify-between  overflow-x-hidden min-w-screen fixed z-50">
               <div className="mx-auto flex flex-row justify-between lg:py-5 px-4 py-3  ">
                    {/*Logo*/}
                    <div className=" flex font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500 z-999999">
                        <p className=" text-3xl">Masoumeh</p>
                        <small>Rezaei</small>
                    </div>
                    {/*nav sec */}
                    <div className="lg:flex gap-4  z-50  ">
                        
                        <ul className="hidden lg:flex  lg:justify-center lg:items-center z-50 ">
                            {
                                menues.map((menu)=>(
                                    <li key={menu.id} className=" flex justify-center items-center flex-row">
                                        <Link href={menu.link} className={`flex items-center gap-2   text-emerald-50
                             hover:text-[#9ad1aa] transition-all duration-300  hover:border-b   py-3   px-4 text-sm hover:rounded-lg 
                             ${pathName === menu.link ?
                               'z-2 lg:text-[#9ad1aa] border-b border-t  rounded-lg'
                               : 'lg:text-emerald-50' }
                                lg:leading-5 
                             `}>  {menu.icon && <span>{menu.icon}</span>} 
            <span>{menu.name}</span> </Link>
                                    </li>
                                ))
                            }
                            
                           {/*Light and darkmood swecher*/}
                         <DarkModeToggle/>

                        </ul>
                         
                        
                        
                    </div>
                    {/*mobile section */}
                        <div className="flex gap-4 lg:hidden z-50">
                      <DarkModeToggle/>
                    <div className=" hover:rotate-6 flex items-center gap-4 lg:hidden text-[#9ad1aa] border-2 rounded-full m-2 transition-all duration-300 hover:border-[#63b98a] hover:shadow-lg hover:scale-110">
                    {
                            showMenue ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"className="size-8 p-0.5 transition-all duration-300  hover:border-[#63b98a] rounded-full
                                hover:shadow-lg hover:shadow-[#9ad1aa]" onClick={toggleMenue}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>

                            ):(
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" hover:rotate-6 size-8 p-0.5 transition-all duration-300  hover:border-[#63b98a] rounded-full
                                hover:shadow-lg hover:shadow-[#9ad1aa]" onClick={toggleMenue}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                              </svg>
                              
                            )
                        }
                    </div>

                    <MobileNav showMenue={showMenue} setShowMenue={setShowMenue}/>
                        </div>

                
               </div>
            </div>
            
        </>
    );
}

export default Navbar;