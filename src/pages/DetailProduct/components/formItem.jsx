import Rating from "@/pages/DetailProduct/components/rating";

function FormItem({typeChildren,isRequired, label}) {
    const renderChildren = () => {
        switch(typeChildren){
            case "rating":
                return <Rating/>
            case "input":
                return <input type="text" className="border border-sixColor mt-[10px] p-[10px] w-full" />
            case "textarea":
                return <textarea name="" id="" cols="30" rows="10" className="w-full border border-sixColor mt-[10px] p-[10px]" ></textarea>
        }
    }


    return ( 
        <div className="flex flex-col mt-[20px]">
        <label htmlFor="" className="mb-[5px] text-thriColor flex items-center gap-[5px]">
            {label} {isRequired && <sup className="text-red-700 text-[14px]">*</sup>}
        </label>
        {renderChildren()}
        </div>
    );
}

export default FormItem;