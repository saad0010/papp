"use client";

import Image from "next/image";
import React, { useState } from "react";
import { cat, services } from "@/constants";
import Link from "next/link";
import FadeIn from "../FadeIn";
import { motion } from "framer-motion";

const PnS = () => {
  const [image, setImage] = useState("/add.webp");
  const [image1, setImage1] = useState("/adde.webp");

  function handleMouseEnter(imagePath) {
    return () => {
      setImage(imagePath);
    };
  }
  function handleMouseEnter1(imagePath) {
    return () => {
      setImage1(imagePath);
    };
  }

  return (
    <div className="bg-gray-100 pt-2 lg:pt-20 pb-4  lg:pb-10 lg:h-screen">
      <div className="text-center">
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 3 }}
        >
          <h2 className=" text-4xl lg:text-6xl font-mirza font-light ">
            Our Products
          </h2>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5  md:p-10 md:py-20 ">
        <div className="flex gap-6  justify-center">
          <div className="grid-cols-1">
            <div className="flex-none w-48 relative lg:ml-20">
              <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
              >
                <Image
                  src={image1}
                  alt="Styles"
                  className="absolute inset-0 w-full object-fill"
                  width={200}
                  height={200}
                  priority
                />
              </motion.div>
            </div>
          </div>
          <div className="grid-cols-1">
            <div className=" flex-wrap">
              <FadeIn>
                <h2 className="text-[.8rem] mb-8 md:text-[.9rem] ml-1 sm:ml-24 md:ml-10 lg:ml-[7rem] font-bold text-slate-500 font-sans ">
                  STYLES
                </h2>
                <ul className="sm:ml-20 md:ml-8">
                  {cat.map((item) => (
                    <Link
                      key={item._id}
                      href={`/products?category=${item.slug}`}
                    >
                      <li
                        key={item._id}
                        onMouseEnter={handleMouseEnter1(item.image)}
                        className="mt-4 md:mr-6 text-center  text-[.7rem] md:text-[.9rem] font-libre lg:ml-10 text-black hover:text-slate-400 cursor-pointer duration-300 group relative"
                      >
                        {item.title}

                        <span className="absolute w-full scale-0 group-hover:scale-x-100 scale-y-100 inline-block h-[2px] -bottom-[1px] left-0 bg-yellow-400 duration-500"></span>
                      </li>
                    </Link>
                  ))}
                  <Link rel="canonical" href={`/products`}>
                    <li className="mt-4 md:mr-6 text-center  text-[.7rem] md:text-[.8rem] font-sans  font-bold lg:ml-10 text-black hover:text-slate-400 cursor-pointer duration-300 group relative">
                      VIEW ALL PRODUCTS
                    </li>
                  </Link>
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-4   sm:mt-10 md:mt-0 justify-center">
          <div className="grid-cols-1 ">
            <FadeIn>
              <h2 className="ml-8 text-[.8rem] mb-8 md:text-[.9rem] font-sans font-bold text-slate-500">
                ADD-ON SERVICES
              </h2>
              <div className=" flex-wrap">
                <ul className="md:mr-20">
                  {services.map((item) => (
                    <Link key={item._id} href={`/services/${item.slug}`}>
                      <li
                        key={item._id}
                        onMouseEnter={handleMouseEnter(item.image)}
                        className="mt-4 sm:mr-6 md:mr-0 text-center text-[.7rem] md:text-[.9rem] font-libre  text-black hover:text-slate-400 cursor-pointer duration-300 group relative"
                      >
                        {item.title}

                        <span className="absolute w-full scale-0 group-hover:scale-x-100 scale-y-100 inline-block h-[2px] -bottom-[1px] left-0 bg-yellow-400 duration-500"></span>
                      </li>
                    </Link>
                  ))}
                  <Link rel="canonical" href={`/services`}>
                    <li className="mt-4 md:mr-6 text-center  text-[.7rem] md:text-[.8rem] font-sans  font-bold lg:ml-10 text-black hover:text-slate-400 cursor-pointer duration-300 group relative">
                      SEE ALL ADD-ONS
                    </li>
                  </Link>
                </ul>
              </div>
            </FadeIn>
          </div>
          <div className="grid-cols-1">
            <div className="flex-none w-48 mr-3 md:mr-32 relative">
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="w-[192px] h-[255px]">
                  <Image
                    src={image}
                    alt="Services"
                    className="absolute inset-0 w-full h-full  object-cover"
                    width={200}
                    height={200}
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PnS;
