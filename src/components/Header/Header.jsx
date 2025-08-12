    import styles from "./styles.module.scss";
    import BoxIcon from "./BoxIcon/BoxIcon";
    import { dataBoxIcon, dataMenu } from "./constants";
    import Menu from "./Menu";
    import Logo from "../../assets/image/logo-retina.jpg";
    import { TfiReload } from "react-icons/tfi";

    import { CiHeart } from "react-icons/ci";

    import { BsCart3 } from "react-icons/bs";

    import useScrollHandling from "@/hooks/useScrollHandling";
    import { useContext, useEffect, useState } from "react";
    import classNames from "classnames";
    import { SidebarContext } from "@/contexts/SideBarProvider";
import { useNavigate } from "react-router-dom";

    function MainHeader() {
    const { fixedHeader } = styles;
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const { setIsOpen, setType } = useContext(SidebarContext);
    const navigate = useNavigate()


    const handleOpenSideBar = (type) =>{
        setIsOpen(true);
        setType(type);
    }
    const handleBackHome = ()=>{
        navigate('/')
    }

    useEffect(() => {
        // if(scrollPosition > 100){
        //     setFixedPosition(true)
        // }
        // else{
        //     setFixedPosition(false)
        // }

        setFixedPosition(scrollPosition > 80 ? true : false);
    }, [scrollPosition]);
    return (
        <div
        className={classNames(
            "flex justify-center items-center top-0 left-0 right-0 absolute transition-all duration-300 ease-in-out",
            {
            [fixedHeader]: fixedPosition,
            }
        )}
        >
        <div className="flex items-center justify-between h-[83px]  w-[1240px]">
            {/* Icon So */}
            <div className="flex justify-center items-center gap-[20px]">
            <div className="flex justify-between gap-[20px] cursor-pointer">
                {dataBoxIcon.map((item, index) => {
                return <BoxIcon key={index} type={item.type} href={item.href} />;
                })}
            </div>
            {/* Menu */}
            <div className="flex justify-between gap-[20px] text-primaryColor">
                {dataMenu.slice(0, 3).map((item, index) => {
                return (
                    <Menu key={index} content={item.content} href={item.href} />
                );
                })}
            </div>
            </div>
            {/* logo */}
            <div>
            <img src={Logo} alt="Logo" className="w-[153px] h-[53px] cursor-pointer" onClick={() => handleBackHome()} />
            </div>
            <div className=" flex justify-center items-center gap-[20px] text-primaryColor">
            <div className="flex justify-between gap-[20px]">
                {dataMenu.slice(3, dataMenu.length).map((item, index) => {
                return (
                    <Menu
                    key={index}
                    content={item.content}
                    href={item.href}
                    />
                );
                })}
            </div>
            {/* Icon */}
            <div className="flex justify-between items-center gap-[20px] cursor-pointer">
                <TfiReload className="size-[20px]" onClick={() => handleOpenSideBar('compare')} />
                <CiHeart className="size-[30px]" onClick={() => handleOpenSideBar('wishlist')} />
                <BsCart3 className="size-[20px]" onClick={() => handleOpenSideBar('cart')} />
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default MainHeader;
