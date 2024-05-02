'use client'

import { useState } from "react";
import Input from "../components/inputs/input";
import { useForm } from "react-hook-form";
import { FieldValues, SubmitHandler, } from "react-hook-form";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
    const [isLoading, setIsLoading]= useState(false);
    const {register, handleSubmit, formState:{errors}}= useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    });
    const onSubmit:SubmitHandler <FieldValues>=(data) =>
        {
            setIsLoading(true)
            console.log(data)
        }
    return ( 
        <>
            <h1>Adico Technologies</h1>
            <button className="flex justify-center flex-col items-center bg-white p-3 pt-4 rounded-[45px]" onClick={() => {}}>Sign up with Google <AiOutlineGoogle/></button>
            <hr className=" bg-slate-300 h-px" />
            <Input 
                id="name"
                label="Name"
                disabled={isLoading}
                errors={errors}
                required
                register={register}
                type="name"
            />
            <Input 
                id="email"
                label="Email"
                disabled={isLoading}
                errors={errors}
                required
                register={register}
                type="email"
            />

            <Input 
                id="password"
                label="Password"
                disabled={isLoading}
                errors={errors}
                required
                register={register}
                type="password"
            />
            <button onClick={handleSubmit(onSubmit)}>{isLoading ? "Loading" : "Signup"}</button>
            <p className="text-sm">
                Already have an account? {"  "}  
                <Link className="underline" href='/login'>Log in </Link>
            </p>
        </>
     );
}
 
export default RegisterForm;