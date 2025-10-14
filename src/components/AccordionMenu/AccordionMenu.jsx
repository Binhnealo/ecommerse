    import cls from "classnames";
    import { RiArrowDownWideLine } from "react-icons/ri";

    import { TfiLayoutLineSolid } from "react-icons/tfi";

    function AccordionMenu({titleMenu, contentMenu, onClick, isMenuSelected}) {
    
    const handleToggle = () => {
        onClick();
        
    };
    return (
        <div>
        <div
            className={cls(
            "flex items-center  py-[15px] px-[9px] text-[14px] text-primaryColor hover:text-secondaryColor cursor-pointer transition-colors duration-300 ",
            { "bg-[#f7f7f7]": isMenuSelected }
            )}
            onClick={handleToggle}
        >
            {isMenuSelected ? (
            <RiArrowDownWideLine
                style={{ fontSize: "15px", marginRight: "8px" }}
            />
            ) : (
            <TfiLayoutLineSolid
                style={{ fontSize: "15px", marginRight: "8px" }}
            />
            )}
            {titleMenu}
        </div>

            <div className={cls("overflow-hidden h-0 transition-all duration-300 px-[20px]",   {"h-auto p-[20px]": isMenuSelected})}>
            {contentMenu}
            </div>
        
        </div>
    );
    }

    export default AccordionMenu;

