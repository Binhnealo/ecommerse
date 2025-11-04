    import Button from "@components/Button/Button";
import LoadingCart from "@/pages/Cart/components/LoadingCart";
import PaymentMethod from "@components/PaymentMethod/PaymentMethod";
import { useContext } from "react";
import { SteperContext } from "@/contexts/SteperProvider";
    function CartSummary({ listProductsCart, isLoading }) {

        const { setCurrentStep } = useContext(SteperContext);
    const totalPrice = listProductsCart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );
    const handleProceedToCheckout = () => {
        setCurrentStep(2);
    }

    return (
        <div>
        <div className=" flex flex-col gap-[10px] border-[2px] border-primaryColor p-[30px] relative ">
            <div className="text-[14px] mb-[19px] pb-[14px] border-b border-sixColor ">
            CART TOTALS
            </div>
            <div className="flex justify-between pb-[10px] text-[14px] text-secondaryColor">
            <div>SUBTOTAL</div>
            <div>${totalPrice.toFixed(2)}</div>
            </div>
            <div className="flex justify-between pt-[10px] text-[18px] ">
            <div>TOTAL</div>
            <div>${totalPrice.toFixed(2)}</div>
            </div>
            <div>
            <div className="mb-[10px]">
                <Button content={"PROCEED TO CHECKOUT"} onClick={handleProceedToCheckout} />
            </div>
            <div>
                <Button content={"CONTINUE SHOPPING"} isPrimary={false} />
            </div>
            </div>
            {isLoading && <LoadingCart />}
        </div>
        <PaymentMethod/>
        </div>
    );
    }

    export default CartSummary;
