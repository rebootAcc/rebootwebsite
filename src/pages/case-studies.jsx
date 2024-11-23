import CaseComponent from "@/components/CaseComponent";
import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import React from "react";

export async function getStaticProps() {
  const pageData = [
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-1.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-2.webp",
      clientlogo: "/clients/siliguricarrental.webp",
      category: "Car Rental Services",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-3.webp",
      clientlogo: "/clients/chiangdentalclinic.webp",
      category: "Doctor Dental Clinic",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-4.webp",
      clientlogo: "/clients/edunethub.webp",
      category: "Educational",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-5.webp",
      clientlogo: "/clients/gravitas.webp",
      category: "Interior Studio",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-6.webp",
      clientlogo: "/clients/mietcollege.webp",
      category: "Educational",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/case-studies-7.webp",
      clientlogo: "/clients/smilecaredentalclinic.webp",
      category: "Doctor Dental Clinic",
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
      <main className="py-11 px-8 md:px-12 xlg:px-16 flex flex-col gap-6">
        <div className="flex gap-6 justify-between overflow-hidden lg:overflow-visible overflow-x-scroll lg:overflow-x-visible">
          <button
            type="button"
            className="text-base lg:text-xl xlg:text-2xl font-medium text-center text-nowrap px-10 xlg:px-14 py-2 bg-primary hover:bg-primary text-white rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            View All
          </button>
          <button
            type="button"
            className="text-xl xlg:text-2xl font-medium text-center px-10 xlg:px-14 py-2 bg-primary/10 text-primary hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            Website
          </button>
          <button
            type="button"
            className="text-xl xlg:text-2xl font-medium text-center px-10 xlg:px-14 py-2 bg-primary/10 text-primary hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            Webapps
          </button>
          <button
            type="button"
            className="text-xl xlg:text-2xl font-medium text-center px-10 xlg:px-14 py-2 bg-primary/10 text-primary hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            Mobile
          </button>
          <button
            type="button"
            className="text-xl xlg:text-2xl font-medium text-center px-10 xlg:px-14 py-2 bg-primary/10 text-primary hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
          >
            Brands
          </button>
        </div>
        <div className="w-full h-0.5 bg-[#aaa]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageData.map((dtat, index) => (
            <CaseComponent cases={dtat} key={index} />
          ))}
        </div>
      </main>
    </>
  );
};

export default CaseStudies;
