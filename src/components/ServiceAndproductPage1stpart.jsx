import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const ServiceAndproductPage1stpart = ({ content }) => {
  const { serviceimg, servicename, servicedesc1, servicedesc2 } = content;

  const [contentHeight, setContentHeight] = useState(0);
  const rightContentRef = useRef(null);

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
    <section className="xl:p-16 lg:p-8 sm:p-4 flex xs:flex-col md:flex-row gap-4 items-stretch">
      {/* Left Side - Image */}
      <div
        className="md:w-[42%] xs:w-full flex items-start"
        style={{ height: `${contentHeight}px` }}
      >
        <Image
          src={serviceimg}
          alt={servicename}
          width={512}
          height={0}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Right Side - Content */}
      <section
        className="md:w-[55%] xs:w-full flex flex-col gap-4 xlg:gap-6"
        ref={rightContentRef}
      >
        <section className="flex flex-col gap-2">
          <h1 className="md:text-2xl text-2xl xlg:text-4xl font-semibold text-primary">
            {servicename}
          </h1>
        </section>
        <section className="flex flex-col gap-4">
          <p
            className="xlg:text-base/[27px] lg:text-xs/[20px] md:text-sm text-xs"
            dangerouslySetInnerHTML={{ __html: servicedesc1 }}
          ></p>
          <p
            className="xlg:text-base/[27px] lg:text-xs/[20px] md:text-sm text-xs"
            dangerouslySetInnerHTML={{ __html: servicedesc2 }}
          ></p>
          <div className="w-full h-[3.5rem] xlg:h-[4rem] rounded-lg flex justify-center items-center xlg:mt-4 bg-primary text-white">
            <span className="xlg:text-2xl lg:text-xl md:text-xl text-xl font-semibold text-white flex items-center w-full justify-center gap-2">
              <Image
                src={"/icons/talkicon.svg"}
                alt="Talk icon"
                width={100}
                height={20}
                className="w-fit h-[2.5rem]"
              />
              Talk To Our Experts Now!
            </span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ServiceAndproductPage1stpart;
