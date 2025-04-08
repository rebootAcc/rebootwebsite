import React from "react";
import ServiceAndProductComponent from "./ServiceAndProductComponent";

const OurProduct = () => {
  const products = [
    {
      icon: "/icons/educationcrm.svg",
      name: "Educational CRM Advanced",
      details:
        "Reboot AI Private Limited has emerged as a pioneer in the technological industry, we are committed to offer Educational CRM Advanced solutions that have been designed to revolutionize student management and institutional efficiency. Our extensive platform provides educational institutions like universities, schools, coaching centres, and consultancies with a powerful tool to streamline complex administrative processes.",
      link: "/products/educational-CRM-advanced",
    },
    {
      icon: "/icons/servicecentercrm.svg",
      name: "Service Center Solutions",
      details:
        "Leverage the capabilities of Service Centre Solutions to cultivate a loyal customer base through automated services. We can assist you in optimizing your backend operations to provide exceptional, customer-centric experiences. Today, our service solutions can be a major business asset with a robust service center platform. Our software is integrated, multi-user, online, and modular in design. ",
      link: "/products/service-center-management-crm",
    },
    {
      icon: "/icons/doctorclinic.svg",
      name: "Doctor Clinic Management",
      details:
        " Reboot AI is a game changer when it comes to streamlining your service center business. We understand that the service center is full of people and needs proper CRM to control the load and cater to every single client. While frustration levels are already at their peak when at a service center, we do not want to stress you out with the tech! Instead, we use the tech and make it work for you and streamline the queue in an organized way!",
      link: "/products/clinic-management-software",
    },
    {
      icon: "/icons/chatbot.svg",
      name: "Chatbot & Automation",
      details:
        "In addition to our standard services, we provide On-Demand Services such as IT Consultation and Web & App Security. For Creative UI Design, we utilize cutting-edge technologies specifically designed for both web and mobile platforms. To help you launch your business smoothly, we offer a Brand Starter Solution and Cloud Server Startup, ensuring a seamless introduction of your product or service.",
      link: "/",
    },
  ];
  return (
    <section className="xl:p-16 lg:p-8 xs:p-4 flex flex-col gap-8">
      <section className="flex flex-row justify-between items-center">
        <section className="flex flex-col gap-2 lg:w-[45%] xlg:w-[35%] xs:w-[65%]">
          <h3 className="md:text-xl xs:text-lg font-medium text-[#333333]">
            Products
          </h3>
          <h1 className="text-primary xs:text-lg  md:text-3xl font-semibold">
            Our product can help your Business Management problem.
          </h1>
        </section>
      </section>
      <ServiceAndProductComponent services={products} />
    </section>
  );
};

export default OurProduct;
