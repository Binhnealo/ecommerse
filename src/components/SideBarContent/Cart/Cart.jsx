import Buttton from "@components/Button/Button";
import HeaderSideBar from "@components/SideBarContent/components/HeaderSideBar/HeaderSideBar";
import ItemProd from "@components/SideBarContent/components/ItemProduct/ItemProduct";
import { BsCart3 } from "react-icons/bs";

function Cart() {
    return <div className="flex flex-col justify-between h-[99%] py-[20px] pr-[10px] pl-[20px] ">
        <div>
            <HeaderSideBar icon={<BsCart3  className="size-[25px]" />} title='CART'/>
            <ItemProd/>
        </div>
        <div>
            <div className="flex justify-between items-center mb-[20px]">
                <p>SUBTOTAL:</p>
                <p>$199</p>
            </div>
            <div className="flex flex-col gap-[10px]">
                <Buttton content={"VIEW CART"}/>
                <Buttton content={"CHECK OUT"} isPrimary={false}/>
            </div>
        </div>
    </div>;
}

export default Cart;