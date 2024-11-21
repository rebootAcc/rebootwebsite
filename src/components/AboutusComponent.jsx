import Image from "next/image";
import React from "react";

const AboutusComponent = ({ showsection, content }) => {
  const { aboutcontent, heading } = content;
  return (
    <section className="flex flex-col gap-4 xl:p-16 lg:p-8 p-4">
      <section className="flex flex-col lg:flex-row justify-between  gap-9">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 md:gap-4">
            <div className="flex flex-col justify-between gap-2 md:gap-6 lg:gap-4">
              <div className=" min-w-[50vw] min-h-[20vmax] md:min-w-[60vw] lg:min-w-0 lg:w-[30vw] xl:w-[22vw] md:min-h-[30vmax] lg:min-h-[23.83vmax] xl:min-h-[20.83vmax] relative">
                <Image
                  src="/images/about1.webp"
                  alt="about-us"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between gap-2 md:gap-4">
                <div className="md:w-[30vw] w-[25vw] lg:w-[14.3vw] xl:w-[10.3vw] min-h-[16vmax] md:min-h-[25.7vmax] lg:min-h-[11.7vmax] relative">
                  <Image
                    fill
                    src="/images/about2.webp"
                    alt="about us"
                    priority
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative md:w-[30vw] w-[25vw]  lg:w-[14.3vw] xl:w-[10.3vw] min-h-[16vmax] md:min-h-[25.7vmax] lg:min-h-[11.7vmax]">
                  <Image
                    fill
                    src="/images/about3.webp"
                    alt="about us"
                    priority
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex-1 lg:w-[13.125vw] min-h-[33.8vmax] relative">
              <Image
                fill
                src="/images/about4.webp"
                alt="about us"
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 xl:gap-2 justify-between">
          <h3 className="text-black font-semibold text-xl xlg:text-3xl capitalize">
            About Us!
          </h3>
          <h1 className="text-primary text-3xl xlg:text-4xl xl:text-[2.5rem] font-semibold">
            {heading}
          </h1>
          <p
            className="text-secondary text-sm/[22px] md:text-base xlg:mt-4 lg:line-clamp-[11] xlg:line-clamp-[13] 2xl:line-clamp-none"
            dangerouslySetInnerHTML={{ __html: aboutcontent }}
          ></p>
        </div>
      </section>
      {showsection && (
        <section className="flex flex-col md:flex-row items-center gap-4 justify-between w-full">
          <section className="flex flex-col w-full md:w-[50%] xl:w-[40%]">
            <p className="xlg:text-2xl text-xl font-medium text-[#333333]">
              Are Your <span className="text-primary"> Ready,</span>
            </p>
            <p className="xlg:text-4xl text-3xl font-semibold text-[#333333]">
              To Grow <span className="text-primary">Your Business</span>
            </p>
            <p className="xlg:text-2xl text-xl font-medium text-[#333333]">
              Make More <span className="text-primary">Benefits</span>
            </p>
          </section>
          <div className="xl:w-[60%] md:w-[50%] w-full h-[5rem] rounded-lg flex justify-center items-center  bg-primary text-white">
            <span className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white flex items-center w-full justify-center gap-2">
              <Image
                src={"/icons/talkicon.svg"}
                alt="Talk icon"
                width={100}
                height={20}
                className="w-fit h-[2rem] lg:h-[3rem]"
              />
              Talk To Our Experts Now!
            </span>
          </div>
        </section>
      )}
    </section>
  );
};

export default AboutusComponent;
