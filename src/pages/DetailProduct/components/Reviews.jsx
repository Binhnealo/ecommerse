import Button from "@components/Button/Button";
import { FaStar } from "react-icons/fa";
import FormItem from "@/pages/DetailProduct/components/formItem";
import { Form } from "react-router-dom";


function Reviews() {
    return (
        <div>
            <div className="border-b border-sixColor pb-[20px] mb-[20px] text-[14px] text-fourColor">Reviews</div>
            <p className="text-[14px] text-thriColor mb-[20px]">There are no reviews yet.</p>
            <div className="text-[14px] text-primaryColor pt-[30px] border-b border-sixColor pb-[14px] mb-[14px]">BE THE FIRST TO REVIEW THIS PRODUCT</div>
            <div className="text-[14px] text-thriColor mb-[20px]">Your email address will not be published. Required fields are marked</div>

            {/* Rating */}
            <FormItem label={"Your rating"} isRequired={true} typeChildren={"rating"}/>
            {/* Review */}
            <FormItem label={"Your review"} isRequired={true} typeChildren={"textarea"}/>
            {/* Name */}
            <FormItem label={"Name"} isRequired={true} typeChildren={"input"}/>
            {/* Email */}
            <FormItem label={"Email"} isRequired={true} typeChildren={"input"}/>
            
            <div className="flex items-center gap-[10px] my-[20px]">
                <input type="checkbox" /> <p>
                    Save my name, email, and website in this browser for the next time I comment.
                </p>
            </div>
            <div className="w-[150px]">
                <Button content={"SUBMIT"}/>
            </div>
        </div>
        
    );
}

export default Reviews;