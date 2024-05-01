'use client'
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
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleQtyIncrease: (product: CartProductType) => void;
    handleQtyDecrease: (product: CartProductType) => void;
    handleClearCart: () => void;
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    children: React.ReactNode;
}

export const CartContextProvider: React.FC<Props> = ({ children }) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
    const [cartTotalAmount, setCartTotalAmount]=useState(0);
    useEffect(() => {
        const cartItems: any = localStorage.getItem("eShopCartItem");
        const cartProducts: CartProductType[] | null = JSON.parse(cartItems);
        setCartProducts(cartProducts);
    }, []);
    useEffect(() => {
        const getTotal = () => {
            if (cartProducts) {
                const { total, qty } = cartProducts.reduce((acc, item) => {
                    const itemTotal = item.price * item.qty;
                    acc.total += itemTotal;
                    acc.qty += item.qty;
                    return acc;
                }, {
                    total: 0,
                    qty: 0,
                });
                setCartTotalQty(qty);
                setCartTotalAmount(total);
            }
        };
    
        getTotal(); // Call getTotal to calculate totals initially and whenever cartProducts changes
    }, [cartProducts]);
    

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product];
            } else {
                updatedCart = [product];
            }
            setCartTotalQty((prevQty) => prevQty + 1);
            toast.success("Product added to cart");
            localStorage.setItem("eShopCartItem", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((item) => item.id !== product.id);
            setCartProducts(filteredProducts);
            setCartTotalQty((prevQty) => prevQty - product.qty);
            toast.success("Product removed from cart");
            localStorage.setItem("eShopCartItem", JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);

    const handleQtyIncrease = useCallback((product: CartProductType) => {
        if (product.qty >= 99) {
            return toast.error("Maximum quantity reached");
        }
    
        setCartProducts((prev) => {
            const updatedCart = [...(prev || [])];
            const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex !== -1) {
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    qty: updatedCart[existingProductIndex].qty + 1
                };
                setCartTotalQty((prevQty) => prevQty + 1);
                localStorage.setItem("eShopCartItem", JSON.stringify(updatedCart));
            }
            return updatedCart;
        });
    }, []);
    
    const handleQtyDecrease = useCallback((product: CartProductType) => {
        if (product.qty <= 1) {
            return toast.error("Minimum quantity reached");
        }
    
        setCartProducts((prev) => {
            const updatedCart = [...(prev || [])];
            const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex !== -1) {
                updatedCart[existingProductIndex] = {
                    ...updatedCart[existingProductIndex],
                    qty: updatedCart[existingProductIndex].qty - 1
                };
                setCartTotalQty((prevQty) => prevQty - 1);
                localStorage.setItem("eShopCartItem", JSON.stringify(updatedCart));
            }
            return updatedCart;
        });
    }, []);
    

    const handleClearCart = useCallback(() => {
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem("eShopCartItem", JSON.stringify(null));
        toast.success("Cart cleared");
    }, []);

    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleQtyIncrease,
        handleQtyDecrease,
        handleClearCart,
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
