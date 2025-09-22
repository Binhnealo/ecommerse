    function SelectBox({ options, getValue, type, defaultValue }) {
    return (
        <select
        className="border text-secondaryColor text-[14px] border-[#e1e1e1] border-[1px] py-[5px] pr-[10px] pl-[10px]"
        onChange={(e) => getValue(e.target.value, type)}
        value={defaultValue}
        >
        {options.map((option, index) => {
            return (
            <option key={index} value={option.value}>
                {option.label}
            </option>
            );
        })}
        </select>
    );
    }

    export default SelectBox;
