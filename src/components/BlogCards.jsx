import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight, BsChatLeftText } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiFolderSimpleUserThin } from "react-icons/pi";

const BlogCards = ({ blog }) => {
  return (
    <div className="bg-[#f3f3f3] border border-[#ccc] rounded-lg p-5 h-full flex flex-col lg:max-w-[29vw] gap-3">
      <div>
        <div className="relative min-h-[50vw] md:min-h-[20vw]">
          <Image
            fill
            src={blog.img}
            alt="blog cover"
            className="rounded-t-lg"
          />
        </div>
        <span className="relative bottom-4 left-4 px-6 py-0.5 bg-primary text-white rounded-full">
          {blog.createdAt}
        </span>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-1 text-xs">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-[rgba(67,_133,_245,_0.10)] text-primary">
            <PiFolderSimpleUserThin />
          </span>
          <span className="text-[#888] font-medium">{blog.category}</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-[rgba(67,_133,_245,_0.10)] text-primary">
            <BsChatLeftText />
          </span>
          <span className="text-[#888] font-medium">
            {blog.comments} Comments
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
      <h1 className="text-[#333] text-base font-medium max-w-[30ch]">
        {blog.heading}
      </h1>
      <p
        className="text-[#777] text-base threelinelimit"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      ></p>
      <div className="flex justify-between">
        <span className="font-medium text-[#888] text-sm">
          - By {blog.postedBy}
        </span>
        <Link
          href={`/blogs/${blog.blogId}`}
          className="text-primary text-sm inline-flex items-center gap-1"
        >
          <span>Read More</span>
          <BsBoxArrowUpRight className="size-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCards;
