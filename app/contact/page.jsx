"use client";
import contact from '@/public/Images/contact.png'
import Image from "next/image";



export default function ContactPage() {
    const phoneNumber = "989106765667";
    const message = encodeURIComponent("hi masoomeh I wanna contact you..");

    const whatsappLink =`https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className=" bg-gradient-to-r from-[#282f44] to-[#634258] dark:from-[#1A1A1D] dark:to-[#37353E] pt-30">
            <h1 className="text-4xl  mb-0 m-auto font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500 block pb-2  text-center">Contact Me</h1>
            <div className="min-h-screen flex lg:flex-row flex-col  items-center justify-between p-6 md:p-5  mt-0 pt-0">



                <div className=" mt-5 backdrop-blur-md m-auto  rounded-3xl p-5 max-w-md w-full flex flex-col gap-8 border-2 border-transparent  transition-all duration-300 lg:order-1 order-2" data-aos="fade-right">

                    <div className="flex flex-row items-center  lg:justify-start justify-center gap-2">
                        <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500 block pb-2">Name :</p>
                        <p className="text-gray-200 dark:text-green-200 text-md md:text-lg font-medium">Masoumeh Rezaei</p>
                    </div>

                    <div className="flex flex-row items-center  lg:justify-start justify-center gap-2">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500 block pb-2">Phone :</h3>
                        <p className="text-gray-200 dark:text-green-200 text-md md:text-lg font-medium">09106765667</p>
                    </div>

                    <div className="flex flex-row items-center  lg:justify-start justify-center gap-2">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-50 to-violet-500 block pb-2">Email :</h3>
                        <p className="text-gray-200 dark:text-green-200 text-md md:text-lg font-medium">masomehrezaei83.r@gmail.com</p>
                    </div>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 py-3 px-6 bg-green-600 dark:bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center"
                    >
                        Send WhatsApp Message
                    </a>

                </div>
                <div className={'m-auto mt-5 lg:order-2 order-1 '} data-aos="fade-left">
                    <Image src={contact} alt={'contact'} width={300} height={200} className={'w-[200px] lg:w-[300px]'}/>
                </div>
            </div>
        </div>

    );
}
