import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import SubPageBanner from "@/components/SubPageBanner";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import RelatedCategoryBlogs from "@/components/RelatedCategoryBlogs";
import BlogCategoryList from "@/components/BlogCategoryList";

// Fetch blog data by blogId
export async function getServerSideProps({ params }) {
  const { blogId } = params;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const res = await fetch(`${backendUrl}/api/blogs/get/${blogId}`);
    const data = await res.json();

    if (!data || !data.blogId) {
      return { notFound: true };
    }

    return {
      props: {
        blog: data,
      },
    };
  } catch (error) {
    console.error("Error fetching blog:", error);
    return { notFound: true };
  }
}

const BlogDetails = ({ blog }) => {
  if (!blog) {
    return <p>Blog not found!</p>;
  }
  const bulletPoints = blog.bulletPoints ? JSON.parse(blog.bulletPoints) : [];
  return (
    <>
      <Head>
        <title>{`RebootAi | ${blog.blogTitle}`}</title>
      </Head>

      <SubPageBanner heading="Our Blogs" subheading={blog.blogTitle} />

      <main className="px-8 md:px-12 xlg:px-16 xl:px-20 py-11 flex flex-col gap-16">
        <div className="flex gap-6">
          <div className="flex flex-col gap-9">
            <Image
              src={blog.blogThumbnails?.secure_url || "/images/blog-cover.png"}
              alt="blog-cover"
              width={2400}
              height={1600}
              className="lg:max-w-[60vmax] h-[30rem] object-cover rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-medium text-[#333] max-w-[30ch]">
                {blog.blogTitle}
              </h1>
              <p
                className="text-[#555] font-medium text-base"
                dangerouslySetInnerHTML={{ __html: blog.writeBlog }}
              />
            </div>
            <div className="py-5">
              <ol className="list-decimal pl-5 mt-2 text-[#555]">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg font-medium">
                    {point}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-6 w-full">
            <div className="px-10 py-6 flex justify-between bg-[#0061FF] rounded">
              <input
                type="text"
                placeholder="Search Here..."
                className="outline-none bg-transparent placeholder:text-white text-white text-lg font-medium placeholder:text-lg placeholder:font-medium"
              />
              <button type="button" className="text-3xl text-white">
                <FaSearch />
              </button>
            </div>

            <RelatedCategoryBlogs
              category={blog.category}
              excludeBlogId={blog.blogId}
            />

            {/* <div className="bg-black/5 rounded py-5 px-6 flex flex-col gap-5 min-w-[22vmax]">
              <h2 className="text-xl font-medium text-[#333]">
                Latest Post/Blogs
              </h2>
              <div className="flex gap-3">
                <Image
                  src="/images/blog-cover.png"
                  alt="blog-cover"
                  width={2400}
                  height={1600}
                  className="size-[5vmax] rounded object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-medium text-[#555]">
                    You should know about business plan..
                  </h2>
                  <div className="text-base text-[#555] flex items-center gap-1">
                    <LuCalendarClock />
                    <span>29 August 2024</span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="">
              <BlogCategoryList />
            </div>
          </div>
        </div>

        {/* <div className="flex gap-6 flex-col-reverse xlg:flex-row">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5">
              <h1 className="text-4xl text-[#333] font-medium">12 Comment |</h1>
              <div className="inline-flex px-2 py-0.5 bg-[#eaeaea] items-center justify-center rounded text-sm font-medium">
                Most Recent
              </div>
            </div>
            <div className="flex items-center border-b border-[#ccc] py-9 gap-9">
              <Image
                src="/comment-avatar.png"
                alt="pro-pic"
                width={500}
                height={625}
                className="size-[8vmax] rounded-full object-cover"
              />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-xl font-medium text-[#555]">
                    Md. Rahim Khandakar
                  </h1>
                  <button
                    type="button"
                    className="text-sm font-medium inline-flex py-0.5 px-3 bg-primary/10 items-center justify-center text-primary"
                  >
                    Reply
                  </button>
                </div>
                <p className="text-[#555] font-medium text-base">
                  Lorem ipsum dolor sit amet consectetur. Viverra eu ultricies
                  sodales senectus. Libero dolor pretium tortor vestibulum
                  semper aliquam viverra. Ultrices ullamcorper imperdiet sit
                  varius ornare lorem. Eleifend pretium sit justo adipiscing
                  cras risus magna donec at.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 min-w-[22vmax]">
            <h2 className="text-xl font-medium text-[#333]">Leave a Comment</h2>
            <div className="flex flex-col bg-black/5 rounded gap-4 py-5 px-6">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-[#555] text-base font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-[#ccc] rounded outline-none text-lg font-medium px-8 py-4"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-[#555] text-base font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-[#ccc] rounded outline-none text-lg font-medium px-8 py-4"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="message"
                  className="text-[#555] text-base font-medium"
                >
                  Message
                </label>
                <textarea
                  className="border border-[#ccc] rounded outline-none text-lg font-medium px-8 py-4"
                  id="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 mt-5 bg-primary text-white font-medium text-base rounded-md"
              >
                Submit Comment
              </button>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default BlogDetails;
