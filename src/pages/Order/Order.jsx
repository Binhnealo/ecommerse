import {  useEffect } from "react";
import { getDetailOrder } from "@/apis/orderService";
import { useLocation } from "react-router-dom";

function Order() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const totalAmount = params.get("totalAmount");
    const qrCodeImage = `https://qr.sepay.vn/img?acc=VQRQAFBZN6530&bank=MBBank&amount=${totalAmount}&des=${id}`;

    const handleGetDetailOrder = async () => {
        try {
        const res = await getDetailOrder(id);
        console.log(res)
    }catch (error) {
        console.error("Error fetching order details:", error);
    }
}

    useEffect(()=>{
        handleGetDetailOrder();
    },[])
    return (
        <div>
            <img src={qrCodeImage} alt="QR Code" />
        </div>
    );
}

export default Order;