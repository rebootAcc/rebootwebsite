import CaseComponent from "@/components/CaseComponent";
import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import React from "react";

export async function getStaticProps() {
  const pageData = [
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-1.png",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-2.png",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Car Rental Services",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-3.png",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Doctor Dental Clinic",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-4.png",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Educational",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-5.png",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Interior Studio",
    },
  ];
  return { props: { pageData } };
}

const CaseStudies = ({ pageData }) => {
  return (
    <>
      <Head>
        <title>Reboot AI | Case Studies</title>
      </Head>
      <SubPageBanner heading={"Case Studies"} />
      <main className="py-11 px-16 flex flex-col gap-6">
        <div className="flex gap-6 justify-between">
          <button
            type="button"
            className="text-2xl font-medium text-center px-14 py-2 bg-primary hover:bg-primary text-white rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            View All
          </button>
          <button
            type="button"
            className="text-2xl font-medium text-center px-14 py-2 bg-primary/10 text-primary hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            Website
          </button>
          <button
            type="button"
            className="text-2xl font-medium text-center px-14 py-2 bg-primary/10 text-primary hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            Webapps
          </button>
          <button
            type="button"
            className="text-2xl font-medium text-center px-14 py-2 bg-primary/10 text-primary hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            Mobile
          </button>
          <button
            type="button"
            className="text-2xl font-medium text-center px-14 py-2 bg-primary/10 text-primary hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            Brands
          </button>
        </div>
        <div className="w-full h-0.5 bg-[#aaa]"></div>
        <div className="grid grid-cols-3 gap-6">
          {pageData.map((dtat, index) => (
            <CaseComponent cases={dtat} key={index} />
          ))}
        </div>
      </main>
    </>
  );
};

export default CaseStudies;
