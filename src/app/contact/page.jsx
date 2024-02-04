// "use client";
import EmailForm from "@/components/contact/EmailForm";
import Container from "@/components/layout/Container";
import React from "react";

export const metadata = {
  title: `Contact | Print O Thread `,

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

const Contact = () => {
  return (
    <>
      <Container>
        <div>
          {" "}
          {/* Image Cont */}
          <div className="px-2 lg:px-72 w-full overflow-x-hidden">
            <div className=" bg-[url('/contact.webp')] mt-32 lg:mt-16 bg-no-repeat bg-contain  min-h-screen lg:h-[180vh] lg:w-screen">
              <div className="py-2 lg:p-6 lg:-ml-72">
                <h2 className="font-mirza -mt-32 lg:mt-0 text-gray-400 font-bold text-[1.4rem]">
                  Print O Thread EXPERTS
                </h2>
                <h1 className="ml-4 font-mirza mt-2 lg:mr-[65rem] text-black font-400 text-[2.6rem] lg:text-[3.6rem] leading-10 lg:leading-[3rem]">
                  Our Printing Pros Are Here To Help
                </h1>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="">
            <div className="-mt-[22rem] lg:-mt-[53rem] lg:ml-[60rem] lg:mr-0 px-8 lg:px-0">
              <div className="bg-white p-8 rounded-xl drop-shadow-2xl">
                <p className="font-libre font-normal text-slate-900 tracking-wider  text-sm leading-6">
                  Were ready and waiting to answer all of your questions...
                  Well, all of your product-related questions—please dont try to
                  stump us with questions about quantum physics or differential
                  equations or something.
                </p>
                <p className="mt-2 font-libre font-normal text-slate-900 tracking-wider text-sm leading-6">
                  We cant do your math homework, but we can help guide you
                  toward the product that best fits your budget, order size, and
                  design!
                </p>
                <div className="mt-6">
                  <div>
                    <span className="font-bold">{process.env.number}</span>
                  </div>
                  <div>
                    <span className="font-bold">{process.env.number1}</span>
                  </div>
                  <div>
                    <span className="font-bold flex items-center mt-4">
                      info@printothread.com <br />
                      sales@printothread.com
                    </span>
                  </div>
                  <div className="mt-4">
                    <span>Hours:</span>{" "}
                    <span className="font-bold"> 9am - 5pm EST</span>
                    <span className="text-[.8rem]"> weekdays</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
          <EmailForm />
        </div>
      </Container>
    </>
  );
};

export default Contact;
