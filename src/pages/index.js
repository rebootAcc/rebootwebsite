import AboutusComponent from "@/components/AboutusComponent";
import AwardAndRecognitions from "@/components/AwardAndRecognitions";
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
      "Welcome to Reboot AI, eastern India's fastest-growing web and app solution provider! With over 5 years of experience and industry eminence, we are known for delivering creative IT solutions to clients as per their needs and requirements! From developing ERP for our clients to student apps, Dental clinic management software, Health SaaS, and pharma management software, our team has delivered effective latest integrated solutions every time. We are known for providing the best technology in the market at competitive pricing that will ensure you don't burn a hole in your pocket. <br/> Reboot AI is helmed as a tech leader in the country due to their smart innovative ideas that turn client vision into a palpable reality! Our 24/7 support further makes a client believe that the team is right with them at every stage of their business! If we do the work, we make sure to own it! <br/> <strong>Reboot AI: The #1 IT Solutions Provider Near You! </strong> <br/> With a vision to engrave our status as the pioneer in the industry, we aim to be part of Digital India which enables tech leaders and businesses to scale exponentially through innovative tech at affordable and feasible rates. Our services cover a wide range of requirements such as IT consultation, project designing, development and lead generation. Each service at Reboot AI is helmed by teams of dedicated experts who with their wealth of experience ensure super smooth delivery of the project! And our OTIF always remains 100%! Let’s connect and start exploring your requirements! ",
    heading: "Redefining Innovation with Progressive Web and App Solutions",
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
        <link rel="preload" href="/images/homeabout1.webp" as="image" />
        <link rel="preload" href="/images/homeabout2.webp" as="image" />
        <link rel="preload" href="/images/homeabout3.webp" as="image" />
        <link rel="preload" href="/images/homeabout4.webp" as="image" />
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
