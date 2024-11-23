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
        "We provide cutting-edge web development services designed to enhance your business revenue. Our tailored website and web application development solutions focus on your unique needs. With specialized skills in E-commerce store development and dynamic website creation, we also support the development of B2B applications and SaaS application development. Our team delivers fully functional, robust, and scalable software products that stand the test of time.",
      link: "/services/custom_website_development",
    },
    {
      icon: "/newicons/ecommerce.svg",
      name: "E-commerce Development",
      details:
        "We offer custom E-commerce website solutions with best Technology. Our E-commerce Development includes HTML, CSS, Javasciept , Woocommerce, Magento & Shopify. We provide  Scalable & Hassle free ecommerce solution along with Secure Online Shopping Experience.",
      link: "/services/e-commerce_store_development",
    },
    {
      icon: "/newicons/appdevicon.svg",
      name: "Android App Development",
      details:
        "Whether you need a native or hybrid platform, we provide the best unique technologies for  Android . Our team specializes in developing comprehensive Flutter applications and offers AI and ML integration services. With a strong and adaptable architecture, our web applications ensure stability and scalability. Collaborate with us to develop cross-platform and hybrid apps, helping you to lower the overall costs of your business project. Feel Free to contact us for further consultation.",
      link: "/services/android_app_development",
    },
    {
      icon: "/newicons/webapp.svg",
      name: "Web Apps/SAAS Development",
      details:
        "SAAS Applications are accessed over the internet through a browser or a dedicated client. Such applications require security, integration, proper deployment, and of course maintenance. At Reboot AI Private Limited, we offer the best SAAS developer in Kolkata who can develop SAAS apps with protection against increasing cyber threats. It is one of the fastest-growing business models in the industry that can meet customer demands....",
      link: "/services/saas_application_development",
    },

    {
      icon: "/newicons/googlemarketing.svg",
      name: "Google Marketing",
      details:
        "To achieve the best results from your campaigns and drive revenue growth for your business, utilizing Google marketing services is essential. Google Ads currently dominates the market, providing superior returns on investment. To enhance your online presence and ensure the success of your campaigns, it's vital to seek guidance that can simplify the vast landscape of online advertising. With millions of users accessing the Google search engine every day, there is no larger targeted audience available",
      link: "/services/google_marketing",
    },
    {
      icon: "/newicons/brandidenty.svg",
      name: "PR & Brand Building",
      details:
        "Our marketing solutions are designed to assist businesses of all sizes in generating more leads. We provide business consulting and performance marketing services. We also manage our client’s PR and branding strategies. As a Google Partner Firm, we specialize in Google Marketing and Social Media Solutions, ensuring that brands gain visibility and audience on a global scale.",
      link: "/services/pr_brand_building",
    },
    {
      icon: "/newicons/uiuxicon.svg",
      name: "Creative UI/UX Solutions",
      details:
        "Our Creative UI/UX services specialize in designing user interfaces and experiences for websites, applications, and various digital products. These services enhance user-friendliness, boost customer engagement, and drive revenue growth. Partner with us to turn your vision into a seamless user experience that stands out in the industry. We craft intuitive and user-centric UI/UX designs that adapt to your evolving business needs.",
      link: "/services/creative_ui_design",
    },
    {
      icon: "/newicons/it.svg",
      name: "IT Consultation",
      details:
        "IT consultation plays a crucial role in meeting project goals within the specified time and budget constraints. This service facilitates the seamless operation of a company and aids in adapting to evolving infrastructures. In today's landscape, IT consultation encompasses all aspects of the IT industry and offers strategic services to prospective clients.If you're seeking an IT consultation company in Kolkata, look no further.",
      link: "/services/it_consultation",
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
