        import reloadIcon from "@icons/svgs/reloadIcon.svg";
    import heartIcon from "@icons/svgs/heartIcon.svg";
    import cartIcon from "@icons/svgs/cartIcon.svg";
    
    function ProductItem({src,prevSrc,name,price}) {
    return (
        <div >
            <div className="w-full h-[353px] relative group cursor-pointer">
                <img className="w-full h-full object-cover  " src={src} alt="ảnh mẫu" />
                <img className="w-full h-full object-cover opacity-0 absolute top-0 left-0 right-0 bottom-0 hover:opacity-100 duration-300 " src={prevSrc} alt="" />
                <div className="absolute right-0 bottom-5 bg-whiteColor opacity-0 group-hover:opacity-100 group-hover:right-5 duration-300 ">
                    <div className="w-[40px] h-[40px] flex justify-center items-center hover:bg-fiveColor duration-300">
                        <img className="w-[17px] h-[17px]  " src={cartIcon} alt="Cart" />
                    </div>
                    <div className="w-[40px] h-[40px] flex justify-center items-center  hover:bg-fiveColor duration-300">
                        <img className="w-[17px] h-[17px]" src={heartIcon} alt="Like" />
                    </div>
                    <div className="w-[40px] h-[40px] flex justify-center items-center  hover:bg-fiveColor duration-300">
                        <img className="w-[17px] h-[17px]" src={reloadIcon} alt="Reload" />
                    </div>
                    <div className="w-[40px] h-[40px] flex justify-center items-center  hover:bg-fiveColor duration-300">
                        <img className="w-[17px] h-[17px]" src={reloadIcon} alt="Reload" />
                    </div>
                </div>
                
                
            </div>
            <div className="">
                    <div className="size-[16px] my-[6px] text-fourColor w-full font-medium" >
                        {name}
                    </div>
                    <span className="size-[14px] text-thriColor w-full">{price}</span>
                </div>
        </div>
    );
    }

    export default ProductItem;
