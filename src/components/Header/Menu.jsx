import { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { SidebarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/StoreProvider";
import { useNavigate } from "react-router-dom";

    function Menu({ content, href, }) {
    const { menu } = styles;
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
    return (
        <div
        className={menu}
        onMouseEnter={handleHover}
        onClick={handleClickShowLogin}
        >
        {handleRenderText(content)}
        {isShowSubMenu && <div onMouseLeave={()=> setIsShowSubMenu(false)} onClick={handleSignOut} className="w-full bg-white p-[10px] absolute top-[40px] rounded-[10px]">SIGN OUT</div>}
        </div>
    );
    }

    export default Menu;
