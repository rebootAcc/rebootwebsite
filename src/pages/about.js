import AboutusComponent from "@/components/AboutusComponent";
import ClientReview from "@/components/ClientReview";
import OurResponsibility from "@/components/OurResponsibility";
import OurUseTechnology from "@/components/OurUseTechnology";
import SubPageBanner from "@/components/SubPageBanner";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import Slider from "react-slick/lib/slider";

const Slider = dynamic(() => import("react-slick/lib/slider"), {
  ssr: false,
});
const About = () => {
  const vissionmission = [
    {
      icon: "/icons/missionicon.svg",
      name: "Mission",
      details:
        "Lorem ipsum dolor sit amet consectetur. Sed et arcu posuere risus et. Sit ut vel arcu tortor scelerisque lacus sed non vitae. Amet orci faucibus vel vestibulum in. Aliquet nulla sagittis elementum euismod magna amet etiam sit nulla. Tortor quisque viverra est eget nunc arcu euismod ut hac.Tincidunt gravida nulla dolor enim posuere purus ac. Ac adipiscing rhoncus tortor tristique arcu. Dignissim et rhoncus fermentum egestas. Laoreet interdum nec risus consequat aenean. Enim egestas pellentesque elementum facilisi enim augue turpis congue. Scelerisque nunc odio velit pharetra urna habitasse. Egestas risus commodo id massa aliquet tortor sed lorem. Nulla dui praesent et eu. Pellentesque nisi sodales quam dictumst odio pharetra urna. Dolor eu mauris massa eleifend. Semper sed scelerisque in euismod suscipit imperdiet sed.",
    },
    {
      icon: "/icons/visionicon.svg",
      name: "Vision",
      details:
        "Lorem ipsum dolor sit amet consectetur. Sed et arcu posuere risus et. Sit ut vel arcu tortor scelerisque lacus sed non vitae. Amet orci faucibus vel vestibulum in. Aliquet nulla sagittis elementum euismod magna amet etiam sit nulla. Tortor quisque viverra est eget nunc arcu euismod ut hac.Tincidunt gravida nulla dolor enim posuere purus ac. Ac adipiscing rhoncus tortor tristique arcu. Dignissim et rhoncus fermentum egestas. Laoreet interdum nec risus consequat aenean. Enim egestas pellentesque elementum facilisi enim augue turpis congue. Scelerisque nunc odio velit pharetra urna habitasse. Egestas risus commodo id massa aliquet tortor sed lorem. Nulla dui praesent et eu. Pellentesque nisi sodales quam dictumst odio pharetra urna. Dolor eu mauris massa eleifend. Semper sed scelerisque in euismod suscipit imperdiet sed.",
    },
    {
      icon: "/icons/objectiveicon.svg",
      name: "Objective",
      details:
        "Lorem ipsum dolor sit amet consectetur. Sed et arcu posuere risus et. Sit ut vel arcu tortor scelerisque lacus sed non vitae. Amet orci faucibus vel vestibulum in. Aliquet nulla sagittis elementum euismod magna amet etiam sit nulla. Tortor quisque viverra est eget nunc arcu euismod ut hac.Tincidunt gravida nulla dolor enim posuere purus ac. Ac adipiscing rhoncus tortor tristique arcu. Dignissim et rhoncus fermentum egestas. Laoreet interdum nec risus consequat aenean. Enim egestas pellentesque elementum facilisi enim augue turpis congue. Scelerisque nunc odio velit pharetra urna habitasse. Egestas risus commodo id massa aliquet tortor sed lorem. Nulla dui praesent et eu. Pellentesque nisi sodales quam dictumst odio pharetra urna. Dolor eu mauris massa eleifend. Semper sed scelerisque in euismod suscipit imperdiet sed.",
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
  };
  return (
    <>
      <Head>
        <title>Reboot AI | About Us</title>
      </Head>
      <section>
        <SubPageBanner heading={"About Us"} />

      <AboutusComponent showsection={true} content={aboutcontent} />

        <OurUseTechnology />
        <section className="xl:px-16 lg:px-8 sm:px-4 ">
          <section className="w-full">
            <Slider {...settings}>
              {vissionmission.map((item, index) => (
                <section
                  key={index}
                  className="!flex justify-center items-center p-4"
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
                    <section className="text-[#666666] xs:text-sm/[20px] md:text-sm/[20px] lg:text-[10px]/[15px] xlg:text-xs/[16px] xl:text-sm">
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
          <OurResponsibility showsection={true} />
          <ClientReview />
        </section>
      </section>
    </>
  );
};

export default About;
