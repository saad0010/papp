import EForm from "@/components/emb/EForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: `Custom Emroidery | Print O Thread `,

  description:
    "Personalize custom embroidery including t-shirts, hats, and hoodies embroidery. Create logo clothing with our experts. Free and fast shipping. Embroidery Services On Hoodies, T-Shirts & Other Apparel. Variety of Colors & Sizes.",

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

const page = () => {
  return (
    <>
      {/* First Component */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t-2 items-center">
          <div className="col-span-1">
            <div className="p-10 lg:p-0">
              <Image
                src={"/emb/1.jpeg"}
                width={1000}
                height={1000}
                className=" lg:w-9/12 lg:ml-32 lg:my-20"
                alt="fulfilment image"
              />
            </div>
            <div className="-mt-[32rem] hidden lg:block -ml-20">
              <Image
                src={"/emb/2.jpeg"}
                width={1000}
                height={1000}
                className=" w-3/12 ml-32 my-20 border-2 border-spacing-2 border-dashed border-yellow-500"
                alt="fulfilment image"
              />
            </div>
            <div className="-mt-20 hidden lg:block">
              <Image
                src={"/emb/3.jpeg"}
                width={1000}
                height={1000}
                className=" w-5/12 ml-[26rem] my-20 border-2 border-spacing-2 border-dashed border-yellow-500"
                alt="fulfilment image"
              />
            </div>
          </div>
          <div className=" col-span-1 lg:mr-32 px-12 lg:px-0 text-center  justify-center lg:my-20">
            <h3 className="text-gray-400 text-xs lg:text-md font-bold uppercase">
              Custom Embroidery Services
            </h3>
            <h1 className="text-2xl lg:text-[2.9rem]  font-semibold text-mirza lg:leading-[3rem] text-midnigh my-4">
              Custom apparel that moves the needle
            </h1>
            <p className="leading-8 text-sm lg:mt-10 lg:text-lg">
              Show off your business, brand, cause, and more with custom
              embroidered apparel that is a thread above the rest.{" "}
            </p>
            <Link href={"/contact"} className="pt-14  pl-10">
              <button className="pt-2 px-3 h-10 mr-10  mt-4 text-[1rem] font-mirza bg-midnigh   text-white uppercase rounded hover:bg-btnyel hover:text-black duration-300 tracking-wide">
                START YOUR CUSTOM ORDER
              </button>
              {/* pt-1 px-1 md:px-3 h-5 md:mr-10 text-[.7rem] md:text-[1rem] font-mirza bg-btnyel   text-black uppercase rounded hover:bg-midnigh hover:text-white duration-300 tracking-wide */}
            </Link>
          </div>
        </div>
      </div>

      {/* Second Component */}
      <div className="px-20 mt-16 lg:mt-0  grid grid-cols-1 md:grid-cols-3 group bg-white   ">
        <div className=" md:p-10 flex flex-row gap-5 lg:gap-0 md:flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src="/emb/1.svg"
            width={200}
            height={100}
            alt="quality apparel"
            priority
            className="object-cover w-12 h-8 md:w-24 md:h-16"
          />
          <div className="flex flex-col text-left lg:text-center mt-2">
            <p className=" text-sm md:text-[1.25rem] font-mirza font-light text-black mt-3">
              Low Minimums
            </p>
            <p className="mt-2 text-[.6rem] leading-2 md:text-[.7rem] font-libre md:leading-5 font-normal text-black">
              Looking for quality apparel but donit need a large bulk order? Our
              minimum is only 24 units.
            </p>
          </div>
        </div>
        <div className="p-4 md:p-10 flex flex-row gap-5 lg:gap-0 md:flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src="/emb/2.svg"
            width={100}
            height={100}
            priority
            alt="products free shipping"
            className="object-cover w-8 h-8 md:w-16 md:h-16"
          />
          <div className="flex flex-col text-left lg:text-center mt-2">
            <p className="text-sm md:text-[1.25rem] font-mirza font-light text-black mt-3">
              Lightning fast delivery
            </p>
            <p className="mt-2 text-[.6rem] leading-2 md:text-[.7rem] font-libre md:leading-5  text-black">
              Try our 2-day service and get your garments by February 2
            </p>
          </div>
        </div>
        <div className="p-4 md:p-10 flex flex-row gap-5 lg:gap-0 md:flex-col font-mirza items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src="/emb/3.svg"
            width={100}
            height={100}
            priority
            alt="guarantee"
            className="object-cover w-8 h-8 md:w-16 md:h-16"
          />
          {/* </span> */}
          <div className="flex flex-col text-left lg:text-center mt-2">
            <p className="text-sm md:text-[1.25rem] font-mirza font-light text-black mt-3">
              Money Back Guarantee
            </p>
            <p className="mt-2 text-[.6rem] md:text-[.7rem] font-libre leading-2 md:leading-5 text-black">
              Count on us being on time with each and every order.
            </p>
          </div>
        </div>
      </div>

      {/* Third Component */}
      <div className="px-20 lg:px-32 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 ">
            <h2 className="text-3xl lg:text-6xl text-semibold font-mirza lg:px-20">
              Custom Embroidery Options
            </h2>
          </div>
          <div className="col-span-1 grid items-center">
            <h3 className="text-xl text-semibold font-mirza mt-4 lg:mt-0">
              Made for showing off your brand in a whole new way.
            </h3>
            <p className="mt-6 lg:mt-0">
              Looking to add a texture to your custom apparel game? Print O
              Thread offers custom embroidery services for custom t-shirts,
              custom hats, custom tote bags, and beyond in three unique styles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 my-12">
          <div className="col-span-1">
            <div className="bg-white shadow-md border  rounded-lg max-w-sm  ">
              <div className="py-10 px-10">
                <a href="#">
                  <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                    Standard embroidery
                  </h5>
                </a>
                <p className="font-light text-gray-700 mb-3 ">
                  ...uses basic thread/yarn and the final result lays nearly
                  flat on your chosen garment. It’s our most commonly used
                  option and is probably what comes to mind first when you think
                  of embroidery.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white shadow-md border  rounded-lg max-w-sm  ">
              <div className="py-10 px-10">
                <a href="#">
                  <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                    Metallic embroidery
                  </h5>
                </a>
                <p className="font-light text-gray-700 mb-3 ">
                  ...is unique in that the thread actually consists of a rubber
                  core wrapped in metallic thread. Best used as an accent
                  element in your design rather than the main feature.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white shadow-md border  rounded-lg max-w-sm  ">
              <div className="py-10 px-10">
                <a href="#">
                  <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                    Puff embroidery
                  </h5>
                </a>
                <p className="font-light text-gray-700 mb-3 ">
                  ...is where things start to get interesting. Puff uses a
                  thick, foam-like material that is then stitched over,
                  resulting in designs that pop off the garment and create a 3D
                  effect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Component */}
      <div>
        <div className="grid grid-cols-1 text-center mt-20 lg:mt-32">
          <h2 className="text-4xl lg:text-6xl text-semibold  font-mirza px-20">
            Custom Embroidery Products
          </h2>
          <p className="px-20 lg:px-0 mt-4 lg:mt-0">
            From custom t-shirts and hats to hoodies and beanies: our embroidery
            services have got you covered (literally).
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          <Image
            src={"/emb/4.jpeg"}
            width={1000}
            height={1000}
            className="col-span-1 lg:w-9/12 p-10 lg:p-0 lg:ml-32 mt-20"
            alt="fulfilment image"
          />
          <div className=" col-span-1 lg:mr-32 px-7 mt-6 justify-center lg:my-20">
            {/* <h3 className="text-gray-400 font-bold">FULFILLMENT</h3> */}
            <h2 className="text-3xl lg:text-[2.7rem] text-mirza text-midnigh my-4">
              Custom embroidered hats
            </h2>
            <p className="leading-8 lg:mt-10 text-sm lg:text-lg">
              Choose from a variety of different custom embroidered hats and
              beanie styles to showcase your designs on: from baseball hats,
              trucker hats, dad caps, bucket hats, and beyond.{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  items-center mt-8">
          <div className=" col-span-1 mx-auto px-8  lg:ml-32  justify-center ">
            {/* <h3 className="text-gray-400 font-bold">FULFILLMENT</h3> */}
            <h2 className="text-3xl lg:text-[2.7rem] text-mirza text-midnigh my-4">
              Custom embroidered jackets & performance wear
            </h2>
            <p className="leading-8 mt-10 text-sm lg:text-lg">
              Choose from brands like Next Level and Bella+Canvas, or even The
              North Face, Nike, and more. Dont see what youre looking for in our
              product catalogue? Reach out to us!{" "}
            </p>
          </div>
          <Image
            src={"/emb/5.jpg"}
            width={1000}
            height={1000}
            className="col-span-1 lg:w-9/12 p-10 lg:p-0 lg:mr-32 "
            alt="fulfilment image"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          <Image
            src={"/emb/5.jpeg"}
            width={1000}
            height={1000}
            className="col-span-1 lg:w-9/12 lg:ml-32 p-10 lg:p-0 mt-10"
            alt="fulfilment image"
          />
          <div className=" col-span-1 lg:mr-32 p-8  justify-center lg:my-20">
            {/* <h3 className="text-gray-400 font-bold">FULFILLMENT</h3> */}
            <h2 className="text-3xl lg:text-[2.7rem] text-mirza text-midnigh my-4">
              Custom embroidered polos
            </h2>
            <p className="leading-8 mt-10 text-sm lg:text-lg">
              Marketing made easy: Add your business logo to custom corporate
              uniforms, polo shirts, accessories, and more. Looking for a
              personalized embroidered shirt for your business? We ve got some
              great resources.{" "}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  items-center lg:mt-8">
          <div className=" col-span-1 lg:ml-32 p-8 justify-center ">
            {/* <h3 className="text-gray-400 font-bold">FULFILLMENT</h3> */}
            <h2 className="text-3xl lg:text-[2.7rem] text-mirza text-midnigh my-4">
              Custom embroidered hoodies & sweatshirts
            </h2>
            <p className="leading-8 mt-10 text-sm lg:text-lg">
              Theres nothing better than a soft, cozy sweatshirt or hoodie.
              These make excellent company gifts to employees, customers, or
              anyone in between.
            </p>
          </div>
          <Image
            src={"/emb/6.jpeg"}
            width={1000}
            height={1000}
            className="col-span-1 lg:w-9/12 lg:mr-32 p-10 lg:p-0"
            alt="fulfilment image"
          />
        </div>
      </div>
      {/* Form Component */}
      <div className=" grid mx-auto ">
        <EForm />
      </div>

      {/* Sixth Component */}
      <div>
        <div className="grid grid-cols-1 text-center mt-20 lg:mt-32">
          <h2 className="text-3xl lg:text-6xl text-semibold  font-mirza px-20">
            Bringing embroidered apparel to life
          </h2>
          <p className="px-12 lg:px-0">
            Our team of stitching wizards/clothing embroiderers are at the
            ready. Heres how we take your design from cool idea to tangible
            item.
          </p>
        </div>
        <div className="container py-16 md:py-20 mx-auto" id="work">
          <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
            <span className="left-2/5 absolute outline-2 outline-dashed inset-y-0 ml-[23.8rem] hidden  w-0 outline-midnigh md:block" />

            <span className="ml-[21rem]  -mt-2 absolute left-8 top-1 hidden h-6 w-6  rounded-full border-2 border-midnigh bg-white md:block"></span>

            <div className="mt-16 ml-20 lg:ml-0 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-center -ml-20">
                  <span className="shrink-0">
                    <div className="col-span-1">
                      <div className="bg-white shadow-md border  rounded-lg max-w-xs  ">
                        <Image
                          className="rounded-t-lg"
                          width={400}
                          height={400}
                          src={"/emb/e1.jpeg"}
                          alt="Fulfillment image"
                        />

                        <div className="p-5">
                          <a href="#">
                            <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                              Design like the wind
                            </h5>
                          </a>
                          <p className="font-light text-gray-700 mb-3 ">
                            Get started by determining what design you want to
                            embroider, and on what garment! Need help making
                            that call? Let us help.
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden h-8 w-18 px-3  pt-1 rounded-full border-2 border-yellow-400 bg-white md:block">
                    STEP 1
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-16 mr-20 lg:mr-0  flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0"></span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden -ml-14 h-8 w-18 px-3  pt-1 rounded-full border-2 border-yellow-400 bg-white md:block">
                    STEP 2
                  </span>
                  <div className="mt-1 flex ml-20">
                    <i className="bx bxs-right-arrow hidden text-primary md:block" />
                    <div className="col-span-1">
                      <div className="bg-white shadow-md border  rounded-lg max-w-xs  ">
                        <Image
                          className="rounded-t-lg"
                          width={400}
                          height={400}
                          src={"/emb/e2.jpeg"}
                          alt="Fulfillment image"
                        />

                        <div className="p-5">
                          <a href="#">
                            <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                              Lets get digital
                            </h5>
                          </a>
                          <p className="font-light text-gray-700 mb-3 ">
                            Using digital design software, we create a model of
                            your design that includes the necessary stitching to
                            bring it to life—kind of like the process of 3D
                            graphic design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 ml-20 lg:ml-0  flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-center -ml-20">
                  <span className="shrink-0">
                    <div className="col-span-1">
                      <div className="bg-white shadow-md border  rounded-lg max-w-xs  ">
                        <Image
                          className="rounded-t-lg"
                          width={400}
                          height={400}
                          src={"/emb/e3.jpg"}
                          alt="Fulfillment image"
                        />

                        <div className="p-5">
                          <a href="#">
                            <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                              Oops, I did it again...
                            </h5>
                          </a>
                          <p className="font-light text-gray-700 mb-3 ">
                            Heres where our custom embroidery services really
                            come into play: once your design is digitized and
                            ready to be stitched, the embroidery process
                            consists of punching the thread into the
                            garment...over and over again.
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden h-8 w-18 px-3  pt-1 rounded-full border-2 border-yellow-400 bg-white md:block">
                    STEP 3
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-20 mr-20 lg:mr-0 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0"></span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden -ml-14 h-8 w-18 px-3  pt-1 rounded-full border-2 border-yellow-400 bg-white md:block">
                    STEP 4
                  </span>
                  <div className="mt-1 flex ml-20">
                    <i className="bx bxs-right-arrow hidden text-primary md:block" />
                    <div className="col-span-1">
                      <div className="bg-white shadow-md border  rounded-lg max-w-xs  ">
                        <Image
                          className="rounded-t-lg"
                          width={400}
                          height={400}
                          src={"/emb/e4.jpg"}
                          alt="Fulfillment image"
                        />

                        <div className="p-5">
                          <a href="#">
                            <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                              ...and again...
                            </h5>
                          </a>
                          <p className="font-light text-gray-700 mb-3 ">
                            Our high-tech embroidery machine makes this process
                            super streamlined, but intricate designs can still
                            take quite a bit of time!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 ml-20 lg:ml-0 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-center -ml-20">
                  <span className="shrink-0">
                    <div className="col-span-1">
                      <div className="bg-white shadow-md border  rounded-lg max-w-xs  ">
                        <Image
                          className="rounded-t-lg"
                          width={400}
                          height={400}
                          src={"/emb/e5.jpg"}
                          alt="Fulfillment image"
                        />

                        <div className="p-5">
                          <a href="#">
                            <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                              The big reveal
                            </h5>
                          </a>
                          <p className="font-light text-gray-700 mb-3 ">
                            After we remove any excess backing and cut off any
                            flyaway stitches, your garment is complete!
                          </p>
                        </div>
                      </div>
                    </div>
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70" />
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden h-8 w-18 px-3  pt-1 rounded-full border-2 border-yellow-400 bg-white md:block">
                    COMPLETETION
                  </span>
                </div>
              </div>
            </div>

            <span className="ml-[21.1rem]  absolute left-8 top-[156rem] hidden h-6 w-6  rounded-full border-2 border-midnigh bg-white md:block"></span>
          </div>
        </div>
      </div>

      {/* Seventh Component */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          <div className=" col-span-1 lg:ml-32 lg:pr-24 bg-slate-200 px-20  pt-20 pb-16 lg:pb-52  justify-center ">
            <h3 className="text-gray-400 font-bold uppercase">
              Our Philosophy
            </h3>
            <h2 className="text-3xl lg:text-[2.7rem] font-medium text-mirza leading-12 text-midnigh my-4">
              Made for quality that lasts
            </h2>
            <p className="leading-8 font-light  mt-10 text-sm lg:text-lg">
              Print O Thread sets itself apart from other custom embroidery
              shops by slowing down the stitching in order to maintain control
              over the quality of the finished product.
            </p>
            <p className="leading-8 font-light  mt-10 text-sm lg:text-lg">
              While some shops pump out as many as 11,000 stitches per minute
              with machinery like ours, our team chooses to max out around 800
              stitches per minute—ensuring that the job is done to the highest
              possible quality, regardless of how many units are in your order.
            </p>
          </div>
          <div className="col-span-1">
            <div>
              <Image
                src={"/emb/7.jpeg"}
                width={1000}
                height={1000}
                className=" lg:w-9/12 lg:mr-32 lg:my-20 lg:mt-24 p-10 lg:p-0"
                alt="fulfilment image"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-20  items-center">
            <div className="col-span-1 ">
              <div>
                <Image
                  src={"/emb/7.jpg"}
                  width={1000}
                  height={1000}
                  className=" lg:w-9/12 lg:ml-[10.6rem] p-10 lg:p-0  "
                  alt="fulfilment image"
                />
              </div>
            </div>
            <div className=" col-span-1 lg:mr-32 lg:pr-24 px-16  lg:px-24 justify-center ">
              <h2 className="text-3xl text-[2.7rem] font-medium text-mirza leading-12 text-midnigh my-4">
                Made for you, with you
              </h2>
              <p className="leading-8 font-light  mt-10 text-sm lg:text-lg">
                Our team is always on deck, ready & waiting to walk alongside
                you to bring your vision to life. Feeling crippled by indecision
                or overwhelmed by choice? We feel you. Get in touch and we’ll
                have you on your way to embroidered apparel perfection in no
                time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Faqs Component */}
      <div>
        <div className="lg:py-5 px-10 lg:px-52">
          <h2 className="text-3xl lg:text-5xl my-10 lg:mt-40 lg:my-20">
            Custom embroidery FAQs
          </h2>
          <details className="group">
            <summary className="flex gap-6 justify-left items-center bg-white border-b-2 p-4 md:p-4 w-full rounded text-gray-600  font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                Where can I order the best custom embroidery?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Well, we may be biased, but we think you came to the right
                  place for shirt embroidery, hat embroidery, and beyond. Have
                  more specific questions about how to get started? Contact us.
                  We are not like regular embroidery companies—we are a *cool*
                  embroidery company 😜
                </p>
              </div>
            </section>
          </details>
          <details className="group">
            <summary className="flex gap-6 justify-left items-center bg-white border-b-2 p-4 md:p-4 w-full rounded text-gray-600  font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                How do you make a custom embroidery design?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  We take your beautiful work of art, digitize it, and enter it
                  into our software. From there we choose from two types of
                  stitching: Satin stitching (which stitches back and forth only
                  and is used for smaller areas) or fill stitching (in which the
                  stitching direction can be adjusted to compensate for fabric
                  structure and pulling).
                </p>
              </div>
            </section>
          </details>
          <details className="group">
            <summary className="flex gap-6 justify-left items-center bg-white border-b-2 p-4 md:p-4 w-full rounded text-gray-600  font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                What file types can I send my design to you in?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Basic visual files like PDF, EPS and JPEG work. If you can
                  send in a vector art file, though, it’s preferred as we can
                  easily manipulate it if adjustments based on threading need to
                  be made.
                </p>
              </div>
            </section>
          </details>
          <details className="group">
            <summary className="flex gap-6 justify-left items-center bg-white border-b-2 p-4 md:p-4 w-full rounded text-gray-600  font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                How many colors can my embroidered apparel design have?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Practically speaking, 7 to 8. Thats a little high,
                  though—embroidery works best when its simple and not muddled
                  up by an overly busy design.
                </p>
              </div>
            </section>
          </details>
          <details className="group">
            <summary className="flex gap-6 justify-left items-center bg-white border-b-2 p-4 md:p-4 w-full rounded text-gray-600  font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                Can I order embroidery on any product?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  With embroidered apparel and custom embroidery services, the
                  garment fabric matters less than the shape. In order to be
                  loaded into our embroidery machine and ensure stability during
                  stitching, a product should ideally be laid flat. With that
                  being said, baseball caps are trickier to embroider than
                  sweatshirts, due to their shape. For this reason, hat orders
                  may take a bit longer than others. Need your hats stat? Let us
                  know and we’ll try to make it work!
                </p>
              </div>
            </section>
          </details>
          <details className="group">
            <summary className="flex gap-6 justify-left items-center bg-white border-b-2 p-4 md:p-4 w-full rounded text-gray-600  font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                How big can my design be?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Embroidery designs are typically smaller, but if you want to
                  go big try to keep it in the range of 10 x 10 inches.
                </p>
              </div>
            </section>
          </details>
          <details className="group">
            <summary className="flex gap-6 justify-left items-center bg-white border-b-2 p-4 md:p-4 w-full rounded text-gray-600  font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                What is the average turnaround time for embroidery?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  We take great pride in our turnaround times—because we know
                  that as soon as you approve your order, you’ll be waiting with
                  bated breath for the mailman to come a-knockin’. That being
                  said, embroidery is a delicate process (even with high-tech
                  machinery like ours!) and we want to make sure your design is
                  perfect. The faster the stitching, the more the fabric is
                  pulled—which can cause it to warp and spread. Intricate
                  embroidery orders may take a bit longer for this reason.
                  Orders using specialized services—like puff embroidery—may
                  also have a longer turn time because the material is thicker,
                  requiring a slower stitching process. That being said: we will
                  always do our best to get your goods in hand when you need
                  them, even if you’re working with a tight deadline. Ready to
                  order embroidery online and need it fast? Let us know and
                  we’ll see what we can do!
                </p>
              </div>
            </section>
          </details>
          <details className="group">
            <summary className="flex gap-6 justify-left items-center bg-white border-b-2 p-4 md:p-4 w-full rounded text-gray-600  font-medium cursor-pointer list-none">
              <span className="transition  group-open:rotate-180">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-yellow-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  color="#facc15"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </span>
              <span className="font-semibold text-xl mt-4 lg:text-4xl font-mirza text-slate-800">
                Do you do custom embroidery patches?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  You bet! Simply fill out our embroidery request form and they
                  will be calling you Patch Adams in no time. Note: We dont
                  produce loose patches for individual/bulk purchase, but rather
                  patches that are then applied to a garment of your choice.
                </p>
              </div>
            </section>
          </details>
        </div>
      </div>
    </>
  );
};

export default page;
