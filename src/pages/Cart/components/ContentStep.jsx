import { useContext } from "react";
import { SteperContext } from "@/contexts/SteperProvider";
import Content from "@/pages/Cart/components/content/Content";
import Checkout from "@/pages/Cart/components/cheackout/Checkout";
import QrPayment from "@/pages/Cart/components/QrPayment";

function ContentStep() {
    const { currentStep } = useContext(SteperContext);
    const handleRenderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <div><Content/></div>;
            case 2:
                return <div><Checkout /></div>;
            case 3:
                return <div><QrPayment /></div>;
            default:
                return null;
        }
    }
    return <>
    {handleRenderStepContent()}
    </>;
}

export default ContentStep;