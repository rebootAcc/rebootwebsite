import { useState } from "react";
import CaseSatudiesMobileApps from "@/components/CaseSatudiesMobileApps";
import CaseStudiesBrands from "@/components/CaseStudiesBrands";
import CaseStudiesWebApps from "@/components/CaseStudiesWebApps";
import CaseStudiesWebsite from "@/components/CaseStudiesWebsite";
import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState("website"); // Default tab is "website"

  const renderComponent = () => {
    switch (activeTab) {
      case "website":
        return <CaseStudiesWebsite />;
      case "webapps":
        return <CaseStudiesWebApps />;
      case "mobileapps":
        return <CaseSatudiesMobileApps />;
      case "brands":
        return <CaseStudiesBrands />;
      default:
        return <CaseStudiesWebsite />;
    }
  };

  return (
    <>
      <Head>
        <title>
          Check our Real Client's Real Stories - Portfolios of Web & Apps
        </title>
        <meta
          name="description"
          content="Are you looking for a branded content & top noth agency for your vision, you are in the right place.Check all our portfolios to get a clear vision."
        />
      </Head>
      <SubPageBanner heading={"Portfolios"} />
      <main className="py-11 px-8 md:px-12 xlg:px-16 flex flex-col gap-6">
        <div className="flex sm:gap-2 md:gap-6 md:justify-between  flex-wrap">
          <button
            type="button"
            className={`lg:text-xl  text-base md:text-lg xlg:text-2xl md:font-medium text-center px-4 lg:px-10 xlg:px-14 py-1 md:py-2 ${
              activeTab === "website"
                ? "bg-primary text-white"
                : "bg-primary/10 text-primary"
            } hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300`}
            onClick={() => setActiveTab("website")}
          >
            Website
          </button>
          <button
            type="button"
            className={`lg:text-xl  text-base md:text-lg xlg:text-2xl md:font-medium text-center px-4 lg:px-10 xlg:px-14 py-1 md:py-2 ${
              activeTab === "webapps"
                ? "bg-primary text-white"
                : "bg-primary/10 text-primary"
            } hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300`}
            onClick={() => setActiveTab("webapps")}
          >
            Web Apps
          </button>
          <button
            type="button"
            className={`lg:text-xl  text-base md:text-lg xlg:text-2xl md:font-medium text-center px-4 lg:px-10 xlg:px-14 py-1 md:py-2 ${
              activeTab === "mobileapps"
                ? "bg-primary text-white"
                : "bg-primary/10 text-primary"
            } hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300`}
            onClick={() => setActiveTab("mobileapps")}
          >
            Mobile Apps
          </button>
          <button
            type="button"
            className={`lg:text-xl  text-base md:text-lg xlg:text-2xl md:font-medium text-center px-4 lg:px-10 xlg:px-14 py-1 md:py-2 ${
              activeTab === "brands"
                ? "bg-primary text-white"
                : "bg-primary/10 text-primary"
            } hover:bg-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300`}
            onClick={() => setActiveTab("brands")}
          >
            Brands
          </button>
        </div>
        <div className="w-full h-0.5 bg-[#aaa]"></div>
        {renderComponent()}
      </main>
    </>
  );
};

export default CaseStudies;
