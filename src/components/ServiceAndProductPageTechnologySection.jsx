import Image from "next/image";
import React from "react";

const ServiceAndProductPageTechnologySection = ({ benifits }) => {
  // const benifits = [
  //   { name: "Expert Team Member", imgsrc: "/icons/expertteam.svg" },
  //   { name: "Eye-Catching Design", imgsrc: "/icons/eyecatchingdesign.svg" },
  //   { name: "Custom Design", imgsrc: "/icons/customedesign.svg" },
  //   { name: "Live Support", imgsrc: "/icons/livesupport.svg" },
  // ];

  const fixedImgSrcs = [
    "/icons/expertteam.svg",
    "/icons/eyecatchingdesign.svg",
    "/icons/customedesign.svg",
    "/icons/livesupport.svg",
  ];

  const technology = [
    { imgsrc: "/images/fogma-logo.webp", imgalt: "figma" },
    { imgsrc: "/images/nodejs-logo.webp", imgalt: "nodejs" },
    { imgsrc: "/images/react-logo.webp", imgalt: "react-js" },
    { imgsrc: "/images/tailwindcss-logo.webp", imgalt: "tailwindcss" },
    { imgsrc: "/images/css-logo.webp", imgalt: "css" },
    { imgsrc: "/images/mongodb-logo.webp", imgalt: "mongodb" },
    { imgsrc: "/images/google-cloud-logo.webp", imgalt: "google" },
    { imgsrc: "/images/python-logo.webp", imgalt: "python" },
  ];
  return (
    <section className="bg-[#4385F50D] xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-6">
      <section className="flex xs:flex-col md:flex-row gap-6 justify-between ">
        <section className="xlg:w-[55%] md:w-[60%] xs:w-full flex flex-col gap-4">
          <section className="flex flex-col gap-1">
            <h1 className="xlg:text-2xl text-xl font-semibold text-[#333333]">
              We Are
              <span className="text-primary">Using</span>
            </h1>
            <h1 className="text-[#333333] text-2xl xlg:text-4xl font-semibold">
              Latest Technology <br />
              <span className="text-primary">Tools in Your Website</span>
            </h1>
            <h4 className="text-[#666666]">
              Tools to website design that are visually appealing to your
              audience
            </h4>
          </section>
          <section className="grid sm:grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-2 lg:gap-x-4">
            {technology.map((item, index) => (
              <section
                key={index}
                className=" !flex items-center justify-center"
              >
                <section className="w-full p-2 xs:h-[4.5rem] lg:h-[6rem] xlg:h-[7rem] xs:rounded-md md:rounded-lg flex justify-center items-center boxsh">
                  <Image
                    src={item.imgsrc}
                    alt={item.imgalt}
                    width={244}
                    height={20}
                    className="w-fit xs:h-[4rem] sm:h-[3.5rem] lg:h-[4rem] xlg:h-[5rem]"
                  />
                </section>
              </section>
            ))}
          </section>
        </section>
        <section className="xlg:w-[40%] md:w-[40%] xs:w-full flex flex-col gap-8">
          <section className="flex flex-col gap-1">
            <h1 className="xlg:text-2xl text-xl font-semibold text-primary">
              Let’ See
            </h1>
            <h1 className="xlg:text-4xl text-2xl font-semibold text-[#333333] ">
              How Will You <span className="text-primary">Benefit?</span>
            </h1>
          </section>
          <section className="flex flex-col gap-6 ">
            {benifits.map((name, index) => (
              <section key={index} className="flex items-center gap-2 ">
                <i>
                  <Image
                    src={fixedImgSrcs[index]}
                    alt={name}
                    width={244}
                    height={200}
                    className="w-full md:h-[2rem] lg:h-[2rem] xlg:h-[3rem]"
                  />
                </i>
                <h1 className="xlg:text-3xl lg:text-2xl text-xl font-medium text-[#333333]">
                  {name}
                </h1>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default ServiceAndProductPageTechnologySection;
