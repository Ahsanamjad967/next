import { navlinks } from "@/constants/constants";
import { ArrowLeftCircle, ArrowLeftSquare, ArrowRightCircle, ArrowRightIcon, ArrowRightSquare, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Sidebar from "../components/Sidebar";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(true);
  
  return (
    <div>
      <div className="h-20  bg-white  drop-shadow-sm">
        <div className="flex items-center justify-between  lg:mx-20 m-5">
          <div className="flex items-center">
            <div className="text-4xl   ">My App</div>
          </div>
          <div className="flex gap-2 items-center">
            {navlinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-gray-700  font-semibold "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className={`hidden lg:flex transition-transform duration-500 relative ${isOpen?'-translate-x-[80%]':''} bg-black text-white h-screen w-1/5`}>
        <div className="absolute top-2 right-2">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">{isOpen?<ArrowRightCircle className="text-gray-200"/>:<ArrowLeftCircle className="text-gray-200"/>}</button>
        </div>
        
        <div className={`flex flex-col  ${isOpen ?'items-end':'items-start'} px-8 py-4 mt-8 w-full   h-full`}>
          <div className={`flex flex-col   items-center space-y-12  h-full`}>
            <Link href="/home" className="flex gap-4">
              <HomeIcon />
              <p className={`${isOpen?'hidden':""}`}>Home</p>
            </Link>
            <Link href="/home" className="flex gap-4 ">
              <HomeIcon />
              <p className={`${isOpen?'hidden':""}`}>Home</p>
            </Link>{" "}
            <Link href="/home" className="flex gap-4 ">
              <HomeIcon />
              <p className={`${isOpen?'hidden':""}`}>Home</p>
            </Link>{" "}
            <Link href="/home" className="flex gap-4 ">
              <HomeIcon />
              <p className={`${isOpen?'hidden':""}`}>Home</p>
            </Link>
          </div>
          </div>
        </div>

        
      </div> */}
    </div>
  );
}

export default Navbar;
