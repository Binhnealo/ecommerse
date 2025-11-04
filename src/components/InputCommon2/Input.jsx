    function InputCustom({
    label,
    type,
    isRequired = false,
    dataOptions,
    register,
    isShowLabel = true,
    placeholder,
    isError = false,
    }) {
    const handleRenderInput = () => {
        if (type === "text") {
        return (
            <input
            className={isError?"h-[37px] px-[15px] border-[1px]  border-red-600 rounded-[3px]":"h-[37px] px-[15px] border-[1px]  border-sixColor rounded-[3px]"}
            type="text"
            required={isRequired}
            placeholder={placeholder}
            {...register}
            />
        );
        } else {
        return (
            <>
            <select className={isError?"h-[37px] px-[15px] border-[1px]  border-red-600 rounded-[3px]":"h-[37px] px-[15px] border-[1px]  border-sixColor rounded-[3px]"} {...register}>
                <option value="" selected disabled hidden >{placeholder}</option>
                {dataOptions.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select>
            </>
        );
        }
    };

    return (
        <>
        <div className="flex flex-col w-full gap-[5px] ">

            {isShowLabel && (
                <label htmlFor="" className="text-[14px] text-thriColor mb-[5px]">
                    {" "}
                    {label} {isRequired && <span className="text-red-600">*</span>}
                </label>
            )}
            {handleRenderInput()}
        </div>
        </>
    );
    }

    export default InputCustom;
