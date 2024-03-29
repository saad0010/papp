import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "../../assets/images/homeService/s.png";
import s1 from "../../assets/images/homeService/s1.png";
import s2 from "../../assets/images/homeService/s2.png";
import s3 from "../../assets/images/homeService/s3.png";

const Banner = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="grid grid-cols-1  w-screen">
        <div className="relative h-full  overflow-hidden">
          <div className="">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute -z-10 h-full  w-full object-fill  "
            >
              <source src="/banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <section className="  py-2 md:py-7 flex  bg-transaprent">
            <div className=" mx-2 w-6/12 md:mx-10 ">
              <div className="text-center ">
                <p className="text-sm hidden font-libre lg:block lg:mt-32 md:text-xl font-bold  leading-8 text-white">
                  Print O Thread: the # 1 Print-On-Demand Partner
                </p>
                <h1 className="mt-20 font-mirza lg:pt-[2.8rem] sm:mt-20 md:mt-1 lg:mt-0 text-[2rem] sm:text-[2rem] md:text-[4.2rem] font-semibold leading-[2rem] sm:leading-[2.5rem] md:leading-[4rem] tracking-tight text-white">
                  Custom <br /> Apparels & Patches
                </h1>
                <p className="mt-2 hidden font-libre font-bold lg:block md:mt-2 lg:mt-10 text-[.8rem] md:text-lg leading-relaxed text-white lg:px-20">
                  Guaranted Accuracy , Quality and Delivery. Print O Thread
                  makes it easy to buy patches & apparels online.
                </p>
                <div className=" flex items-center justify-center gap-4  mb-5">
                  <Link
                    href={"/contact"}
                    className="pt-4 pb-10 md:pb-0 md:pt-10"
                  >
                    <button className="lg:mt-4 pt-[.4rem] px-2 md:px-3 h-6 md:h-7 md:mr-10 text-[.7rem] md:text-[1rem] font-mirza bg-btnyel   text-black uppercase rounded hover:bg-midnigh hover:text-white duration-300 tracking-wide">
                      CONTACT A PRINTING PRO
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Services */}
      <div className="px-20  grid grid-cols-1 md:grid-cols-4 group bg-white  shadow-neutral-100 border ">
        <div className=" md:p-10 flex flex-col md:flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src={s}
            width={100}
            height={100}
            alt="quality apparel"
            priority
            className="object-cover w-8 h-8 md:w-16 md:h-16"
          />
          <p className=" text-sm md:text-[1.25rem] font-mirza font-light text-black mt-3">
            Low Minimums
          </p>
          <p className="mt-2 text-[.6rem] leading-2 md:text-[.7rem] font-libre md:leading-5 font-normal text-black">
            Looking for quality apparel but donit need a large bulk order? Our
            minimum is only 24 units.
          </p>
        </div>
        <div className="p-4 md:p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src={s1}
            width={100}
            height={100}
            priority
            alt="products free shipping"
            className="object-cover w-8 h-8 md:w-16 md:h-16"
          />
          <p className="text-sm md:text-[1.25rem] font-mirza font-light text-black mt-3">
            Superior Pricing
          </p>
          <p className="mt-2 text-[.6rem] leading-2 md:text-[.7rem] font-libre md:leading-5  text-black">
            Premium products at an unparalleled value, with competitive pricing
            and free standard shipping*
          </p>
        </div>
        <div className="p-4 md:p-10 flex flex-col font-mirza items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src={s2}
            width={100}
            height={100}
            priority
            alt="guarantee"
            className="object-cover w-8 h-8 md:w-16 md:h-16"
          />
          {/* </span> */}
          <p className="text-sm md:text-[1.25rem] font-mirza font-light text-black mt-3">
            Unbeatable Guarantee
          </p>
          <p className="mt-2 text-[.6rem] md:text-[.7rem] font-libre leading-2 md:leading-5 text-black">
            No-risk custom apparel with guaranteed accuracy, quality, and
            delivery.
          </p>
        </div>
        <div className="p-4 md:p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
          <Image
            src={s3}
            width={100}
            height={100}
            priority
            alt="print quality"
            className="object-cover w-18 h-16 md:w-18 md:h-18"
          />
          <p className="text-sm md:text-[1.25rem] font-mirza font-light  text-black mt-3">
            Design Review
          </p>
          <p className="mt-2 text-[.6rem] md:text-[.7rem] font-libre leading-2 md:leading-5 text-black">
            Each order undergoes an in-house art review to guarantee precise
            placement and excellent print quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
