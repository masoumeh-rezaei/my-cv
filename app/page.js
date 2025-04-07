
import Navbar from './../components/Navbar'
import Hero from "./../components/Hero";
export default function Home() {
  return (
   <>
    <div className="bg-gradient-to-r from-[#282f44] to-[#634258] dark:bg-black overflow-hidden">
    <Navbar/>
    <Hero/>
    </div>
   </>
  );
}
