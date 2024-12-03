import Image from "next/image";
import React from "react";

const AboutusComponent = ({ showsection, content }) => {
  const { aboutcontent, heading, img1, img2, img3, img4 } = content;
  return (
    <section className="flex flex-col gap-4 xl:p-16 lg:p-8 p-4">
      <section className="flex flex-col lg:flex-row justify-between  gap-9">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 md:gap-4">
            <div className="flex flex-col justify-between gap-2 md:gap-6 lg:gap-4">
              <div className=" w-[50vw] h-[20vmax] md:w-[60vw] lg:min-w-0 lg:w-[30vw] xl:w-[22vw] md:min-h-[30vmax] lg:min-h-[23.83vmax] xl:min-h-[20.83vmax] relative">
                <Image
                  src={img1}
                  alt="about-us"
                  height={450}
                  width={800}
                  priority
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
              <div className="flex justify-between gap-2 md:gap-4">
                <div className="md:w-[30vw] w-[25vw] lg:w-[14.3vw] xl:w-[10.3vw] min-h-[16vmax] md:min-h-[25.7vmax] lg:min-h-[11.7vmax] relative">
                  <Image
                    src={img2}
                    alt="about us"
                    height={565}
                    width={800}
                    priority
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div className="relative md:w-[30vw] w-[25vw]  lg:w-[14.3vw] xl:w-[10.3vw] min-h-[16vmax] md:min-h-[25.7vmax] lg:min-h-[11.7vmax]">
                  <Image
                    src={img3}
                    alt="about us"
                    height={494}
                    width={800}
                    priority
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex-1 lg:w-[13.125vw] min-h-[33.8vmax] relative">
              <Image
                src={img4}
                alt="about us"
                height={534}
                width={800}
                priority
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 xl:gap-2 justify-between">
          {showsection && (
            <h3 className="text-black font-semibold text-xl xlg:text-xl capitalize">
              About Us!
            </h3>
          )}

          <h1 className="text-primary text-3xl xlg:text-2xl lg:text-xl xl:text-[2rem] font-semibold">
            {heading}
          </h1>
          <p
            className="text-secondary xlg:text-sm/[22px] lg:text-xs text-sm  xl:text-base  "
            dangerouslySetInnerHTML={{ __html: aboutcontent }}
          ></p>
          {showsection && (
            <div className="w-full h-[4.5rem]  rounded-lg flex justify-center items-center  bg-primary text-white">
              <span className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold text-white flex items-center w-full justify-center gap-2">
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
          )}
        </div>
      </section>
    </section>
  );
};

export default AboutusComponent;
