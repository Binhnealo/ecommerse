    import Button from "@components/Button/Button";
    import MainFooter from "@components/Footer/Footer";
    import MainHeader from "@components/Header/Header";
    import MainLayout from "@components/Layout/Layout";
    import { useNavigate, useParams } from "react-router-dom";
    import { BsCart3 } from "react-icons/bs";
    import { CiHeart } from "react-icons/ci";
    import { TfiReload } from "react-icons/tfi";
    import PaymentMethod from "@components/PaymentMethod/PaymentMethod";
    import AccordionMenu from "@components/AccordionMenu/AccordionMenu";
    import { useContext, useEffect, useState } from "react";
    import Reviews from "@/pages/DetailProduct/components/Reviews";
    import Information from "@/pages/DetailProduct/components/Information";
    import SliderCommon from "@components/SliderCommon/SliderCommon";
    import ReactImageMagnifier from "simple-image-magnifier/react";
    import { getDetailProduct, getRelatedProducts } from "@/apis/productService";
    import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

    import { handleAddProductToCartCommon } from "@/utils/help";
    import { SidebarContext } from "@/contexts/SideBarProvider";
    import { ToastContext } from "@/contexts/ToastProvider";
    import Cookies from "js-cookie";
    import { addProductToCart } from "@/apis/cartService";

    function DetailProduct() {
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    };
    const handleBackToOurShop = () => {
        navigate("/shop");
    };
    const [menuSelected, setMenuSelected] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [data, setData] = useState();
    const [relatedData, setRelatedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingBtn, setIsLoadingBtn] = useState(false);
    const [isLoadingBtnBuyNow, setIsLoadingBtnBuyNow] = useState(false);
    const { setType, setIsOpen, handleGetListProductsCart } =
        useContext(SidebarContext);
    const userId = Cookies.get("userId");

    const { toast } = useContext(ToastContext);

    const params = useParams();
    console.log("params", params);
    const dataMenu = [
        {
        id: 1,
        titleMenu: "ADDITIONAL INFORMATION",
        contentMenu: <Information />,
        },
        {
        id: 2,
        titleMenu: "Reviews (0)",
        contentMenu: <Reviews />,
        },
    ];

    const handleRenderImageDetails = (src) => {
        return (
        <ReactImageMagnifier
            srcPreview={src}
            srcOriginal={src}
            width={302.5}
            height={340}
            className="cursor-crosshair"
        />
        );
    };
    const handleAdd = () => {
        handleAddProductToCartCommon(
        userId,
        setType,
        setIsOpen,
        toast,
        sizeSelected,
        params.id,
        quantity,
        setIsLoadingBtn,
        handleGetListProductsCart
        );
    };
    const handleBuyNow = () => {

        const data = {
        userId,
        productId: params.id,
        size: sizeSelected,
        quantity,
    };

        setIsLoadingBtnBuyNow(true);
        addProductToCart(data)
        .then((res) => {
            setIsLoadingBtnBuyNow(false);
            toast.success("Add to cart successfully");
            navigate("/cart");
        })
        .catch((err) => {
            setIsLoadingBtnBuyNow(false);
            toast.error("Add to cart failed");
        });
    };

    const handleSetMenuSelected = (id) => {
        setMenuSelected(id);
    };
    const [sizeSelected, setSizeSelected] = useState("M");

    const handGetSizeSelected = (size) => {
        setSizeSelected(size);
    };
    const handlerDeleteSizeSelected = () => {
        setSizeSelected("");
    };
    const handleSetQuantity = (type) => {
        if (type === "decrease" && quantity === 1) return;

        if (type === "increase") {
        setQuantity(quantity + 1);
        } else {
        setQuantity(quantity - 1);
        }
    };
    const fetchDataDetail = async (id) => {
        setIsLoading(true);
        try {
        const data = await getDetailProduct(id);
        setData(data);
        setIsLoading(false);
        } catch (error) {
        console.log(error);
        toast.error("Có lỗi khi tải dữ liệu detail product");
        setData();
        setIsLoading(false);
        }
    };
    const fetchDataRelated = async (id) => {
        setIsLoading(true);
        try {
        const data = await getRelatedProducts(id);
        setRelatedData(data);
        setIsLoading(false);
        } catch (error) {
        console.log(error);
        toast.error("Có lỗi khi tải dữ liệu related product");
        setRelatedData([]);
        setIsLoading(false);
        }
    };
    useEffect(() => {
        if (params.id) {
        fetchDataDetail(params.id);
        fetchDataRelated(params.id);
        }
    }, [params]);

    console.log("data", data);
    return (
        <div>
        <MainHeader />
        <MainLayout>
            <div className="mt-[83px]">
            <div className="text-[12px] text-secondaryColor flex justify-between">
                <div className="cursor-pointer">Home &gt; Men</div>
                <div
                className="cursor-pointer hover:text-primaryColor transition-all duration-200"
                onClick={handleBackPreviousPage}
                >
                &lt;Return to previous page
                </div>
            </div>
            {isLoading ? (
                <div className="h-[988px] flex items-center justify-center bg-sixColor opacity-35 ">
                <LoadingTextCommon />{" "}
                </div>
            ) : (
                <>
                {!data ? (
                    <div className="h-[880px] gap-[10px] flex flex-col items-center justify-center">
                    <p>No Result</p>
                    <div onClick={handleBackToOurShop}>
                        <Button content={"Back To Our Shop"} />
                    </div>
                    </div>
                ) : (
                    <div className="pt-[15px] flex gap-[25px] justify-between ">
                    <div className="flex gap-[5px] max-h-[600px] flex-wrap max-w-[610px] with-full">
                        {data?.images.map((src, index) => (
                        <div key={index}>{handleRenderImageDetails(src)}</div>
                        ))}
                    </div>
                    <div>
                        <div className="text-[24px] text-fourColor mb-[20px]">
                        {data?.name}
                        </div>
                        <div className="text-[20px] text-secondaryColor mb-[20px]">
                        {data?.price}$
                        </div>
                        <div className=" text-primaryColor mb-[10px]">
                        {data?.description}
                        </div>
                        <div className="">
                        Size <span className="text-[12px]">{sizeSelected}</span>
                        </div>
                        <div className="flex items-end gap-[10px] my-[10px]">
                        {data?.size.map((size, index) => {
                            return (
                            <Button
                                key={index}
                                content={size.name}
                                width={"30px"}
                                height={"30px"}
                                padding={"0px"}
                                fontSize={"12px"}
                                isPrimary={sizeSelected === size.name}
                                onClick={() => handGetSizeSelected(size.name)}
                            />
                            );
                        })}
                        {sizeSelected && (
                            <div
                            className="cursor-pointer text-[12px] text-secondaryColor underline"
                            onClick={handlerDeleteSizeSelected}
                            >
                            Clear
                            </div>
                        )}
                        </div>

                        <div className="flex items-center gap-[10px] mt-[30px] justify-between">
                        <div className="flex items-center">
                            <div
                            className="border border-sixColor px-[5px] py-[10px] cursor-pointer"
                            onClick={() => handleSetQuantity("decrease")}
                            >
                            -
                            </div>
                            <div className="border-y border-sixColor px-[15px] py-[10px]">
                            {quantity}
                            </div>
                            <div
                            className="border border-sixColor px-[5px] py-[10px] cursor-pointer"
                            onClick={() => handleSetQuantity("increase")}
                            >
                            +
                            </div>
                        </div>
                        <div className="grow">
                            <Button
                            content={
                                isLoadingBtn ? <LoadingTextCommon /> : "ADD TO CART"
                            }
                            customClassname={
                                !sizeSelected &&
                                "opacity-50 hover:bg-primaryColor hover:text-white"
                            }
                            onClick={handleAdd}
                            />
                        </div>
                        </div>
                        <div className="relative mt-[20px] flex items-center">
                        <div className="h-[1px] bg-sixColor grow"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 p-1 bg-white text-secondaryColor">
                            OR
                        </div>
                        </div>
                        <div className="mt-[20px]">
                        <Button
                            customClassname={
                            !sizeSelected &&
                            "opacity-50 hover:bg-primaryColor hover:text-white"
                            }
                            content={
                            isLoadingBtnBuyNow ? <LoadingTextCommon /> : "BUY NOW"
                            }
                            onClick={handleBuyNow}
                        />
                        </div>
                        <div className="flex gap-[15px] text-fourColor mt-[30px] cursor-pointer">
                        <div className="border border-sixColor rounded-full p-[10px] text-[20px]">
                            <CiHeart />
                        </div>
                        <div className="border border-sixColor rounded-full p-[10px] text-[20px]">
                            <TfiReload />
                        </div>
                        </div>
                        <PaymentMethod />

                        <div className="text-[14px] text-primaryColor mt-[30px]">
                        Brand:{" "}
                        <span className="text-secondaryColor">Brand 01</span>
                        </div>
                        <div className="text-[14px] text-primaryColor mt-[10px]">
                        SKU: <span className="text-secondaryColor">12345</span>
                        </div>
                        <div className="text-[14px] text-primaryColor mt-[10px]">
                        Category: <span className="text-secondaryColor">Men</span>
                        </div>
                        {dataMenu.map((item, index) => (
                        <div key={index}>
                            <AccordionMenu
                            titleMenu={item.titleMenu}
                            contentMenu={item.contentMenu}
                            onClick={() => handleSetMenuSelected(item.id)}
                            isMenuSelected={menuSelected === item.id}
                            />
                            {index < dataMenu.length - 1 && (
                            <div className="border-t border-sixColor my-[10px]"></div>
                            )}
                        </div>
                        ))}
                    </div>
                    </div>
                )}
                </>
            )}
            </div>
            {relatedData.length ? (
            <div>
                <h2 className="text-center text-primaryColor text-[24px] mb-[10px] mt-[10px]">
                Related Products
                </h2>
                <SliderCommon
                data={relatedData}
                isProductItem={true}
                showItem={4}
                />
            </div>
            ) : (
            <></>
            )}
        </MainLayout>
        <MainFooter />
        </div>
    );
    }

    export default DetailProduct;
