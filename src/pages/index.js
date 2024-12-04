import OurProduct from "@/components/OurProduct";
import OurProjects from "@/components/OurProjects";
import OurResponsibility from "@/components/OurResponsibility";

import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

const OurUseTechnology = dynamic(
  () => import("@/components/OurUseTechnology"),
  {
    ssr: false,
  }
);

const OurServices = dynamic(() => import("@/components/OurServices"), {
  ssr: false,
});

const AwardAndRecognitions = dynamic(
  () => import("@/components/AwardAndRecognitions"),
  {
    ssr: false,
  }
);

const AboutusComponent = dynamic(
  () => import("@/components/AboutusComponent"),
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
          className="w-full md:h-full h-[50vh] object-cover"
        >
          <source src="/videos/header-cover.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <AwardAndRecognitions />

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
