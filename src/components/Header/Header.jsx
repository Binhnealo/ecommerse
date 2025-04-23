    import BoxIcon from "./BoxIcon/BoxIcon";
    import { dataBoxIcon, dataMenu } from "./constants";
    import Menu from "./Menu";
    import Logo from "../../assets/image/logo-project-1.png";
    import reloadIcon from "../../assets//icons/svgs/reloadIcon.svg";
    import heartIcon from "../../assets//icons/svgs/heartIcon.svg";
    import cartIcon from "../../assets//icons/svgs/cartIcon.svg";

    function MainHeader() {
    return (
        <div className=" flex  justify-center items-center">
        <div className="flex items-center justify-between h-[83px]  w-[1250px]">
            {/* Icon So */}
            <div className="flex justify-center items-center gap-[20px]">
            <div className="flex justify-between gap-[10px]">
                {dataBoxIcon.map((item) => {
                return <BoxIcon type={item.type} href={item.href} />;
                })}
            </div>
            {/* Menu */}
            <div className="flex justify-between gap-[20px] text-primaryColor">
                {dataMenu.slice(0, 3).map((item) => {
                return <Menu content={item.content} href={item.href} />;
                })}
            </div>
            </div>
            {/* logo */}
            <div>
            <img src={Logo} alt="Logo" className="w-[173px] h-[40px]" />
            </div>
            <div className=" flex justify-center items-center gap-[20px] text-primaryColor">
            <div className="flex justify-between gap-[20px]">
                {dataMenu.slice(3, dataMenu.length).map((item) => {
                return <Menu content={item.content} href={item.href} />;
                })}
            </div>
            {/* Icon */}
            <div className="flex justify-between gap-[10px]">
                <img src={reloadIcon} alt="Reload Icon" />
                <img src={heartIcon} alt="Heart Icon" />
                <img src={cartIcon} alt="Cart Icon" />
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default MainHeader;
