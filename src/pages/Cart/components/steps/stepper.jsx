    import cls from "classnames";

    function Stepper({ number, content, isDisabled }) {
    return (
        <div className="flex items-center justify-center gap-[10px]">
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