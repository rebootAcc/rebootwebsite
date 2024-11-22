import Image from "next/image";
import React from "react";

const ServiceAndproductPage1stpart = ({ content }) => {
  const { serviceimg, servicename, servicedesc1, servicedesc2 } = content;
  return (
    <section className="xl:p-16 lg:p-8 sm:p-4 flex xs:flex-col md:flex-row gap-4 justify-between">
      <div className="md:w-[42%] xs:w-full flex flex-col gap-4">
        <section className="">
          <Image
            src={serviceimg}
            alt={servicename}
            width={512}
            height={610}
            className="w-full xs:h-full md:h-[40vh] lg:h-[70vh] object-cover rounded-md"
          />
        </section>
        <section className="flex flex-col">
          <p className="xlg:text-2xl lg:text-xl text-lg font-medium text-[#333333]">
            Are Your <span className="text-primary"> Ready,</span>
          </p>
          <p className="xlg:text-4xl lg:text-3xl text-xl font-semibold text-[#333333]">
            To Lets Turn <span className="text-primary">Your Ideas</span>
          </p>
          <p className="xlg:text-2xl lg:text-xl text-lg font-medium text-[#333333]">
            into Reality <span className="text-primary">with us</span>
          </p>
        </section>
      </div>
      <section className="md:w-[55%] xs:w-full flex flex-col  gap-4 xlg:gap-6">
        <section className="flex flex-col gap-2">
          <h2 className="xlg:text-2xl md:text-xl text-lg font-medium ">
            About
          </h2>
          <h1 className=" md:text-2xl text-2xl xlg:text-4xl font-semibold text-primary ">
            {servicename}
          </h1>
        </section>
        <section className="flex flex-col  gap-4">
          <p
            className="xlg:text-base/[27px] lg:text-xs/[20px] text-xs"
            dangerouslySetInnerHTML={{ __html: servicedesc1 }}
          ></p>
          <p
            className="xlg:text-base/[27px] lg:text-xs/[20px] text-xs"
            dangerouslySetInnerHTML={{ __html: servicedesc2 }}
          ></p>
          <div className="w-full h-[4.5rem] xlg:h-[5rem] rounded-lg flex justify-center items-center xlg:mt-4 bg-primary text-white">
            <span className="xlg:text-4xl lg:text-3xl md:text-2xl xs:text-2xl font-semibold text-white flex items-center w-full justify-center gap-2">
              <Image
                src={"/icons/talkicon.svg"}
                alt="Talk icon"
                width={100}
                height={20}
                className="w-fit h-[3rem]"
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
