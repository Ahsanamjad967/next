"use client";

import { Eye, EyeOff } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form({
  fields,
  onSubmit,
  submittext = "submit",
}: {
  fields: any;
  onSubmit: any;
  submittext: string;
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const { register, handleSubmit ,formState:{errors}} = useForm();
  return (
    <div className="flex flex-col items-center justify-center ">
      <form className="flex flex-col gap-6 w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field: any, idx: any) => (
          <div className="" key={idx}>
            <label
              className="block capitalize text-gray-700 font-medium"
              htmlFor={`${field.name}`}
            >
              {field.name}
            </label>
            <div className="relative">
              <input
                className="outline-none focus:outline-none ring-1 ring-gray-200 w-full rounded-sm p-3"
                id={`${field.name}`}
                {...register(`${field.name}`,field.rules)}
                type={field.type === "password" && showPassword ? "text" : field.type}
              />
              {field.type === "password" &&
                (showPassword ? (
                  <EyeOff
                    
                    className="absolute opacity-20 transition-opacity duration-300  hover:opacity-100 right-3 top-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <Eye
                    className="absolute right-3 transition-opacity duration-300  opacity-20 hover:opacity-100 top-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ))}
              {errors[field.name]&&<span className="text-red-500 text-sm">{errors[field.name]?.message?.toString()}</span>}
            </div>
          </div>
        ))}
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          {submittext}
        </button>
      </form>
    </div>
  );
}
