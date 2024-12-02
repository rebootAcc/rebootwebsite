import dynamic from "next/dynamic";
import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMailSharp } from "react-icons/io5";

const BlogDetailsPageEnquiry = dynamic(
  () => import("@/components/BlogDetailsPageEnquiry"),
  {
    ssr: false,
  }
);

const ContactUs = () => {
  const contactinfo = [
    {
      heading: "Call With Us",
      details: [
        { icon: <FaPhoneVolume />, detail: "03534 069362" },
        { icon: <FaPhoneVolume />, detail: "+91 90885 76170" },
        { icon: <FaPhoneVolume />, detail: "+91 70440 76603" },
      ],
    },
    {
      heading: "WhatsApp With Us",
      details: [
        { icon: <IoLogoWhatsapp />, detail: "+91 90885 76170" },
        { icon: <IoLogoWhatsapp />, detail: "+91 70440 76603" },
      ],
    },
    {
      heading: "Email With Us",
      details: [
        { icon: <IoMailSharp />, detail: "rebootaiofficial@gmail.com" },
        { icon: <IoMailSharp />, detail: "info@rebootai.in" },
        { icon: <IoMailSharp />, detail: "sales@rebootai.in" },
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>Contact Us today! Building your brand now</title>
        <meta
          name="description"
          content="Contact us to building your dream brand globally."
        />
      </Head>
      <main>
        <SubPageBanner heading={"Contact Us"} headinglink={"/contact-us"} />
        <section className="xl:p-16 lg:p-8 p-4 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-primary">Get In Touch!</h1>
            <p className="text-secondary xl:font-medium lg:text-lg text-base xlg:text-xl">
              Contact us to building your dream Brand globally.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-primary flex items-center gap-7">
              Contact Information
              <span className="flex flex-1 h-0.5 bg-[#aaa]"></span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactinfo.map((item, index) => (
                <div
                  className="p-6 relative flex flex-col gap-4 h-full w-full justify-center items-center rounded-md boxsh"
                  key={index}
                >
                  <div className=" absolute inset-0 left-[75%] top-7">
                    <img
                      src={"/icons/contactbgicon.svg"}
                      alt="contact us"
                      className="h-[4rem]"
                    />
                  </div>
                  <div className=" absolute inset-0 top-[5rem]">
                    <img
                      src={"/icons/contactbgicon.svg"}
                      alt="contact us"
                      className="h-[7rem]"
                    />
                  </div>
                  <h1 className="text-xl font-medium text-[#333333]">
                    {item.heading}
                  </h1>
                  <div className="flex flex-col gap-2 items-start">
                    {item.details.map((item, index) => (
                      <div
                        className="flex flex-row text-lg items-center gap-2"
                        key={index}
                      >
                        <span className="text-[#0061FF] text-xl">
                          {item.icon}
                        </span>{" "}
                        <span className="text-[#777777]">{item.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-[50%] w-full">
              <BlogDetailsPageEnquiry
                firstlinecss={
                  " xl:p-16 lg:p-8 p-4 flex flex-col gap-4 rounded-xl bg-[#4385F50D]"
                }
              />
            </div>
            <div className="md:w-[50%] w-full flex flex-col gap-6">
              <div className="p-6 xl:py-12 relative flex flex-col gap-4 h-fit w-full  rounded-md boxsh">
                <div className=" absolute inset-0 left-[75%] top-7">
                  <img
                    src={"/icons/contactbgicon.svg"}
                    alt="contact us"
                    className="h-[4rem]"
                  />
                </div>
                <div className=" absolute inset-0 top-[5rem]">
                  <img
                    src={"/icons/contactbgicon.svg"}
                    alt="contact us"
                    className="h-[4rem]"
                  />
                </div>
                <h1 className="text-2xl font-medium text-[#333333]">
                  Our Registered Address
                </h1>
                <div className="flex  gap-2 text-[#777777] text-lg">
                  <div className="text-[#0061FF] text-xl">
                    <FaLocationDot />
                  </div>
                  4th Floor, Shiv Shankar Market, Bidhan Road, Siliguri, WB
                  734001 India
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3563.922680103641!2d88.42603299999999!3d26.714917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQyJzUzLjciTiA4OMKwMjUnMzMuNyJF!5e0!3m2!1sen!2sin!4v1732366164969!5m2!1sen!2sin"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full h-[15rem] md:h-[20rem] lg:h-[22rem] xl:h-[25rem]"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
