import CartTable from "@pages/Cart/components/content/CartTable";
import CartSummary from "@/pages/Cart/components/content/CartSummary";

    function Content() {
    return <div className="flex grow p-[15px] gap-[30px] ">
        <div className="flex-none">
            <CartTable/>
        </div>
        <div className="flex-1"><CartSummary/></div>
        </div>;
    }

    export default Content;
