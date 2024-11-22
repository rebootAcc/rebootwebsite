import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogCards from "./BlogCards";
import dynamic from "next/dynamic";
import Loading from "./loading";
const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const HomePageBlogSection = () => {
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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
          `${backendUrl}/api/blogs/get?isdraft=false&active=true&limit=10`
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

    fetchRelatedBlogs();
  }, []);

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );

  if (relatedBlogs.length === 0) return <p></p>;

  return (
    <div className="flex flex-col gap-8 xl:p-16 lg:p-8 p-4 ">
      <section className="flex flex-col gap-2 justify-center items-center  ">
        <h3 className="md:text-xl xs:text-lg font-medium text-[#333333]">
          Ideas to Spark your next move
        </h3>
        <h1 className="text-primary xs:text-lg  md:text-3xl font-semibold">
          Some of Our Latest Helpful Blogs
        </h1>
      </section>

      <div className="w-full">
        <Slider {...settings}>
          {relatedBlogs.map((blog) => (
            <div
              key={blog.blogId}
              className="!flex w-full justify-center items-center"
            >
              <Link href={`/blogs/${blog.blogId}`} className="w-[95%]">
                <BlogCards blog={blog} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageBlogSection;
