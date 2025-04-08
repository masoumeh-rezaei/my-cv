import Link from "next/link";
import { usePathname } from "next/navigation";
const MobileNav = ({showMenue}) => {
    const pathName = usePathname()
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
            name: "skills",
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
        
    ];
    
    return (
        <div>
            <div className={`${showMenue ? 'left-0' : '-left-[100%]'} h-screen text-white  sm:w-[40%]  w-[75%] bg-gradient-to-r from-[#282f44] to-[#634258] fixed top-0  transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between  z-[9999] `}>
            <div>
               
                <nav className="my-auto">
                   <ul>
                   {
                        menues.map(menu=>(
                            <li key={menu.id} className={`group relative hover:bg-[#906387] w-full transition-all duration-700 py-3 rounded-md pl-2 hover:text-white  list-none ${pathName == menu.link ? 'bg-[#906387]': 'bg-transparent'  } `}>
                                <Link href={menu.link} className="flex gap-4"><span>{menu.icon}</span> <span>{menu.name}</span></Link>
                                <span className="absolute  size-3 top-0 right-0 hidden group-hover:flex transition-all duration-500">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-500 opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-slate-400"></span>
                            </span>
                            </li>
                            
                        ))
                    }
                   </ul>
                </nav>
            </div>
            <div className="footer">
                <h1>@2024 All right Reserved By Masomeh</h1>
            </div>

        </div>
        </div>
    );
}

export default MobileNav;