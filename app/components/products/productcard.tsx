'use client';
import React from "react";
import Link from "next/link";
import AddToCart from "../addtocart";
import Image from "next/image";
import { Truncer } from "@/utils/truncer";
import { FPrice } from "@/utils/fprice";
import { Rating } from "@mui/material";
interface ProductCardProps{
    data:any
}
const ProductCard: React.FC<ProductCardProps> = ({data}) =>{
    return (
        <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm ">
            <div className="flex flex=col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image fill src={data.images[0].image} alt={data.name} className="w-full h-full object-contain"/>
                </div>
                <div className="mt-4">
                    {Truncer(data.name)}
                </div>
                <div>
                    {/* <Rating value={data.rating} readOnly />  */}
                </div>
                <div> {data.reviews.length} reviews</div>
                <div> {FPrice(data.price)} </div>
            </div>
        </div> 
    )
}
export default ProductCard