    import Stepper from "@/pages/Cart/components/steps/stepper";
    import dataSteps from "@/pages/Cart/components/steps/dataStep";
import { useContext } from "react";
import { SteperContext } from "@/contexts/SteperProvider";

    function Steps() {
        const { currentStep } = useContext(SteperContext);
    return (
        <div className="bg-[#fafafa] w-full flex flex-col justify-center items-center py-[2.3vw] gap-[40px] mb-[2.3vw]">
        <div className="flex gap-[20px] justify-center items-center  ">
            {dataSteps.map((item, index) => {
            return (
                <div
                className="flex items-center justify-center gap-[20px]"
                key={index}
                >
                <Stepper
                    number={item.number}
                    content={item.content}
                    isDisabled={index >= currentStep}
                />
                {index !== dataSteps.length - 1 && (
                    <div className="min-w-[120px] h-[1px] bg-[#e1e1e1]"></div>
                )}
                </div>
            );
            })}
        </div>
        <div className="text-fourColor">
            You are out of time? checkout now to avoid losing your order!
        </div>
        </div>
    );
    }

    export default Steps;
