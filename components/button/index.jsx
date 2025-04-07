

import Link from "next/link";
const Button = ({ text,className,href,classNameBTN }) => {
    return (
        <div className={`group relative overflow-hidden ${className}`}>
            <button className={`relative ${classNameBTN}  text-[#9ad1aa] border border-l-0 border-r-0 border-t-[#9ad1aa] border-b-[#9ad1aa] hover:text-[#282f44]  rounded-xl transition-all duration-300 ease-in-out`} >
                <Link href={href} target="-blank">
                <span className="relative z-10">{text}</span>
                </Link>
                
                

               
                <span className="absolute inset-0 w-0 h-full bg-[#9ad1aa] rounded-xl  transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </button>
        </div>
    );
};

export default Button;
