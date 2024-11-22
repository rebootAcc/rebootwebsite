import ProductsPageDesign from "@/components/ProductsPageDesign";
import Head from "next/head";
import React from "react";

const Educationalconsultantcrm = ({
  title,
  content,
  productfeatures,
  perfects,
  othersoftware,
}) => {
  return (
    <>
      <Head>
        <title>Reboot AI | Products</title>
      </Head>
      <div>
        <ProductsPageDesign
          title={title}
          content={content}
          productfeatures={productfeatures}
          perfects={perfects}
          othersoftware={othersoftware}
        />
      </div>
    </>
  );
};

export default Educationalconsultantcrm;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          product: "educational_CRM_advanced",
        },
        params: {
          product: "clinic_management_software",
        },
        params: {
          product: "service_center_management_crm",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Mock data for services
  const serviceData = {
    educational_CRM_advanced: {
      title: "Educational CRM Advanced",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: "Educational CRM Advanced",
        servicedesc1:
          "A CRM for Education is a comprehensive student management solution tailored to meet the specific needs of educational institutions such as universities, schools, coaching centers, consultancies, and other organizations within the education sector. Our CRM enhances the productivity of the admission process and improves conversion rates for these organizations. With our platform, you can manage multiple leads in one place and prioritize them effectively.",
        servicedesc2:
          " Our education agent CRM facilitates seamless communication and engagement with leads through both online and offline channels. Designed to streamline the enrollment process, this CRM empowers institutions with efficient lead management, nurturing, and smooth conversion.</br>Empower your candidates to monitor their entire journey with a customizable centralized dashboard. Enhance the student experience and boost retention at every stage through a unified dashboard that allows them to apply, track progress, communicate, and enroll in additional courses. Create sophisticated, feature-rich application forms in just minutes, offering prospective students an engaging experience they'll remember. This CRM software is ideal for small businesses looking to manage leads effectively. Our advanced Educational CRM software delivers cutting-edge tech solutions across various industries. .",
      },
      productfeatures: [
        "Dynamic Dashboard",
        "Appointment Scheduling",
        "Billing and Invoicing",
        "Patient Management",
        "Reporting and Analytics",
        "Manage Multiple Clinics",
        "Prescription Management",
        "WA Automation",
      ],
      perfects: [
        "If You Have a Clinic",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
      ],
      othersoftware: [
        { imgsrc: "/images/kivihealth.png" },
        { imgsrc: "/images/bajajhealth.png" },
        { imgsrc: "/images/kivihealth.png" },
        { imgsrc: "/images/bajajhealth.png" },
        { imgsrc: "/images/kivihealth.png" },
      ],
    },
    clinic_management_software: {
      title: "Doctor Clinic Management",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: "Doctor Clinic Management",
        servicedesc1:
          "Doctor Clinic Management is designed to efficiently maintain records of prescriptions, bills, and other essential information. This software offers a range of features, including an appointment scheduler, electronic health records, SMS notifications, medical billing, and more. If you're in search of reliable practice management software, look no further. Our Doctor Clinic Management solution facilitates the creation of doctor profiles and the management of patient records and consultations.",
        servicedesc2:
          "We developed a medical management software that provides a comprehensive overview of all clinics and sessions, along with their current statuses. This doctor clinic management software guides you through each step, from gathering patient information to processing billing. It is specifically designed to assist clinics of all sizes in efficiently managing their daily operations. With our solution, you have all the tools necessary to run your clinic effectively.</br> Our software streamlines the management process, saving you both time and money through automation. With our online appointment booking system, your clients can easily schedule appointments at times that work for them. This user-friendly, cost-effective, and robust software empowers doctors to manage their clinics effortlessly. ",
      },
      productfeatures: [
        "Dynamic Dashboard",
        "Appointment Scheduling",
        "Billing and Invoicing",
        "Patient Management",
        "Reporting and Analytics",
        "Manage Multiple Clinics",
        "Prescription Management",
        "WA Automation",
      ],
      perfects: [
        "If You Have a Clinic",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
      ],
      othersoftware: [
        { imgsrc: "/images/kivihealth.png" },
        { imgsrc: "/images/bajajhealth.png" },
        { imgsrc: "/images/kivihealth.png" },
        { imgsrc: "/images/bajajhealth.png" },
        { imgsrc: "/images/kivihealth.png" },
      ],
    },
    service_center_management_crm: {
      title: "Service Centre Solutions",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: "Service Centre Solutions",
        servicedesc1:
          "Leverage the capabilities of Service Centre Solutions to cultivate a loyal customer base through automated services. We can assist you in optimizing your backend operations to provide exceptional, customer-centric experiences. Today, our service solutions can be a major business asset with a robust service center platform. Our software is integrated, multi-user, online, and modular in design. ",
        servicedesc2:
          "We provide comprehensive Service Centre Solutions that streamline your service center operations. Our solutions facilitate effortless job management, real-time job updates, and comprehensive business analysis. Optimize your services for greater efficiency, performance, and speed. </br> We provide you with essential insights and tools to enhance your operational effectiveness. Optimize Your Services for Greater Efficiency, Performance, and Speed. We offer essential insights and tools to enhance your operational effectiveness. Our solutions are designed to assist in managing product services at any stage of development. No matter what your products and services are, our extensive experience equips us to provide the right solutions for you. With robust options at your disposal, we empower our clients to generate new revenue streams, integrate technical solutions, enhance efficiency, increase customer loyalty, and achieve a variety of other goals.",
      },
      productfeatures: [
        "Dynamic Dashboard",
        "Appointment Scheduling",
        "Billing and Invoicing",
        "Patient Management",
        "Reporting and Analytics",
        "Manage Multiple Clinics",
        "Prescription Management",
        "WA Automation",
      ],
      perfects: [
        "If You Have a Clinic",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
        "If You Are a Doctor",
      ],
      othersoftware: [
        { imgsrc: "/images/kivihealth.png" },
        { imgsrc: "/images/bajajhealth.png" },
        { imgsrc: "/images/kivihealth.png" },
        { imgsrc: "/images/bajajhealth.png" },
        { imgsrc: "/images/kivihealth.png" },
      ],
    },
  };

  const { product } = params;

  // Fetch data based on the service
  const data = serviceData[product];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: data.title,
      content: data.content,
      productfeatures: data.productfeatures,
      perfects: data.perfects,
      othersoftware: data.othersoftware,
    },
  };
};
