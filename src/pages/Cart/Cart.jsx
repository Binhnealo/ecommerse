import MainHeader from "@components/Header/Header";
import Steps from "@/pages/Cart/components/steps/Steps";
import MainFooter from "@components/Footer/Footer";
import MainLayout from "@components/Layout/Layout";
import Content from "@/pages/Cart/components/content/Content";

function Cart() {
    return <div>
        <MainHeader/>
        <div className="pt-[83px]">
            <Steps/>
            <MainLayout>
                <Content/>
            </MainLayout>
        </div>
        <MainFooter/>
    </div>;
}

export default Cart;