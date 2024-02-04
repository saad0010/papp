"use client";
import React from "react";
import Container from "../layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

import FadeIn from "../FadeIn";
import Link from "next/link";

const Hero = (props) => {
  const heading = props.heading;
  const description = props.description;
  const image = props.image;

  return (
    <>
      <div className="bg-transparent w-full   px-4 relative">
        <Container>
          <div className="text-black grid md:grid-cols-2 gap-20 place-items-center">
            {/* left */}
            <div className="flex flex-col gap-6 xl:gap-10">
              <FadeIn>
                <h1 className="text-2xl lg:text-3xl xl:text-3xl font-semibold">
                  {heading}
                </h1>
              </FadeIn>
              <FadeIn>
                <p className="text-xl tracking-wide">{description}</p>
              </FadeIn>
              <FadeIn>
                <div className="w-full mt-10 p-4 xl:p-6 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5">
                  {/* <Link
                    // className="w-full h-12 justify-center  rounded-xl   bg-black text-white uppercase font-medium hover:bg-green-950 cursor-pointer duration-300"
                    href={"/contact"}
                  >
                    <h3 className="items-center"> WORK WITH US</h3>
                  </Link> */}
                  <Link href={"/contact"} className="w-full">
                    {" "}
                    <button className="w-full px-4 text-md   h-12 rounded-xl bg-purple-700 text-white uppercase font-medium hover:bg-black cursor-pointer duration-300">
                      WORK WITH US
                    </button>
                  </Link>
                </div>
              </FadeIn>
            </div>
            {/* Right */}
            <div className="w-full relative flex justify-center items-center gap-6 overflow-hidden">
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={image}
                  alt="bannerImg"
                  // Make the image display full width
                  width={500}
                  height={500}
                  priority
                  objectFit="contain"
                  className="w-100 rounded-2xl object-cover "
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
