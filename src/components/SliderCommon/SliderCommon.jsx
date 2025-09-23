    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import { MdArrowBackIos } from "react-icons/md";
    import { MdArrowForwardIos } from "react-icons/md";
    import "./style.css";

    function SliderCommon({ data }) {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <MdArrowForwardIos  />,
        prevArrow: <MdArrowBackIos />,
    };
    return (
        <Slider {...settings}>
        {data.map((src, index) => {
            return <img  key={index} src={src} alt="test" />;
        })}
        </Slider>
    );
    }

    export default SliderCommon;
