    import { useContext, useState } from "react";
    import { SidebarContext } from "@/contexts/SideBarProvider";
    import SliderCommon from "@components/SliderCommon/SliderCommon";
    import Button from "@components/Button/Button";
    import SelectBox from "@/pages/OurShop/components/SelectBox/SelectBox";
    import { BsCart3 } from "react-icons/bs";
    import { TfiReload } from "react-icons/tfi";
    import { CiHeart } from "react-icons/ci";
    import { ToastContext } from "@/contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";
    // import cls from "classnames";

    function DetailProduct() {
    const { productDetail, userId, setType, setIsOpen, handleGetListProductsCart, setIsLoading } =
        useContext(SidebarContext);
    const { toast } = useContext(ToastContext);
    console.log("productDetail", productDetail);
    const [chooseSize, setChooseSize] = useState("");
    const [quantity, setQuantity] = useState("1");

    const showOptions = [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
        { label: "5", value: "5" },
        { label: "6", value: "6" },
        { label: "7", value: "7" },
    ];
    const handleGetSize = (value) => {
        setChooseSize(value);
    };
    const handleDeleteSize = () => {
        setChooseSize("");
    };
    const handleGetQuantity = (value) => {
        setQuantity(value);
    };
    const handleAddToCart = () => {
        if (!userId) {
        setType("login");
        setIsOpen(true);
        toast.warning("Please login to add product to cart");
        return;
        }

        if (!chooseSize) {
        toast.warning("Please choose size");
        return;
        }

        const data = {
        userId,
        productId: productDetail._id,
        quantity,
        size: chooseSize,
        isMultiple: true,
        };
        setIsOpen(false);
        setIsLoading(true);
        addProductToCart(data).then((res) => {
        setIsOpen(true);
        setType("cart");
        handleGetListProductsCart("cart", userId);
    }).catch((error) => {
        toast.error(error.response?.data?.message || "Failed to add product to cart");
    });
    }

    return (
        <div className="p-[15px]">
        <div className="px-[5px] h-[412px]">
            <SliderCommon data={productDetail.images} />
        </div>
        <div className="text-fourColor text-[24px] my-[12px]">
            {productDetail.name}
        </div>
        <div className="text-secondaryColor mb-[12px] text-[20px]">
            ${productDetail.price}
        </div>
        <div className="text-thriColor text-[16px]/7">
            {productDetail.description}
        </div>
        <div className="my-[5px] text-thriColor">Size {chooseSize}</div>
        <div className="flex gap-[5px] mb-[15px]">
            {productDetail.size.map((item, index) => (
            <div
                key={index}
                className=" "
                onClick={() => handleGetSize(item.name)}
            >
                {" "}
                <Button
                content={item.name}
                isPrimary={false}
                width={"30px"}
                height={"30px"}
                padding={"0px"}
                fontSize={"12px"}
                border={
                    chooseSize === item.name ? "1px solid black" : "1px solid #ccc"
                }
                />
            </div>
            ))}
        </div>
        {chooseSize && (
            <div
            className="text-thriColor text-[12px] mb-[15px] cursor-pointer"
            onClick={() => handleDeleteSize()}
            >
            Clear
            </div>
        )}
        <div className="flex items-center gap-[15px]">
            <div>
            <SelectBox
                options={showOptions}
                type={"show"}
                defaultValue={quantity}
                getValue={handleGetQuantity}
            />
            </div>
            <div>
            <Button
                content={
                <div className="flex items-center gap-[5px] text-[12px]">
                    <BsCart3 /> <div>ADD TO CART</div>
                </div>
                }
                width={"159px"}
                height={"35px"}
                padding={"13px 30px"}
                fontSize={"12px"}
                onClick={handleAddToCart}
            />
            </div>
        </div>
        <div className="relative h-[1px]  bg-sixColor my-[25px]">
            <div className="p-[2px] bg-white w-[30px] text-[12px] text-thriColor absolute inset-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            OR
            </div>
        </div>
        <Button
            content={
            <div className="flex items-center gap-[5px] text-[12px] ">
                <BsCart3 /> <div>BUY NOW</div>
            </div>
            }
        />
        <div className="cursor-pointer flex items-center gap-[10px] text-thriColor  mt-[15px]">
            <div className="text-[15px]">
            <TfiReload />
            </div>
            <div className="text-[12px]">Add to compare</div>
        </div>
        <div className="cursor-pointer flex items-center gap-[10px] text-thriColor mt-[15px]">
            <div className="text-[20px]">
            <CiHeart />
            </div>
            <div className="text-[12px]">Add to wishlist</div>
        </div>

        <div className="flex gap-[5px] my-[10px]">
            <div>SKU:</div>
            <div>12345</div>
        </div>
        <div className="flex gap-[5px] mb-[10px]">
            <div>Category: </div>
            <div>Men</div>
        </div>
        <div className="flex gap-[5px]">
            <div>Estimated delivery: </div>
            <div>3-5 days</div>
        </div>
        </div>
    );
    }

    export default DetailProduct;
