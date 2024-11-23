import React from "react";
import ServiceAndProductComponent from "./ServiceAndProductComponent";

const OurProduct = () => {
  const products = [
    {
      icon: "/icons/educationcrm.svg",
      name: "Educational CRM Advanced",
      details:
        "A CRM for Education is a comprehensive student management solution tailored to meet the specific needs of educational institutions such as universities, schools, coaching centers, consultancies, and other organizations within the education sector. Our CRM enhances the productivity of the admission process and improves conversion rates for these organizations. With our platform, you can manage multiple leads in one place and prioritize them effectively.",
      link: "/products/educational_CRM_advanced",
    },
    {
      icon: "/icons/servicecentercrm.svg",
      name: "Service Center Solutions",
      details:
        "Leverage the capabilities of Service Centre Solutions to cultivate a loyal customer base through automated services. We can assist you in optimizing your backend operations to provide exceptional, customer-centric experiences. Today, our service solutions can be a major business asset with a robust service center platform. Our software is integrated, multi-user, online, and modular in design. ",
      link: "/products/service_center_management_crm",
    },
    {
      icon: "/icons/doctorclinic.svg",
      name: "Doctor Clinic Management",
      details:
        "Doctor Clinic Management is designed to efficiently maintain records of prescriptions, bills, and other essential information. This software offers a range of features, including an appointment scheduler, electronic health records, SMS notifications, medical billing, and more. If you're in search of reliable practice management software, look no further. Our Doctor Clinic Management solution facilitates the creation of doctor profiles and the management of patient records and consultations.",
      link: "/products/clinic_management_software",
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
