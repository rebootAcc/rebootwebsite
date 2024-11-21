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
          product: "educational_consultant_crm",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Mock data for services
  const serviceData = {
    educational_consultant_crm: {
      title: "Educational Consultant CRM",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brands image in the audiences mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
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
