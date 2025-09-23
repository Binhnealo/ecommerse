
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { LiaEyeSolid } from "react-icons/lia";


import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext, useEffect, useState } from "react";

import { OurShopContext } from "@/contexts/OurShopProvider";

import Cookies from "js-cookie";
import { SidebarContext } from "@/contexts/SideBarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomePage = true,
}) {
  // const { isShowGrid } = useContext(OurShopContext);
  const ourShopStore = useContext(OurShopContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const [sizeChoose, setChosenSize] = useState("");
  const [isLoadingAddToCart, setIsLoadingAddToCart] = useState(false);
  const userId = Cookies.get("userId");
  const { setIsOpen, setType, handleGetListProductsCart, setProductDetail } =
    useContext(SidebarContext);
  const { toast } = useContext(ToastContext);

  const handleSizeChoose = (size) => {
    setChosenSize(size);
  };

  const handleShowDetailProductSideBar = () => {
    setIsOpen(true);
    setType("detail");
    setProductDetail(details);
  };
  const handleAddToCart = () => {
    console.log("add to cart", userId);
    if (!userId) {
      setType("login");
      setIsOpen(true);
      toast.warning("Please login to add product to cart");
      return;
    }

    if (!sizeChoose) {
      toast.warning("Please choose size");
      return;
    }
    const data = {
      userId,
      productId: details._id,
      size: sizeChoose,
      quantity: 1,
    };
    setIsLoadingAddToCart(true);
    addProductToCart(data)
      .then((res) => {
        setIsLoadingAddToCart(false);
        toast.success("Add to cart successfully");
        setType("cart");
        setIsOpen(true);
        handleGetListProductsCart('cart', userId);
      })
      .catch((err) => {
        setIsLoadingAddToCart(false);
        toast.error("Add to cart failed");
      });
  };

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

  return (
    <div
      className={cls("", {
        ["flex items-center justify-start w-[600px] "]: !isShowGrid,
      })}
    >
      <div className="w-full h-[353px] relative group cursor-pointer">
        <img className="w-full h-full object-cover  " src={src} alt="ảnh mẫu" />
        <img
          className="w-full h-full object-cover opacity-0 absolute top-0 left-0 right-0 bottom-0 hover:opacity-100 duration-300 "
          src={prevSrc}
          alt=""
        />
        <div className="absolute right-0 bottom-5 bg-whiteColor opacity-0 group-hover:opacity-100 group-hover:right-5 duration-300 ">
          <div className="w-[40px] h-[40px] flex justify-center items-center hover:bg-fiveColor duration-300">
            <LiaShoppingBagSolid className="text-[20px]" alt="Cart" />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center  hover:bg-fiveColor duration-300">
            <CiHeart className="text-[22px]" alt="Like" />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center  hover:bg-fiveColor duration-300">
            <TfiReload className="text-[17px]" alt="Reload" />
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center  hover:bg-fiveColor duration-300">
            <LiaEyeSolid className="text-[20px]" alt="Reload" onClick={handleShowDetailProductSideBar} />
          </div>
        </div>
      </div>

      <div>
        {!isHomePage && (
          <div className="flex items-center justify-center gap-[10px] mt-[10px]">
            {details.size.map((item, index) => (
              <div
                className={cls(
                  "text-[10px] border border-sixColor py-[5px] px-[6px] flex items-center justify-center font-bold text-thriColor cursor-pointer  hover:border-thriColor duration-300",
                  { ["border-thriColor"]: item.name === sizeChoose }
                )}
                key={index}
                onClick={() => handleSizeChoose(item.name)}
              >
                {" "}
                {item.name}
              </div>
            ))}
          </div>
        )}
        {sizeChoose && (
          <div
            className="text-[12px] text-center mt-[5px] cursor-pointer"
            onClick={() => setChosenSize("")}
          >
            {" "}
            clear{" "}
          </div>
        )}

        <div
          className={cls(
            "size-[16px] my-[6px] text-fourColor w-full font-medium",
            {
              ["flex items-center justify-center text-primaryColor"]:
                !isHomePage,
            }
          )}
        >
          {name}
        </div>

        {!isHomePage && (
          <div className="flex items-center justify-center text-[14px] mb-[5px] text-secondaryColor">
            Brand 01{" "}
          </div>
        )}

        <div
          className={cls("size-[14px] text-secondaryColor w-full", {
            ["flex items-center justify-center mb-[10px] text-secondaryColor"]:
              !isHomePage,
          })}
        >
          ${price}
        </div>

        {!isHomePage && (
          <div className=" flex items-center justify-center w-[290px]">
            <div className="w-[200px] h-[35px]">
              <Button
                content={
                  isLoadingAddToCart ? <LoadingTextCommon /> : "ADD TO CART"
                }
                onClick={handleAddToCart}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
//
export default ProductItem;
