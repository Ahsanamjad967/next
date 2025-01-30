import { SidebarItems } from '@/constants/constants';
import { SidebarClose, SidebarOpen } from 'lucide-react';
import React, { forwardRef, ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';


const Sidebar2 = ({ children, className = '' }: { children: ReactNode; className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {register,handleSubmit}=useForm()
const onsubmit=(data:any)=>{{console.log(data)}}
  return (


    <div className={`${className}`}>
      <div
        className={`flex relative flex-col space-y-10 items-center transition-all ${
          isOpen ? 'w-[16rem] ' : 'w-[4rem] max-sm:w-[0rem]'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 p-3 pt-8 shadow-lg bg-gray-900 text-white">
          <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen?'absolute right-2':''}`} >
            {isOpen ? <SidebarClose /> : <SidebarOpen />}
          </button>
        </div>

        <div className="flex flex-col  items-center space-y-4">
          {SidebarItems.map((item, index) => (
            <div
              key={index}
              className={`flex justify-start gap-4  w-full items-center p-3 hover:bg-gray-700  cursor-pointer`}
            >
              <span className="text-xl">{item.icon}</span>
              <span
                className={`text-lg font-medium ${isOpen ? '' : 'hidden'} `}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar2;
