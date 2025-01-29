"use client";

import Form from "@/components/Form";
import { registerfields } from "@/constants/constants";
import Link from "next/link";

export default function register() {
  const onSubmit = (payload: any) => {
    console.log(payload);
  };

  return (
  
          <div className="p-3 flex flex-col justify-center h-full space-y-24  ">
          <h1 className="text-4xl  text-nowrap text-gray-700 self-center ">Register to get started </h1>
              
          <Form  fields={registerfields} onSubmit={onSubmit} submittext={'Register'}/>
          <p className="text-gray-700 self-center">Already have Account <Link href={'/login'}><span className="text-blue-400">login here</span></Link></p>
          </div> 
        

      );
}
