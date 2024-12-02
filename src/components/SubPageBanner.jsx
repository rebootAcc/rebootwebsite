import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubPageBanner = ({ heading, headinglink, subheading }) => {
  return (
    <div className="relative">
      <Image
        className="w-full h-[20vmax] lg:h-[30vmax] xl:h-auto object-cover"
        src={"/images/subbannerbg.webp"}
        width={5760}
        height={1200}
        priority
        alt="Background"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-lg  md:text-xl font-semibold lg:text-3xl text-white text-center text-shadow">
          {heading}
        </h1>
        <h2 className="lg:text-lg md:text-sm text-xs font-medium text-white">
          <Link href={"/"}>Home</Link> &#x203A;{" "}
          <Link href={headinglink}>{heading}</Link>{" "}
          {subheading && <>&#x203A; {subheading}</>}
        </h2>
      </div>
    </div>
  );
};

export default SubPageBanner;
