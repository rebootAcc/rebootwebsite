import React, { useEffect, useState } from "react";
import HeadingComponent from "./HeadingComponent";
import Image from "next/image";
// import Slider from "react-slick/lib/slider";
import Link from "next/link";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const OurProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(5);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(6);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const projects = [
    {
      name: "Interior Website Development",
      image: "/images/project1.png",
      link: "https://fasterrefrigeration.in/",
    },
    {
      name: "Pharma App Development",
      image: "/images/project1.png",
      link: "https://fasterrefrigeration.in/",
    },
    {
      name: "Food App Development",
      image: "/images/project1.png",
      link: "https://fasterrefrigeration.in/",
    },
    {
      name: "Interior Website Development",
      image: "/images/project1.png",
      link: "https://fasterrefrigeration.in/",
    },
    {
      name: "Pharma App Development",
      image: "/images/project1.png",
      link: "https://fasterrefrigeration.in/",
    },
    {
      name: "Food App Development",
      image: "/images/project1.png",
      link: "https://fasterrefrigeration.in/",
    },
  ];

  return (
    <section className="xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-8">
      <HeadingComponent
        heading1={"Lerem Ipsum simple"}
        heading2={"Some of Our Projects"}
      />
      <section className="w-full flex">
        <div className="w-full transition-all duration-300 relative">
          <Slider {...settings}>
            {projects.map((item, index) => (
              <section
                key={index}
                className="!flex justify-center items-center"
              >
                <div
                  className={`relative w-[90%] transition-all duration-300 rounded-lg h-[32rem] p-8 !flex justify-center items-center ${
                    index % 2 === 0
                      ? "bg-[#4385F51A] text-[#4385F5]"
                      : "bg-[#3333331A] text-[#444444]"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    zIndex: hoveredIndex === index ? 10 : 1,
                    transform: hoveredIndex === index ? "scale(1)" : "scale(1)", // Slight expansion on hover
                    transformOrigin:
                      index === 5 || index === 4
                        ? "right center" // Adjust transform origin for rightmost items
                        : "center center", // Default behavior for other items
                  }}
                >
                  {hoveredIndex === index ? (
                    <div className="absolute inset-0 xs:w-[24rem] rounded-lg md:w-[28rem] z-50 h-full bg-white  ">
                      <div className=" p-4 relative h-[32rem] boxsh rounded-lg">
                        <Image
                          src={item.image}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg  h-full border border-primary"
                        />
                      </div>
                      <div className="absolute bottom-6 left-[50%] transform -translate-x-1/2">
                        <Link
                          href={item.link}
                          target="_blank"
                          className="flex justify-center boxshblue text-lg font-medium items-center h-[2.5rem] px-6 bg-[#4385F5] text-white border border-white rounded-md"
                        >
                          Live Preview
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <h1 className="text-3xl font-medium -rotate-90 whitespace-nowrap">
                      {item.name}
                    </h1>
                  )}
                </div>
              </section>
            ))}
          </Slider>
        </div>
      </section>
    </section>
  );
};

export default OurProjects;
