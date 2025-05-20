import Buttton from "@components/Button/Button";
import CountdownTimer from "@components/CountdownTimer/CountdownTimer";

    function CountdownBanner() {
        const targetTime = "2025-12-31T23:59:59"; // Set your target time here
    return (
        <div className=" flex gap-[20px] flex-col items-center justify-center w-full h-[410px] bg-cover bg-[url(https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/photo-of-man-wearing-white-hoodie-5474310.jpeg)]">
            <div className="mb-[20px] text-[18px] mt-[50px]"><CountdownTimer targetTime={targetTime} /></div>
            <div ><h2 className="text-[28px]">The classics make a comeback</h2></div>
            <div><Buttton content={"Buy Now"}/></div>
        </div>
    );
    }

    export default CountdownBanner;
