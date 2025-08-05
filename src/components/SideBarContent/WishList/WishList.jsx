import Buttton from "@components/Button/Button";
import HeaderSideBar from "@components/SideBarContent/components/HeaderSideBar/HeaderSideBar";
import ItemProd from "@components/SideBarContent/components/ItemProduct/ItemProduct";
import { CiHeart } from "react-icons/ci";

function WishList() {
    return <div className="flex flex-col justify-between h-[99%] py-[20px] pr-[10px] pl-[20px] ">
        <div>
            <HeaderSideBar icon={<CiHeart  className="size-[25px]" />} title='WISHLIST'/>
            <ItemProd/>
        </div>
        <div className="flex flex-col gap-[10px]">
            <Buttton content={'VIEW WISH LIST'}/>
            <Buttton content={'ADD ALL TO CART'} isPrimary={false}/>
        </div>
    </div>;
}

export default WishList;