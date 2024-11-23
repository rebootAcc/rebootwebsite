import Image from "next/image";
import React from "react";

const CaseStudiesWebApps = () => {
  const webapps = [
    {
      name: "Service Center CRM",
      imgsrc: "/case_studies/Service Center CRM.webp",
    },
    {
      name: "Educational Consultant CRM",
      imgsrc: "/case_studies/Educational Consultant CRM.webp",
    },
    {
      name: "Doctor clinic management software",
      imgsrc: "/case_studies/doctor clinic management software.webp",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {webapps.map((item, index) => (
        <div key={index} className="p-4 flex flex-col gap-4 rounded-md boxsh ">
          <div className="text-center text-lg font-medium text-[#666666]">
            {item.name}
          </div>
          <div>
            <Image
              src={item.imgsrc}
              alt="Web Apps"
              width={1280}
              height={720}
              className=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudiesWebApps;
