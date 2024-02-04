import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, price, image, slug }) => {
  return (
    <div>
      <Link href={`/products/${slug}`}>
        <div className="mx-auto  w-44 transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Image
            className="h-56 w-full object-fill"
            width={100}
            height={100}
            src={image}
            alt={title}
            priority
          />
          <div className="p-4 text-center">
            <h2 className="mb-2 text-lg font-medium  text-gray-900">{title}</h2>

            <div className="flex items-center justify-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 ">
                ${price}
              </p>
              <p className="text-xs  font-medium text-gray-500 line-through">
                $25.00
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
