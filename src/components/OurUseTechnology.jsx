import React from "react";
import HeadingComponent from "./HeadingComponent";

import SliderComponent from "./SliderComponent";

const OurUseTechnology = () => {
  const companys = [
    { imgsrc: "/images/adobe-logo.webp", imgalt: "adobe" },
    { imgsrc: "/images/android-studio-logo.webp", imgalt: "android studio" },
    { imgsrc: "/images/asgularjs-logo.webp", imgalt: "asgularjs" },
    { imgsrc: "/images/nodejs-logo.webp", imgalt: "nodejs" },
    { imgsrc: "/images/mongodb-logo.webp", imgalt: "mongodb" },
    { imgsrc: "/images/nextjs-logo.webp", imgalt: "nextjs" },
    { imgsrc: "/images/flutter-logo.webp", imgalt: "flutter" },
    { imgsrc: "/images/jquery-logo.webp", imgalt: "jquery" },
    { imgsrc: "/images/javascript-logo.webp", imgalt: "javascript" },
    { imgsrc: "/images/mysql logo.webp", imgalt: "mysql" },
    { imgsrc: "/images/html-logo.webp", imgalt: "html" },
    { imgsrc: "/images/fogma-logo.webp", imgalt: "figma" },
    { imgsrc: "/images/amazon-aws-logo.webp", imgalt: "amazon-aws-logo" },
    { imgsrc: "/images/Azure-logo.webp", imgalt: "Azure" },
    { imgsrc: "/images/css-logo.webp", imgalt: "css" },
    { imgsrc: "/images/tailwindcss-logo.webp", imgalt: "tailwindcss" },
    { imgsrc: "/images/react-native-logo.webp", imgalt: "react-native" },
    { imgsrc: "/images/react-logo.webp", imgalt: "react-js" },

    { imgsrc: "/images/python-logo.webp", imgalt: "python" },
    { imgsrc: "/images/PostgreSQL-logo.webp", imgalt: "PostgreSQL" },

    { imgsrc: "/images/gpt-module.webp", imgalt: "gpt" },

    { imgsrc: "/images/google-cloud-logo.webp", imgalt: "google" },
    { imgsrc: "/images/Go-Language-logo.webp", imgalt: "Go" },
  ];

  return (
    <div className="xl:p-16 lg:p-8 xs:p-4 flex flex-col gap-8">
      <HeadingComponent
        heading1={"Transforming Ideas Into Reality"}
        heading2={"Leveraging the Latest Tech Stack"}
      />
      <div className="w-full">
        <SliderComponent slides={companys} />
      </div>
    </div>
  );
};

export default OurUseTechnology;
