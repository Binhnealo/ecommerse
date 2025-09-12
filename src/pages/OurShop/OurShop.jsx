import MainHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import Banner from "@pages/OurShop/components/Banner/Banner";
import { OurShopProvider } from "@/contexts/OurShopProvider";
import Filter from "@pages/OurShop/components/Filter/Filter";
import ListProducts from "@pages/OurShop/components/ListProducts/ListProducts";
import MainFooter from "@components/Footer/Footer";

function OurShop() {
  const navigate = useNavigate();
  const handleBackPreviuosPage = () => {
    navigate(-1);
  };
  const handleBackHomePage = () => {
    navigate("/");
  };
  
  return (
    <OurShopProvider>
      <MainHeader />
      <MainLayout>
        <div className="pt-[83px] mb-[10px] ">
          <div className="flex justify-between text-secondaryColor cursor-pointer text-[14px]">
            <div>
              <span onClick={() => handleBackHomePage()}>Home </span>&gt;{" "}
              <span className="text-black">Shop</span>
            </div>
            <div
              className="hover:text-black transition-all duration-200"
              onClick={() => handleBackPreviuosPage()}
            >
              &lt; Return to previous page
            </div>
          </div>
        </div>
        <Banner />
        <div>
          <Filter />
          <ListProducts />
        </div>

      </MainLayout>
      <MainFooter />
    </OurShopProvider>
  );
}

export default OurShop;
