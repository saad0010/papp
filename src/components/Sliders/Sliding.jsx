"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { dbanner } from "@/constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./sliding.css";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Sliding = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        centeredSlides={true}
        spaceBetween={5}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper md:h-screen"
      >
        {dbanner.map((item) => (
          <SwiperSlide key={item._id} className="swiperSlide ">
            <section className="relative  ">
              <Image
                src={item.image}
                alt={item.slug}
                width={1000}
                height={1000}
                priority
                className="absolute -z-10 h-full md:h-screen md:object-fill   md:w-screen  "
              />
              <div>
                <div className="p-10   lg:p-16 md:px-60 lg:px-72 relative">
                  <h2 className="text-2xl  sm:mt-16 md:mt-24  lg:mt-52 md:text-3xl lg:text-6xl font-mirza mb-3 font-semibold text-white">
                    Unleash Your Creativity: Custom Shirt Printing for Every
                    Industry!
                  </h2>
                  <p className="text-lg hidden lg:px-24 font-libre lg:block text-white   mb-8">
                    Are you tried of wearing generic, mass-produced shirts that
                    lack personality? Its time to take control of your style and
                    embrace individually with our custom shirt printing
                    services.
                  </p>

                  <Link href={"/contact"} className="pt-10">
                    <button className="pt-[.4rem] px-2 md:px-3 h-6 lg:h-7 md:mr-10 text-[.7rem] md:text-[1rem] font-mirza bg-btnyel   text-black uppercase rounded hover:bg-midnigh hover:text-white duration-300 tracking-wide">
                      CONTACT A PRINTING PRO
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Sliding;
