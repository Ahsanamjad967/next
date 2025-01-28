"use client"

import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form({fields,onSubmit}:{fields:any,onSubmit:any}) {

const {register,handleSubmit}=useForm()
  return (
    <div>
      <form className='flex-grow' onSubmit={handleSubmit(onSubmit)} >
        {fields.map((field:any,idx:any)=>(
          <div className='flex flex-col gap-2' key={idx}>
            <label className='block capitalize text-gray-700 font-medium  ' htmlFor={`${field.name}`}>{field.name}</label>
            <input  className='outline-none focus:outline-none ring-1 ring-gray-200 w-full rounded-sm  p-3' id={`${field.name}`} {...register(`${field.name}`) }type={field.type}  />
            </div>
        ))}
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
