import { body, brands, cat, colors, material } from "@/constants";
import Link from "next/link";
import React from "react";

const SideFilter = () => {
  return (
    <div className="overflow-y-scroll h-full">
      <ul className="pt-10  ">
        {cat.map((item) => (
          <Link className="" key={item._id} href={`/products`}>
            <li
              key={item._id}
              className="mt-1 md:mr-6 px-16 text-left  text-[.7rem] md:text-[1.6rem] font-libre text-black font-bold hover:text-slate-400 cursor-pointer duration-300 group relative"
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>

      {/* Colors */}
      <section className="grid  px-12 pt-4">
        <label>
          <input
            className="peer/showLabel absolute scale-0"
            type="checkbox"
            defaultChecked
          />
          <span className="block max-h-14 max-w-xs overflow-hidden rounded-lg  px-4 py-0  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
            <h3 className="flex h-14 cursor-pointer items-center font-bold">
              Colors
            </h3>
            <div>
              <ul className="grid grid-cols-4  ">
                {colors.map((item) => (
                  <li key={item.id} className="mr-4 last:mr-0">
                    <span className="block p-1  rounded-full transition ease-in duration-300">
                      <a
                        href="#blue"
                        className={`block w-6 h-6 bg-${item.code} rounded-full`}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </span>
        </label>
      </section>

      {/* Body Type */}
      <section className="grid  px-12 pt-4">
        <label>
          <input
            className="peer/showLabel absolute scale-0"
            type="checkbox"
            defaultChecked
          />
          <span className="block max-h-14 max-w-xs overflow-hidden rounded-lg  px-4 py-0  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
            <h3 className="flex h-14 cursor-pointer items-center font-bold">
              Body Type
            </h3>
            <div>
              {body.map((item) => (
                <div key={item.id} classname="flex gap-2">
                  <input
                    type="checkbox"
                    id="men"
                    classname="
   relative peer shrink-0
   appearance-none w-4 h-4 border-2 border-bg-btnyel rounded-sm bg-white
   mt-1
   checked:bg-btnyel checked:border-0"
                  />
                  <label
                    className="ml-2 text-[1rem] font-midnigh"
                    htmlFor="men"
                  >
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </span>
        </label>
      </section>

      {/* Material */}
      <section className="grid  px-12 pt-4">
        <label>
          <input
            className="peer/showLabel absolute scale-0"
            type="checkbox"
            defaultChecked
          />
          <span className="block max-h-14 max-w-xs overflow-hidden rounded-lg  px-4 py-0  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
            <h3 className="flex h-14 cursor-pointer items-center font-bold">
              Material
            </h3>
            <div>
              {material.map((item) => (
                <div key={item.id} classname="flex gap-2">
                  <input
                    type="checkbox"
                    id="men"
                    classname="
   relative peer shrink-0
   appearance-none w-4 h-4 border-2 border-bg-btnyel rounded-sm bg-white
   mt-1
   checked:bg-btnyel checked:border-0"
                  />
                  <label
                    className="ml-2 text-[1rem] font-midnigh"
                    htmlFor="men"
                  >
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </span>
        </label>
      </section>

      {/* Brands */}
      <section className="grid  px-12 pt-4">
        <label>
          <input
            className="peer/showLabel absolute scale-0"
            type="checkbox"
            defaultChecked
          />
          <span className="block max-h-14 max-w-xs overflow-hidden rounded-lg  px-4 py-0  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
            <h3 className="flex h-14 cursor-pointer items-center font-bold">
              Brands
            </h3>
            <div>
              {brands.map((item) => (
                <div key={item.id} classname="flex gap-2">
                  <input
                    type="checkbox"
                    id="some_id"
                    classname="
    relative peer shrink-0
    appearance-none w-4 h-4 border-2 border-bg-btnyel rounded-sm bg-white
    mt-1
    checked:bg-btnyel checked:border-0"
                  />
                  <label className="ml-2" htmlFor="some_id">
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </span>
        </label>
      </section>
    </div>
  );
};

export default SideFilter;
