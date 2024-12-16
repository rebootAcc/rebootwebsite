import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { MdStarRate } from "react-icons/md";
// import Slider from "react-slick/lib/slider";

const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const ProductReviews = ({ productreviews }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
    <section className="">
      <section className="w-full">
        <Slider {...settings}>
          {productreviews.map((item, index) => (
            <section
              key={index}
              className="!flex flex-col md:flex-row gap-4 lg:gap-6 p-2 md:p-4 lg:p-8"
            >
              <section className=" w-full p-4 lg:p-6 rounded-lg text-white bg-primary flex flex-col gap-3 lg:gap-6">
                <section className="flex flex-row gap-4 lg:gap-8">
                  <section className="xl:w-[15%] xlg:w-[20%] flex gap-1 items-center">
                    <Image
                      width={46}
                      height={82}
                      src="/icons/koma.svg"
                      alt="koma"
                      className="w-full xlg:h-[4rem] lg:h-[3rem] h-[2rem]"
                    />
                    <Image
                      width={46}
                      height={82}
                      src="/icons/koma.svg"
                      alt="koma"
                      className="w-full xlg:h-[4rem] lg:h-[3rem] h-[2rem]"
                    />
                  </section>
                  <section className="flex  w-[90%] flex-col xlg:gap-1">
                    <h1 className="xl:text-xl xlg:text-lg lg:text-base text-base font-semibold">
                      {item.name}
                    </h1>
                    <h1 className="xl:text-xl xlg:text-lg lg:text-base text-base font-semibold">
                      {item.heading}
                    </h1>
                    <div className="text-[#FFB800] text-2xl lg:text-xl xlg:text-2xl flex gap-1">
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                    </div>
                  </section>
                </section>
                <p
                  className="xlg:text-base/[22px] lg:text-xs/[18px] text-xs/[20px] md:text-xs/[18px] h-full md:h-[12rem] lg:h-[8rem] xlg:h-[10rem]"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></p>
              </section>
            </section>
          ))}
        </Slider>
      </section>
    </section>
  );
};

export default ProductReviews;
