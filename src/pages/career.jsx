import { useState, useEffect } from "react";
import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import Link from "next/link";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineAddLocation, MdOutlineWatchLater } from "react-icons/md";
import CareerApplicationPopup from "@/components/CareerApplicationPopup";

export async function getStaticProps() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    const pageData = await fetch(`${backendUrl}/api/jobpost/get`)
      .then((res) => res.json())
      .then((data) => data.data);

    const jobRoles = await fetch(`${backendUrl}/api/jobpost/jobroles`)
      .then((res) => res.json())
      .then((data) => data.data || []); // Ensure an empty array if no roles are found

    return { props: { pageData, jobRoles } };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { pageData: [], jobRoles: [] } }; // Return empty arrays in case of error
  }
}

const Career = ({ pageData, jobRoles }) => {
  const [selectedCategory, setSelectedCategory] = useState("View All");
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("View All"); // Toggle back to "View All"
    } else {
      setSelectedCategory(category);
    }
  };

  const handleApplyNow = (job) => {
    setSelectedJob(job); // Set the clicked job post
    setPopupVisible(true); // Open the popup
  };

  const handleClosePopup = () => {
    setPopupVisible(false); // Close the popup
    setSelectedJob(null); // Clear selected job post
  };

  // Filter careers based on selected category
  const filteredCareers =
    selectedCategory === "View All"
      ? pageData
      : pageData.filter((career) => career.jobrole === selectedCategory);

  return (
    <>
      <Head>
        <title>Reboot AI | Career</title>
      </Head>
      <SubPageBanner heading={"Career"} />
      <main className="xl:p-16 lg:p-8 p-4 flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <div className="px-8 h-[2.5rem] w-fit flex justify-center items-center bg-primary text-white text-lg font-semibold rounded-md ">
            We Are Hiring
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[#333333] text-2xl md:text-3xl lg:text-4xl font-semibold ">
              Be part of our mission Life at
              <span className="text-primary"> Reboot</span>
            </h1>
            <p className="lg:text-lg text-sm text-[#666666] ">
              We&#x27;re looking for passionate people to join us on our
              mission. We value flat hierarchies, clear communication, and full
              ownership and responsibility. We&#x27;re looking for passionate
              people to join us on our mission. We value flat hierarchies, clear
              communication, and full ownership and responsibility.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <div className="py-4 grid md:grid-cols-4 grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8 border-b border-[#AAAAAA]">
            {/* Category Buttons (Job Roles) */}
            {[
              { name: "View All" },
              ...jobRoles.map((role) => ({ name: role })),
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(item.name)}
                className={`lg:text-lg text-sm font-medium flex justify-center gap-4 items-center text-center px-2 md:px-4 lg:px-8 h-[2.5rem] ${
                  selectedCategory === item.name
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary"
                } hover:bg-primary hover:text-white rounded-lg border-2 border-primary transition-all duration-300`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {/* Job Post Listings */}
            {filteredCareers.map((item, index) => (
              <section
                key={index}
                className="py-4 w-full border-b border-[#AAAAAA]"
              >
                <section className="flex flex-col gap-6">
                  <section className="lg:w-[80%] w-full flex flex-col gap-2 lg:gap-4">
                    <h1 className="lg:text-2xl text-xl font-semibold text-[#333333]">
                      {item.jobPostName}
                    </h1>
                    <p
                      className="lg:text-lg text-sm text-[#666666]"
                      dangerouslySetInnerHTML={{ __html: item.jobDescription }}
                    ></p>
                  </section>
                  <section className="w-full flex md:flex-row flex-col md:gap-0 gap-6 md:justify-between md:items-center">
                    <section className="flex gap-4 flex-wrap">
                      {item.jobTags &&
                        item.jobTags.map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="text-lg font-medium flex justify-center items-center text-center px-4 py-2 bg-primary/10 hover:bg-primary text-primary rounded-lg border-2 border-primary hover:text-white transition-all duration-300"
                          >
                            {tag}
                          </div>
                        ))}
                    </section>
                    <section className="flex items-center gap-4">
                      <Link
                        href={""}
                        className="h-[2.5rem] px-3 flex justify-center items-center text-white bg-[#25D366] rounded-md"
                      >
                        <IoLogoWhatsapp />
                      </Link>
                      <button
                        onClick={() => handleApplyNow(item)}
                        className="text-lg flex items-center gap-1 font-medium text-center md:px-4 px-4 lg:px-8 h-[2.5rem] bg-primary hover:bg-primary/10 text-white rounded-lg border-2 border-primary hover:text-primary transition-all duration-300"
                      >
                        Apply Now <HiMiniArrowTopRightOnSquare />
                      </button>
                    </section>
                  </section>
                </section>
              </section>
            ))}
          </div>
        </section>
      </main>
      {popupVisible && (
        <CareerApplicationPopup
          jobDetails={selectedJob}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default Career;
