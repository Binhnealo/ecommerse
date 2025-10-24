    // Import Swiper React components
    import { Swiper, SwiperSlide } from "swiper/react";

    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";

    // import required modules
    import { Autoplay, Pagination, Navigation } from "swiper/modules";
    

    function Logos() {
        const customStyles = `
  .logos-slider .swiper-button-next,
  .logos-slider .swiper-button-prev {
    opacity: 0;
    transition: all 0.3s ease;
    color: black;
    width: 44px;
    height: 44px;
    margin-top: -22px;
  }
  
  .logos-slider:hover .swiper-button-next{
    opacity: 1;
    right: -10px;
    }
  .logos-slider:hover .swiper-button-prev {
    opacity: 1;
    left: -10px;
  }

  .logos-slider .swiper-button-next {
    right: -20px; /* Đặt nút next xa hơn về bên phải */
  }

  .logos-slider .swiper-button-prev {
    left: -20px; /* Đặt nút prev xa hơn về bên trái */
  }

  .logos-slider .swiper-button-next::after,
  .logos-slider .swiper-button-prev::after {
    font-size: 24px;
  }
`;
    const dataMenu = [
        {
        id: "1",
        url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png",
        },
        {
        id: "2",
        url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-02-min-150x44.png",
        },
        {
        id: "3",
        url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-03-min.png",
        },
        {
        id: "4",
        url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-04-min.png",
        },
        {
        id: "5",
        url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/brand-05-min.png",
        },
        {
        id: "1",
        url: "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2024/04/brand-01-min.png",
        },
    ];

    return (
        <div className="mt-[50px]">
             <style>{customStyles}</style>
        <Swiper
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            infinite={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="logos-slider"
        >
            {dataMenu.map((item, index) => (
            <SwiperSlide key={index} >
               <div className="flex justify-center items-center">
                    <img
                    className="max-w-full object-contain"
                    src={item.url}
                    alt={`Brand ${item.id}`}
                    />
               </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
    }

    export default Logos;
