    import { dataMenuFooter } from "@components/Footer/constants";

    function MainFooter() {
    return (
        <div className="mt-[100px] bg-primaryColor flex flex-col items-center justify-center py-10 gap-[30px]">
            <div>
                <img
                className="w-[160px] h-[55px]"
                src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo-300x104.png"
                alt="logo footer"
                />
            </div>
            <div className="flex gap-[40px] ">
                {dataMenuFooter.map((item, index) => (
                <span key={index} className="text-[15px] text-white hover:opacity-75 transition-colors duration-300 cursor-pointer">
                    {item.content}
                </span>
                ))}
            </div>
            <div>
                <p className="text-white  text-[15px]">Guaranteed safe ckeckout</p>
            </div>
            <div>
                <img className="cursor-pointer w-[270px] h-[29px]"
                src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
                alt="Phuong thuc thanh toan"
                />
            </div>
            <div>
                <p className="text-white text-[15px]">Copyright © 20205 By Binh.</p>
            </div>
        </div>
    );
    }

    export default MainFooter;
