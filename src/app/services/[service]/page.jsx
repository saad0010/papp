import Container from "@/components/layout/Container";

import React from "react";
import { items } from "./data.js";
import { notFound } from "next/navigation";

import Banner from "@/components/service/Banner.jsx";

const getData = (service) => {
  const data = items[service];

  if (data) {
    return data;
  }

  return notFound();
};
export const metadata = {
  title: ` Add-On Services - Print O Thread | Patches | Embroidery | Sticker | Tote Bags | Aprons | Promotional Product`,

  description:
    "We at Print O Thread provide add-on services for  Patches , Embroidery , Sticker , Tote Bags , Aprons , Promotional Product",
  keywords:
    "Custom T-Shirts,Polos,Hoodies,Head Wear,Caps,Long Sleeves,Patches,Embroidery,Sticker,Tote Bags,Approns,Promotional Products,Screen Printing, Online Store, Custom Printing, Custom Patches, Custom Embroidery,Add-on Services",
};

const Service = ({ params }) => {
  const data = getData(params.service);

  return (
    <>
      <Container>
        {data.map((item) => (
          <div key={item.id}>
            <Banner
              title={item.title}
              label={item.label1}
              p={item.desc}
              p1={item.label}
              image={item.image}
              images={item.images}
              video={item.video}
            />
          </div>
        ))}
      </Container>
      {/* <div className="h-px flex-auto mx-20 mt-10 bg-white" /> */}
    </>
  );
};

export default Service;
