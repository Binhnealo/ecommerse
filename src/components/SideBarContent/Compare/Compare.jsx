import Buttton from "@components/Button/Button";
import HeaderSideBar from "@components/SideBarContent/components/HeaderSideBar/HeaderSideBar";
import ItemProd from "@components/SideBarContent/components/ItemProduct/ItemProduct";
import { TfiReload } from "react-icons/tfi";


function Compare() {
    return <div className="flex flex-col justify-between h-[99%] py-[20px] pr-[10px] pl-[20px] ">
        <div className="">
            <HeaderSideBar icon={ <TfiReload className="size-[25px]" />} title='COMPARE' />
            <h3 className="mt-5 text-center">Compare Is Updating!</h3>
        </div>
        <div>
            <Buttton content={'VIEW COMPARE'}/>
        </div>
    </div>;
}

export default Compare;