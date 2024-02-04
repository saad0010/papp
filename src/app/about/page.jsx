import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Title from "@/components/title/Title";
import React from "react";

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: `About | Print O Thread `,

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

const About = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-6">
          <FadeIn>
            <Title
              clas="text-3xl  ml-40 text-black font-semibold"
              title="Who are we?"
            />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start gap-10">
              <p className="mx-20 text-lg mt-1 text-black  tracking-wider">
                Since 2017, we’ve been trusted for offering comprehensive
                printing solutions from the heart of Toronto.{" "}
                <p className="mt-6">
                  {" "}
                  We are a team of professional and passionate artists who have
                  been providing excellent services since 2008. We are an online
                  screen printing company, on a mission to make printing
                  services easy and flexible. We are a solution for you if you
                  need personalized wearables or other items.
                </p>
                <br />
                <Link href={"/contact"}>
                  {" "}
                  <button className="w-100 px-4 mt-8 text-md h-12 rounded-xl bg-purple-600 text-white uppercase font-medium hover:bg-black cursor-pointer duration-300">
                    FEEL FREE TO TALK
                  </button>
                </Link>
              </p>
              {/* <Image
                src={aboutImg}
                alt="bannerImg"
                className="max-w-xs rounded-full mr-20"
              /> */}
            </div>
            <div className="h-px flex-auto mx-20 mt-20  bg-white" />
          </FadeIn>
        </div>

        <div className="flex flex-col mt-10 gap-6 bg-transparent">
          <FadeIn>
            <Title
              clas="text-3xl  ml-60 text-white font-semibold"
              title="Our Mission Is To Make Your Life Simple"
            />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col  md:flex-row items-start gap-10">
              {/* <Image
                src={ab1}
                alt="bannerImg"
                className="max-w-xs ml-20 mt-4 rounded"
              /> */}
              <p className="mx-20 text-lg mt-1 text-black  tracking-wider">
                <p>
                  {" "}
                  No matter the size or scope, our mission is to facilitate
                  successful client relationships and provide insights to help
                  organizations build trust through increased credibility and
                  visibility.
                </p>{" "}
                <p className="mt-6">
                  All our clients do is trust us and our designing team takes
                  care of the rest. Through our designing efforts and strategies
                  we jumpstart your growth, upscale your business and bring in
                  lot of leads, conversions and sales leading to profitable
                  outcomes and success stories along your way.
                </p>
                {/* <hr className="mb-8 mt-20 bg-transparent" /> */}
                <br />
                <Link href={"/contact"}>
                  {" "}
                  <button className="w-100 px-4 mt-8 text-md  h-12 rounded-xl bg-purple-600 text-white uppercase font-medium hover:bg-black cursor-pointer duration-300">
                    FEEL FREE TO TALK
                  </button>
                </Link>
              </p>
            </div>
            <div className="h-px flex-auto mx-20 mt-20 bg-white" />
          </FadeIn>
        </div>

        <div className="flex flex-col mt-20 gap-6">
          <FadeIn>
            <Title
              clas="text-3xl  ml-40 text-white font-semibold"
              title="We deliver ROI-Focused Digital Marketing Solution"
            />
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col md:flex-row items-start gap-10">
              <p className="mx-20 text-lg mt-4 text-black tracking-wider">
                Print O Thread is a one-stop shop for printing and designing
                services. We believe in perfection, so we are using various
                printing technologies to get the required results. With years of
                experience, our staff can offer top-notch printing services.
              </p>
              {/* <Image
                src={ab2}
                alt="bannerImg"
                className="max-w-xs mr-20 rounded mt-4"
              /> */}
            </div>
            <div className="h-px flex-auto mx-20 mt-20  bg-white" />
          </FadeIn>
        </div>
      </Container>
    </>
  );
};

export default About;
