'use client';

import { products } from "@/utils/products";
import Image from "next/image";

interface ProductDetailsProps{
    product:any
}
const ProductDetails:React.FC<ProductDetailsProps>=({product}) => {
    // const arr=products.find(product=> product.id=)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
            {/* <Image></Image> */}
            <img src={product.image} alt={product.name} />
            {product.name}
            
        </div>
        <div>
            <h2 className=" text-slate-900">{product.name}</h2>
        </div>
    </div>
  )
}

export default ProductDetails;