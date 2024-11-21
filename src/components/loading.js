// import Lottie from "lottie-react";
// import animationData from "../../public/icons/loading.json";
// import React from "react";

// const Loading = () => {
//   return (
//     <div className="bg-white min-h-screen flex flex-col gap-28 items-center justify-center">
//       <Lottie
//         animationData={animationData}
//         className="flex-shrink-0"
//         loop={true}
//       />
//       <h1 className="text-5xl font-medium text-center text-[#333]">
//         Loading...
//       </h1>
//     </div>
//   );
// };

// export default Loading;

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "../../public/icons/loading.json";

const Loading = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col gap-28 items-center justify-center">
      <Lottie animationData={animationData} loop={true} />
      <h1 className="text-5xl font-medium text-center text-[#333]">
        Loading...
      </h1>
    </div>
  );
};

export default Loading;
