import { useContext } from "react";
import { SteperContext } from "@/contexts/SteperProvider";
import Content from "@/pages/Cart/components/content/Content";
import Checkout from "@/pages/Cart/components/cheackout/CheckOut";

function ContentStep() {
    const { currentStep } = useContext(SteperContext);
    const handleRenderStepContent = () => {
        switch (currentStep) {
            case 1:
                return <div><Content/></div>;
            case 2:
                return <div><Checkout /></div>;
            case 3:
                return <div>Step 3 Content</div>;
            default:
                return null;
        }
    }
    return <>
    {handleRenderStepContent()}
    </>;
}

export default ContentStep;