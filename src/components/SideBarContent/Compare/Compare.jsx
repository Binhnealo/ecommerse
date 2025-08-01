import HeaderSideBar from "@components/SideBarContent/components/HeaderSideBar/HeaderSideBar";
import ItemProd from "@components/SideBarContent/components/ItemProduct/ItemProduct";
import { TfiReload } from "react-icons/tfi";


function Compare() {
    return <div className=" py-[20px] pr-[10px] pl-[20px] ">
        <HeaderSideBar icon={ <TfiReload className="size-[25px]" />} title='COMPARE' />
        <ItemProd/>
    </div>;
}

export default Compare;