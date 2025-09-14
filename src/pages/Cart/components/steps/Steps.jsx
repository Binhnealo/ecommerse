import Stepper from "@/pages/Cart/components/steps/stepper";
import dataSteps from "@/pages/Cart/components/steps/dataStep";

function Steps() {
    
    return   <div className="bg-[#fafafa] w-full flex flex-col justify-center items-center py-[40px] gap-[40px]">

        <div className="flex gap-[30px] justify-center items-center">
            {dataSteps.map((item, index) =>{
                return <>
                <Stepper number={ item.number} content={item.content} key={index} isDisabled={index !== 0}/>
                {index !==dataSteps.length -1 && <div className="min-w-[120px] h-[1px] bg-[#e1e1e1]"></div>}
                
                </>
                
            })}
            
        </div>
        <div className="text-fourColor">You are out of time? checkout now to avoid losing your order!</div>

    </div> ;
}

export default Steps;