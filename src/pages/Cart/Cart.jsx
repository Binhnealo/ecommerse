import MainHeader from "@components/Header/Header";
import Steps from "@/pages/Cart/components/steps/Steps";
import MainFooter from "@components/Footer/Footer";
import MainLayout from "@components/Layout/Layout";
import ContentStep from "@/pages/Cart/components/ContentStep";
import { SteperProvider } from "@/contexts/SteperProvider";

function Cart() {
    
    return <SteperProvider>
        <MainHeader/>
        <div className="pt-[83px]">
            <Steps />
            <MainLayout>
                <ContentStep/>
                
            </MainLayout>
        </div>
        <MainFooter/>
    </SteperProvider>;
}

export default Cart;