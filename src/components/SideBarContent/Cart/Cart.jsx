import Buttton from "@components/Button/Button";
import HeaderSideBar from "@components/SideBarContent/components/HeaderSideBar/HeaderSideBar";
import ItemProd from "@components/SideBarContent/components/ItemProduct/ItemProduct";
import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { SidebarContext } from "@/contexts/SideBarProvider";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";
import Button from "@components/Button/Button";
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
    const { listProductsCart, isLoading, setIsOpen } = useContext(SidebarContext);

    const handleNavigateToCart = () => {
        navigate("/shop");
        setIsOpen(false);
    }
    const subTotal = listProductsCart.reduce((acc, item) => {
        return acc + item.total;
    }, 0);
    return <div className="flex flex-col justify-between h-[99%] py-[20px] pr-[10px] pl-[20px] ">
        <HeaderSideBar icon={<BsCart3  className="size-[25px]" />} title='CART'/>

        {listProductsCart.length ?<div className=" flex flex-col flex-1 justify-between ">
            <div>
            <div className="relative ">
                {isLoading ? <LoadingTextCommon /> : listProductsCart.map((item, index) =>(
                <ItemProd key={index}
                src={item.images[0]}
                nameProduct={item.name}
                priceProduct={item.price}
                sizeProduct={item.size}
                skuProduct={item.sku}
                quantity={item.quantity}
                productId={item.productId}
                userId ={item.userId}
                />
                
            ))}
            </div>
            
        </div>
        
        <div>
            <div className="flex justify-between items-center mb-[20px]">
                <p>SUBTOTAL:</p>
                <p>${subTotal}</p>
            </div>
            <div className="flex flex-col gap-[10px]">
                <Buttton content={"VIEW CART"}/>
                <Buttton content={"CHECK OUT"} isPrimary={false}/>
            </div>
        </div>
        </div>: <div className="flex flex-col items-center h-full mt-[20px]"> <div className="text-[14px] text-fourColor">
            No Products in Cart
            </div>
            <div className="my-[20px] mx-auto" ><Button content={"RETURN TO SHOP"} isPrimary={false} onClick={handleNavigateToCart}/></div>
            </div> }
    </div>;
}

export default Cart;