import Image from "next/image";
import React from "react";

const CaseStudiesBrands = () => {
  const brands = [
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (1).webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (2).webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (3).webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (4).webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (5).webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (6).webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (7).webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (8).webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (9).webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/brand logo image for case studies (10).webp",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {brands.map((item, index) => (
        <div key={index} className="flex flex-col gap-4 rounded-md boxsh ">
          <div>
            <Image
              src={item.imgsrc}
              alt="Brands"
              width={1280}
              height={720}
              className=" rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesBrands;
