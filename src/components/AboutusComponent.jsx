import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AboutusComponent = ({ showsection, content }) => {
  const { aboutcontent, heading, img1, img2, img3, img4 } = content;
  const [contentHeight, setContentHeight] = useState(0);
  const rightContentRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateHeight = () => {
    if (rightContentRef.current) {
      setContentHeight(rightContentRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    // Initial height setup
    updateHeight();

    // Handle height on window resize
    const handleResize = () => {
      updateHeight();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col gap-4 xl:p-16 lg:p-8 p-4">
      <section className="flex flex-col-reverse lg:flex-row justify-between gap-9">
        <div className="flex flex-col gap-4 w-full lg:w-[45%]">
          <div
            className="flex gap-2 md:gap-4"
            style={{ height: isSmallScreen ? "20rem" : `${contentHeight}px` }}
          >
            <div className="flex flex-col justify-between gap-2 md:gap-6 lg:gap-4 w-[60%]">
              <div className="relative w-full h-[50%]">
                <Image
                  src={img1}
                  alt="about-us"
                  height={450}
                  width={800}
                  priority
                  className="object-cover rounded-lg h-full w-full"
                />
              </div>
              <div className="flex justify-between gap-2 md:gap-4 h-[50%]">
                <div className=" w-full h-full  relative">
                  <Image
                    src={img2}
                    alt="about us"
                    height={565}
                    width={800}
                    priority
                    className="object-cover rounded-lg w-full h-full"
                  />
                </div>
                <div className="relative w-full h-full">
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
            <div className="w-[40%] h-full relative">
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
        <div
          className="flex flex-col gap-2 xl:gap-2 justify-between w-full lg:w-[55%]"
          ref={rightContentRef}
        >
          <h1 className="text-primary text-xl md:text-3xl xlg:text-2xl lg:text-xl xl:text-[2rem] font-semibold">
            {heading}
          </h1>
          <section
            className="text-secondary xlg:text-sm/[22px] lg:text-xs text-sm  xl:text-base  "
            dangerouslySetInnerHTML={{ __html: aboutcontent }}
          ></section>
          {showsection && (
            <div className="w-full h-[4.5rem] rounded-lg flex justify-center items-center bg-primary text-white">
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
