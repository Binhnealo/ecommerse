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
        <div className="min-h-[500px]">
        <MainLayout>
            {isLoading ? (
            <div>Loading...</div>
            ) : (
            <>
                <div
                className={cls(
                    isShowGrid
                    ? "flex flex-wrap  items-start justify-between  gap-[18px]"
                    : "flex flex-col gap-[18px]"
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
        </MainLayout>
        </div>
    );
    }

    export default ListProducts;
