import React, { useState } from "react";
import BlogCards from "@/components/BlogCards";
import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getServerSideProps({ query }) {
  const { page = 1, category } = query;

  const apiUrl = `${backendUrl}/api/blogs/get?isdraft=false&active=true&page=${page}${
    category ? `&category=${encodeURIComponent(category)}` : ""
  }`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const pageData = data.data
      ? data.data.map((blog) => {
          const blogData = {
            createdAt: new Date(blog.createdAt).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            category: blog.category,
            comments: 12,
            viewsCount: 132,
            heading: blog.blogTitle,
            description: blog.writeBlog || "",
            postedBy: blog.publisherName || "Unknown",
            blogId: blog.blogId,
          };

          if (blog.blogThumbnails?.secure_url) {
            blogData.img = blog.blogThumbnails.secure_url;
          }

          return blogData;
        })
      : [];

    return {
      props: {
        pageData,
        totalPages: data.totalPages,
        currentPage: parseInt(page, 10),
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      props: { pageData: [], totalPages: 1, currentPage: 1 },
    };
  }
}

export default function Blogs({ pageData, totalPages, currentPage }) {
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const router = useRouter();

  const handleNext = () => {
    if (currentPageState < totalPages) {
      const nextPage = currentPageState + 1;
      setCurrentPageState(nextPage);
      router.push(`/blogs?page=${nextPage}`);
    }
  };
  const handlePrev = () => {
    if (currentPageState > 1) {
      const prevPage = currentPageState - 1;
      setCurrentPageState(prevPage);
      router.push(`/blogs?page=${prevPage}`);
    }
  };
  const handlePageClick = (page) => {
    setCurrentPageState(page);
    router.push(`/blogs?page=${page}`);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const displayedPages = pageNumbers.slice(
    Math.max(0, currentPageState - 3),
    Math.min(currentPageState + 2, totalPages)
  );

  return (
    <>
      <Head>
        <title>ReBoot AI | Our Blogs</title>
      </Head>
      <SubPageBanner heading={"Our Blogs"} />
      <main className="px-8 md:px-12 xlg:px-16 xl:px-20 py-11 flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-6">
          {pageData.map((blog, index) => (
            <Link className="h-full" key={index} href={`/blogs/${blog.blogId}`}>
              <BlogCards blog={blog} />
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPageState <= 1}
            className="px-4 py-2 bg-gray-300 rounded-lg mr-2 hover:bg-gray-400"
          >
            Prev
          </button>

          <div className="flex items-center gap-2">
            {displayedPages.map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPageState === page
                    ? "bg-blue-600 text-white" // Active page styling
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPageState >= totalPages}
            className="px-4 py-2 bg-gray-300 rounded-lg ml-2 hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}
