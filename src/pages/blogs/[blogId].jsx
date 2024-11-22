import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import SubPageBanner from "@/components/SubPageBanner";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaRegCalendarAlt, FaSearch, FaUserCircle } from "react-icons/fa";
import RelatedCategoryBlogs from "@/components/RelatedCategoryBlogs";
import BlogCategoryList from "@/components/BlogCategoryList";
import { MdOutlineCategory } from "react-icons/md";
import dynamic from "next/dynamic";

const BlogDetailsPageEnquiry = dynamic(
  () => import("@/components/BlogDetailsPageEnquiry"),
  {
    ssr: false,
  }
);

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

      <main className="xl:p-16 lg:p-8 p-4 flex flex-col gap-8">
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 w-full md:w-[60%] lg:w-[75%]">
            <h1 className="text-3xl font-medium text-[#333]">
              {blog.blogTitle}
            </h1>
            <section className="flex flex-wrap gap-4">
              <h2 className="flex flex-row gap-2 items-center text-[#888888]">
                <FaUserCircle className="text-[#0061FF] size-5" />{" "}
                {blog.publisherName}
              </h2>
              <h2 className="flex flex-row gap-2 items-center text-[#888888]">
                <FaRegCalendarAlt className="text-[#0061FF] size-5" />{" "}
                {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
              <h2 className="flex flex-row gap-2 items-center text-[#888888]">
                <MdOutlineCategory className="text-[#0061FF] size-5" />{" "}
                {blog.category}
              </h2>
            </section>
            <Image
              src={blog.blogThumbnails?.secure_url || "/images/blog-cover.png"}
              alt="blog-cover"
              width={2400}
              height={1600}
              className="w-full md:h-[25rem] object-contain rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <p
                className="text-[#555]  text-lg"
                dangerouslySetInnerHTML={{ __html: blog.writeBlog }}
              />
            </div>
            {/* <div className="py-5">
              <ol className="list-decimal pl-5 mt-2 text-[#555]">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg font-medium">
                    {point}
                  </li>
                ))}
              </ol>
            </div> */}
          </div>
          <div className="hidden md:flex flex-col gap-6 md:w-[40%] lg:w-[25%]">
            <div className="">
              <BlogCategoryList />
            </div>
            <div>
              <BlogDetailsPageEnquiry />
            </div>
          </div>
        </div>
        <RelatedCategoryBlogs
          category={blog.category}
          excludeBlogId={blog.blogId}
        />
      </main>
    </>
  );
};

export default BlogDetails;
