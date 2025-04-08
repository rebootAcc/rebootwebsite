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
import { FaRegWindowClose } from "react-icons/fa";
import EnquiryPopup from "./EnquiryPopup";

const ProductsPageDesign = ({
  title,
  content,
  productfeatures,
  perfects,
  othersoftware,
  benifits,
  doubtsimg,
  doubtstext,
  othersoftwareheading,
  othersoftweretext,
  productreviews,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const openModal = (componentName) => {
    setSelectedComponent(componentName);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <SubPageBanner heading={"Products"} headinglink={""} subheading={title} />
      <ServiceAndproductPage1stpart content={content} />
      <ServiceAndProductPageTechnologySection benifits={benifits} />
      <section className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
        <section className="flex flex-col md:flex-row gap-8">
          <section className="lg:w-[30%] md:w-[40%] xs:w-full flex flex-col xl:gap-10 gap-4">
            <section className="flex flex-col gap-1">
              <h3 className="xlg:text-xl lg:text-xl text-lg font-medium text-[#333333]">
                Let&#x27;s See Our
              </h3>
              <h1 className="xl:text-3xl xlg:text-3xl lg:text-2xl text-xl font-semibold text-primary">
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
              <button
                onClick={() => openModal("EnquiryBoxComponent")}
                className=" xs:h-[3rem] lg:h-[2.5rem] xs:px-4 lg:px-8 flex justify-center items-center gap-2 bg-[#4385F5] rounded-md"
              >
                <Image
                  width={22}
                  height={22}
                  src="/icons/booknow.svg"
                  alt="book now icon"
                />
                Book A Free Demo
              </button>
              <Link
                href={"https://api.whatsapp.com/send?phone=919088576170"}
                className="xs:h-[3rem] lg:h-[2.5rem] xs:px-4 lg:px-4 flex justify-center items-center bg-[#25D366] rounded-md"
              >
                <IoLogoWhatsapp />
              </Link>
            </section>
          </section>
          <section className="flex flex-col gap-4 w-full md:w-[60%] lg:w-[70%]">
            <section className="flex flex-col gap-1">
              <h3 className="xlg:text-xl lg:text-xl text-lg font-medium text-[#333333]">
                Let&#x27;s See
              </h3>
              <h1 className="xl:text-3xl xlg:text-3xl lg:text-2xl text-xl font-semibold text-primary">
                Client&#x27;s Feedback Who are using this!
              </h1>
            </section>
            <ProductReviews productreviews={productreviews} />
          </section>
        </section>
        <section className="flex flex-col md:flex-row gap-8">
          <section className="md:w-[40%] lg:w-[30%] w-full flex flex-col gap-6">
            <section className="flex flex-col gap-2">
              <h1 className="xlg:text-xl lg:text-xl text-lg font-semibold text-[#333333]">
                Why it&#x27;s perfect
              </h1>
              <h1 className="xl:text-3xl xlg:text-3xl lg:text-2xl text-xl font-semibold text-primary ">
                for you and your Business
              </h1>
            </section>
            <section className="flex flex-col gap-2">
              {perfects.map((item, index) => (
                <p
                  className="xlg:text-lg md:text-sm text-base font-medium flex items-center gap-2 text-[#666666]"
                  key={index}
                >
                  <span className="text-2xl/[0px]"> &#x2022;</span> {item}
                </p>
              ))}
            </section>
          </section>
          <section className="md:w-[60%] lg:w-[70%] w-full flex flex-col gap-10">
            <section className="flex flex-col gap-2">
              <h1 className="xl:text-4xl xlg:text-3xl lg:text-2xl md:text-xl text-xl font-semibold text-primary">
                {othersoftwareheading} No problem!
              </h1>
              <p className="xlg:text-xl text-sm md:text-base lg:text-lg text-[#333333] font-medium">
                {othersoftweretext}
              </p>
            </section>
            <section className="w-full flex flex-row justify-evenly">
              {othersoftware.map((item, index) => (
                <section
                  key={index}
                  className="!flex justify-center items-center "
                >
                  <section className="xlg:w-[8rem] xlg:h-[8rem] md:w-[7rem] md:h-[7rem] w-[6rem] h-[6rem] flex justify-center items-center rounded-full border-2 border-dashed border-primary">
                    <Image
                      src={item.imgsrc}
                      alt="Other Software Image"
                      width={512}
                      height={512}
                      className=""
                    />
                  </section>
                </section>
              ))}
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
              {doubtstext}
            </p>
            <button
              onClick={() => openModal("EnquiryBoxComponent")}
              className=" h-[2.5rem] md:h-[2.5rem] lg:h-[2.5rem] w-fit text-white xs:px-4 lg:px-8 flex justify-center items-center gap-2 bg-[#4385F5] rounded-md"
            >
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
              src={doubtsimg}
              alt="book demo"
              width={512}
              height={384}
              className="w-full"
            />
          </section>
        </section>
      </section>
      {modalOpen && (
        <div className="fixed top-0 z-[1300] left-0 w-full h-full flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50">
          <div className=" w-full sm:h-[50vh] lg:h-[100vh] justify-center items-center flex flex-col  rounded-lg">
            <div className="w-full flex p-4 justify-end items-center">
              <button
                className="bg-primary text-white lg:w-16 absolute z-[1400] top-14 lg:h-10 sm:w-12 sm:h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-primary border-2 border-primary"
                onClick={closeModal}
              >
                <FaRegWindowClose className="lg:text-2xl sm:text-xl" />
              </button>
            </div>
            <div className=" w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] z-[1300]">
              {selectedComponent === "EnquiryBoxComponent" && <EnquiryPopup />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPageDesign;
