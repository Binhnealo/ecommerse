import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import MainLayout from "@components/Layout/Layout";

function HeadingListProducts() {
    
    return <MainLayout>
        
        <div className="flex justify-between">
            <div className="w-1/2"><CountdownBanner/></div>
            <div className="flex  p-[15px]">
                <div>1</div>
                <div>2</div>
            </div>
        </div>
    </MainLayout>;
}

export default HeadingListProducts;