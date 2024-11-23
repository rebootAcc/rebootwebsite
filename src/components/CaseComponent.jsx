import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiPlus } from "react-icons/ti";

const CaseComponent = ({ cases }) => {
  return (
    <div className="rounded-2xl shadow-[0_0_10px_2px_rgba(0,0,0,0.15)] flex flex-col py-3 px-4 gap-3 lg:max-w-[29vmax]">
      <div className="flex justify-between gap-5">
        <div className="flex items-center gap-1">
          <span className="size-2 rounded-full bg-[#ff2722]"></span>
          <span className="size-2 rounded-full bg-[#ffb800]"></span>
          <span className="size-2 rounded-full bg-[#05e900]"></span>
        </div>
        <div className="px-3 py-1 shadow-[0_1px_1.5px_0_rgba(0,0,0,0.25)] rounded-full">
          <h1 className="text-[#ccc] text-sm">{cases.site}</h1>
        </div>
        <div className="text-[#666] p-2 text-sm rounded-full shadow-[0_1px_1.5px_0_rgba(0,0,0,0.25)] flex items-center justify-center">
          <TiPlus />
        </div>
      </div>
      <div className="border-primary border overflow-hidden rounded-2xl max-h-[50vmax] min-[640px]:max-h-[43.68vmax] group">
        <Image
          src={cases.img}
          alt="case-studies"
          className="translate-y-0 group-hover:-translate-y-[67%] duration-[5s] scroll-smooth"
          width={840}
          height={4096}
        />
      </div>
      <div className="flex gap-6">
        <Image
          src={cases.clientlogo}
          alt="client"
          width={152}
          height={32}
          className="w-[10.5vmax] bg-white border border-primary rounded-lg p-3 object-contain xlg:object-fill"
        />
        <div className="flex flex-col justify-between flex-1">
          <Link
            href={cases.link}
            type="button"
            className="bg-primary shadow-[0_1px_1.5px_0] shadow-black text-sm xlg:text-base text-center font-semibold p-1 xlg:p-3 rounded-xl text-white"
          >
            Live Preview
          </Link>
          <p className="max-w-[16ch] inline-flex items-start flex-col text-[#666] text-sm xlg:text-base">
            <span>Website Category</span>{" "}
            <span className="font-semibold">{cases.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseComponent;
