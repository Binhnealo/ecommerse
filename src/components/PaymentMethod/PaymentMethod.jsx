function PaymentMethod() {
    const srcMethod = [
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
        "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
    ];
    return ( 
        <>
            <div className="relative flex items-center justify-center border border-sixColor w-full mt-[40px] py-[25px]">
            <div className="absolute top-[-10px]  text-[14px] left-1/2 -translate-x-1/2 uppercase bg-white whitespace-nowrap px-[10px]  ">
            Guaranteed <span className="text-green-500">safe</span> checkout
            </div>
            {srcMethod.map((src, index) => {
            return (
                <img
                key={index}
                src={src}
                alt=""
                className="border border-sixColor w-[50px] h-[35px] mx-[5px]"
                />
            );
            })}
        </div>
        <div className="text-center mt-[10px] text-[14px] text-thriColor">
            Your Payment is 100% Secure
        </div>
        </>
    );
}

export default PaymentMethod;