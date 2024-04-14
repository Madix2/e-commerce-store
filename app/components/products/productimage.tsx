'use client'

import { CartProductType, SelectedImgType } from "@/app/product/[productid]/productdetails";
import Image from "next/image";
import React from "react";

interface ProductImageProps{
    cartProduct: CartProductType
    product: any
}
const ProductImage: React.FC<ProductImageProps> = ({cartProduct, product}) => {
    return ( 
    <div className=" col-span-5 relative aspect-square">
        {product.images.map((image: SelectedImgType) => {
            return(
                <div>
                    <Image src={image.image} alt={product.name} className=" object-contain" fill/>
                </div>
            )
        })}
    </div> 
    );
}
 
export default ProductImage;