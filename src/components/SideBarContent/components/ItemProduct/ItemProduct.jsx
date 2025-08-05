import { IoCloseSharp } from "react-icons/io5";


function ItemProd() {
    return <div className="flex py-[20px] px-[10px] mt-[10px] hover:bg-[#f7f7f7] transtion-all duration-300 ease-in-out cursor-pointer relative group"> 
        <img className="w-[70px] h-[83px] mr-[20px] " src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg" alt="ảnh" />
        <div className="absolute top-[10px] right-[10px] translate-x-[34px] transition-transform duration-300 ease-in-out group-hover:translate-x-0 "> <IoCloseSharp className="text-thriColor"  /></div>
        <div className="flex flex-col ">
            <div className="text-[14px] text-primaryColor">title of product</div>
            <div className="text-[14px] mt-[7px] mb-[10px] text-secondaryColor">Size:M</div>
            <div className="text-[14px] text-primaryColor mb-[7px]">$199</div>
            <div className="text-[14px]">SKU:  12349</div>
        </div>

    </div>;
}

export default ItemProd;