import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Dynamically import Slider with SSR off
const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const AwardAndRecognitions = () => {
  // const [slidesToShow, setSlidesToShow] = useState(3);
  // const [autoslide, setAutoslide] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth <= 340) {
  //       setSlidesToShow(3);
  //       setAutoslide(false);
  //     } else if (window.innerWidth <= 560) {
  //       setSlidesToShow(3);
  //       setAutoslide(false);
  //     } else if (window.innerWidth <= 860) {
  //       setSlidesToShow(3);
  //       setAutoslide(false);
  //     } else if (window.innerWidth <= 1024) {
  //       setSlidesToShow(3);
  //       setAutoslide(false);
  //     } else if (window.innerWidth <= 1780) {
  //       setSlidesToShow(3);
  //       setAutoslide(false);
  //     } else {
  //       setSlidesToShow(3);
  //       setAutoslide(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const settings = {
  //   infinite: true,
  //   slidesToShow: slidesToShow,
  //   slidesToScroll: 1,
  //   autoplay: autoslide,
  //   speed: 1000,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  // };

  const awardsLogo = [
    "/icons/google-partner-logo.webp",
    "/icons/meta-business-partner-logo.webp",
    "/icons/makeinindia.webp",
  ];

  return (
    <section className="flex md:flex-row flex-col xl:gap-8 lg:gap-6 gap-4 justify-evenly items-center xl:p-16 lg:p-8 p-4">
      <h1 className="text-[#333]  w-full md:w-[15%] font-semibold md:text-lg text-sm lg:text-2xl xlg:text-3xl xl:text-4xl">
        Awards &amp; Recognitions
      </h1>

      <div className="md:w-[85%] w-full flex flex-row gap-2">
        {awardsLogo.map((src, index) => (
          <div
            className="bg-white flex w-full justify-center items-center xl:p-4 "
            key={index}
          >
            <div className="flex justify-center items-center w-full shadow-[0_0_10px_2px_rgba(0,_0,_0,_0.12)] rounded">
              <Image
                src={src}
                alt="partner logo"
                width={272}
                height={102}
                priority
                className="rounded md:h-[5rem] h-[3rem] sm:h-[4rem] lg:h-[6rem] xlg:h-[8rem] w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardAndRecognitions;
