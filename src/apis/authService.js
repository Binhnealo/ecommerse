    import axiosClient from "./axiosClient";

    const register = async (body) => {
    return axiosClient.post("/register", body);
    };
    const signIn = async (body) => {
    return axiosClient.post("/login", body);
    };
    const getInfo = async (userId) => {
    return await axiosClient.get(`/user/info/${userId}`);
    };
    export { register, signIn, getInfo };
