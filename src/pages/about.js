import SubPageBanner from "@/components/SubPageBanner";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Slider from "react-slick/lib/slider";

const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const AboutusComponent = dynamic(
  () => import("@/components/AboutusComponent"),
  {
    ssr: false,
  }
);

const OurClient = dynamic(() => import("@/components/OurClient"), {
  ssr: false,
});
const OurUseTechnology = dynamic(
  () => import("@/components/OurUseTechnology"),
  {
    ssr: false,
  }
);
const About = () => {
  const vissionmission = [
    {
      icon: "/icons/missionicon.svg",
      name: "Mission",
      details:
        "Our mission is to meet the diverse needs of our customers, aiming to serve organizations of all sizes. We are driven by innovation, consistently challenging the status quo to provide state-of-the-art solutions that foster progress and transformation for both our clients and ourselves. We are committed to the long-term health of our clients and the well-being of our communities.We promote a culture of collaboration, teamwork, and knowledge-sharing, harnessing the expertise and creativity of our diverse team to achieve outstanding results. We empower our Brainers to reach their full potential by offering the resources, support, and opportunities necessary for personal and collective growth. Partner with us to develop your AI-powered digital products and services.",
    },
    {
      icon: "/icons/visionicon.svg",
      name: "Vision",
      details:
        "Our company is dedicated to developing cutting-edge technologies and scalable products and services. Partner with us to embark on your digital transformation journey and transform your business. Our team of innovative pioneers is committed to fostering creativity and delivering solutions all under one roof.One of the advantages of working with us is our global reach, allowing any business seeking streamlined solutions to choose us as their service provider. We aspire to make our company the ideal environment where everyone feels valued and supported. As such, we deliver solutions that enhance the value of other businesses. Our team's vision is to pursue excellence and continuously improve in every project and service we offer. We uphold the highest standards of integrity in all our endeavours.",
    },
    {
      icon: "/icons/objectiveicon.svg",
      name: "Objective",
      details:
        "Our goal is to foster a sense of comfort and trust with brands. We are dedicated to enhancing our services to ensure transparency and efficiency in all interactions. Reboot provides actionable insights that highlight market trends and opportunities, empowering businesses to make strategic decisions for a competitive edge. Our skilled team is well-versed in Return on investment and has hands-on experience with live development projects and hosting platforms. We prioritize delivering IT solutions that are aligned with business objectives, with a strong emphasis on digital transformation. Our ambition is to cultivate a world-class workforce. We create client-focused strategies aimed at delivering solutions that drive return on investment (ROI). ",
    },
  ];
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [infiniteslide, setinfiniteslide] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setSlidesToShow(1);
        setinfiniteslide(true);
      } else if (window.innerWidth <= 865) {
        setSlidesToShow(2);
        setinfiniteslide(true);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setinfiniteslide(false);
      } else if (window.innerWidth <= 1280) {
        setSlidesToShow(3);
        setinfiniteslide(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(3);
        setinfiniteslide(false);
      } else {
        setSlidesToShow(3);
        setinfiniteslide(false);
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
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: infiniteslide,
    autoplaySpeed: 4000,
    pauseOnHover: false,

    centerMode: false,
    arrows: false,
  };

  const aboutcontent = {
    aboutcontent:
      "Reboot AI Private Limited is a Google partner firm specializing in various aspects of business growth. Our mission is to help businesses enhance their brand and maximize their potential in the digital landscape. To ensure our clients stand out in the marketplace, our agency focuses on multiple parameters, guiding them from the initial stages of operation through to the final deployment. </br> Our team of specialists excels in various areas, including application development, branding solutions, AI and ML integration, and performance marketing. In addition to these services, we provide IT consulting and security solutions to help bring your ideas to life. At Reboot, we strive to enhance the digital landscape for all, employing a human-centered design approach to address the unique needs of businesses. </br> </br> <strong> Why Choose Us?</strong> </br> With five years of industry experience, we provide services across India, and our office is situated in Siliguri. We have assisted businesses in evolving from startups to technology-driven enterprises. Our mission is to create brighter futures for businesses and help them stay ahead in an increasingly tech-oriented world. </br> We aim to preserve your vision and authenticity while maintaining the essential details. If you want your brand to remain competitive in the market, reach out to us today.",
    heading: "Welcome to Reboot AI Pvt Ltd",
    img1: "/images/about1.webp",
    img2: "/images/about2.webp",
    img3: "/images/about3.webp",
    img4: "/images/about4.webp",
  };

  return (
    <>
      <Head>
        <title>
          About Reboot AI Pvt Ltd - Let&apos;s Turn Your Ideas into Reality
        </title>
        <meta
          name="description"
          content="Reboot AI Pvt Ltd is a IT startup company based on West Bengal. The company has vision of providing Technology at affordable rate to everyone."
        />
      </Head>
      <section>
        <SubPageBanner heading={"About Us"} headinglink={"/about"} />

        <AboutusComponent showsection={true} content={aboutcontent} />

        <OurUseTechnology />
        <section className="xl:px-16 lg:px-8 sm:px-4 ">
          <section className="w-full">
            <Slider {...settings}>
              {vissionmission.map((item, index) => (
                <section
                  key={index}
                  className="!flex justify-center h-full items-center p-4"
                >
                  <section className="xlg:px-4 xs:px-4 md:px-3 py-6 h-full w-full flex flex-col rounded-lg boxsh gap-4 relative">
                    <section className="xlg:h-[2.1rem] xs:h-[1.5rem] xs:w-[3rem] xlg:w-[4rem] rounded-b-full bg-[#4385F533] absolute top-0 inset-0 left-[70%]"></section>
                    <section className="flex flex-row items-center gap-2  ">
                      <i className="w-[20%]">
                        <Image
                          src={item.icon}
                          height={40}
                          width={30}
                          alt={item.name}
                          className="xlg:h-[3rem] lg:h-[2.5rem] xs:h-[3rem] w-full"
                        />
                      </i>
                      <h1 className="text-[#333333] lg:text-xl  xs:text-2xl xlg:text-2xl xl:text-3xl font-medium w-[80%]">
                        Reboot <br />
                        <span className="text-primary">{item.name}</span>
                      </h1>
                    </section>
                    <section className="text-[#666666] h-[21rem] lg:h-[14rem] xl:h-[16rem] xs:text-sm/[20px] md:text-sm/[20px] lg:text-[10px]/[15px] xlg:text-xs/[16px] xl:text-sm">
                      {item.details}
                    </section>
                    <section className="xlg:mt-3 lg:mt-2 xs:mt-2 flex justify-center items-end h-full">
                      <section className="h-[0.2rem] w-[40%] rounded-lg bg-[#333333]"></section>
                    </section>
                  </section>
                </section>
              ))}
            </Slider>
          </section>
        </section>
        <section>
          <OurClient />
        </section>
      </section>
    </>
  );
};

export default About;
