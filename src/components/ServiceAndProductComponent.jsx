import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceAndProductComponent = ({ services }) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 xs:gap-3 xlg:gap-6 xl:gap-8 ">
      {services.map((item, index) => (
        <section
          key={index}
          className="xlg:px-4 xs:px-4 md:px-3 py-6 h-full flex flex-col rounded-lg boxsh gap-4 relative"
        >
          <section className="xlg:h-[2.1rem] xs:h-[1.5rem] xs:w-[3rem] xlg:w-[4rem] rounded-b-full bg-[#4385F533] absolute top-0 inset-0 left-[70%]"></section>
          <section className="flex flex-row items-center gap-2  ">
            <i className="w-[20%]">
              <Image
                src={item.icon}
                height={40}
                width={30}
                alt={item.name}
                className="xlg:h-[3rem] lg:h-[2.5rem] xs:h-[3rem] w-full"
              />
            </i>
            <h1 className="text-[#333333] lg:text-xl xs:text-2xl xlg:text-2xl xl:text-3xl font-medium w-[80%]">
              {item.name}
            </h1>
          </section>
          <section className="text-[#666666] xs:text-sm/[25px] md:text-sm/[25px] lg:text-[10px]/[17px] xlg:text-xs/[20px] xl:text-sm/[20px]">
            {item.details}
          </section>
          <section className="xlg:mt-3 lg:mt-2 xs:mt-2 flex items-end h-full">
            <Link
              href={item.link}
              className=" lg:h-[1.8rem] xs:h-[2rem] xlg:h-[2rem]  w-fit px-6 flex justify-center items-center xs:text-xs xlg:text-sm font-medium bg-primary text-white rounded-md"
            >
              Read More...
            </Link>
          </section>
        </section>
      ))}
    </section>
  );
};

export default ServiceAndProductComponent;
