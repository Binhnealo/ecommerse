import HeaderSideBar from "@components/SideBarContent/components/HeaderSideBar/HeaderSideBar";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";

import { dataMenu } from "./constants";
import Menu from "@components/Header/Menu";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "@/contexts/SideBarProvider";
import { useContext } from "react";

function MenuSideBar() {
    const { setIsOpen } = useContext(SidebarContext);

  const navigate = useNavigate();
  const handleNaviateHome =()=>{
    navigate('/');
    setIsOpen(false);
  }
  const handleNavigateCart =()=>{
    navigate('/cart');
    setIsOpen(false);
  }
  return (
    <div className="flex flex-col gap-[20px] h-[99%] py-[20px] pr-[10px] pl-[20px]">
      <div onClick={handleNaviateHome}><HeaderSideBar title="MARSEILLE"  /></div>
      <div className="">
        {dataMenu.slice(0,5).map((item, index) => {
          return <Menu key={index} content={item.content} isHeader={false} />;
        })}
        <div className="flex flex-col py-[10px] gap-[20px]">
          <div className="flex gap-[10px] cursor-pointer">
            <TfiReload/>
            <span> Compare</span>
          </div>
          <div className="flex gap-[10px] cursor-pointer">
            <CiHeart/>
            <span> Wish List</span>
          </div>
          <div className="flex gap-[10px] cursor-pointer" onClick={handleNavigateCart}>
            <BsCart3/>
            <span> Cart</span>
          </div>
        </div>
        {dataMenu.slice(5).map((item, index) => {
          return <Menu key={index} content={item.content} isHeader={false} />;
        })}
        
      </div>
    </div>
  );
}

export default MenuSideBar;
