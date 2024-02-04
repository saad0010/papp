import React from "react";
import Container from "./Container";
import { FaGithub, FaYoutube, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import se from "../../assets/images/homeService/se1.svg";
import se1 from "../../assets/images/homeService/se2.svg";
import payment from "../../assets/images/payment.webp";
import { cat, services } from "@/constants";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const footerlist = [
    { _id: 101, title: "Support", link: "#", icon: true },
    { _id: 102, title: "Contact Us", link: "#", icon: true },
    { _id: 103, title: "Disclaimer", link: "#", icon: true },
    { _id: 104, title: "Privacy Policy", link: "#" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-yellow-400 hidden md:block pt-28">
          <Image
            src={se}
            alt="print-o-thread"
            width={100}
            height={100}
            className=" h-auto"
            style={{ height: "auto" }}
          />
        </div>
        <div className="bg-yellow-400 grid  p-8 text-center">
          <h3 className="text-lg md:text-4xl mt-3 font-mirza text-slate-700 font-semibold">
            Ready to raise your t-shirt game ?
          </h3>

          <Link href={"/contact"} className="ml-10 ">
            <button className="pt-2 px-3 h-10 mr-10  mt-4 text-[1rem] font-mirza bg-midnigh   text-white uppercase rounded hover:bg-black hover:text-white duration-300 tracking-wide">
              BEGIN YOUR ORDER
            </button>
          </Link>
        </div>
        <div className="bg-yellow-400 md:flex hidden  md:pb-28 justify-end">
          <Image
            src={se1}
            alt="print-o-thread"
            width={100}
            height={100}
            priority
            className=""
          />
        </div>
      </div>
      <footer className="bg-black">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center md:text-left">
              {/* <img src="#" className="mr-5 h-6 sm:h-9" alt="logo" /> */}
              <Link href={"/"}>
                <h2 className="text-2xl font-kalam text-white font-semibold">
                  Print O Thread
                </h2>
              </Link>
              <p className="text-white lg:text-left font-libre text-sm mt-5">
                Print O Thread is one of the leading online screen printing and
                digitizing company
              </p>
              <p className="  text-white mt-4 text-lg font-bold font-sans">
                <span className="flex mx-20 lg:mx-0">
                  <IoCallOutline
                    className="text-yellow-400 mr-2    "
                    size={22}
                  />{" "}
                  {process.env.number}
                </span>
              </p>
              <p className=" font-sans text-white text-lg font-bold">
                <span className="flex mx-20 lg:mx-0">
                  <IoCallOutline
                    className="text-yellow-400 mr-2    "
                    size={22}
                  />{" "}
                  {process.env.number1}
                </span>
              </p>
              <p className=" font-mirza  text-white mt-4 text-xl font-bold">
                <span className="flex mx-20 lg:mx-0">
                  <IoMailOutline
                    className="text-yellow-400 mr-2     "
                    size={22}
                  />
                  info@printothread.com
                </span>
              </p>
              <p className=" font-mirza text-white  text-xl font-bold">
                <span className="flex mx-20 lg:mx-0">
                  <IoMailOutline
                    className="text-yellow-400 mr-2      "
                    size={22}
                  />
                  sales@printothread.com
                </span>
              </p>
              <div className="flex mt-8 space-x-6 justify-center md:justify-start text-gray-600">
                <Link
                  className="hover:opacity-75 "
                  href="https://www.facebook.com/profile.php?id=61555593718454&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <svg
                    className="w-6 h-6 text-btnyel hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  className="hover:opacity-75"
                  href="https://www.instagram.com/print_othread/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <svg
                    className="w-6 h-6 text-btnyel hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex py-10 gap-3 justify-center md:justify-start items-center">
                <Image
                  src={payment}
                  alt="payment-method"
                  className=" bg-slate-200  "
                  width={600}
                  height={600}
                  priority
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-2 text-center lg:grid-cols-4 ">
              <div>
                <p className="text-md text-yellow-500">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                  {services.map((item) => (
                    <Link key={item._id} href={`/services/${item.slug}`}>
                      <span className="hover:opacity-75 font-mirza text-lg">
                        {" "}
                        {item.title}{" "}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div>
                <p className="text-md text-yellow-500">Products</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                  {cat.map((item) => (
                    <Link
                      key={item._id}
                      href={`/products?category=${item.slug}`}
                    >
                      <span className="hover:opacity-75 font-mirza text-lg">
                        {" "}
                        {item.title}{" "}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="">
                <p className="text-md text-yellow-500 ">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm  text-white">
                  <Link href={"/"}>
                    {" "}
                    <span className="hover:opacity-75 font-mirza text-lg">
                      {" "}
                      Home{" "}
                    </span>
                  </Link>
                  <Link href={"/about/company"}>
                    {" "}
                    <span className="hover:opacity-75 font-mirza text-lg">
                      {" "}
                      About{" "}
                    </span>
                  </Link>
                  <Link href={"/contact"}>
                    {" "}
                    <span className="hover:opacity-75 font-mirza text-lg">
                      {" "}
                      Become a client{" "}
                    </span>
                  </Link>
                  {/* <Link href={"/casestudies"}>
                    {" "}
                    <span className="hover:opacity-75"> Case Studies </span>
                  </Link> */}
                  <Link href={"/blogs"}>
                    {" "}
                    <span className="hover:opacity-75 font-mirza text-lg">
                      {" "}
                      Blogs{" "}
                    </span>
                  </Link>
                </nav>
              </div>
              <div>
                <p className="text-md text-yellow-500">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                  <Link href={"/privacypolicy"}>
                    <span className="hover:opacity-75 font-mirza text-lg">
                      {" "}
                      Privacy Policy{" "}
                    </span>
                  </Link>
                  <Link href={"/terms"}>
                    <span className="hover:opacity-75 font-mirza text-lg">
                      {" "}
                      Terms &amp; Conditions{" "}
                    </span>
                  </Link>

                  {/* <Image src={logo} alt="logoImage" className="w-full h-full" /> */}
                </nav>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs  text-center text-white">
            Copyright © All Rights Reserved @ Print O Thread 2024
          </p>
          <p className="mt-2 text-xs  text-center text-white">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
