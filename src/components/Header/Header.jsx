
    import BoxIcon from "./BoxIcon/BoxIcon";
    import { CiMenuBurger } from "react-icons/ci";

    import { dataBoxIcon, dataMenu } from "./constants";
    import Menu from "./Menu";
    import Logo from "../../assets/image/Logo-retina.jpg";
    import { TfiReload } from "react-icons/tfi";

    import { CiHeart } from "react-icons/ci";

    import { BsCart3 } from "react-icons/bs";

    import useScrollHandling from "@/hooks/useScrollHandling";
    import { useContext, useEffect, useState } from "react";
    import classNames from "classnames";
    import { SidebarContext } from "@/contexts/SideBarProvider";
    import { useNavigate } from "react-router-dom";
    import { StoreContext } from "@/contexts/StoreProvider";


    function MainHeader() {
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const {
        setIsOpen,
        setType,
        listProductsCart,
        userId,
        handleGetListProductsCart,
    } = useContext(SidebarContext);
    const { userInfo } = useContext(StoreContext);
    const navigate = useNavigate();

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    };
    const handleBackHome = () => {
        navigate("/");
    };
    const handleOpenCartSideBar = () => {
        handleGetListProductsCart("cart", userId);
        handleOpenSideBar("cart");
    };
    const totalItemsInCart = listProductsCart.length
        ? listProductsCart.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0)
        : 0;
    useEffect(() => {
        setFixedPosition(scrollPosition > 80 ? true : false);
    }, [scrollPosition]);
    return (

        <div
        className={classNames(
            "flex justify-center items-center top-0 left-0 right-0 w-full transition-all duration-300 ease-in-out",
            {
            "absolute top-0": !fixedPosition,
            ["fixed top-[0]  bg-white opacity-90 z-[999] shadow-[2px_0_12px_0_rgba(0,0,0,0.15)] backdrop-blur-[5px]"]: fixedPosition,
            }
        )}
        >
        <div className="flex items-center justify-between h-[83px] w-[95%] sm:w-[90%] lg:w-[1240px]">
            {/* Menu Icon Mobile */}
            <div className="inline-block lg:hidden">
            <div className=" pl-[10px] cursor-pointer "><CiMenuBurger /></div>
            </div>
            {/* Icon social & Menu left */}
            <div className="flex  items-center gap-[20px] hidden lg:flex">
            {/* Icon Social */}
            <div className="flex gap-[20px] cursor-pointer">
                {dataBoxIcon.map((item, index) => {
                return <BoxIcon key={index} type={item.type} href={item.href} />;
                })}
            </div>
            {/* Menu */}
            <div className="flex gap-[20px] text-primaryColor">
                {dataMenu.slice(0, 3).map((item, index) => {
                return (
                    <Menu key={index} content={item.content} href={item.href} />
                );
                })}
            </div>
            </div>
            {/* logo */}
            <div>
            <img
                src={Logo}
                alt="Logo"
                className="w-[153px] h-[53px] cursor-pointer"
                onClick={() => handleBackHome()}
            />
            </div>
            {/* Menu Right & Icons */}
            <div className=" flex items-center gap-[20px] text-primaryColor hidden lg:flex">
            {/* Menu Right */}
            <div className="flex gap-[20px]">
                {dataMenu.slice(3, dataMenu.length).map((item, index) => {
                return (
                    <Menu key={index} content={item.content} href={item.href} />
                );
                })}
            </div>
            {/* Icon */}
            <div className="flex  items-center gap-[20px] cursor-pointer">
                <TfiReload
                className="size-[20px]"
                onClick={() => handleOpenSideBar("compare")}
                />
                <CiHeart
                className="size-[30px]"
                onClick={() => handleOpenSideBar("wishlist")}
                />
                <div className="relative">
                <BsCart3
                    className="size-[20px]"
                    onClick={() => handleOpenCartSideBar()}
                />
                <div className="absolute top-[-5px] right-[-10px] bg-primaryColor text-white text-[10px] rounded-full w-[20px] h-[20px] flex items-center justify-center">
                    {totalItemsInCart || userInfo?.amountCart || 0}
                </div>
                </div>
            </div>
            </div>
            <div className=" cursor-pointer pr-[20px] relative inline-block lg:hidden">
                <BsCart3
                    className="size-[20px]"
                    onClick={() => handleOpenCartSideBar()}
                />
                <div className="absolute top-[-8px] right-[4px] bg-primaryColor text-white text-[10px] rounded-full w-[20px] h-[20px] flex items-center justify-center">
                    {totalItemsInCart || userInfo?.amountCart || 0}
                </div>
                </div>
        </div>
        </div>
    );
    }

    export default MainHeader;
