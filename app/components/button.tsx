'use client'

import React from "react";
import { IconType } from "react-icons";

interface ButtonProps{
    label: string;
    disabled?: boolean;
    outline?: boolean
    small?: boolean
    custom?: string
    icon?: IconType
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({label, disabled, outline, small, custom, icon: Icon, onClick}) => {
    return (
    <button 
    onClick={onClick} disabled={disabled} className=" disabled:opacity-70 disabled:cursor-not-allowed bg-slate-700 p-2">
        {Icon && <Icon size={24}/>}
        {label}
    </button> );
}
 
export default Button;