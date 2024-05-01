'use client'
// ItemContent.tsx
import { CartProductType, useCart } from "@/hooks/usecart";
import { FPrice } from "@/utils/fprice";
import { Truncer } from "@/utils/truncer";
import Image from "next/image";
import Link from "next/link";
import SetQuantity from "../components/products/setquantity";

interface ItemContentProps {
    item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const { handleRemoveProductFromCart, handleQtyIncrease,handleQtyDecrease } = useCart();

    // const handleQtyIncrease = () => {
    //     // Implement increase quantity logic here
    // };

    return (
        <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
            <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
                <Link href={'/product/' + item.id}>
                    <div className="relative w-[70px] aspect-square">
                        <Image className="object-contain" src={item.sImage.image} alt={item.name} width={70} height={70} />
                    </div>
                </Link>
                <div className="flex flex-col justify-between">
                    <Link href={'/product/' + item.id}>
                        {Truncer(item.name)}
                    </Link>
                    <div className="w-[70px]">
                        <button className="text-slate-200 underline" onClick={() => {
                            handleRemoveProductFromCart(item);
                        }}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">{FPrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuantity
                    cartCounter={true}
                    cartProduct={item}
                    handleQtyDecrease={()=>{handleQtyDecrease(item)}}
                    handleQtyIncrease={() => {
                        handleQtyIncrease(item)
                    }}
                />
            </div>
            <div className="justify-self-end">{FPrice(item.price * item.qty)}</div>
        </div>
    );
};

export default ItemContent;
