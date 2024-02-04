import React, { useEffect, useState } from "react";

import { IoEllipsisHorizontalSharp, IoFilter, IoSearch } from "react-icons/io5";
import Link from "next/link";
import { products } from "@/app/products/prod";

const NewFilter = (categor) => {
  const [cateProp, setCateProp] = useState(categor.categor);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [catFil, setCatFil] = useState(
    products.filter((product) => product.category === cateProp)
  );
  useEffect(() => {
    setCatFil(
      products.filter((product) => product.category === categor.categor)
    );
  }, [categor]);
  let iniState = cateProp ? catFil : products;
  // console.log(catFil);
  const [filteredItems, setFilteredItems] = useState(iniState);

  const [checkFilter, setCheckFilter] = useState("all");

  const cat = [...new Set(products.map((item) => item.category))].sort();
  const body = [...new Set(products.map((item) => item.body))].sort();
  const material = [...new Set(products.map((item) => item.material))].sort();
  const brand = [...new Set(products.map((item) => item.brand))].sort();

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      //console.log(selectedCategory);
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (checkFilter === "category") {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = products.filter(
            (products) => products.category === selectedCategory
          );
          return temp;
        });
        setFilteredItems(tempItems.flat());
      } else {
        setFilteredItems([...products]);
      }
    } else if (checkFilter === "body") {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = products.filter(
            (products) => products.body === selectedCategory
          );
          return temp;
        });
        setFilteredItems(tempItems.flat());
      } else {
        setFilteredItems([...products]);
      }
    } else if (checkFilter === "material") {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = products.filter(
            (products) => products.material === selectedCategory
          );
          return temp;
        });
        setFilteredItems(tempItems.flat());
      } else {
        setFilteredItems([...products]);
      }
    } else if (checkFilter === "brand") {
      if (selectedFilters.length > 0) {
        let tempItems = selectedFilters.map((selectedCategory) => {
          let temp = products.filter(
            (products) => products.brand === selectedCategory
          );
          return temp;
        });
        setFilteredItems(tempItems.flat());
      } else {
        setFilteredItems([...products]);
      }
    }
  };

  return (
    <>
      {/* Filters */}
      <div className="col-span-2 md:col-span-1  bg-white px-4 pb-6 shadow rounded overflow-hidden">
        {/* Category */}

        <section className="grid  px-3 ">
          <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
              defaultChecked
            />
            <span className="block max-h-14  pb-4 shadow-btnyel max-w-xs overflow-hidden rounded-lg  px-4 py-0  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-full">
              <div className="flex justify-between   items-center cursor-pointer">
                <h3 className="flex h-14 cursor-pointer text-[.6rem] md:text-lg  items-center font-bold">
                  Category
                </h3>
                <IoEllipsisHorizontalSharp
                  className="text-red-600 "
                  size={22}
                />
              </div>
              <div>
                {cat.map((cat, idx) => (
                  <div key={`filters-${idx}`} className="flex md:gap-2">
                    <input
                      type="checkbox"
                      id="men"
                      className="
                        relative peer shrink-0
                        appearance-none w-3 h-3 border-2 border-bg-btnyel rounded-sm bg-white
                        mt-1 
                        checked:bg-btnyel checked:border-0"
                      onClick={() => {
                        handleFilterButtonClick(cat),
                          setCheckFilter("category");
                      }}
                    />
                    <label
                      className="ml-2 text-[.6rem] md:text-[.8rem] font-midnigh"
                      htmlFor="men"
                    >
                      {cat}
                    </label>
                  </div>
                ))}
              </div>
            </span>
          </label>
        </section>

        {/* Body Type */}
        <section className="grid  pt-4 px-3 ">
          <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
              defaultChecked
            />
            <span className="block max-h-14 pb-4 shadow-btnyel max-w-xs overflow-hidden rounded-lg  px-4 py-0  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="flex h-14 cursor-pointer text-[.6rem] md:text-lg items-center font-bold">
                  Body Type
                </h3>
                <IoEllipsisHorizontalSharp
                  className="text-red-600 "
                  size={22}
                />
              </div>
              <div>
                {body.map((body, idx) => (
                  <div key={`filters-${idx}`} className="flex gap-2">
                    <input
                      type="checkbox"
                      id="men"
                      className="
                        relative peer shrink-0
                        appearance-none w-3 h-3 border-2 border-bg-btnyel rounded-sm bg-white
                        mt-1
                        checked:bg-btnyel checked:border-0"
                      onClick={() => {
                        handleFilterButtonClick(body), setCheckFilter("body");
                      }}
                    />
                    <label
                      className="ml-2 text-[.6rem] md:text-[.8rem] font-midnigh"
                      htmlFor="men"
                    >
                      {body}
                    </label>
                  </div>
                ))}
              </div>
            </span>
          </label>
        </section>
        {/* /Body Type */}
        {/* Material Filter */}
        <section className="grid pt-4 px-3 ">
          <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
              defaultChecked
            />
            <span className="block max-h-14 pb-4 shadow-btnyel max-w-xs overflow-hidden rounded-lg  px-4 py-0  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="flex h-14 cursor-pointer text-[.6rem] md:text-lg items-center font-bold">
                  Material
                </h3>
                <IoEllipsisHorizontalSharp
                  className="text-red-600 "
                  size={22}
                />
              </div>
              <div>
                {material.map((material, idx) => (
                  <div key={`filters-${idx}`} className="flex  md:gap-2">
                    <input
                      type="checkbox"
                      id="men"
                      className="
                        relative peer shrink-0
                        appearance-none w-3 h-3 border-2 border-bg-btnyel rounded-sm bg-white
                        mt-1
                        checked:bg-btnyel checked:border-0"
                      onClick={() => {
                        handleFilterButtonClick(material),
                          setCheckFilter("material");
                      }}
                    />
                    <label
                      className="ml-2 text-[.5rem] md:text-[.8rem] font-midnigh"
                      htmlFor="men"
                    >
                      {material.substring(0, 12)}
                    </label>
                  </div>
                ))}
              </div>
            </span>
          </label>
        </section>
        {/* <div className="px-3">
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              material
            </h3>
            <div className="space-y-2">
              {material.map((material, idx) => (
                <div key={`filters-${idx}`} className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-btnyel focus:ring-0 rounded-sm cursor-pointer"
                    onClick={() => {
                      handleFilterButtonClick(material),
                        setCheckFilter("material");
                    }}
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    {" "}
                    {material}
                  </label>
                  <div className="ml-auto text-gray-600 text-sm"> (15)</div>
                </div>
              ))}
            </div>
          </div> */}
        {/* /Material Filter */}

        {/* Brand Filter */}
        {/* <div>
            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
              brands
            </h3>
            <div className="space-y-2">
              {brand.map((brand, idx) => (
                <div key={`filters-${idx}`} className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-btnyel focus:ring-0 rounded-sm cursor-pointer"
                    onClick={() => {
                      handleFilterButtonClick(brand), setCheckFilter("brand");
                    }}
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    {brand}
                  </label>
                  <div className="ml-auto text-gray-600 text-sm"> (15)</div>
                </div>
              ))}
            </div>
          </div> */}
        <section className="grid pt-4 px-3  ">
          <label>
            <input
              className="peer/showLabel absolute scale-0"
              type="checkbox"
              defaultChecked
            />
            <span className="block max-h-14 pb-4 shadow-btnyel max-w-xs overflow-hidden rounded-lg  px-4 py-0  shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-full">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="flex h-14 cursor-pointer text-[.6rem] md:text-lg items-center font-bold">
                  Brands
                </h3>
                <IoEllipsisHorizontalSharp
                  className="text-red-600 "
                  size={22}
                />
              </div>
              <div>
                {brand.map((brand, idx) => (
                  <div key={`filters-${idx}`} className="flex md:gap-2 ">
                    <input
                      type="checkbox"
                      id="men"
                      className="
                        relative peer shrink-0
                        appearance-none w-3 h-3 border-2 border-bg-btnyel  rounded-sm bg-white
                        mt-1 
                        checked:bg-btnyel checked:border-0"
                      onClick={() => {
                        handleFilterButtonClick(brand), setCheckFilter("brand");
                      }}
                    />
                    <label
                      className="ml-2 text-[.5rem] md:text-[.8rem] font-midnigh"
                      htmlFor="men"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </span>
          </label>
        </section>
        {/* /Brand Filter */}
      </div>

      {/* Product Grid */}
      <div className="col-span-3 md:col-span-3 pr-4">
        {/* product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* single product */}
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white shadow rounded  overflow-hidden group"
            >
              {/* image */}
              <Link href={`products/${item.slug}`}>
                <div className="relative">
                  <img src={item.img} alt={item.title} className="w-full" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <span
                      href={`products/${item.slug}`}
                      className="text-black text-lg w-9 h-8 rounded-full bg-btnyel flex items-center justify-center hover:text-white hover:bg-gray-800 transition"
                    >
                      <IoSearch />
                    </span>
                  </div>
                </div>
              </Link>
              {/* /image */}
              {/* product content */}
              <Link href={`products/${item.slug}`}>
                <div className="pt-4 pb-3 px-4 text-center ">
                  <h4 className="uppercase font-medium text-[.7rem]  lg:text-xl mb-2 text-gray-800 hover:text-red-400 transition">
                    {item.title.substring(0, 12)}
                  </h4>

                  <div className="hidden lg:flex  justify-between items-baseline mb-1  space-x-2 font-libre">
                    <span className="text-gray-500 mt-3 text-xs">
                      Material :
                      <span className="text-black"> {item.material}</span>
                    </span>
                    <hr className="lg:hidden" />
                    <span className="text-gray-500  mt-3 text-xs">
                      Brand : <span className="text-black">{item.brand}</span>
                    </span>
                  </div>

                  <div className="hidden lg:flex justify-between">
                    <span className="text-gray-500 mt-1 text-xs">
                      Category :
                      <span className="text-black">{item.category}</span>
                    </span>
                    <span className="text-gray-500 mt-1 text-xs">
                      Body : <span className="text-black">{item.body}</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* /product content */}
            </div>
          ))}

          {/* /single product */}
        </div>
        {/* /product grid */}
      </div>
    </>
  );
};

export default NewFilter;
