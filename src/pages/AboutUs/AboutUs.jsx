    import MainFooter from "@components/Footer/Footer";
    import MainHeader from "@components/Header/Header";
    import MainLayout from "@components/Layout/Layout";
    import { useNavigate } from "react-router-dom";
import Logos from "@/pages/AboutUs/components/Logos";

    function AboutUs() {
    const navigate = useNavigate();
    const handleBackPreviuosPage = () => {
        navigate(-1);
    };
    const handleBackHomePage = () => {
        navigate("/");
    };
    const dataContent = [
        {
        id: "1",
        url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg",
        des: "Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.",
        },
        {
        id: "2",
        url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg",
        des: "Arcu volutpat sollicitudin sapien sit justo tellus eu fames aenean. Faucibus at eu nulla adipiscing. Ipsum a morbi tortor ullamcorper sit semper.",
        },
        {
        id: "3",
        url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg",
        des: "Nibh luctus eu dignissim sit. Lorem netus ultrices neque elementum. Et convallis consectetur lacus luctus iaculis quisque sed.",
        },
    ];
    return (
        <>
        <MainHeader />
        <MainLayout>
            <div className="pt-[83px] ">
            <div className="flex justify-between text-secondaryColor cursor-pointer text-[14px]">
                <div>
                <span onClick={() => handleBackHomePage()}>Home </span>&gt;{" "}
                <span className="text-black">About Us</span>
                </div>
                <div
                className="hover:text-black transition-all duration-200"
                onClick={() => handleBackPreviuosPage()}
                >
                &lt; Return to previous page
                </div>
            </div>
            <div className="border-t border-b h-[3px] mt-[50px] relative border-sixColor ">
                <div className="text-center absolute left-1/2 top-[-30px] w-full px-0 maw-w-0 lg:px-[60px] lg:max-w-[600px] bg-white transform -translate-x-1/2 ">
                <p className="text-[16px] text-thriColor">
                    we try our best for you
                </p>
                <h2 className="text-[24px] text-primaryColor">
                    Welcome to the Marseille Shop
                </h2>
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row gap-[30px] mt-[50px] ">
                {dataContent.map((item, index) =>(
                    <div key={index}>
                        <img className="w-full h-[390px] object-cover"  src={item.url} alt="" />
                        <p className="text-thriColor text-[16px] text-start pt-[20px] leading-[26px] ">{item.des}</p>
                </div>
            ))}


            </div>
            <Logos/>
            </div>
        </MainLayout>
        <MainFooter />
        </>
    );
    }

    export default AboutUs;
