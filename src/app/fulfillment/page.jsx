import EForm from "@/components/emb/EForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: `Fulfillment | Print O Thread  `,

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
const page = () => {
  return (
    <>
      {/* First Component */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t-2 items-center">
          <Image
            src={"/fulfil/1.jpeg"}
            width={1000}
            height={1000}
            className="col-span-1 lg:w-9/12 lg:ml-32 lg:my-20 p-10 lg:p-0"
            alt="fulfilment image"
          />
          <div className=" col-span-1 lg:mr-32 px-8 lg:px-0 justify-center lg:my-20">
            <h3 className="text-gray-400 font-bold">FULFILLMENT</h3>
            <h2 className="text-3xl lg:text-[2.7rem] text-mirza text-midnigh my-4">
              Let us do the heavy lifting
            </h2>
            <p className="leading-8 mt-10 text-sm lg:text-lg">
              Storing and shipping your goods has never been easier than with
              Print O Threads fulfillment services. With customizable plans for
              businesses, retailers, eCommerce, events, and more, there s truly
              an option for everyone.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Second Component */}
      <div>
        <div className="bg-slate-100 mt-4 lg:mt-0">
          <div className="mx-8 lg:mx-60 py-10 lg:py-20">
            <h2 className="text-3xl lg:text-[2.7rem] text-mirza text-midnigh my-4">
              How it Works:{" "}
            </h2>
            <p className="my-8 text-sm lg:text-lg ">
              <span className="font-bold">1.</span> You place a bulk order with
              Real Thread.
            </p>
            <p className="my-8 text-sm lg:text-lg ">
              <span className="font-bold">2.</span> We print your goods & store
              them (as well as any of your other inventory) in our onsite
              distribution center.
            </p>
            <p className="my-8 text-sm lg:text-lg ">
              <span className="font-bold">3.</span> We gather your individual
              orders (through simple address collection)
            </p>
            <p className="my-8 text-sm lg:text-lg ">
              <span className="font-bold">4.</span> Your goods are shipped out
              as soon as you need them/as online orders come in!
            </p>
          </div>
        </div>
      </div>
      {/* Third Component */}
      <div>
        <div className="text-center lg:mt-20 py-10">
          <h3 className="text-lg text-midnigh">
            Have Question on how fulfillment could work for you?
          </h3>
          <Link href={"/contact"} className="text-yellow-500  ">
            <h2 className="text-3xl lg:text-4xl pt-4">
              Contact Print O Thread Expert !
            </h2>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:py-12">
          <div className="grid col-span-1 items-center">
            <div className=" col-span-1 px-8 lg:ml-32 lg:px-20  ">
              <h3 className="text-gray-400 font-bold">BENEFITs</h3>
              <h2 className="text-3xl lg:text-[2.7rem] text-mirza leading-10 text-midnigh my-4">
                Your personal fulfillment team
              </h2>
              <p className="leading-8 mt-10 text-sm lg:text-lg">
                When you opt in to Print O Threads fulfillment services, we
                become part of your team. We have dedicated staff who treat your
                inventory like their own—seamlessly filling orders and getting
                your goods packed & delivered with care.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-0 lg:mr-20 gap-14">
              <div className=" col-span-1 text-center grid justify-items-center">
                <Image
                  src={"/fulfil/1.svg"}
                  width={60}
                  height={60}
                  alt="svg image"
                />
                <h3 className="text-lg font-semibold my-4">
                  Save time & space
                </h3>
                <p className="px-6 text-sm leading-6">
                  We store & ship your goods (even the ones we didn’t produce!),
                  saving you precious space & effort.
                </p>
              </div>
              <div className="col-span-1 text-center  grid justify-items-center">
                <Image
                  src={"/fulfil/2.svg"}
                  width={60}
                  height={60}
                  alt="svg image"
                />
                <h3 className="text-lg font-semibold">Save money</h3>
                <p className="px-6 text-sm leading-6">
                  We pass on our shipping/bulk packaging discounts to you,
                  because we’re cool like that 😎
                </p>
              </div>
              <div className="col-span-1 text-center  grid justify-items-center">
                <Image
                  src={"/fulfil/3.svg"}
                  width={60}
                  height={60}
                  alt="svg image"
                />
                <h3 className="text-lg font-semibold my-4">Quick shipping</h3>
                <p className="px-6 text-sm leading-6">
                  Over 95% of fulfillment shipments go out within 1-2 business
                  days, meaning happy customers/teams.
                </p>
              </div>
              <div className="col-span-1 text-center  grid justify-items-center">
                <Image
                  src={"/fulfil/4.svg"}
                  width={60}
                  height={60}
                  alt="svg image "
                />
                <h3 className="text-lg font-semibold ">Ship internationally</h3>
                <p className="px-6 text-sm leading-6">
                  Add our international shipping option to make even those on
                  the other side of the world feel close.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Component */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          <div className=" col-span-1 lg:ml-32  justify-center my-20">
            <h3 className="text-gray-400  ml-20 font-bold uppercase">
              One-Time & Ongoing Plans
            </h3>
            <h2 className="text-3xl lg:text-[2.7rem] ml-10 text-mirza text-midnigh my-4">
              A plan for everyone
            </h2>
            <p className="leading-8 mt-10 px-20 text-md">
              We know that every business is unique—which is why we have
              developed three standard fulfillment plans designed to meet your
              unique needs. Have questions about which plan is best for you, or
              want to inquire about a custom plan? Check out our FAQs or let us
              know.
            </p>
          </div>
          <Image
            src={"/fulfil/2.jpeg"}
            width={1000}
            height={1000}
            className="col-span-1 lg:w-9/12 lg:mr-32 lg:my-20 p-10 lg:p-0"
            alt="fulfilment image"
          />
        </div>
      </div>
      {/* Fifth Component */}
      <div>
        <h3 className="text-center text-3xl lg:text-5xl mt-10">
          Ways to use fulfillment
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-10 lg:my-20 p-8 lg:p-0  lg:mx-44 gap-10 lg:gap-20">
          <div className="col-span-1">
            <div className="bg-white shadow-md border cursor-pointer  rounded-lg max-w-sm  ">
              <Image
                className="rounded-t-lg"
                width={400}
                height={400}
                src={"/fulfil/3.jpg"}
                alt="Fulfillment image"
              />

              <div className="p-5">
                <h5 className="text-midnigh  font-semibold text-lg tracking-tight mb-2 ">
                  One-Time Fulfillment
                </h5>

                <p className="font-light text-gray-700 mb-3 dark:text-gray-400">
                  Print one bulk order with us—then we’ll ship your goods to
                  individual addresses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white shadow-md border cursor-pointer rounded-lg max-w-sm  ">
              <Image
                className="rounded-t-lg"
                width={400}
                height={400}
                src={"/fulfil/4.jpeg"}
                alt="Fulfillment image"
              />

              <div className="p-5">
                <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                  eCommerce Fulfillment
                </h5>

                <p className="font-light text-gray-700 mb-3 dark:text-gray-400">
                  Selling online? We’ll store your inventory & fulfill your
                  orders as they come in.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-white shadow-md border cursor-pointer rounded-lg max-w-sm  ">
              <Image
                className="rounded-t-lg"
                width={400}
                height={400}
                src={"/fulfil/5.jpg"}
                alt="Fulfillment image"
              />

              <div className="p-5">
                <h5 className="text-midnigh font-semibold text-lg tracking-tight mb-2 ">
                  Swag Fulfillment
                </h5>

                <p className="font-light text-gray-700 mb-3 dark:text-gray-400">
                  Not selling but don’t have space to store your swag? We’ll
                  store & distribute it for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sixth Component */}
      <div className="px-10 lg:px-52 ">
        <div>
          <h2 className="text-4xl font-mirza">One-Time Fulfillment</h2>
          <p className="py-4">
            <span className="font-bold">What it is:</span> Not looking to store
            inventory in an ongoing way, but have a large order that you need
            shipped to individual addresses? This is our single-use,
            moment-in-time specific fulfillment service that you can add on to
            your custom screen printing or embroidery order.{" "}
          </p>
          <p className="py-4">
            <span className="font-bold">Who its for:</span> Events, conferences,
            one-time bulk orders for businesses, etc.{" "}
          </p>
          <p className="py-4">
            <span className="font-bold">Why enroll:</span> Saves you the time
            and space that you so desperately need when planning for a big
            drop/event—making things ultra-convenient for you, your team, and
            your recipients.{" "}
          </p>
          <p className="py-4">
            <span className="font-bold">How it Works:</span> We print your
            items, and you send us any other items or custom packaging you’d
            like included. We hold onto all of your goods until the big moment,
            and then ship to individual addresses or to your preferred location.{" "}
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-4xl font-mirza">eCommerce Fulfillment</h2>
          <p className="py-4">
            <span className="font-bold">What it is:</span> Selling apparel or
            other merch online but don’t have the time or space to store & ship
            it? This monthly fulfillment plan allows you to focus on selling
            while we handle the storing & shipping pieces of the puzzle.{" "}
          </p>
          <p className="py-4">
            <span className="font-bold">Who its for:</span> Online retailers,
            apparel lines, bands, etc.{" "}
          </p>
          <p className="py-4">
            <span className="font-bold">Why enroll:</span> We connect to your
            online selling platform & handle all of the backend logistics for
            you—keeping an eye on your inventory & saving you time, space, and
            money. When orders come in, we ship them out right away—keeping your
            customers happy and the positive reviews for your biz rolling in 😇{" "}
          </p>
          <p className="py-4">
            <span className="font-bold">How it Works:</span> We integrate with
            your eCommerce selling platform, print & store your items, and send
            them out as orders come in.{" "}
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-4xl font-mirza">Swag Fulfillment</h2>
          <p className="py-4">
            <span className="font-bold">What it is:</span> Not selling products
            online but have inventory that you need stored on an ongoing basis?
            We’ve got you covered. We’ll print, store, and ship your goods (even
            the ones we didn’t produce!) as needed, while also keeping track of
            inventory for you.{" "}
          </p>
          <p className="py-4">
            <span className="font-bold">Who its for:</span> HR professionals,
            church & business admins, marketing professionals, branding
            agencies, etc. — really anyone who has a need for ongoing swag
            storage!{" "}
          </p>
          <p className="py-4">
            <span className="font-bold">Why:</span> We handle all of the backend
            logistics for you—keeping an eye on your inventory & saving you time
            and space. And with much of the workforce distributed now, we can
            either ship to individual addresses or in bulk to your office when
            you need it—whatever works best for you & your business.{" "}
          </p>
          <p className="py-4">
            <span className="font-bold">How it Works:</span> We set up an online
            inventory tracking system & ordering platform for you—and then help
            you & your team quickly & easily get the swag/merch you need, when
            you need it.{" "}
          </p>
        </div>
      </div>
      {/* Form Component */}
      <div className=" grid mx-auto ">
        <EForm />
      </div>
      {/* Faqs Component */}
      <div>
        <div className="py-5 lg:px-52">
          <h2 className="text-3xl lg:text-6xl text-center mt-16 lg:mt-40 lg:my-20">
            Fulfillment FAQs
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
                How do I know if Print O Thread Fulfillment is a good fit for
                me?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Every customer is different—but generally for any brand that
                  is selling merch online, we think our fulfillment services
                  would be a good fit for you at these minimum volumes: 25
                  orders in the first month, 10 orders/month ongoing. We have
                  found this to be enough demand to break even/have profit on a
                  month-by-month basis while utilizing our fulfillment services.
                  Not selling something, just need a place to store your
                  inventory? Thats cool, too! These numbers serve more as
                  break-even metrics for ecommerce brands, but we have got some
                  handy dandy pricing breakdowns for each of our fulfillment
                  plans.
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
                Is fulfillment a print-on-demand service?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  No, our fulfillment service currently does not include
                  print-on-demand. T-shirts or other items are still ordered in
                  bulk (our minimum is 20/design), then your inventory is stored
                  and shipped safely at Print O Thread HQ. You sell your shirts,
                  and let us worry about the printing, storage, packing, and
                  shipping. If you d like to sell t-shirts before taking on the
                  inventory, you do have the option to pre-sell. You put up a
                  mockup/sample of your product on your website, and then once
                  you collect orders, we will print the shirts and send them to
                  your customers.
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
                I dont have a storefront, I just need to place a bulk order and
                ship out to individual addresses—should I join fulfillment?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Yes, even if you dont have a need for ongoing shipping of
                  orders but still need to ship to individual addresses, our
                  One-Time Fulfillment is a great service for you.
                  Alternatively, if you do need to ship on an ongoing basis but
                  dont have a storefront, consider joining Real Thread
                  fulfillment via the Swag Fulfillment plan, where well create a
                  platform for you that can hold your inventory and orders, and
                  will then ship out those orders as they come in/as you need
                  them.
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
                Can I fulfill items that are not printed by Print O Thread— like
                stickers, mugs, or other pieces of apparel?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Absolutely. Whatever items you’re selling in your store, we’re
                  able to ship for you.
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
                Can I provide my own custom packaging?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Yes! If you d like to provide your own custom branded
                  packaging for us to send your items in, simply send them to us
                  and we ll ship all of your orders out in style. Our standard
                  packaging for your items is a non-branded white poly mailer or
                  a brown cardboard box.
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
                Do I have to be a Print O Thread customer to use Real Thread
                fulfillment?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Yes. To use our fulfillment services, you must be
                  printing/embroidering products (like t-shirts, hats, bags,
                  sweatshirts, etc.) with us.
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
                Do I have to sign an annual contract?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Nope. We offer both monthly and annual fulfillment plans. With
                  the monthly plan, there is a one-time setup cost involved—but
                  if you sign up for an annual plan, we’ll waive that setup fee.
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
                Does fulfillment ship internationally?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Yes, we do! We recommend shipping internationally through USPS
                  International. Transit time is typically 1-3 weeks, depending
                  on the end location.
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
                How does Print O Thread fulfillment work?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Here are the quick & easy steps to printing tees while using
                  our fulfillment program: Step 1: We connect to your e-commerce
                  platform. Step 2: You place your bulk order(s) with us (20
                  units is our minimum). Step 3: We create the magic and bring
                  your shirts to life. Step 4: We stock your inventory at our
                  warehouse. Step 5: We ship out your orders as soon as they
                  roll in through your shopping platform.
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
                How long does it take for my items to ship?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  We guarantee all orders will ship within 1-2 business days,
                  however, 95% of items are shipped with 24 hours of receiving
                  the order.
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
                How can I see my inventory?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  All inventory will live in your online storefront—there will
                  also be a dedicated inventory receiving list (which we will
                  create!) that can be referenced for production orders.
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
                How long does set up take?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Onboarding takes about 2 business days (plus transit if we’re
                  receiving additional product from you). During this time we’ll
                  confirm your inventory, bin and label it, and sync to your
                  store (if applicable) so that we’re ready to take online
                  orders.
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
                How should I charge my customers for shipping?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  o help account for shipping and handling costs, our suggestion
                  is to use the calculated rates for the services you’d like to
                  provide, with an additional $2 + 10% for handling added in.
                  Your end users will only see one price but this will help
                  cover the cost of shipping incurred over the month.
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
                How much does Print O Thread Fulfillment cost?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  In terms of pricing - there are 3 cost components to our
                  fulfillment program: shipping, packaging and the fulfillment!
                  1) The shipping component - this cost is up to you/your
                  customer (meaning you/your customer chooses the shipping
                  service to be used and you are billed that rate). You may
                  choose to only allow your customers a single service, or you
                  may allow several service/speed options (such as USPS First
                  Class Mail, UPS Ground, UPS 2nd Day Air, UPS Next Day Air,
                  Fedex, etc). GOOD NEWS: You will always be billed at our
                  discounted bulk rates! 😇 2) The packaging component - this
                  cost is based on the size of the shipment. For a single shirt,
                  a 10x13 white poly mailer will cost you just $0.21. 3) The
                  fulfillment component - this rate will change based on your
                  monthly volume and whether you choose an annual contract or
                  month-to-month contract. These rates are outlined in our rate
                  sheet, which is attached. The three costs above are billed at
                  the end of each month and are separate from printing costs. To
                  give you a general idea on costs, here is what a shipment of
                  one shirt would likely cost you if you ship out 1 - 99 orders
                  in a month through fulfillment: Shipping: $3.77 (via USPS
                  First Class Mail) Packaging: $0.21 (white 10 x 13 poly mailer)
                  Fulfillment Fee: $2.50 Total: $6.48 Phew, thats a lot of
                  numbers. Have follow-up questions? Ask our team!
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
                What online stores can you connect with?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  We’re able to integrate with pretty much any major eCommerce
                  platform. Shopify, Squarespace, Amazon, Etsy, & eBay,
                  BigCommerce, Magento, BigCartel, and WooCommerce to name a
                  few. If you don’t see your platform listed, just ask! Odds
                  are, we can make it work.
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
                Am I able to sell my products in bundles?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Yes! We can combine multiple items into a bundle (aka a
                  “kit”), and you can sell/ship a bundle as 1 unit rather than
                  shipping as all separate units. We will pre-make these
                  bundles/kits and store them in our inventory so they are ready
                  to use when an order is ready to be shipped out. We provide
                  custom pricing for bundling and kitting based on your specific
                  products.
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
                I have a custom request—is there someone I can speak to?
              </span>
            </summary>
            <section className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              <div className="px-4 my-10  pb-8">
                <p className="mt-1 text-md">
                  Sure thing! If you have a unique request you’d like to make
                  regarding fulfillment, let us know. Our platform is pretty
                  customizable, and we want you to get exactly what you’re
                  looking for.
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
