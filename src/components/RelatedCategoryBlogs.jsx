import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LuCalendarClock } from "react-icons/lu";
import Link from "next/link";

const RelatedCategoryBlogs = ({ category, excludeBlogId }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/blogs/latest?category=${category}&limit=4&excludeBlogId=${excludeBlogId}`
        );
        const data = await response.json();

        if (response.ok) {
          setRelatedBlogs(data.data); // Assuming blogs are in `data.data`
        }
      } catch (error) {
        console.error("Error fetching related blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchRelatedBlogs();
    }
  }, [category]);

  if (loading) return <p>Loading related blogs...</p>;

  if (relatedBlogs.length === 0) return <p>No related blogs found.</p>;

  return (
    <div className=" rounded  flex flex-col gap-5 min-w-[22vmax]">
      <h2 className="text-xl font-medium text-[#333]">
        Latest Blogs in {category}
      </h2>
      {relatedBlogs.map((blog) => (
        <Link
          href={`/blogs/${blog.blogId}`}
          className="flex gap-3 bg-black/5 py-5 px-6"
          key={blog.blogId}
        >
          <Image
            src={blog.blogThumbnails?.secure_url || "/images/blog-cover.png"}
            alt={blog.blogTitle}
            width={240}
            height={160}
            className="size-[5vmax] rounded object-cover"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-medium text-[#555]">
              {blog.blogTitle}
            </h2>
            <div className="text-base text-[#555] flex items-center gap-1">
              <LuCalendarClock />
              <span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedCategoryBlogs;
