
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Coursel() {
  return (
    

<>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper m-2"
      >
        <SwiperSlide><img className="w-100" src="https://cdn.eyemyeye.com/desktop/images/banners/homepage/SUMMER_Eyeglasses_Desktop_020523.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src="https://cdn.eyemyeye.com/desktop/images/banners/homepage/3_Desktop_Home_Banner_050523.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src="https://cdn.eyemyeye.com/desktop/images/banners/homepage/SUMMER_Sunglasses_Desktop_020523.jpg" alt="" /></SwiperSlide>
        
      </Swiper>

      <div className="container-fluid text-center d-lg-flex w-100">
        <img className="m-2 courselw" src="https://cdn.eyemyeye.com/desktop/home-page/men-eyeglasses.jpg" alt="" />
        <img className="m-2 courselw" src="https://cdn.eyemyeye.com/desktop/home-page/women-eyeglasses2.jpg" alt="" />
      </div>
    </>
      
    
  )
}
