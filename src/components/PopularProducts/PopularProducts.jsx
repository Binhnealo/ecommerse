import MainLayout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";

function PopularProducts({data}) {
    return <MainLayout>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] sm:gap-[20px]">
        {data.map((item, index) =>(
            <ProductItem key={index} 
            src={item.images[0]}
            prevSrc={item.images[1]}
            name={item.name}
            price={item.price}
            details={item}
            />
        ))}
        </div>
    </MainLayout>;
}

export default PopularProducts;