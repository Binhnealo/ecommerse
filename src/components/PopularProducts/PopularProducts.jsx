import MainLayout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";

function PopularProducts({data}) {
    return <MainLayout>
        <div className=" flex flex-wrap justify-between items-center gap-[10px]  ">
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