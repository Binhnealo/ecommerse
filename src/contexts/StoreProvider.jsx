    import { createContext, useEffect, useState } from "react";
    import Cookies from "js-cookie";
    import { getInfo } from "@/apis/authService";

    export const StoreContext = createContext();

    export const StoreProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userId, setUserId] = useState(Cookies.get("userId"));

    const handleSignOut = ()=>{
        Cookies.remove("userId");
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        window.location.reload();
    }

    useEffect(() => {
        if (userId) {
        getInfo(userId)
            .then((res) => {
            setUserInfo(res.data.data);
            })
            .catch((err) => {
            console.error(err);
            });
        }
    }, [userId]);

    return (
        <StoreContext.Provider value={{ userInfo,handleSignOut,setUserId  }}>
        {children}
        </StoreContext.Provider>
    );
    };
