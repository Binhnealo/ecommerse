    import { FaStar } from "react-icons/fa";

    function Rating() {
    return (
        <div className="flex gap-[20px] py-[10px] ">
        <div className="cursor-pointer text-sixColor hover:text-yellow-400 transition-all duration-300">
            {" "}
            <FaStar />
        </div>
        <div className="flex cursor-pointer text-sixColor hover:text-yellow-400 transition-all duration-300">
            {" "}
            <FaStar />
            <FaStar />
        </div>
        <div className="flex cursor-pointer text-sixColor hover:text-yellow-400 transition-all duration-300">
            {" "}
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <div className="flex cursor-pointer text-sixColor hover:text-yellow-400 transition-all duration-300">
            {" "}
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <div className="flex cursor-pointer text-sixColor hover:text-yellow-400 transition-all duration-300">
            {" "}
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        </div>
    );
    }

    export default Rating;
