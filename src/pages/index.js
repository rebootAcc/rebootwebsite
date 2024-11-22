import AboutusComponent from "@/components/AboutusComponent";
import OurClient from "@/components/OurClient";
import OurProduct from "@/components/OurProduct";
import OurProjects from "@/components/OurProjects";
import OurResponsibility from "@/components/OurResponsibility";
import OurServices from "@/components/OurServices";
import OurUseTechnology from "@/components/OurUseTechnology";

import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineStarBorder, MdStarRate } from "react-icons/md";
// import Slider from "react-slick/lib/slider";

const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});

const QueryForm = dynamic(() => import("@/components/QueryForm"), {
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
      "At Reboot AI Private Limited, our mission is to enhance the competitiveness and agility of companies through innovative software solutions. We empower individuals and organizations with exceptional design, reliable technology, and ongoing support to drive transformation within their industries. Based in Siliguri, West Bengal, we offer comprehensive services across India. Our offerings include web and app development, as well as business and IT consulting. Our development processes are designed to boost productivity and enable businesses to scale using modern techniques. </br> As a Google Partner Firm, we specialize in delivering exceptional services to enhance website security in response to the evolving landscape of organic and paid marketing. Our team comprises skilled security professionals equipped with advanced tools to identify, upgrade, and eliminate any malicious activities. We offer a comprehensive range of expertise across sales, support, marketing, and business development to meet all your business requirements. Our current projects include an Educational Consultant CRM, Clinic Management Software, and Service Centre Management solutions. With our custom development services, clients can tailor solutions to their specific needs. We foster digital innovation through user experience-driven engineering, design thinking, product accelerators for streamlined delivery, and strategic partnerships.</br> Ensure your digital products and services offer exceptional security, reliability, and performance to distinguish yourself in the online landscape.",
    heading: "Crafting Intelligent Web & App Solutions with AI",
  };

  return (
    <>
      <Head>
        <title>Reboot Ai</title>
      </Head>
      <main>
        <video
          src="/videos/header-cover.mp4"
          width={960}
          height={540}
          autoPlay
          loop
          muted
          preload="auto"
          className="w-full h-full "
        />
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

        <section className="flex flex-col lg:flex-row px-8 xlg:px-16 gap-6 my-20">
          <div className="lg:min-w-[30rem] xl:min-w-[40rem]">
            <QueryForm />
          </div>
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#333] text-xl font-semibold">
                Let&apos;s See Some
              </h2>
              <h1 className="text-primary text-4xl font-semibold">
                Our Creative Design
              </h1>
              <div className="flex gap-6">
                <div className="relative size-[45.25vw] lg:size-[21.25vw]">
                  <Image
                    src="/our-creative-design-1.webp"
                    alt="creative design"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative size-[45.25vw] lg:size-[21.25vw]">
                  <Image
                    src="/our-creative-design-2.webp"
                    alt="creative design"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-[#333] text-xl font-semibold">
                Let&apos;s See Some Reviews
              </h2>
              <h1 className="text-primary text-4xl font-semibold">
                What Our Client Say
              </h1>
              <div className="flex flex-col gap-3 py-10 bg-[rgba(67,_133,_245,_0.05)] flex-1 rounded-3xl px-11">
                <h1 className="text-[#333] text-xl font-semibold">
                  &#183; Best&nbsp;
                  <span className="text-primary space-x-0.5">
                    Website Designing Company
                  </span>
                  &nbsp;In Siliguri
                </h1>
                <p className="text-base text-secondary max-w-[77ch]">
                  Choosing Reboot Marketing Pvt. Ltd. for our website redesign
                  was a fantastic decision. Their team crafted a visually
                  striking and highly functional website that aligns perfectly
                  with our brand&apos;s identity. They impressed us with their
                  creative approach, attention to detail, and commitment to
                  understanding our needs. The result is a site that&apos;s not
                  only aesthetically pleasing but also user-friendly and
                  responsive across all devices. We&apos;ve experienced a
                  noticeable increase in engagement and traffic. Their ongoing
                  support and expertise make them the top choice in Siliguri.
                  Highly recommended!
                </p>
                <h4 className="font-medium text-base text-primary">
                  ---- Mohna Rani
                </h4>
                <div>
                  <div className="text-[#FFB800] text-2xl flex gap-1">
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdOutlineStarBorder />
                    <span className="text-base text-[#777] ps-1">
                      &#40;4.3&#41; 512 Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomePageBlogSection />
      </main>
    </>
  );
}
