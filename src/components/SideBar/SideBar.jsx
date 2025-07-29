    import { useContext } from "react";
    import styles from "./styles.module.scss";
    import classNames from "classnames";
    import { SidebarContext } from "@/contexts/SideBarProvider";

    import { AiOutlineClose } from "react-icons/ai";
import Login from "@components/SideBarContent/Login/Login";

    function SideBar() {
    const { overlay, sideBar, slideSideBar } = styles;
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative">
        <div
            className={classNames({
            [overlay]: isOpen,
            })}
            onClick={handleToggle}
        />
        <div
            className={classNames(sideBar, {
            [slideSideBar]: isOpen,
            })}
        >
            {isOpen && (
            <div className="flex justify-center items-center absolute top-[30px] left-[-60px] w-[35px] h-[35px] bg-white rounded-full cursor-pointer z-50 hover:bg-gray-200 transition-all duration-300 ease-in-out">
                <AiOutlineClose onClick={handleToggle} />
            </div>
            )}
            <Login/>
        </div>
        </div>
    );
    }

    export default SideBar;
