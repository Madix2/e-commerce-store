// CartClient.tsx
'use client';
import { useCart } from "@/hooks/usecart"; // Assuming this is the correct path to your useCart hook
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Button from "../components/button";
import ItemContent from "./itemcontent";
import { FPrice } from "@/utils/fprice";
// import { useCart } from "@/hooks/usecart";

const CartClient = () => {
    const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">Your cart is empty</div>
                <div>
                    <Link href="/" className=" text-slate-500 items-center gap-1 mt-2">
                            <MdArrowBack />
                            <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        );
    }
    return( 
    <div>
        <title>Adic Technologies Shopping Cart</title>
        <h1 className="flex flex-col items-center m-auto text-center max-w-[100px] mb-6">Shopping Cart</h1>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
            <div className=" col-span-2 justify-self-center">PRODUCT</div>
            <div className=" justify-self-center">PRICE</div>
            <div className=" justify-self-center">QUANTITY</div>
            <div className=" justify-self-end">TOTAL</div>
        </div>
        <div>
            {cartProducts && cartProducts.map((item) => {
                return(
                    //  <div key={item.id}>
                    //     {item.name}
                    //  </div>)
                    <ItemContent key={item.id} item={item}/>
                )
            })}
        </div>
        <div className=" border-t-[1.5px] border-slate-200 justify-between gap-4">
            <div className="w-[90px]">
                <button className=" text-xs underline" onClick={() =>
                    {
                        handleClearCart()
                    }
                }>
                    Clear Cart
                </button>
            </div>
            <div className=" text-sm flex flex-col gap-1 items-center ">
                <div className="flex justify-between w-full text-base font-semibold">
                    <span>Subtotal</span>
                    <span>{FPrice(cartTotalAmount)}</span>
                    
                </div>
                <p className=" text-slate-200">Fees calculate at check out</p>
                <button className=" bg-gray-700 p-3" onClick={() =>{}}>Check Out</button>
                <Link href="/" className=" text-slate-200 items-center gap-1 mt-2 flex">
                    <MdArrowBack />
                    <span>Continue Shopping</span>
                </Link>
            </div>
        </div>
    </div>);
};

export default CartClient;
