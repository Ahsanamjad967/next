"use client"

import Form from "@/components/Form";
import { loginfields } from "@/constants/constants";
import Link from "next/link";

export default function login() {
    const onSubmit=(payload:any)=>{
        console.log(payload)
    }
    return (

        <div className="p-3 flex flex-col justify-center h-full space-y-24  ">
            <h1 className="text-4xl text-nowrap text-gray-700 self-center ">Login to your account</h1>
            
        <Form  fields={loginfields} onSubmit={onSubmit} submittext={'Login'}/>
        <p className="text-gray-700 mb-10 self-center">Dont have an account? <Link href={'/register'}><span className="text-blue-400">Register here</span></Link></p>
        </div> 
    );
}
