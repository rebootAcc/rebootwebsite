import Image from "next/image";
import React from "react";

const ServiceAndProductPageTechnologySection = () => {
  const benifits = [
    { name: "Expert Team Member", imgsrc: "/icons/expertteam.svg" },
    { name: "Eye-Catching Design", imgsrc: "/icons/eyecatchingdesign.svg" },
    { name: "Custom Design", imgsrc: "/icons/customedesign.svg" },
    { name: "Live Support", imgsrc: "/icons/livesupport.svg" },
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
      <section className="flex flex-row gap-6 justify-between ">
        <section className="w-[55%] flex flex-col gap-4">
          <section className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold text-[#333333]">
              We Are
              <span className="text-primary">Using</span>
            </h1>
            <h1 className="text-[#333333] text-4xl font-semibold">
              Latest Technology <br />
              <span className="text-primary">Tools in Your Website</span>
            </h1>
            <h4 className="text-[#666666]">
              Tools to website design that are visually appealing to your
              audience
            </h4>
          </section>
          <section className="grid grid-cols-4 gap-y-2 gap-x-4">
            {technology.map((item, index) => (
              <section
                key={index}
                className=" !flex items-center justify-center"
              >
                <section className="w-full p-2 xs:h-[4.5rem] md:h-[6rem] xlg:h-[7rem] xs:rounded-md md:rounded-lg flex justify-center items-center boxsh">
                  <Image
                    src={item.imgsrc}
                    alt={item.imgalt}
                    width={244}
                    height={20}
                    className="w-fit xs:h-[1.5rem] sm:h-[1.8rem] md:h-[5rem]"
                  />
                </section>
              </section>
            ))}
          </section>
        </section>
        <section className="lg:w-[40%] md:w-[50%] flex flex-col gap-8">
          <section className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold text-primary">Let’ See</h1>
            <h1 className="text-4xl font-semibold text-[#333333] ">
              How Will You <span className="text-primary">Benefit?</span>
            </h1>
          </section>
          <section className="flex flex-col gap-6 ">
            {benifits.map((item, index) => (
              <section key={index} className="flex items-center gap-2 ">
                <i>
                  <Image
                    src={item.imgsrc}
                    alt={item.name}
                    width={244}
                    height={200}
                    className="w-full md:h-[2.5rem] xlg:h-[3rem]"
                  />
                </i>
                <h1 className="xlg:text-3xl md:text-2xl font-medium text-[#333333]">
                  {item.name}
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
