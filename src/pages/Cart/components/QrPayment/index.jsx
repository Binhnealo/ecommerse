import { useLocation, useNavigate } from "react-router-dom";
import { getDetailOrder } from "@/apis/orderService";
import { useContext, useEffect, useState, useRef } from "react";
import Button from "@components/Button/Button";
import { deleteCart } from "@/apis/cartService";
import { SidebarContext } from "@/contexts/SideBarProvider";

function QrPayment() {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const intervalRef = useRef(null);
  const hasDeletedCart = useRef(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const totalAmount = params.get("totalAmount");
  const qrCodeImage = `https://qr.sepay.vn/img?acc=VQRQAFBZN6530&bank=MBBank&amount=${totalAmount}&des=${id}`;
  
  const {
    handleGetListProductsCart,

    setIsLoading,
    userId,
  } = useContext(SidebarContext);

  const handleReturnToShop = () => {
    navigate("/");
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

  const handleGetDetailOrder = async () => {
    if (!id) return;

    try {
      const res = await getDetailOrder(id);
      console.log(res);

      if (res.data.data.status !== "pending") {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
      
      if (res.data.data.status === "completed") {
        setIsSuccess(true);
        
        // Gọi handleDeleteCart ngay lập tức (chỉ gọi một lần)
        if (!hasDeletedCart.current) {
          hasDeletedCart.current = true;
          handleDeleteCart();
        }
      } else {
        setIsSuccess(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetDetailOrder(); // Gọi API ngay lần đầu

    intervalRef.current = setInterval(() => {
      handleGetDetailOrder();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [id]);

  return (
    <>
      {isSuccess ? (
        <div className="flex flex-col justify-center items-center">
          <div className="mb-[20px] text-primaryColor font-bold text-lg">
            Bạn đã thanh toán thành công
          </div>
          <div>
            <Button onClick={handleReturnToShop} content={"Return To Shop"} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col-reverse md:flex-row justify-between gap-5">
          <div className="flex flex-col gap-[20px] justify-center items-center">
            <h4 className="text-[20px] text-primaryColor">
              Quét mã QR để thanh toán
            </h4>
            <img
              className="w-[300px] h-[300px]"
              src={qrCodeImage}
              alt="QR Code"
            />
            <p className="text-center">Sử dụng ứng dụng ngân hàng của bạn để quét mã QR này</p>
          </div>

          <div className="flex flex-col items-center"  >
            <h3 className="mb-[20px]">Chi tiết thanh toán</h3>
            <div className="border-[2px] border-primaryColor p-[20px] rounded-[10px]  max-w-[500px]">
              <div className="flex flex-col">
                <div className="flex gap-[20px] items-end mb-[20px]">
                  <img
                    className="w-[40px] h-[40px] object-cover rounded-full"
                    src="https://th.bing.com/th/id/OIP.tuzwlrMESGnBYl1dyD2arAHaHa?w=157&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                    alt="mblogo"
                  />
                  <div>
                    <p className="mb-[5px] text-primaryColor text-[25px] font-bold">
                      MBBank
                    </p>
                    <p className="text-secondaryColor">
                      Chuyển Khoản Ngân Hàng
                    </p>
                  </div>
                </div>
                <div className="flex justify-between pb-[20px] border-b border-sixColor mb-[20px]">
                  <p className="text-secondaryColor">Chủ Tài Khoản</p>
                  <p className="text-primaryColor text-[18px] font-bold">
                    BUI TAN BINH
                  </p>
                </div>
                <div className="flex justify-between pb-[20px] border-b border-sixColor mb-[20px]">
                  <p className="text-secondaryColor">Số Tài Khoản</p>
                  <p className="text-primaryColor text-[18px] font-bold">
                    12345678
                  </p>
                </div>
                <div className="flex justify-between pb-[20px] border-b border-sixColor mb-[20px]">
                  <p className="text-secondaryColor">Số Tiền</p>
                  <p className="text-primaryColor text-[18px] font-bold">
                    {totalAmount} $
                  </p>
                </div>
                <div className="flex gap-[20px] pb-[20px] border-b border-sixColor mb-[20px]">
                  <p className="text-secondaryColor">Nội Dung Chuyển khoản</p>
                  <p className="text-primaryColor text-[18px] font-bold">
                    {id}
                  </p>
                </div>
                <div className="flex justify-between mb-[20px]">
                  <p className="text-primaryColor font-bold text-[18px]">
                    Tổng tiền
                  </p>
                  <p className="text-red-500 text-[18px] font-bold">
                    {totalAmount} $
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QrPayment;
