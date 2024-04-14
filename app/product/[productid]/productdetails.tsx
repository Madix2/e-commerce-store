'use client';

import React, {useEffect } from "react";

import Button from "@/app/components/button";
import ProductImage from "@/app/components/products/productimage";
import SetColor from "@/app/components/products/setcolor";
import SetQuantity from "@/app/components/products/setquantity";
import { useCart } from "@/hooks/usecart";
import { products } from "@/utils/products";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useCallback, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ProductDetailsProps{
    product:any
}
export type CartProductType={
    id: string,
    name: string,
    description:string;
    category:string;
    brand:string;
    sImage:SelectedImgType;
    qty:number;
    price:number;
}
export type SelectedImgType={
    color:string;
    colorCode:string;
    image:string;
}
const ProductDetails:React.FC<ProductDetailsProps>=({product}) => {
    const [isProductInCart, setIsProductInCart] = useState(false)
    const {handleAddProductToCart, cartProducts} = useCart()
    const [cartProduct, setCartProduct]=useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        sImage: { ...product.images[0] },
        qty: 1,
        price: product.price
    });
const router = useRouter()
    // useEffect(() => {
    //     localStorage.setItem("eShopCartItem", JSON.stringify(cartProducts))
    // }, [cartProducts]);

    // console.log(cartProducts);

    useEffect(() => {
        setIsProductInCart(false)
        if (cartProducts){
            const existingIndex = cartProducts.findIndex((item) => item.id == product.id)
            if (existingIndex>-1){
                setIsProductInCart(true);
            }
          }

    },[cartProducts, products])
    const productRating=
        product.reviews.reduce((acc: number, item: any) => 
        item.rating + acc, 0) / product.reviews.length;
    // const handleColorSelect = useCallback((value:SelectedImgType) => {},[cartProduct]);
    const handleQtyIncrease=useCallback(() => {
        if (cartProduct.qty==99) return;
        setCartProduct((prev) =>{
            return {...prev, quantity: ++prev.qty};
        });
    }, [cartProduct]);
    const handleQtyDecrease=useCallback(() => {
        if (cartProduct.qty==1) return;
        setCartProduct((prev) =>{
            return {...prev, quantity: --prev.qty};
        });
    }, [cartProduct]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="w-[200px] h-[200px]">
            <ProductImage cartProduct={cartProduct} product={product}/>
            
        </div>
        <div>
            <h2 className=" text-3xl font-medium text-slate-700">{product.name}</h2>
            <div className=" flex items-center gap-2">
                <Rating value={productRating} readOnly />
                {/* <div>{product.reviews.length}</div> */}
            <div>
                {product.reviews.length} reviews
            </div>
            </div>
            <div>
                {product.description}
                <div>
                    <span>CATEGORY:</span>{product.category}
                </div>
            <div>
                <span>Brand:</span>{product.brand}
            </div>
            </div>
            <div className={product.inStock ? ' text-green-500' : ' text-red-600'}>
                {product.inStock ? 'in stock' : 'out of stock'}
            </div>
        {/* <SetColor 
        cartProduct={cartProduct}
        images={product.images}
        handleColorSelect={handleColorSelect}
        /> */}
        {isProductInCart ? <>
        <p className=" mb-2 text-slate-500 flex items-center gap-1">
            <MdCheckCircle size={20} className="text-teal-400"/> 
            <span>product added to cart</span>
        </p>
        <div>
            <Button label="View Cart" outline onClick={()=>{router.push("/cart")}}></Button>
        </div>
        </> : <>
           <SetQuantity 
        cartProduct={cartProduct}
        handleQtyIncrease={handleQtyIncrease}
        handleQtyDecrease={handleQtyDecrease}
        />
        <div className=" max-w-[150px]">
            <Button  label="Add to Cart" onClick={() => handleAddProductToCart(cartProduct)}/>
         </div>
        </>}
        
        </div>
    </div>
  )
}

export default ProductDetails;