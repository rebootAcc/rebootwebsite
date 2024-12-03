import AboutusComponent from "@/components/AboutusComponent";

import OurProduct from "@/components/OurProduct";
import OurProjects from "@/components/OurProjects";
import OurResponsibility from "@/components/OurResponsibility";
import OurServices from "@/components/OurServices";

import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const OurUseTechnology = dynamic(
  () => import("@/components/OurUseTechnology"),
  {
    ssr: false,
  }
);

const OurClient = dynamic(() => import("@/components/OurClient"), {
  ssr: false,
});

const QueryForm = dynamic(() => import("@/components/QueryForm"), {
  ssr: false,
});
const ClientReview = dynamic(() => import("@/components/ClientReview"), {
  ssr: false,
});

const HomePageBlogSection = dynamic(
  () => import("@/components/HomePageBlogSection"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [autoslide, setAutoslide] = useState(false);

  const [slidesToShowReview, setSlidesToShowRiview] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setSlidesToShowRiview(1);
      } else if (window.innerWidth <= 865) {
        setSlidesToShowRiview(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShowRiview(1);
      } else if (window.innerWidth <= 1280) {
        setSlidesToShowRiview(1);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShowRiview(1);
      } else {
        setSlidesToShowRiview(1);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 340) {
        setSlidesToShow(1);
        setAutoslide(true);
      } else if (window.innerWidth <= 560) {
        setSlidesToShow(2);
        setAutoslide(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
        setAutoslide(false);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setAutoslide(false);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(3);
        setAutoslide(false);
      } else {
        setSlidesToShow(3);
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
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoslide,
    speed: 6000,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const awardsLogo = [
    "/icons/google-partner-logo.webp",
    "/icons/meta-business-partner-logo.webp",
    "/icons/makeinindia.webp",
  ];

  const aboutcontent = {
    aboutcontent:
      "At Reboot AI Private Limited, our mission is to enhance the competitiveness and agility of companies through innovative software solutions. We empower individuals and organizations with exceptional design, reliable technology, and ongoing support to drive transformation within their industries. Based in Kolkata, West Bengal, we offer comprehensive services across India. Our offerings include web and app development, as well as business and IT consulting. Our development processes are designed to boost productivity and enable businesses to scale using modern techniques. </br> As a Google Partner Firm, we specialize in delivering exceptional services to enhance website security in response to the evolving landscape of organic and paid marketing. Our team comprises skilled security professionals equipped with advanced tools to identify, upgrade, and eliminate any malicious activities. We offer a comprehensive range of expertise across sales, support, marketing, and business development to meet all your business requirements. Our current projects include an Educational Consultant CRM, Clinic Management Software, and Service Centre Management solutions. With our custom development services, clients can tailor solutions to their specific needs. We foster digital innovation through user experience-driven engineering, design thinking, product accelerators for streamlined delivery, and strategic partnerships <br/> Ensure your digital products and services offer exceptional security, reliability, and performance to distinguish yourself in the online landscape. If you’re looking for a Web Development, App Development or Agency for Brand Building , Performance Marketing -this is the right place for you. With Reboot’s advance AI Technologies automate your business operation & boost productivity. Please consult with our Sales Team for any kind of IT or Business Consultation.",
    heading: "Crafting Intelligent Web & App Solutions with AI",
    img1: "/images/homeabout1.webp",
    img2: "/images/homeabout2.webp",
    img3: "/images/homeabout3.webp",
    img4: "/images/homeabout4.webp",
  };

  return (
    <>
      <Head>
        <title>
          Welcome to Reboot AI Pvt Ltd - Top Web, App Development Company
        </title>
        <meta
          name="description"
          content="IT Solutions for the Future, Most Trusted Startups for Web, Apps & Performance Marketing Services."
        />
      </Head>
      <main>
        <video
          width={960}
          height={540}
          autoPlay
          loop
          muted
          preload="auto"
          className="w-full h-full"
        >
          <source src="/videos/header-cover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section className="flex xl:gap-8 lg:gap-6 gap-4 justify-evenly  items-center xl:p-16 lg:p-8 p-4">
          <h1 className="text-[#333] w-[20%] md:w-[15%] font-semibold  md:text-lg text-sm lg:text-2xl xlg:text-3xl xl:text-4xl">
            Awards &amp; Recognitions
          </h1>
          <div className="md:w-[85%] w-[80%]">
            <Slider {...settings}>
              {awardsLogo.map((src, index) => (
                <div
                  className="  bg-white !flex w-full justify-center items-center p-2 md:p-4"
                  key={index}
                >
                  <div className="flex justify-center items-center w-full lg:w-[95%] xl:w-[90%] shadow-[0_0_10px_2px_rgba(0,_0,_0,_0.12)] rounded">
                    <Image
                      src={src}
                      alt="partner logo"
                      width={272}
                      height={102}
                      priority
                      className="rounded md:h-[5rem] h-[4rem] lg:h-[6rem] xlg:h-[8rem] w-fit "
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <AboutusComponent showsection={false} content={aboutcontent} />

        <OurUseTechnology />
        <OurServices />

        <OurProduct />
        <OurClient />
        <OurProjects />
        <OurResponsibility />

        <section className="flex flex-col lg:flex-row lg:p-8 p-4 xl:p-16 gap-6 ">
          <div className="lg:w-[50%] w-full">
            <QueryForm />
          </div>
          <div className="flex flex-col gap-9 w-full lg:w-[50%]">
            <div className="flex flex-col gap-2 xlg:gap-4">
              <h2 className="text-[#333] text-lg xlg:text-xl font-semibold">
                Let&apos;s See Some
              </h2>
              <h1 className="text-primary text-2xl xlg:text-4xl font-semibold">
                Our Creative Design
              </h1>
              <div className="grid grid-cols-2 gap-6">
                <div className="">
                  <Image
                    src="/our-creative-design-1.webp"
                    alt="creative design"
                    height={2000}
                    width={2000}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="">
                  <Image
                    src="/our-creative-design-2.webp"
                    alt="creative design"
                    height={2000}
                    width={2000}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <ClientReview slidesToShowReview={slidesToShowReview} />
            </div>
          </div>
        </section>
        <HomePageBlogSection />
      </main>
    </>
  );
}
