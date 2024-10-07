import React from "react";
import SubPageBanner from "./SubPageBanner";
import ServiceAndproductPage1stpart from "./ServiceAndproductPage1stpart";
import ServiceAndProductPageTechnologySection from "./ServiceAndProductPageTechnologySection";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Slider from "react-slick/lib/slider";

const ServicePageDesign = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,

    centerMode: false,
    arrows: false,
  };
  const content = {
    serviceimg: "/images/serviceimg.png",
    servicename: " Web Development",
    servicedesc1:
      "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
    servicedesc2:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
  };

  const packages = [
    {
      heading: "Basic Web Designing Package",
      details: [
        "Website Design",
        "SEO Friendly",
        "Mobile and Desktop Responsive",
        "1 Design art reversion",
        "Up to 3-5 Pages Content",
        "1-Month Free Support/Maintenance.",
        "₹ 22,000 INR",
      ],
    },
    {
      heading: "Basic Web Designing Package",
      details: [
        "Website Design",
        "SEO Friendly",
        "Mobile and Desktop Responsive",
        "1 Design art reversion",
        "Up to 3-5 Pages Content",
        "1-Month Free Support/Maintenance.",
        "₹ 22,000 INR",
      ],
    },
    {
      heading: "Basic Web Designing Package",
      details: [
        "Website Design",
        "SEO Friendly",
        "Mobile and Desktop Responsive",
        "1 Design art reversion",
        "Up to 3-5 Pages Content",
        "1-Month Free Support/Maintenance.",
        "₹ 22,000 INR",
      ],
    },
  ];
  const pagedesigns = ["/images/pagedesign.png", "/images/pagedesign.png"];
  return (
    <section>
      <SubPageBanner heading={"Service"} subheading={"web Development"} />
      <ServiceAndproductPage1stpart content={content} />
      <ServiceAndProductPageTechnologySection />

      <section className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8 ">
        <section className="flex flex-row gap-8">
          <section className="w-[50%] flex flex-col sm:gap-4 lg:gap-10">
            <h1 className="lg:text-3xl sm:text-xl font-semibold text-[#333333]">
              How <span className="text-primary">Do </span>
              <span className="lg:text-5xl sm:text-3xl">
                We <span className="text-primary">Work</span>
              </span>
            </h1>
            <section className="flex flex-col sm:gap-4 lg:gap-6 xlg:gap-12">
              <section className="flex flex-row items-center gap-4">
                <div className="border-2 w-[40%] border-primary bg-[#4385F51A] border-dashed rounded-md px-8 xl:h-[4rem] sm:h-[2.5rem] lg:h-[3rem] flex justify-center items-center text-primary sm:text-sm lg:text-base xlg:text-xl font-semibold">
                  Start
                </div>
                <div className="text-primary w-[15%] sm:text-sm lg:text-base xlg:text-xl">
                  - - - -&#x203A;
                </div>
                <div className="border-2 w-[50%] border-primary bg-[#4385F51A] border-dashed rounded-md lg:px-8 sm:h-[2.5rem] xl:h-[4rem] lg:h-[3rem] flex justify-center items-center text-primary sm:text-sm lg:text-base xlg:text-xl font-semibold">
                  Step 1 : Analysis
                </div>
              </section>
              <div className="flex flex-row relative items-center gap-4">
                <div className=" absolute inset-0 top-4 left-2">
                  <img
                    src="/icons/downarrow.svg"
                    alt=""
                    className="lg:h-[2.5rem] xl:h-[3rem] sm:h-[2rem]"
                  />
                </div>
                <div className="border-2 w-[60%] sm:ml-10 lg:ml-16 border-primary bg-[#4385F51A] border-dashed rounded-md px-8 sm:h-[2.5rem] xl:h-[4rem] lg:h-[3rem] flex justify-center items-center text-primary sm:text-sm lg:text-base xlg:text-xl font-semibold">
                  Step 2 : Ideation
                </div>
                <div className="absolute inset-0 -top-4 left-[75%] ">
                  <img
                    src="/icons/leftarrow.svg"
                    alt=""
                    className="lg:h-[2.5rem] xl:h-[3rem] sm:h-[2rem]"
                  />
                </div>
              </div>
              <div className="">
                <div className="border-2 w-full border-primary bg-[#4385F51A] border-dashed rounded-md px-8 sm:h-[2.5rem] xl:h-[4rem] lg:h-[3rem] flex justify-center items-center text-primary sm:text-sm lg:text-base xlg:text-xl font-semibold">
                  Step 3 : Designing & Development
                </div>
              </div>
              <div className="flex flex-row relative items-center gap-4">
                <div className="border-2 w-[70%]  border-primary bg-[#4385F51A] border-dashed rounded-md px-8 sm:h-[2.5rem] xl:h-[4rem] lg:h-[3rem] flex justify-center items-center text-primary sm:text-sm lg:text-base xlg:text-xl font-semibold">
                  Final Delivery Step
                </div>
                <div className="absolute inset-0 -top-2 left-[75%] ">
                  <img
                    src="/icons/leftarrow.svg"
                    alt=""
                    className="lg:h-[2.5rem] xl:h-[3rem] sm:h-[2rem]"
                  />
                </div>
              </div>
            </section>
          </section>
          <div className="w-[50%]">
            <Image
              src={"/images/workimg.png"}
              alt="work"
              width={512}
              height={392}
              className="w-full rounded-lg"
            />
          </div>
        </section>
        <section className="flex flex-row xs:gap-4 lg:gap-4 xl:gap-8">
          <section className="w-[50%] flex flex-col xs:gap-4 xlg:gap-8">
            <h1 className="xlg:text-3xl lg:text-lg xs:text-xl font-semibold text-[#333333]">
              See Our
              <span className="xlg:text-5xl lg:text-2xl xs:text-3xl ml-2 text-primary">
                Package Pricing
              </span>
            </h1>
            <div className="flex flex-col xs:gap-2 lg:gap-6 xl:gap-10">
              {packages.map((item, index) => (
                <div key={index} className="flex flex-col lg:gap-3 xl:gap-8">
                  <h1 className="xlg:text-3xl xs:text-xl  font-semibold text-[#333333]">
                    {item.heading}
                  </h1>
                  <section className="flex flex-col gap-2">
                    {item.details.map((item, index) => (
                      <p
                        className="xlg:text-xl lg:text-sm font-medium flex items-center gap-2 text-[#666666]"
                        key={index}
                      >
                        <span className="text-2xl/[0px]"> &#x2022;</span> {item}
                      </p>
                    ))}
                  </section>
                  <section className="flex items-center xs:gap-2 lg:gap-4 text-white xs:text-sm md:text-sm lg:text-lg font-medium">
                    <Link
                      href={""}
                      className="xs:h-[2rem] lg:h-[2.5rem] xs:px-2 lg:px-4 flex justify-center items-center bg-[#25D366] rounded-md"
                    >
                      <IoLogoWhatsapp />
                    </Link>
                    <Link
                      href={""}
                      className=" xs:h-[2rem] lg:h-[2.5rem] xs:px-2 lg:px-4 flex justify-center items-center bg-[#FFB800] rounded-md"
                    >
                      <MdEmail />
                    </Link>
                    <button className=" xs:h-[2rem] lg:h-[2.5rem] xs:px-2 lg:px-4 flex justify-center items-center gap-2 bg-[#4385F5] rounded-md">
                      <img src="/icons/quote.svg" alt=" get a quote icon" />
                      Get A Quote
                    </button>
                    <button className=" xs:h-[2rem] lg:h-[2.5rem] xs:px-2 lg:px-4 flex justify-center items-center gap-2 bg-[#4385F5] rounded-md">
                      <img src="/icons/booknow.svg" alt="book now icon" />
                      Book Now
                    </button>
                  </section>
                </div>
              ))}
            </div>
          </section>
          <section className="w-[50%] flex flex-col gap-4">
            <div>
              <Image
                src={"/images/workimg.png"}
                alt="work"
                width={512}
                height={392}
                className="w-full rounded-lg"
              />
            </div>
            <section className="flex flex-col gap-1">
              <section className="flex flex-col gap-1">
                <h3 className="text-xl font-medium text-[#333333]">Lets See</h3>
                <h1 className="text-3xl font-semibold text-primary">
                  Some of Our Previous Designing
                </h1>
              </section>
              <div className="w-full">
                <Slider {...settings}>
                  {pagedesigns.map((item, index) => (
                    <section
                      className="!flex justify-center items-center"
                      key={index}
                    >
                      <Image
                        src={item}
                        alt="page design"
                        height={512}
                        width={567}
                        className="w-[90%] rounded-lg"
                      />
                    </section>
                  ))}
                </Slider>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ServicePageDesign;
