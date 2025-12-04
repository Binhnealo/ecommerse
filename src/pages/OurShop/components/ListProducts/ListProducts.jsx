    import { useContext } from "react";
    import { OurShopContext } from "@/contexts/OurShopProvider";
    import ProductItem from "@components/ProductItem/ProductItem";
    import cls from "classnames";
    import MainLayout from "@components/Layout/Layout";
    import Button from "@components/Button/Button";


import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";


    function ListProducts() {
    const { products, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } = useContext(OurShopContext);
    return (
        <div className="">
        <div>
            {isLoading ? (
            <div>Loading...</div>
            ) : (
            <>
                <div
                className={cls(
                    isShowGrid
                    ? "w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]"
                    : " grid grid-cols-1 gap-[15px]"
                )}
                >
                {products.map((item, index) => (
                    <ProductItem
                    key={index}
                    src={item.images[0]}
                    name={item.name}
                    price={item.price}
                    details={item}
                    isHomePage={false}
                    />
                ))}
                </div>
                {products.length < total && (
                    <div className="w-[240px] mt-[50px] mx-auto" onClick={handleLoadMore}>
                <Button content={isLoadMore ? <LoadingTextCommon /> : "LOAD MORE PRODUCT"} isPrimary={false}  />
                </div>
                )}
            </>
            )}
        </div>
        </div>
    );
    }

    export default ListProducts;
