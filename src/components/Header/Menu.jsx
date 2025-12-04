import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { SidebarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/StoreProvider";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "@/contexts/ToastProvider";

    function Menu({ content, isHeader }) {
    const { menu } = styles;
    const {toast}= useContext(ToastContext);
    const { setIsOpen, setType } = useContext(SidebarContext);
    const{userInfo, handleSignOut} = useContext(StoreContext)
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const navigate = useNavigate();

    const handleClickShowLogin = () =>{
        if (content  === 'Sign In'&& !userInfo) {
            setIsOpen(true);
            setType('login');
        }
        if (content === 'Our Shop'){
            navigate('/shop')
            setIsOpen(false)
        }
        if (content === 'About Us'){
            navigate('/about-us')
            setIsOpen(false)
        }
        if (content === 'Contact'){
            toast.info('Contact Us page is updating!')
            
        }
        if (content === 'Element'){
            toast.info('Element page is updating!')
        }
        if (content === 'Search'){
            toast.info('Search is updating!')
        }

    };
    const handleRenderText = ()=>{
        if(content === 'Sign In' && userInfo){
            return `hello,${userInfo?.username}`;
        }else{
            return content;
        }
    }
    const handleHover = () =>{
        if (content === 'Sign In' && userInfo) {
            setIsShowSubMenu(true);
        }
    }
    const handleClickShowSubMenu = () =>{
        if (content === 'Sign In' && userInfo) {
            setIsShowSubMenu(!isShowSubMenu);
        }
    }
    return (
        <div
        className={classNames(menu, { 
            "": isHeader,
            "flex flex-col gap-3 border-b border-primaryColor": !isHeader,
         })}
        onMouseEnter={handleHover}
        onClick={handleClickShowLogin}
        >
            <div onClick={() =>handleClickShowSubMenu()}>{handleRenderText(content)}</div>
            {isShowSubMenu && <div onMouseLeave={()=> setIsShowSubMenu(false)} onClick={handleSignOut} className="w-full bg-white p-[10px] absolute top-[40px] rounded-[10px] border-[2px] border-primaryColor">SIGN OUT</div>}
        </div>
    );
    }

    export default Menu;
