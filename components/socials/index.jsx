import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const Socials = ({className}) => {
    return (
        <div className={`z-20 ${className}`}>
            <div className="flex space-x-3 mb-4">
    <Link href={''}>
    <div className="group text-[#9ad1aa]">
        <FaInstagram className="p-2 rounded-full border border-[#9ad1aa] h-9 w-9 cursor-pointer 
        transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:border-pink-500 
        group-hover:shadow-lg group-hover:shadow-pink-500/50" />
    </div>
    </Link>
    
    <Link href={''}>
    <div className="group text-[#9ad1aa]">
        <FaLinkedinIn className="p-2 rounded-full border border-[#9ad1aa] h-9 w-9 cursor-pointer 
        transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-500 
        group-hover:shadow-lg group-hover:shadow-blue-500/50" />
    </div>
    </Link>
    
    <Link href={'https://github.com/masoumeh-rezaei'} target="-blank">
    <div className="group text-[#9ad1aa]">
        <FaGithub className="p-2 rounded-full border border-[#9ad1aa] h-9 w-9 cursor-pointer 
        transition-transform duration-300 hover:scale-110 hover:rotate-6 hover:border-blue-600 
        group-hover:shadow-lg group-hover:shadow-blue-600/50" />
    </div>
    </Link>
</div>
        </div>
    );
}

export default Socials;