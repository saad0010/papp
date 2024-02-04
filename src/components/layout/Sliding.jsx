"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { logos } from "@/constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./sliding.css";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Sliding = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={4}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {logos.map((item) => (
          <SwiperSlide key={item.id} className="swiperSlide ">
            <section className="mt-2 lg:mt-24 mb-6">
              <Image
                src={item.src}
                alt="logo"
                width={200}
                height={200}
                className=" xs:w-full xs:h-full sm:w-auto sm:h-auto  "
                priority
              />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Sliding;
