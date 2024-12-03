import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight, BsChatLeftText } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiFolderSimpleUserThin } from "react-icons/pi";

const BlogCards = ({ blog }) => {
  return (
    <div className="bg-[#f3f3f3] border border-[#ccc] rounded-lg p-4 h-full flex flex-col w-full gap-3">
      <div>
        <div className="relative min-h-[15rem] md:min-h-[15rem]">
          <Image
            fill
            src={blog.img}
            alt="blog cover"
            className="rounded-t-lg object-cover !h-[15rem]"
          />
        </div>
        <span className="relative bottom-4 left-4 px-6 py-0.5 bg-primary text-white xl:text-sm text-xs rounded-full">
          {blog.createdAt}
        </span>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-1 text-xs">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-[rgba(67,_133,_245,_0.10)] text-primary">
            <PiFolderSimpleUserThin />
          </span>
          <span className="text-[#888] font-medium">
            {" "}
            {blog.category.split(" ").slice(0, 2).join(" ")}
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-[rgba(67,_133,_245,_0.10)] text-primary">
            <BsChatLeftText />
          </span>
          <span className="text-[#888] font-medium">
            {blog.comments} Min Read
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-[rgba(67,_133,_245,_0.10)] text-primary">
            <MdOutlineRemoveRedEye />
          </span>
          <span className="text-[#888] font-medium">
            {blog.viewsCount} Views
          </span>
        </div>
      </div>
      <h1 className="text-[#333] text-base font-medium onelinelimit">
        {blog.heading}
      </h1>
      <p
        className="text-[#777] text-sm threelinelimit"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></p>
      <div className="flex justify-between">
        <span className="font-medium text-[#888] text-sm">
          - By {blog.postedBy}
        </span>
        <div className="text-primary text-sm inline-flex items-center gap-1">
          <span>Read More</span>
          <BsBoxArrowUpRight className="size-2" />
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
