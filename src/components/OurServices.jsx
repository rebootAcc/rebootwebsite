import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServiceAndProductComponent from "./ServiceAndProductComponent";

const OurServices = () => {
  const services = [
    {
      icon: "/newicons/wevdevicon.svg",
      name: "Custom Web Development",
      details:
        "Do you need the services of a reliable Custom Website Development Company in Kolkata? Well, if so, then you are at the right place. At Reboot AI, we provide unique, high quality web design solutions that include the latest design, seamless functionality and future proof technologies.",
      link: "/services/website-development-company-in-kolkata",
    },
    {
      icon: "/newicons/ecommerce.svg",
      name: "E-commerce Development",
      details:
        "For your online store idea to transform into a reality, it is crucial to identify the right Ecommerce Developer in Kolkata. From the application of scalable, custom coded solutions encoded into your brand-new online portal, to the refashioning of a traditional business into an Internet e-commerce business, at Reboot AI, we handle it all at one place.",
      link: "/services/e-commerce-website-developer-in-kolkata",
    },
    {
      icon: "/newicons/appdevicon.svg",
      name: "Android App Development",
      details:
        "Looking For High Quality Android App To Be Developed In Kolkata? We Are Here! Modern tech is led by innovations in the Android development space! We take pride in being a pioneer app developer in Kolkata with 5 years of experience in the industry. In our 5 years, we have delivered more than 50 apps for clients.",
      link: "/services/app-developer-in-kolkata-android-app-development",
    },
    {
      icon: "/newicons/webapp.svg",
      name: "Web Apps/SAAS Development",
      details:
        "SAAS Applications are accessed over the internet through a browser or a dedicated client. Such applications require security, integration, proper deployment, and of course maintenance. At Reboot AI Private Limited, we offer the best SAAS developer in Kolkata who can develop SAAS apps with protection against increasing cyber threats. It is one of the fastest-growing business models in the industry that can meet customer demands....",
      link: "/services/saas-application-development-service-in-kolkata",
    },

    {
      icon: "/newicons/googlemarketing.svg",
      name: "Google Marketing",
      details:
        "If you are running a business in 2025, we hope you must have heard of SEO or Serach Engine Optimization; the OG in the Branding world! At Reboot AI Pvt Ltd, we have a team of expert professionals, who own extensive and in-depth knowledge of Google SEO, and can help you reach wider audience with various Organic strategies.",
      link: "/services/seo-agency-in-kolkata",
    },
    {
      icon: "/newicons/brandidenty.svg",
      name: "PR & Brand Building",
      details:
        "Are you a brand owner?  Does the competitive scenario in the marketplace make you worried about finding best PR & branding agency in Kolkata? Well, then your search ends here at Reboot AI Pvt Ltd. If you haven't heard our name before, we must tell you Reboot AI Pvt Ltd is a one stop solution for Branding your Business, where you can avail tailored solutions to get the desired exposure it deserves.",
      link: "/services/influencer-marketing-agency-in-kolkata",
    },
    {
      icon: "/newicons/uiuxicon.svg",
      name: "Creative UI/UX Solutions",
      details:
        "Reboot AI Private Limited has emerged as a prominent technology partner and UI developer in Kolkata. As a premier UI developer in Kolkata we are committed to deliver complete UI solutions that will transform digital landscapes. With a substantial proven track record of developing cutting-edge digital products using the latest software technologies we have empowered 1000+ businesses to achieve their technological ambitions big time.",
      link: "/services/ui-ux-developer-in-kolkata",
    },
    {
      icon: "/newicons/it.svg",
      name: "IT Consultation",
      details:
        "As the real world is gradually shrinking, the virtual world has opened up its doors for multiple avenues of opportunities in various walks of life. The World Wide Web (WWW) is an endless cosmos of numerous web entities and Ecommerce portals that represent a wide array of business and service models.",
      link: "/services/it-consultation-service-in-kolkata",
    },
  ];

  return (
    <section className="xl:p-16 lg:p-8 xs:p-4 flex flex-col gap-8">
      <section className="flex flex-row justify-between items-center">
        <section className="flex flex-col gap-2 lg:w-[35%] xlg:w-[25%] xs:w-[65%]">
          <h3 className="md:text-xl xs:text-lg font-medium text-[#333333]">
            Our Services
          </h3>
          <h1 className="text-primary xs:text-lg  md:text-3xl font-semibold">
            Managed IT Services, Hassle-Free
          </h1>
        </section>
      </section>
      <ServiceAndProductComponent services={services} />
    </section>
  );
};

export default OurServices;
