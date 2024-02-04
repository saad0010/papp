import Container from "@/components/layout/Container";
import React from "react";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineRightSquare } from "react-icons/ai";

export const metadata = {
  title: `Add-On Services | Print O Thread  `,

  description:
    "Personalize custom apparel including t-shirts, hats, and hoodies. Create logo clothing with our experts. Free and fast shipping. Embroidery Services On Hoodies, T-Shirts & Other Apparel. Variety of Colors & Sizes.",

  keywords:
    // "Custom T-Shirts,Polos,Hoodies,Head Wear,Caps,Long Sleeves,Patches,Embroidery,Sticker,Tote Bags,Approns,Promotional Products,Screen Printing, Online Store, Custom Printing, Custom Patches, Custom Embroidery,Add-on Services",
    [
      "t shirts",
      "custom t shirts",
      "customized tee shirts",
      "shirt printing near me",
      "print t shirts near me",
      "tee shirts printing",
      "tshirt maker near me",
      "shirts with prints",
      "tshirt printing",
      "tshirt design",
      "screen printing tee shirts",
      "printothread",
      "print o thread",
      "printothread t",
      "print o thread t",
      "tee shirt printing",
      "custom shirts near me",
      "tee printing",
      " printable tee shirts",
      "custom printed shirts",
      "t shirt maker",
      "custom t shirts near me",
      "custom printing shirts",
      "custom made shirts near me",
      "persinalised t shirt printing",
      "custom print tees",
      "custom t shirts and hats",
      "custom t shirts and hoodies",
      "best custom t shirts",
      "custom t shirts embroidered logo",
      "easy custom t shirts",
      "custom hoodies",
      "custom hoodies near me",
      "custom hoodies bulk",
      "custom hats",
      "custom hats near me",
      "new era custom hats",
      "custom hats with logo",
      "custom hats and shirts",
      "custom hats and patches",
      "custom hats and hoodies",
      "custom patches",
      "custom patches near me",
      "custom patches and embroidery",
      "embroidery",
      "embroidery near me",
      "custom embroidery",
      "custom hat embroidery",
      "hat embroidery",
      "t shirt design",
      "custom t shirt canada",
      "custom t shirts canada",
      "custom t shirts in canada",
      "custom t-shirt us",
      "custom t-shirts us",
      "customizable shirts us",
      "customize t shirts us",
      "customized t shirts us",
      "custom t shirt us",
      "custom t shirts us",
      "custom t shirts in us",
      "custom t-shirt us",
      "custom t-shirts us",
      "customizable shirts us",
      "customize t shirts us",
      "customized t shirts us",
      "print shops",
      "print shops",
      "custom t shirts t shirts",
      "t shirts custom t",
      "custom tour shirts",
      "custom hooded sweatshirt",
      "design it t shirts",
      "print for t shirt",
      "print on shirt",
      "print on shirts",
      "printing on shirts",
      "prints for t shirts",
      "prints for t-shirt",
      "prints on shirts",
      "shirt and print",
      "shirt with print",
      "shirts and printing",
      "shirts with print",
      "t shirt and print",
      "t shirt and printing",
      "t shirt print",
      "t shirt printed",
      "t shirt printers",
      "t shirt prints",
      "t shirts print",
      "t shirts printers",
      "t shirts printers",
      "t shirts prints",
      "t shirts to be printed",
      "t-shirt print",
      "t-shirt print",
      "t-shirt printed",
      "t-shirt printed",
      "t-shirt prints",
      "t-shirts printing",
      "tee shirts printing",
      "tees shirt printing",
      "tshirt #print",
      "custom sticker",
      "customizing shirts",
      "custom apparel t shirts",
      "printing",
      "promo product",
      "promotional accessories",
      "promotional items",
      "promotional merchandise products",
      "printing services",
    ],
};

const getData = () => {
  const data = items["services"];

  if (data) {
    return data;
  }

  return notFound();
};

const Services = () => {
  const data = getData();
  return (
    <>
      <Container>
        <div>
          <div className="text-center p-6 lg:p-20 ">
            <h3 className="text-slate-400">ADD-ON SERVICES</h3>
            <h1 className="text-black text-3xl font-mirza lg:text-4xl mt-10">
              Help your brand stand out from the crowd
            </h1>{" "}
            <h1 className="text-black mb-4 md:mb-0 text-3xl font-mirza lg:text-4xl lg:mt-6">
              with our retail add-ons
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 pb-10 md:pb-8">
            {data.map((item) => (
              <div key={item.id}>
                <Link href={`/services/${item.slug}`}>
                  <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <div>
                      <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <Image
                          src={item.image}
                          alt="ui/ux review check"
                          width={400}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="block font-mirza text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                          {item.title}
                        </h4>
                        <p className="mt-3 block font-libre text-sm font-normal leading-relaxed text-gray-700 antialiased">
                          {item.desc}
                        </p>
                      </div>
                      <div className="-mb-5 text-right px-2">
                        <button
                          className="select-none  rounded-md bg-black py-1 px-1 text-center align-center  font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-light="true"
                        >
                          <AiOutlineRightSquare className="text-2xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* <div className="min-h-screen bg-transparent flex justify-center items-center py-20">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4 md:space-y-0">
            {data.map((item) => (
              <div
                key={item.id}
                className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform  hover:scale-105 transition duration-300 hover:shadow-black  hover:border-solid"
              >
                <h3 className="mb-3 text-sm text-center font-bold text-indigo-600">
                  {item.title}
                </h3>
                <div className="relative">
                  <Image
                    className="w-full h-60 rounded-xl"
                    src={item.image}
                    alt="Colors"
                    width={100}
                    height={100}
                  />
                </div>
                <h1 className="mt-4 text-gray-800 text-sm text-center font-bold cursor-pointer">
                  {item.desc}
                </h1>
                <div className="my-4">
                  {/* <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm">{item.label}</p>
                  </div>
                  <div className="flex space-x-1 items-center mt-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <p className="text-sm">{item.label1}</p>
                  </div>
                  <div className="flex space-x-1 items-center mt-1">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600 mb-1.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </span>
                    <p className="text-sm">{item.label2}</p>
                  </div> */}
          {/* <Link href={`/services/${item.slug}`}>
                    {" "}
                    <button className="flex  justify-center mt-4 text-sm w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                      MORE{" "}
                      <IoArrowForwardOutline className="ml-2 mt-0.5 w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div> */}
          {/* </div> */}
        </div>
      </Container>
      {/* <div className="h-px flex-auto mx-20  bg-white" /> */}
    </>
  );
};

export default Services;
