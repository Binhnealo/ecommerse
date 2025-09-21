    import CartTable from "@pages/Cart/components/content/CartTable";
    import CartSummary from "@/pages/Cart/components/content/CartSummary";
    import Button from "@components/Button/Button";

    function Content() {
    return (
        <div className="flex grow p-[15px] gap-[30px] ">
        <div className="flex-none">
            <CartTable />
            <div className="flex justify-between mt-[15px]">
            <div className="flex gap-[2px] ">
                <div className="border border-gray-300 rounded-[2px] w-[300px] ">
                <input
                    type="text"
                    placeholder="Coupon code"
                    className="px-[15px] outline-none py-[8px]"
                />
                </div>
                <div className="text-[12px]">
                <Button content="OK" isPrimary={false} />
                </div>
            </div>
            <div className="">
                <Button content="CLEAR SHOPPING CART" isPrimary={false} />
            </div>
            </div>
        </div>
        <div className="flex-1">
            <CartSummary />
        </div>
        </div>
    );
    }

    export default Content;
