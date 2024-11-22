import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { MdOutlineStarBorder, MdStarRate } from "react-icons/md";
// import Slider from "react-slick/lib/slider";

const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const ClientReview = ({ slidesToShowReview }) => {
  const reviews = [
    {
      title: " Reliable, Supportive & Experienced",
      text: "Choosing the right Digital Marketing Agency is very hectic today, one of our marketing staff recommended Reboot AI & we really found this company helpful. We are connected with Reboot since 3 years & from Developing Clinic Management Apps to performance marketing -they did really well. I would recommend on the basis of ROI we received, unconditional support & affordability.",
      name: "Dr. Saikat Paul",
      designation: "Founder ( Dentity Dental )",
    },
    {
      title: " Reliable, Supportive & Experienced",
      text: "We are working with Reboot since 2 years & they are very supportive. Specially these days where everyone is missguiding they provide accurate information & right direction which is very crucial in our industry. We have developed Our College Student App from Reboot & from ideas to designing to development they always guided us & delivered best. Most valueable agency for us till date.",
      name: "Most Trusted, ROI oriented - Rana Deb ",
      designation: "( Chairman, MIET College )",
    },
  ];

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShowReview,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,

    centerMode: false,
    arrows: false,
  };
  return (
    <section className="">
      <div className="flex flex-col gap-2 xlg:gap-4 flex-1">
        <h2 className="text-[#333] text-lg xlg:text-xl font-semibold">
          Discover Why Our Clients Keep Coming Back!
        </h2>
        <h1 className="text-primary text-2xl xlg:text-4xl font-semibold">
          Real Stories, Real Success!
        </h1>
        <section className="w-full">
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <div key={index} className="lg:p-4 p-2">
                <div className="!flex flex-col gap-3 xlg:p-8 lg:p-6 p-4  bg-[rgba(67,_133,_245,_0.05)] rounded-md lg:rounded-xl">
                  <h1 className="text-[#333] text-xl font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-base text-secondary max-w-[77ch]">
                    {item.text}
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <h4 className="font-medium text-base text-primary">
                      ---- {item.name}
                    </h4>
                    <h2 className="text-base text-[#333333] font-medium">
                      | {item.designation}
                    </h2>
                  </div>
                  <div>
                    <div className="text-[#FFB800] text-2xl flex gap-1">
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdOutlineStarBorder />
                      <span className="text-base text-[#777] ps-1">
                        &#40;4.3&#41; 512 Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </section>
  );
};

export default ClientReview;
