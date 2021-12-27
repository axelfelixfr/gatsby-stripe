import React from "react"
// import Slider from "infinite-react-carousel"
// import Bottles from "../../../img/carousel/Bottles.png"
// import CoffeCups from "../../../img/carousel/Coffee-Cups.png"
// import JuiceCarton from "../../../img/carousel/Juice-Carton.png"
// import MilkCarton from "../../../img/carousel/Milk-Carton-Mockup.png"
// import SodaCans from "../../../img/carousel/Soda-Cans.png"
// import BottlesLight from "../../../img/carousel/BottlesLight.png"
// import BottlesDark from "../../../img/carousel/BottlesDark.png"
import Slide1 from "../../../img/carousel/Slide_1.png"
import Slide2 from "../../../img/carousel/Slide_2.png"
import Slide3 from "../../../img/carousel/Slide_3.png"
import Slide4 from "../../../img/carousel/Slide_4.png"
import Slide5 from "../../../img/carousel/Slide_5.png"
import { useColorMode } from "@chakra-ui/color-mode"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

export const CarouselPromos = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  }

  const { colorMode } = useColorMode()

  return (
    // <Slider {...settings}>
    //   <div>
    //     {/* <img
    //       src={colorMode === "light" ? BottlesLight : BottlesDark}
    //       alt="Promo 1"
    //     /> */}
    //     <img src={BottlesLight} alt="Promo 1" />
    //   </div>
    //   <div>
    //     <img src={CoffeCups} alt="Promo 2" />
    //   </div>
    //   <div>
    //     <img src={JuiceCarton} alt="Promo 3" />
    //   </div>
    //   <div>
    //     <img src={MilkCarton} alt="Promo 4" />
    //   </div>
    //   <div>
    //     <img src={SodaCans} alt="Promo 5" />
    //   </div>
    // </Slider>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Slide1} alt="Promo 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide2} alt="Promo 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide3} alt="Promo 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide4} alt="Promo 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slide5} alt="Promo 5" />
      </SwiperSlide>
    </Swiper>
  )
}
