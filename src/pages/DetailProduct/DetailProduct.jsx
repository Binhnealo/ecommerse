    import Button from "@components/Button/Button";
    import MainFooter from "@components/Footer/Footer";
    import MainHeader from "@components/Header/Header";
    import MainLayout from "@components/Layout/Layout";
    import { useNavigate } from "react-router-dom";
    import { BsCart3 } from "react-icons/bs";
    import { CiHeart } from "react-icons/ci";
    import { TfiReload } from "react-icons/tfi";
    import PaymentMethod from "@components/PaymentMethod/PaymentMethod";
    import AccordionMenu from "@components/AccordionMenu/AccordionMenu";
    import { useState } from "react";
    import Reviews from "@/pages/DetailProduct/components/Reviews";
    import Information from "@/pages/DetailProduct/components/Information";
    import SliderCommon from "@components/SliderCommon/SliderCommon";

    function DetailProduct() {
    const navigate = useNavigate();

    const handleBackPreviousPage = () => {
        navigate(-1);
    };
    const [menuSelected, setMenuSelected] = useState(1);
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
    const tempDataSlider=[
        {
            image:"https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
            name:"Product 01",
            price:"$99.99",
            size:[{name:"S"}, {name:"M"}, {name:"L"}]
        },
        {
            image:"https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
            name:"Product 01",
            price:"$99.99",
            size:[{name:"S"}, {name:"M"}, {name:"L"}]
        },
        {
            image:"https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
            name:"Product 01",
            price:"$99.99",
            size:[{name:"S"}, {name:"M"}, {name:"L"}]
        },
        {
            image:"https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
            name:"Product 01",
            price:"$99.99",
            size:[{name:"S"}, {name:"M"}, {name:"L"}]
        },
        {
            image:"https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
            name:"Product 01",
            price:"$99.99",
            size:[{name:"S"}, {name:"M"}, {name:"L"}]
        },
        {
            image:"https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
            name:"Product 01",
            price:"$99.99",
            size:[{name:"S"}, {name:"M"}, {name:"L"}]
        }
    ]

    const handleSetMenuSelected = (id) => {
        setMenuSelected(id);
    };

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
            <div className="pt-[15px] flex gap-[25px] justify-between ">
                <div className="flex gap-[5px] max-h-[600px] flex-wrap max-w-[610px] with-full">
                <img
                    className="w-[calc(50%-2.5px)] object-cover h-[340px] rounded-[3px] cursor-zoom-in"
                    src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                    alt=""
                />
                <img
                    className="w-[calc(50%-2.5px)] object-cover h-[340px] rounded-[3px]"
                    src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                    alt=""
                />
                <img
                    className="w-[calc(50%-2.5px)] object-cover h-[340px] rounded-[3px]"
                    src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                    alt=""
                />
                <img
                    className="w-[calc(50%-2.5px)] object-cover h-[340px] rounded-[3px]"
                    src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
                    alt=""
                />
                </div>
                <div>
                <div className="text-[24px] text-fourColor mb-[20px]">
                    10K Yellow Gold
                </div>
                <div className="text-[20px] text-secondaryColor mb-[20px]">
                    $99.99
                </div>
                <div className=" text-primaryColor mb-[10px]">
                    Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque
                    arcu purus orci leo.
                </div>
                <div>Size</div>
                <div className="flex gap-[10px] my-[10px]">
                    <Button
                    content={"S"}
                    width={"30px"}
                    height={"30px"}
                    padding={"0px"}
                    fontSize={"12px"}
                    isPrimary={false}
                    />
                    <Button
                    content={"M"}
                    width={"30px"}
                    height={"30px"}
                    padding={"0px"}
                    fontSize={"12px"}
                    isPrimary={false}
                    />
                    <Button
                    content={"L"}
                    width={"30px"}
                    height={"30px"}
                    padding={"0px"}
                    fontSize={"12px"}
                    isPrimary={false}
                    />
                </div>

                <div className="flex items-center gap-[10px] mt-[30px] justify-between">
                    <div className="flex items-center">
                    <div className="border border-sixColor px-[5px] py-[10px] cursor-pointer">
                        -
                    </div>
                    <div className="border-y border-sixColor px-[15px] py-[10px]">
                        1
                    </div>
                    <div className="border border-sixColor px-[5px] py-[10px] cursor-pointer">
                        +
                    </div>
                    </div>
                    <div className="grow">
                    <Button content={"ADD TO CART"} />
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
                    content={
                        <div>
                        <BsCart3 className="inline-block mr-[10px]" />
                        BUY NOW
                        </div>
                    }
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
                    Brand: <span className="text-secondaryColor">Brand 01</span>
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
            </div>
                <div>
                    <h2 className="text-center text-primaryColor text-[24px] mb-[10px] mt-[10px]">
                        Related Products
                    </h2>
                    <SliderCommon data={tempDataSlider} isProductItem={true} showItem={4}/>
                </div>
        </MainLayout>
        <MainFooter />
        </div>
    );
    }

    export default DetailProduct;
