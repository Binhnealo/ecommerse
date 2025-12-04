import Button from "@components/Button/Button";
import useTransLateXImage from "@/hooks/useTranslateXImage";

function SaleHomepage() {
  const { translateXPosition } = useTransLateXImage();

  return (
    <>
      <div className="mt-[100px] flex justify-between items-center text-center">
        <div
          className=" flex justify-center items-center w-full"
          style={{
            transform: `translateX(${translateXPosition}px)`,
            transition: "transform 3s ease",
          }}
        >
          <img className="hidden md:block"
            src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
            alt="anh 1"
          />
        </div>
        
          <div className=" flex flex-col items-center gap-[20px] max-w-[420px]">
            <h2 className="text-[40px] w-full leading-[46px] capitalize text-fourColor">
              Sale Of The Year
            </h2>
            <p className=" w-full text-[16px] text-thriColor leading-[25px]">
              Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
            </p>
            <div><Button content="Read more" isPrimary={false} /></div>
          </div>
        
        <div
          className="flex justify-center items-center w-full"
          style={{
            transform: `translateX(-${translateXPosition}px)`,
            transition: "transform 3s ease",
          }}
        >
          <img className="hidden md:block"
            src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
            alt="anh 2"
          />
        </div>
      </div>
    </>
  );
}

export default SaleHomepage;
