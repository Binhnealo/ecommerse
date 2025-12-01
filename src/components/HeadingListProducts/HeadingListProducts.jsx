import CountdownBanner from "@components/CountdownBanner/CountdownBanner";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import MainLayout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";

function HeadingListProducts({data}) {
    
    return <MainLayout>
        
        <div className="flex h-[440px] justify-between">
            <div className="w-full sm:w-1/2"><CountdownBanner/></div>
            <div className="hidden sm:flex h-full px-[15px] gap-[20px]">
                {data.map((item, index) =>(
                    <ProductItem key={index}
                    src={item.images[0]}
                    prevSrc={item.images[1]}
                    name={item.name}
                    price={item.price}
                    details={item}
                    />
                ) )}
                
            </div>
        </div>
    </MainLayout>;
}

export default HeadingListProducts;