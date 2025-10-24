    import CartTable from "@pages/Cart/components/content/CartTable";
    import CartSummary from "@/pages/Cart/components/content/CartSummary";
    import Button from "@components/Button/Button";
    import { useContext, useEffect } from "react";
    import { SidebarContext } from "@/contexts/SideBarProvider";
    import { addProductToCart, deleteItem, deleteCart } from "@/apis/cartService";
    import { BsCart3 } from "react-icons/bs";
    import { useNavigate } from "react-router-dom";
    import { getCart } from "@/apis/cartService";

    function Content() {
    const {
        listProductsCart,
        handleGetListProductsCart,
        isLoading,
        setIsLoading,
        userId,
        setListProductsCart,
    } = useContext(SidebarContext);
    const navigate = useNavigate();
    const handleReplaceQuantity = (data) => {
        setIsLoading(true);
        addProductToCart(data)
        .then((res) => {
            console.log(res);
            handleGetListProductsCart("cart", data.userId);
        })
        .catch((err) => {
            setIsLoading(false);
            console.log(err);
        });
    };
    const handleDeleteItemCart = (data) => {
        setIsLoading(true);
        deleteItem(data)
        .then((res) => {
            console.log(res);
            handleGetListProductsCart("cart", data.userId);
        })
        .catch((err) => {
            setIsLoading(false);
            console.log(err);
        });
    };
    const handleDeleteCart = () => {
        setIsLoading(true);
        deleteCart({ userId })
        .then((res) => {
            console.log(res);
            handleGetListProductsCart("cart", userId);
        })
        .catch((err) => {
            setIsLoading(false);
            console.log(err);
        });
    };
    const handleNavigateToShop = () => {
        navigate("/shop");
    };
    useEffect(() => {
        if (userId) {
        getCart(userId)
            .then((res) => {
            setListProductsCart(res.data.data);
            setIsLoading(false);
            })
            .catch((err) => {
            setListProductsCart([]);
            setIsLoading(false);
            });
        }
    }, []);
    return (
        <>
        {listProductsCart.length > 0 ? (
            <div className="flex grow p-[15px] gap-[20px] ">
            <div className="flex-none">
                <CartTable
                listProductsCart={listProductsCart}
                getData={handleReplaceQuantity}
                isLoading={isLoading}
                getDataDelete={handleDeleteItemCart}
                />
                <div className="flex justify-between mt-[15px]">
                <div className="flex gap-[2px] ">
                    <div className="border border-gray-300 rounded-[2px] w-[300px] ">
                    <input
                        type="text"
                        placeholder="Coupon code"
                        className="px-[15px] outline-none py-[8px]"
                    />
                    </div>
                    <div className="text-[12px]">
                    <Button content="OK" isPrimary={false} />
                    </div>
                </div>
                <div className="">
                    <Button
                    content="CLEAR SHOPPING CART"
                    isPrimary={false}
                    onClick={handleDeleteCart}
                    />
                </div>
                </div>
            </div>
            <div className="flex-1">
                <CartSummary
                listProductsCart={listProductsCart}
                isLoading={isLoading}
                />
            </div>
            </div>
        ) : (
            <div className="flex flex-col items-center justify-center  h-[299px]">
            <div>
                <BsCart3 className="text-[40px] text-fourColor mb-[10px]" />
            </div>
            <div className="text-primaryColor text-[25px] mb-[7px]">
                YOUR SHOPING CART IS EMPTY
            </div>
            <div className="text-[14px] text-thriColor mb-[20px]">
                We invite you to get acquainted with an assortment of our shop.
                Surely you can find something for yourself!
            </div>
            <div>
                <Button content="RETURN TO SHOP" onClick={handleNavigateToShop} />
            </div>
            </div>
        )}
        </>
    );
    }

    export default Content;
