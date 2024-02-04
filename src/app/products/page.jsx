"use client";

import React, { useState } from "react";
import NewFilter from "@/components/products/NewFilter.jsx";
// import { useSearchParams } from "next/navigation";
// import router from "next/router";
// export const metadata = {
//   title:
//     "Products - Print O Thread : T-Shirts |  Polos |  Long Sleeves |  Hoodies |  Head Wear |  Pants",

//   description:
//     "We at Print O Thread deals in all kind of Soft Custom Shirts, Unique Print Options, Online Printing Services,Custom Clothing Manufacturer, Custom T-Shirts,Custom Polos, Custom Long Sleeves, Custom Caps, Custom Hoodies , Custom Pants.",
//   keywords:
//     "Custom T-Shirts,Polos,Hoodies,Head Wear,Caps,Long Sleeves,Patches,Embroidery,Sticker,Tote Bags,Approns,Promotional Products,Screen Printing, Online Store, Custom Printing, Custom Patches, Custom Embroidery,Add-on Services",
// };

const page = ({ searchParams }) => {
  // console.log(router);
  // const searchParams = useSearchParams();
  // const search = searchParams.get("category");
  const search = searchParams.category;
  console.log(search);
  return (
    <>
      {/* Shop Wrapper */}
      <div className="container grid grid-cols-5 md:grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/* Side Bar */}

        <NewFilter categor={search} />

        {/* Product */}

        {/* <PGrid /> */}
      </div>
      {/* /Shop Wrapper */}
    </>
  );
};

export default page;
