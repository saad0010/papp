import React from "react";
import { items } from "../newdata.js";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container.jsx";
import Image from "next/image.js";
import Link from "next/link.js";
import PageNav from "@/components/layout/PageNav.jsx";
import { products } from "../prod.js";

const getData = (slug) => {
  //   console.log(slug);

  const data2 = products.find((product) => product.slug === slug);
  if (data2) {
    return data2;
  }

  return notFound();
};

const getMoreProducts = (category) => {
  const data1 = products.filter((product) => product.category === category);
  //   console.log(data1);
  if (data1) {
    return data1;
  }

  return notFound();
};

const page = ({ params }) => {
  //   const data = [];
  const data = getData(params.product);
  const data1 = getMoreProducts(data.category);
  //   console.log(data.category);
  //   console.log(data1);

  return (
    <Container>
      <PageNav data={params.product} />

      <div className="w-full    ">
        <Image
          className=" w-full  object-cover  "
          src={data.images[0].src}
          alt={data.title}
          width={2000}
          height={1000}
        />
      </div>
      <div className="md:flex md:items-center px-4 md:pl-16">
        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <h3 className="text-gray-700 uppercase text-lg md:text-5xl">
            {data.title}
          </h3>
          <div className="flex justify-between">
            <span className="text-gray-500 mt-3">
              Material : <span className="text-black"> {data.material}</span>
            </span>
            <span className="text-gray-500 mt-3">
              Brand : <span className="text-black">{data.brand}</span>
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 mt-1">
              Category : <span className="text-black">{data.category}</span>
            </span>
            <span className="text-gray-500 mt-1">
              Body : <span className="text-black">{data.body}</span>
            </span>
          </div>
          <hr className="my-4" />

          <div className="text-left">
            <span className="text-gray-500 mt-3">
              Description :{" "}
              <span className="text-black">{data.description}</span>
            </span>
          </div>
          <div className="text-left mt-6">
            <span className="text-gray-500 ">
              Size :<span className="text-black"> {data["size  "]}</span>
            </span>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Link href={"/products"}>
              <button className="px-8 py-2 bg-midnigh text-white text-sm font-medium rounded hover:bg-btnyel hover:text-black focus:outline-none focus:bg-btnyel">
                Back
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="px-8 py-2 bg-btnyel text-black text-sm font-medium rounded hover:bg-midnigh hover:text-white focus:outline-none focus:bg-btnyel">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 md:pl-24">
        <h3 className="text-gray-400 text-xl lg:text-3xl font-medium font-libre">
          MORE {data.category.toLocaleUpperCase()}S
        </h3>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {data1.map((item) => (
            <Link key={item.id} href={`/products/${item.slug}`}>
              <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover"
                  style={{
                    backgroundImage: `url("${item.img}")`,
                  }}
                ></div>
                <div className="px-5 py-3 text-center">
                  <h3 className="text-gray-700 text-[.8rem] text-md uppercase">
                    {item.title}
                  </h3>
                  <div className="hidden md:flex justify-between">
                    <span className="text-gray-500 mt-3 text-xs">
                      Material :{" "}
                      <span className="text-black"> {item.material}</span>
                    </span>
                    <span className="text-gray-500 mt-3 text-xs">
                      Brand : <span className="text-black">{item.brand}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default page;
