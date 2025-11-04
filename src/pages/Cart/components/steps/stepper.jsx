    import cls from "classnames";
import { useContext } from "react";
import { SteperContext } from "@/contexts/SteperProvider";

    function Stepper({ number, content, isDisabled}) {
        const { setCurrentStep } = useContext(SteperContext);
    return (
        <div className="flex items-center justify-center gap-[10px]" onClick={() => (number!== 3? setCurrentStep(number): {})}>
        <div
            className={cls(
            "w-[30px] h-[30px] flex justify-center items-center text-[15px] rounded-full",
            {
                "bg-black text-white": !isDisabled, // Khi không bị disable
                "bg-sevenColor text-secondaryColor border border-secondaryColor": isDisabled, // Khi bị disable
            }
            )}
        >
            {number}
        </div>
        <div
            className={cls("text-[20px]", {
            "text-secondaryColor": isDisabled, // Khi bị disable
            "text-black": !isDisabled, // Khi không bị disable
            })}
        >
            {content}
        </div>
        </div>
    );
    }

    export default Stepper;