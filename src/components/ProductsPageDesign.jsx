import React, { useEffect, useState } from "react";
import SubPageBanner from "./SubPageBanner";
import ServiceAndproductPage1stpart from "./ServiceAndproductPage1stpart";
import ServiceAndProductPageTechnologySection from "./ServiceAndProductPageTechnologySection";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
import Image from "next/image";
// import Slider from "react-slick/lib/slider";
import ProductReviews from "./ProductReviews";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const ProductsPageDesign = () => {
  const content = {
    serviceimg: "/images/serviceimg.webp",
    servicename: " Web Development",
    servicedesc1:
      "Today visual content is gaining importance as it creates your brands image in the audiences mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
    servicedesc2:
      "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
  };

  const productfeatures = [
    "Dynamic Dashboard",
    "Appointment Scheduling",
    "Billing and Invoicing",
    "Patient Management",
    "Reporting and Analytics",
    "Manage Multiple Clinics",
    "Prescription Management",
    "WA Automation",
  ];

  const perfects = [
    "If You Have a Clinic",
    "If You Are a Doctor",
    "If You Are a Doctor",
    "If You Are a Doctor",
    "If You Are a Doctor",
    "If You Are a Doctor",
    "If You Are a Doctor",
  ];

  const othersoftware = [
    { imgsrc: "/images/kivihealth.png" },
    { imgsrc: "/images/bajajhealth.png" },
    { imgsrc: "/images/kivihealth.png" },
    { imgsrc: "/images/bajajhealth.png" },
    { imgsrc: "/images/kivihealth.png" },
  ];

  const [slidesToShow, setSlidesToShow] = useState(5);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setSlidesToShow(2);
        setScroll(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
        setScroll(true);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(4);
        setScroll(true);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(5);
        setScroll(false);
      } else {
        setSlidesToShow(6);
        setScroll(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: scroll,
    speed: 6000,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div>
      <SubPageBanner
        heading={"Products"}
        subheading={"Educational Consultant CRM"}
      />
      <ServiceAndproductPage1stpart content={content} />
      <ServiceAndProductPageTechnologySection />
      <section className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <section className="flex flex-col md:flex-row gap-8">
          <section className="lg:w-[50%] md:w-[40%] xs:w-full flex flex-col xl:gap-10 gap-4">
            <section className="flex flex-col gap-1">
              <h3 className="xlg:text-2xl text-xl font-medium text-[#333333]">
                Lets See
              </h3>
              <h1 className="xl:text-4xl xlg:text-3xl text-2xl font-semibold text-primary">
                Product Features
              </h1>
            </section>
            <section className="flex flex-col gap-2">
              {productfeatures.map((item, index) => (
                <p
                  className="xlg:text-xl lg:text-sm font-medium flex items-center gap-2 text-[#666666]"
                  key={index}
                >
                  <span className="text-2xl/[0px]"> &#x2022;</span> {item}
                </p>
              ))}
            </section>
            <section className="flex flex-row gap-4 text-white text-lg">
              <button className=" xs:h-[3rem] lg:h-[2.5rem] xs:px-4 lg:px-8 flex justify-center items-center gap-2 bg-[#4385F5] rounded-md">
                <Image
                  width={22}
                  height={22}
                  src="/icons/booknow.svg"
                  alt="book now icon"
                />
                Book A Free Demo
              </button>
              <Link
                href={""}
                className="xs:h-[3rem] lg:h-[2.5rem] xs:px-4 lg:px-4 flex justify-center items-center bg-[#25D366] rounded-md"
              >
                <IoLogoWhatsapp />
              </Link>
            </section>
          </section>
          <section className="flex flex-col gap-4 w-full md:w-[60%] lg:w-[50%]">
            <section className="flex flex-col gap-1">
              <h3 className="xlg:text-2xl text-xl font-medium text-[#333333]">
                Lets See
              </h3>
              <h1 className="xl:text-4xl xlg:text-3xl text-2xl font-semibold text-primary">
                Product Features
              </h1>
            </section>
            <Image
              src={"/images/productfeatureimg.png"}
              alt="work"
              width={512}
              height={295}
              className="w-full rounded-lg"
            />
          </section>
        </section>
        <section className="flex flex-col md:flex-row gap-8">
          <section className="md:w-[30%] w-full flex flex-col gap-6">
            <section className="flex flex-col gap-2">
              <h1 className="xlg:text-2xl text-xl font-semibold text-[#333333]">
                Why it&#x27;s perfect
              </h1>
              <h1 className="xl:text-4xl xlg:text-3xl text-2xl font-semibold text-primary ">
                for you and your Business
              </h1>
            </section>
            <section className="flex flex-col gap-2">
              {perfects.map((item, index) => (
                <p
                  className="xlg:text-lg lg:text-sm font-medium flex items-center gap-2 text-[#666666]"
                  key={index}
                >
                  <span className="text-2xl/[0px]"> &#x2022;</span> {item}
                </p>
              ))}
            </section>
          </section>
          <section className="md:w-[70%] w-full flex flex-col gap-10">
            <section className="flex flex-col gap-2">
              <h1 className="xl:text-4xl xlg:text-3xl text-2xl font-semibold text-primary">
                Using some other EMR software? <br /> No problem!
              </h1>
              <p className="xlg:text-xl text-sm md:text-lg text-[#333333] font-medium">
                With Reboot AI, seamlessly transfer all your patient data from
                other EMRs as well as integrate your clinic and get lab support.
              </p>
            </section>
            <section className="w-full">
              <Slider {...settings}>
                {othersoftware.map((item, index) => (
                  <section
                    key={index}
                    className="!flex justify-center items-center "
                  >
                    <section className="xlg:w-[10rem] xlg:h-[10rem] w-[8rem] h-[8rem] flex justify-center items-center rounded-full border-2 border-dashed border-primary">
                      <Image
                        src={item.imgsrc}
                        alt="Other Software Image"
                        width={1062}
                        height={512}
                        className="xlg:h-[4rem] xlg:w-[8rem] h-[3rem] w-[6rem]"
                      />
                    </section>
                  </section>
                ))}
              </Slider>
            </section>
          </section>
        </section>
      </section>
      <section className="xl:p-16 lg:p-8 sm:p-4 bg-[#4385F50D]">
        <section className="flex flex-col-reverse md:flex-row gap-3 lg:gap-6">
          <section className="lg:w-[60%] md:w-[50%] w-full flex flex-col gap-2 xl:gap-8">
            <section className="flex flex-col lg:gap-1 xl:gap-4 text-2xl xlg:text-4xl font-semibold">
              <h1 className="text-[#333333]">If you have</h1>
              <h1 className="text-primary">Still have some doubts?</h1>
            </section>
            <p className="xl:text-lg/[32px] text-xs/[20px] lg:text-base/[26px]">
              Lorem ipsum dolor sit amet consectetur. Porttitor leo quis mauris
              tincidunt habitasse fames fringilla convallis sed. Vulputate
              euismod dolor ut non adipiscing dui. Ante nisl sit non nulla.
              Malesuada semper aenean scelerisque venenatis adipiscing enim.
              Lorem ipsum dolor sit amet consectetur. Porttitor leo quis mauris
              tincidunt habitasse fames fringilla convallis sed. Vulputate
              euismod dolor ut non adipiscing dui. Ante nisl sit non nulla.
              Malesuada semper aenean scelerisque venenatis adipiscing enim.
            </p>
            <button className=" h-[2.5rem] md:h-[2.5rem] lg:h-[2.5rem] w-fit text-white xs:px-4 lg:px-8 flex justify-center items-center gap-2 bg-[#4385F5] rounded-md">
              <Image
                width={22}
                height={22}
                src="/icons/booknow.svg"
                alt="book now icon"
              />
              Book A Free Demo
            </button>
          </section>
          <section className="lg:w-[40%] md:w-[50%] w-full flex justify-end items-end">
            <Image
              src={"/images/bookdemo.png"}
              alt="book demo"
              width={512}
              height={384}
              className="w-full"
            />
          </section>
        </section>
      </section>
      <ProductReviews />
    </div>
  );
};

export default ProductsPageDesign;
