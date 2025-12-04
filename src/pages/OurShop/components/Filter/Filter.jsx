    import { TfiLayoutGrid4 } from "react-icons/tfi";
    import { CiCircleList } from "react-icons/ci";
    import { useContext } from "react";
    import { OurShopContext } from "@contexts/OurShopProvider";
    import SelectBox from "@pages/OurShop/components/SelectBox/SelectBox";

    function Filter() {
    const { sortOptions, showOptions, setSortId, setShowId, setIsShowGrid } =
        useContext(OurShopContext);
    const getValueSelect = (value, type) => {
        if (type === "sort") {
            setSortId(value);
        }else{
            setShowId(value);
        }
    };
    const handleGetSetGrid = (type) =>{
        setIsShowGrid(type === "grid");
    }

    return (
        <div className="flex justify-between flex-col gap-5 sm:flex-row items-center py-[15px]">
        <div className="flex items-center ">
            <SelectBox
            options={sortOptions}
            getValue={getValueSelect}
            type="sort"
            />
            <div className="flex gap-[10px] pl-[20px] hidden md:flex">
            <TfiLayoutGrid4 className="text-[20px] text-secondaryColor cursor-pointer" onClick={() => handleGetSetGrid("grid")} />
            <div className="h-[20px] w-[1px] bg-[#e1e1e1]" />
            <CiCircleList className="text-[20px] text-secondaryColor cursor-pointer" onClick={() => handleGetSetGrid("list")} />
            </div>
        </div>
        <div className="flex items-center justify-center gap-[20px]">
            <div className="text-secondaryColor">Show</div>
            <SelectBox
            options={showOptions}
            getValue={getValueSelect}
            type="show"
            />
        </div>
        </div>
    );
    }

    export default Filter;
