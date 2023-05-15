import React from 'react';
import { Link } from 'react-router-dom';
import Trending from "../Json/Trending.json";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

let slidevalue;

if (window.innerWidth < 768) {
  // Mobile
  slidevalue = 1;
} else if (window.innerWidth < 1200){
  // Desktop
  slidevalue = 2;
}else{
  slidevalue = 4;
}


export default function Eyeglass(props) {
  return (
    <div>
      <h1 className='text-center pt-5 fs-2'><u>{props.title}</u></h1>
    
    <div className='container d-flex'>
      
      <Swiper
        slidesPerView={slidevalue}
        spaceBetween={-25}
        pagination={{
          clickable: true,
          type: "none",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  text-center"
      >
       
      {Trending.map((data) => {
        return (
          <SwiperSlide className='p-4'>
        <Link
                to={{
                  pathname: "/product",
                  state: {
                    image: data.image,
                    title: data.title,
                    description: data.description,
                    price: data.price,
                  },
                }}
              > 
                <div className="card m-3">
          <div className="image"><img className='w-100' src={data.image} alt="" /></div>
          <span className="title text-start">{data.title}</span>
          <span className="description text-start">{data.description}</span>
          <span className="price">{data.price}$</span>
        </div></Link>
        </SwiperSlide>
        
        
        );
      })}
      </Swiper>
    </div>
    </div>
  )
}
