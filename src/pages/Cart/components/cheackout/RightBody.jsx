import PaymentMethod from "@components/PaymentMethod/PaymentMethod";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SideBarProvider";
import Button from "@components/Button/Button";


    function RightBody({handleExternalSubmit}) {
        
        const {
                listProductsCart,
            } = useContext(SidebarContext);

            const totalPrice = listProductsCart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );
    return (
        <div className="w-[39%] h-[100%] py-[23px] px-[28px] border-[2px] border-primaryColor  ">
            <p className="text-[16px] text-primaryColor border-b border-sixColor pb-[14px] mb-[14px]">
                YOUR ORDER
            </p>
            <div className="flex flex-col  gap-[15px] pb-[14px] border-b border-sixColor mb-[14px] h-[200px] overflow-y-auto">
                {listProductsCart.map((item, index) =>(
                    <div key={index}className="flex gap-[15px]">
                    <img className="h-[120px] w-[80px] object-cover" src={item.images[0]} alt="" />
    
                    <div className="flex flex-col gap-[10px] text-primaryColor text-[14px]">
                        <p>{item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Size: {item.size}</p>
                    </div>
                </div>
                ))}
            </div>

            <div className="  flex justify-between py-[34px] border-b border-sixColor mb-[14px] text-primaryColor text-[20px]">
                <p>Total Price</p>
                <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex gap-[15px] mb-[30px]  text-[16px] text-fourColor">
                <input type="radio" id="qr" name="paymentMethod" value="qr" />
                <label htmlFor="qr">Check payments</label>
            </div>

            <div className="flex gap-[15px] mb-[30px]  text-[16px] text-fourColor">
                <input type="radio" id="cod" name="paymentMethod" value="cod" />
                <label htmlFor="cod">Cash on Delivery</label>
            </div>

            <div>
                <Button content={"PLACE ORDER"} onClick={handleExternalSubmit} />
            </div>

            <PaymentMethod/>
        </div>
    );
    }

    export default RightBody;
