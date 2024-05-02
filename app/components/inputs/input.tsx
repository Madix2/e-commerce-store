'use client'

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface inputProps{
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

const Input: React.FC<inputProps> = ({
    id,
    label,
    type,
    disabled,
    required,
    register,
    errors
}) => {
    return ( <div className="w-full relative">
<input
    id={id}
    autoCapitalize="off"
    disabled={disabled}
    {...register(id, {required})}
    placeholder=""
    type={type}
    className={"peer w-full p-4 pt-6 outline-none bg-white font-light border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed " + (errors[id] ? 'border-rose-400' : 'border-t-slate-300') + (errors[id] ? ' focus:border-rose-400' : ' focus:border-t-slate-300')}
/>
        <label 
            className={'absolute cursor-text text-md duration-150btransform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4' +(errors[id] ? ' text-rose-500' : ' text-slate-400')}
        htmlFor={id}>{label}</label>
    </div> );
}
 
export default Input;