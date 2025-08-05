    import { useState } from "react";
    import { FiEye } from "react-icons/fi";
    import { FiEyeOff } from "react-icons/fi";

    function InputCommon({ label, type, isRequired = false, ...props }) {
    const { formik, id } = props;
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const isErr = formik.errors[id] && formik.touched[id];
    const messageErr = formik.errors[id];

    const isShowPassword = type === "password" && showPassword ? "text" : type;

    const isPassword = type === "password";
    return (
        <div>
        <div className="text-[14px] text-thriColor">
            {label} {isRequired && <span>*</span>}
        </div>
        <div className="w-full mt-[5px] mb-[15px] relative">
            <input
            className="w-full border-1 border-fiveColor py-[10px] pl-[10px] rounded-[4px] "
            {...props}
            type={isShowPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values[id]}
            />

            {isPassword && (
            <div
                className="absolute top-[14px] right-[10px] z-12 cursor-pointer"
                onClick={handleShowPassword}
            >
                {showPassword ? (
                <FiEyeOff className="size-[13px]" />
                ) : (
                <FiEye className="size-[13px]" />
                )}
            </div>
            )}

            {/* Overlay màu trắng để che icon */}
            {isPassword && (
            <div className="absolute top-[10px] right-[4px] h-[25px] w-[25px] bg-white z-10 rounded"></div>
            )}

            {isErr && (
            <div className="text-[12px] text-red-600 pt-2">{messageErr}*</div>
            )}
        </div>
        </div>
    );
    }

    export default InputCommon;
