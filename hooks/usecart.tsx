'use client'
// useCart.tsx
// useCart.tsx
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export type CartProductType = {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    sImage: SelectedImgType;
    qty: number;
    price: number;
};

export type SelectedImgType = {
    color: string;
    colorCode: string;
    image: string;
};

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

export const CartContextProvider: React.FC<Props> = ({ children }) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    useEffect(() => {
        const cartItems: any = localStorage.getItem("eShopCartItem");
        const cartProducts: CartProductType[] | null = JSON.parse(cartItems);
        setCartProducts(cartProducts);
    }, []);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product];
            } else {
                updatedCart = [product];
            }
            toast.success("Product added to cart");
            localStorage.setItem("eShopCartItem", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((item) => item.id !== product.id);
            setCartProducts(filteredProducts);
            toast.success("Product removed from cart");
            localStorage.setItem("eShopCartItem", JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error("useCart must be used within a Cart Context provider");
    }

    return context;
};
