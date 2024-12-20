import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const RelatedCategoryBlogs = ({ category, excludeBlogId }) => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [autoslide, setAutoslide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 340) {
        setSlidesToShow(1);
        setAutoslide(true);
      } else if (window.innerWidth <= 560) {
        setSlidesToShow(1);
        setAutoslide(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(2);
        setAutoslide(false);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setAutoslide(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(4);
        setAutoslide(false);
      } else {
        setSlidesToShow(4);
        setAutoslide(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: relatedBlogs.length > slidesToShow,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoslide,
    speed: 6000,
    autoplaySpeed: 2000,
    arrows: false,
  };

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const response = await fetch(
          `${backendUrl}/api/blogs/latest?category=${category}&limit=8&excludeBlogId=${excludeBlogId}`
        );
        const data = await response.json();

        if (response.ok) {
          // Map blogs into the `blogData` format
          const transformedBlogs = data.data.map((blog) => ({
            createdAt: new Date(blog.createdAt).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            category: blog.category,
            comments: blog.comments || 0,
            viewsCount: blog.viewsCount || 0,
            heading: blog.blogTitle,
            description: blog.writeBlog || "",
            postedBy: blog.publisherName || "Unknown",
            blogId: blog.blogId,
            img: blog.blogThumbnails?.secure_url || null,
          }));
          setRelatedBlogs(transformedBlogs);
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

  const handleBlogClick = async (blog) => {
    try {
      await fetch(`${backendUrl}/api/blogs/${blog.blogId}/view`, {
        method: "PATCH",
      });

      router.push(`/blogs/${blog.heading.replace(/\s+/g, "-").toLowerCase()}`);
    } catch (error) {
      console.error("Error incrementing view count:", error);
    }
  };

  if (loading) return <p>Loading related blogs...</p>;

  if (relatedBlogs.length === 0) return <p></p>;

  return (
    <div className="w-full">
      <Slider {...settings}>
        {relatedBlogs.map((blog) => (
          <div
            key={blog.blogId}
            className="!flex w-full justify-center items-center"
          >
            <div
              onClick={() => handleBlogClick(blog)}
              className="w-[95%] cursor-pointer"
            >
              <BlogCards blog={blog} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RelatedCategoryBlogs;
