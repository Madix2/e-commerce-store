'use client'

import { CartProductType } from "@/app/product/[productid]/productdetails"
import React from "react";

interface SetQtyProps{
    cartCounter?:boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;

}
const SetQuantity: React.FC<SetQtyProps>=({cartProduct, cartCounter, handleQtyDecrease, handleQtyIncrease}) => {
  return (
    <div className="flex gap-8 items-center">
        {cartCounter ? null : <div>Quantity</div> }
        <div className="flex gap-4 items-center text-base">
            <button onClick={handleQtyDecrease}>-</button>
            <div>{cartProduct.qty}</div>
            <button onClick={handleQtyIncrease}>+</button>
        </div>
    </div>
  )
}

export default SetQuantity