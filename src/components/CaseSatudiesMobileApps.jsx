import Image from "next/image";
import React from "react";

const CaseSatudiesMobileApps = () => {
  const mobileapps = [
    {
      name: "",
      imgsrc: "/case_studies/mobile apps image for case studies.webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/mobile apps image for case studies 1.webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/mobile apps image for case studies 2.webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/mobile apps image for case studies 3.webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/mobile apps image for case studies 4.webp",
    },
    {
      name: "",
      imgsrc: "/case_studies/mobile apps image for case studies 5.webp",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mobileapps.map((item, index) => (
        <div key={index} className="p-4 flex flex-col gap-4 rounded-md boxsh ">
          <div className="text-center text-lg font-medium text-[#666666]">
            {item.name}
          </div>
          <div>
            <Image
              src={item.imgsrc}
              alt="Mobile Apps"
              width={1024}
              height={2225}
              className=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseSatudiesMobileApps;
