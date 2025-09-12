import { createContext, useEffect, useState } from "react";
import { getCart } from "@/apis/cartService";
import Cookies from "js-cookie";

export const SidebarContext = createContext();

export const SidebarProvider = ({children}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState('')
    const [listProductsCart, setListProductsCart] = useState([]);
    const userId = Cookies.get('userId');
    const [isLoading, setIsLoading] = useState(false);


    const handleGetListProductsCart = (type, userId) => {
        if(userId && type === 'cart'){
            setIsLoading(true);
            getCart(userId)
            .then((res) => {
                setListProductsCart(res.data.data);
                setIsLoading(false);
            })
            .catch((err) => {
                setListProductsCart([]);
                setIsLoading(false);
            })
        }
    }
    const value = { isOpen, setIsOpen ,type, setType, handleGetListProductsCart, listProductsCart, isLoading}

    useEffect(()=>{
        handleGetListProductsCart("cart", userId)
    },[])
    return(
        <SidebarContext.Provider value={value}> 
        {children}
        </SidebarContext.Provider>
    );
};