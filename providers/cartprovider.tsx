'use client'

import { CartContextProvider } from "@/hooks/usecart";
import React from "react";

interface cartProviderProps{
    children: React.ReactNode
}

const CartProvider: React.FC<cartProviderProps> = ({children}) => {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
}
 
export default CartProvider;