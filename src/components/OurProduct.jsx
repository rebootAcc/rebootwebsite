import React from "react";
import ServiceAndProductComponent from "./ServiceAndProductComponent";

const OurProduct = () => {
  const products = [
    {
      icon: "/icons/educationcrm.svg",
      name: "Educational CRM Advanced",
      details:
        "We provide cutting-edge web development services designed to enhance your business revenue. Our tailored website and web application development solutions focus on your unique needs. With specialized skills in E-commerce store development and dynamic website creation, we also support the development of B2B applications and SaaS application development. Our team delivers fully functional, robust, and scalable software products that stand the test of time.",
      link: "",
    },
    {
      icon: "/icons/servicecentercrm.svg",
      name: "Service Center Solutions",
      details:
        "Whether you need a native or hybrid platform, we provide the best unique technologies for both Android and iOS. Our team specializes in developing comprehensive Flutter applications and offers AI and ML integration services. With a strong and adaptable architecture, our web applications ensure stability and scalability. Collaborate with us to develop cross-platform and hybrid apps, helping you to lower the overall costs of your business project.",
      link: "",
    },
    {
      icon: "/icons/doctorclinic.svg",
      name: "Doctor Clinic Management",
      details:
        "Our marketing solutions are designed to assist businesses of all sizes in generating more leads. We provide business consulting and performance marketing services. We also manage our client’s PR and branding strategies. As a Google Partner Firm, we specialize in Google Marketing and Social Media Solutions, ensuring that brands gain visibility and audience on a global scale.",
      link: "",
    },
    {
      icon: "/icons/chatbot.svg",
      name: "Chatbot & Automation",
      details:
        "In addition to our standard services, we provide On-Demand Services such as IT Consultation and Web & App Security. For Creative UI Design, we utilize cutting-edge technologies specifically designed for both web and mobile platforms. To help you launch your business smoothly, we offer a Brand Starter Solution and Cloud Server Startup, ensuring a seamless introduction of your product or service.",
      link: "",
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
