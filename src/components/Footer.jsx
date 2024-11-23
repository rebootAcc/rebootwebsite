import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGlobe, FaPhoneVolume, FaWhatsapp } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { HiLocationMarker, HiOutlineCurrencyRupee } from "react-icons/hi";
import { BsChatQuote } from "react-icons/bs";

const Footer = () => {
  const footerLinks = [
    {
      head: "Quick Web Services",
      links: [
        {
          text: "Website Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Darjeeling",
          src: "",
        },
        {
          text: "App Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In West Bengal",
          src: "",
        },
        {
          text: "App Development In Cooch Behar",
          src: "",
        },
        {
          text: "Website Development In Cooch Behar",
          src: "",
        },
        {
          text: "Graphic Design Services",
          src: "",
        },
        {
          text: "Digital Marketing Services",
          src: "",
        },
        {
          text: "Social Media Marketing",
          src: "",
        },
      ],
    },
    {
      head: "Quick Web Services",
      links: [
        {
          text: "Website Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Darjeeling",
          src: "",
        },
        {
          text: "App Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In West Bengal",
          src: "",
        },
        {
          text: "App Development In Cooch Behar",
          src: "",
        },
        {
          text: "Website Development In Cooch Behar",
          src: "",
        },
        {
          text: "Graphic Design Services",
          src: "",
        },
        {
          text: "Digital Marketing Services",
          src: "",
        },
        {
          text: "Social Media Marketing",
          src: "",
        },
      ],
    },
    {
      head: "Quick Web Services",
      links: [
        {
          text: "Website Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Darjeeling",
          src: "",
        },
        {
          text: "App Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In West Bengal",
          src: "",
        },
        {
          text: "App Development In Cooch Behar",
          src: "",
        },
        {
          text: "Website Development In Cooch Behar",
          src: "",
        },
        {
          text: "Graphic Design Services",
          src: "",
        },
        {
          text: "Digital Marketing Services",
          src: "",
        },
        {
          text: "Social Media Marketing",
          src: "",
        },
      ],
    },
    {
      head: "Quick Web Services",
      links: [
        {
          text: "Website Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Darjeeling",
          src: "",
        },
        {
          text: "App Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In West Bengal",
          src: "",
        },
        {
          text: "App Development In Cooch Behar",
          src: "",
        },
        {
          text: "Website Development In Cooch Behar",
          src: "",
        },
        {
          text: "Graphic Design Services",
          src: "",
        },
        {
          text: "Digital Marketing Services",
          src: "",
        },
        {
          text: "Social Media Marketing",
          src: "",
        },
      ],
    },
  ];

  return (
    <footer className=" relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-bg.png"
          alt="Footer Background"
          fill
          quality={100}
          className="opacity-75 object-cover"
        />
      </div>
      <div className="bg-[#222]/85 relative z-10 p-8 xlg:p-16 flex flex-col gap-11">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {footerLinks.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <h2 className="xlg:text-lg lg:text-sm text-lg font-bold text-justify text-white flex items-center gap-1">
                <span>{item.head}</span>
                <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
              </h2>
              <ul className="flex flex-col lg:text-xs text-base xlg:text-base gap-2 leading-5">
                {item.links.map((link, count) => (
                  <li
                    className="flex items-center gap-2 text-white"
                    key={count}
                  >
                    <span className="text-primary">&gt;</span>
                    <span>{link.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 ">
          <div className="flex flex-col items-start gap-2 lg:w-[30%] xlg:w-[30%]">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={253}
                height={46}
                className=" lg:h-[2rem] h-[3rem] xlg:h-[3rem]"
              />
            </Link>
            <p className="xlg:text-base lg:text-sm text-base text-white ">
              Reboot AI Pvt. Ltd. is most growing IT company in North East India
              including Siliguri, Kolkata. We provide Tech & Marketing Solution
              for your business.
            </p>
          </div>
          <div className="flex flex-col gap-1 lg:w-[25%] xlg:w-[25%]">
            <h2 className="xlg:text-lg lg:text-base text-lg font-bold text-justify text-white flex items-center gap-1">
              <span>Our Pages</span>
              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
            </h2>
            <p className="xlg:text-base lg:text-sm text-base text-white whitespace-nowrap">
              CIN No: U62012WB2024PTC274361
            </p>
            <p className="xlg:text-base lg:text-sm text-base text-white whitespace-nowrap">
              MSME No: UDYOG-WB-14-000000
            </p>
          </div>
          <div className="flex flex-col gap-1 lg:[35%] xlg:w-[25%] xlg:text-base lg:text-sm text-base">
            <h2 className="xlg:text-lg lg:text-base text-lg font-bold text-justify text-white flex items-center gap-1">
              <span>Get in touch</span>
              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
            </h2>
            <p className=" text-white flex items-center gap-1">
              <FaPhoneVolume className="text-primary" />{" "}
              <Link href="tel:03534069362">03534 069362</Link>
            </p>
            <p className=" text-white flex items-center gap-1">
              <FaWhatsapp className="text-primary" />{" "}
              <Link href="/">+91 9088576170</Link>
            </p>
            <p className=" text-white flex items-center gap-1">
              <IoMailSharp className="text-primary" />{" "}
              <Link href="mailTo:info@rebootai.in">info@rebootai.in</Link>
            </p>
          </div>
          <div className="flex flex-col gap-1 lg:w-[20%] xlg:w-[20%]">
            <h2 className="xlg:text-lg lg:text-base text-lg font-bold text-justify text-white flex items-center gap-1">
              <span>Our Reg. Offices</span>
              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
            </h2>
            <p className="xlg:text-base lg:text-sm text-base text-white flex gap-1">
              <HiLocationMarker className="text-primary w-[2rem] text-xl" />
              <div>
                4th Floor, Shib Shankar Market, Bidhan Road Siliguri, West
                Bengal, IN 734001
              </div>
            </p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
        <div className="flex justify-between gap-8 lg:gap-20 flex-col lg:flex-row">
          <div className="min-h-20 xl:min-h-32 w-full lg:w-[17.65vw] relative">
            <Image
              src="/icons/msme.png"
              alt="msme"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-between gap-2 xlg:gap-0">
            <button
              type="button"
              className="text-sm xl:text-base font-bold text-white px-4 xl:px-10 py-3 bg-primary inline-flex items-center gap-2 rounded-lg"
            >
              <HiOutlineCurrencyRupee /> <span>Pay Online</span>
            </button>
            <button
              type="button"
              className="text-sm xl:text-base font-bold text-white px-4 xl:px-10 py-3 bg-primary inline-flex items-center gap-2 rounded-lg"
            >
              <BsChatQuote /> <span>Ge A Quote</span>
            </button>
          </div>
          <div className="min-h-20 xlg:min-h-28 w-full lg:w-48 xlg:w-64 relative bg-white rounded-lg">
            <Image
              src="/icons/google-partner.png"
              alt="google"
              fill
              className="object-contain"
            />
          </div>
          <div className="min-h-20 xlg:min-h-28 w-full lg:w-48 xlg:w-64 relative bg-white rounded-lg">
            <Image
              src="/icons/meta-business-partner-logo.webp"
              alt="meta"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
        <div className="flex items-center lg:items-stretch flex-col gap-4 lg:flex-row justify-between">
          <h1 className="text-white text-xs">
            &copy;{" "}
            <span className="font-bold">Reboot Marketing Private Limited.</span>{" "}
            All Rights Reserved
          </h1>
          <h1 className="text-white text-xs">
            Terms and Conditions | Refund Policy | Privacy Policy
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
