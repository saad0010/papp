"use client";
import React from "react";
import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import Image from "next/image";
import { motion } from "framer-motion";
const Card = (props) => {
  const cardData = props.cardData;

  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ duration: 3 }}
    >
      <Container>
        <div className=" bg-transparent flex justify-center mt-8  items-start ">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3  gap-8 space-y-8 md:space-y-2">
            {cardData?.map((item) => (
              <div
                key={item.id}
                className="max-w-sm bg--500 px-6  pb-2 rounded-xl shadow-lg transform  hover:scale-105 transition duration-500 hover:shadow-btnyel hover:border-solid"
              >
                <h3 className="mb-3 text-sm md:text-lg text-center font-bold text-slat-400">
                  {item.title}
                </h3>
                <div className="relative text-center items-center justify-center flex flex-row">
                  <Image
                    className="w-72 h-52 md:h-40 md:w-64 "
                    src={item.image}
                    alt="Colors"
                    width={200}
                    height={200}
                    priority
                  />
                </div>
                <h2 className="mt-4 font-libre w-72 px-4  text-normal tracking-wide text-[.7rem] md:text-md  lg:text-[.74rem]  cursor-pointer">
                  {item.desc}
                </h2>
                <div className="my-4 ">
                  <Link
                    href={`/services/${item.slug}`}
                    className="flex justify-center"
                  >
                    {" "}
                    <button
                      aria-label={item.title}
                      className="inline-flex mt-1 md:mt-4 justify-center text-[.8rem] md:text-xs w-[50%] text-white bg-midnigh hover:bg-btnyel hover:text-black py-2 rounded shadow-lg"
                    >
                      LEARN MORE{" "}
                      <IoArrowForwardOutline className="ml-2  w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <div className="max-w-sm bg--500 px-6  pb-2 rounded-xl shadow-lg transform  hover:scale-105 transition duration-500 hover:shadow-btnyel hover:border-solid">
              <h3 className="mb-3 text-sm md:text-lg text-center font-bold text-slat-400">
                {"Custom Printing"}
              </h3>
              <div className="relative text-center items-center justify-center flex flex-row">
                <Image
                  className="w-72 h-52 md:h-40 md:w-64 "
                  src={"/ee.webp"}
                  alt="Colors"
                  width={200}
                  height={200}
                  priority
                />
              </div>
              <h2 className="mt-4 font-libre w-72 px-4  text-normal tracking-wide text-[.7rem] md:text-md  lg:text-[.74rem]  cursor-pointer">
                {
                  "Use our custom screen printing service to create an outstanding impression on your customers. We apply vibrant, long-lasting inks to imprint your company's name, images, and messaging onto high-quality textiles. Our state-of-the-art technology guarantees vivid, striking designs that draw in viewers."
                }
              </h2>
              <div className="my-4 ">
                <Link href={`/screen-printing`} className="flex justify-center">
                  {" "}
                  <button className="inline-flex mt-1 md:mt-4 justify-center text-[.8rem] md:text-xs w-[50%] text-white bg-midnigh hover:bg-btnyel hover:text-black py-2 rounded shadow-lg">
                    LEARN MORE{" "}
                    <IoArrowForwardOutline className="ml-2  w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Card;