import { IoCloseSharp } from "react-icons/io5";
import { deleteItem } from "@/apis/cartService";
import { useContext, useState } from "react";
import { SidebarContext } from "@/contexts/SideBarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";



function ItemProd({src, nameProduct,priceProduct,sizeProduct,skuProduct,quantity, productId, userId}) {
    const [isDeleted, setIsDeleted] = useState(false);
    const {handleGetListProductsCart} = useContext(SidebarContext);
    const {toast} = useContext(ToastContext)

    const handleRemoveItem = () => {
        setIsDeleted(true);
        deleteItem({productId, userId}).then((res) => {
            handleGetListProductsCart("cart", userId);
            setIsDeleted(false);
            toast.success("Xóa sản phẩm thành công");
        }).catch((err) => {
            toast.error(err.response?.data?.message);
            setIsDeleted(false);
        });
    }
    return <div className="flex py-[20px] px-[10px] mt-[10px] hover:bg-[#f7f7f7] transtion-all duration-300 ease-in-out cursor-pointer relative group"> 
        <img className="w-[70px] h-[83px] mr-[20px] " src={src} alt="ảnh" />
        <div className="absolute top-[10px] right-[10px] translate-x-[34px] transition-transform duration-300 ease-in-out group-hover:translate-x-0 " onClick={handleRemoveItem}> <IoCloseSharp className="text-thriColor"  /></div>
        <div className="flex flex-col ">
            <div className="text-[14px] text-primaryColor">{nameProduct}</div>
            <div className="text-[14px] mt-[7px] mb-[10px] text-secondaryColor">Size: {sizeProduct}</div>
            <div className="text-[14px] text-primaryColor mb-[7px]">{quantity} x ${priceProduct}</div>
            <div className="text-[14px]">SKU: {skuProduct}</div>
        </div>
        {isDeleted&& <div className="flex justify-center items-center w-full h-full bg-white/50 absolute top-0 left-0 "><LoadingTextCommon /></div>}

    </div>;
}

export default ItemProd;