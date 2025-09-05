'use client'
import Navbar from "../components/Navbar";
import "./globals.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import React from "react"

export default function RootLayout({ children }) {
    React.useEffect(()=>{
        Aos.init({
            offset:100,
            duration:700,
            easing:'ease-in',
            delay:100,
        });
        Aos.refresh();
    })
  return (
    <html lang="en" >
      <body className="overflow-x-hidden">
        <Navbar/>
        
        {children}
      </body>
    </html>
  );
}
