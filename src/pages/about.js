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
        "At Reboot AI, our mission is to make sure the client's needs are addressed to help organizations of all kinds. We are innovative - as a result of this, we dare to disrupt and offer solutions that change the status quo. Our clients and the communities we serve are our main focus and we work towards their sustainable success. We work as a team and share knowledge that enables the creativity of the different team members, thus attaining the best results. We equip and enable our employees to succeed in their endeavors and we support their development. Become our client to co-develop innovative AI-based digital solutions and applications for a better tomorrow.",
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
        "The goal of Reboot AI is to create trust and credibility in brands through an improvement in clarity and effectiveness in all processes. Our information and recommendations concern the state and trends of the market, which enable making correct decisions for the business and gaining a competitive advantage. We have a team of professionals who are well conversant with ROI and who have worked on high-stakes development projects to bring you IT solutions that are in line with business objectives and outcomes, oriented with the theme of digital transformation. Join us to create value for your business by focusing on growth and profitability.",
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
      "Ever since its inception, Reboot AI Pvt Ltd has always been a people's first organization that functions on one core aspect- Professionalism! We stand by our people and they thrive at the workplace delivering results for clients beyond expectations. The teams at Reboot AI pvt ltd enjoy the ideal work-life balance because we believe that good work only happens when the mind is stress-free! Each employee takes absolute ownership of work and delivers on time to showcase their expertise and lead the pack. We have professionals working with us who are of the “leader” mindset and hence we get the extra confidence that the work we deliver will surely be top-notch! <br/> <strong> Reboot Ai Pvt ltd Values Every Association, be it a Client or an Employee </strong> <br/> At Reboot AI pvt ltd, employees receive multiple perks! They are-  <br/> <li> Provident Fund </li><li> Bonus  </li><li> Incentives  </li> <li> Paid Overtime (Optional) </li> <li> Fully paid leaves (Monthly) </li><br/> With such perks, we get a team, that the workplace lit up with their brilliance! Our clients invest their hard-earned money in their dream projects with us. We value it and hence have built a team that delivers every time without fail. Also, we have a dedicated support team that makes it a point that every client receives 24/7 support whenever required. <br/> Our focus on employee well being only showcases that we are here to build a community of workplace experts rather than individual employees who are functioning at the desk! We are the AI killers and AI makers of the modern contemporary decade.",
    heading: "About the Reboot AI PVT LTD Family",
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
