"use client"

import Form from "@/components/Form";
import { loginfields } from "@/constants/constants";

export default function login() {
    const onSubmit=(payload:any)=>{
        console.log(payload)
    }
    return (

        <div className="p-3 flex flex-col justify-center h-full gap-4 ">
            <h1 className="text-4xl text-gray-700 mx-auto ">Login to your account</h1>
            
        <Form fields={loginfields} onSubmit={onSubmit}/>
        </div> 
    );
}
