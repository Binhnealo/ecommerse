    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import { MdArrowBackIos } from "react-icons/md";
    import { MdArrowForwardIos } from "react-icons/md";
    import "./style.css";
import ProductItem from "@components/ProductItem/ProductItem";

    function SliderCommon({ data, isProductItem = false, showItem = 1 }) {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: showItem,
        slidesToScroll: 1,
        nextArrow: <MdArrowForwardIos  />,
        prevArrow: <MdArrowBackIos />,
    };
    return (
        <Slider {...settings}>
        {data.map((item, index) => {
            return <div className="px-[10px]" key={index}>
            {isProductItem ? (
                <ProductItem 
                src={item.image}
                prevSrc={item.Image}
                name={item.name}
                price={item.price}
                size={item.size}
                details={item}
                isHomePage={false}
                slideItem={true}
                
                />
                ) : <img  key={index} src={item} alt="test" />}
            </div>;
        })}
        </Slider>
    );
    }

    export default SliderCommon;
