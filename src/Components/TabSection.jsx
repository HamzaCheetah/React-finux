// import { useState } from "react";
// import image20 from "/Icon.png";

// function TabSection() {
//   const [activeTab, setActiveTab] = useState("tab1");

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   return (
//     <>
//       <div className="tab-section  dark:bg-black  p-5 rounded-lg backdrop-filter  mt-16 ">
//         <div className="flex flex-wrap gap-1 container mx-auto">
//           <div>
//             <h1 className="font-bold text-3xl dark:text-white">
//               finulab Products
//             </h1>
//           </div>
//           <div className="ml-auto">
//             <button
//               className={` rounded-lg font-semibold flex-grow w-20 ${
//                 activeTab === "tab1" ? "text-yellow-500" : "text-gray-500"
//               }`}
//               onClick={() => handleTabClick("tab1")}
//             >
//               finux
//             </button>
//             <button
//               className={` rounded-lg font-semibold flex-grow w-20 ${
//                 activeTab === "tab2" ? "text-yellow-500" : "text-gray-500"
//               }`}
//               onClick={() => handleTabClick("tab2")}
//             >
//               finulab
//             </button>
//           </div>
//         </div>
//         <hr />
//         <div className="mt-16">
//           <div
//             id="tab1"
//             className={`tab-content text-gray-700 flex gap-5  ${
//               activeTab !== "tab1" && "hidden"
//             }`}
//           >
//             <img src={image20} alt="icon" className="w-20 h-20" />
//             <p className="text-grey-500 text-justify leading-loose">
//               finulab is a vibrant haven where uncensored conversations thrive
//               among market enthusiasts. authenticity reigns supreme as free
//               voices transcend barriers to ignite meaningful discussions.Whats
//               more? your participation doesnt go unnoticed. engage freely and
//               receive more than just insights - receive finux payments as a
//               token of our appreciation.
//             </p>
//           </div>
//           <div
//             id="tab2"
//             className={`tab-content text-gray-700 flex gap-5 ${
//               activeTab !== "tab2" && "hidden"
//             }`}
//           >
//             <img src={image20} alt="icon" className="w-20 h-20" />
//             <p className="text-grey-500 text-justify leading-loose">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
//               aspernatur rem itaque doloribus culpa similique rerum provident id
//               quos sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Molestias aspernatur rem itaque doloribus culpa similique rerum
//               provident id quos sed. Lorem ipsum dolor sit amet consectetur
//               adipisicing elit. Molestias aspernatur rem itaque doloribus culpa
//               similique rerum provident id quos sed.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TabSection;
import { useState } from "react";
import image20 from "/Icon.png";

function TabSection() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="tab-section bg-white dark:!bg-black p-5 rounded-lg backdrop-filter mt-16">
        <div className="flex flex-wrap gap-1 container mx-auto">
          <div>
            <h1 className="font-bold text-3xl dark:text-white">
              finulab Products
            </h1>
          </div>
          <div className="ml-auto">
            <button
              className={`rounded-lg font-semibold flex-grow w-20 ${
                activeTab === "tab1" ? "text-yellow-500" : "text-gray-500"
              }`}
              onClick={() => handleTabClick("tab1")}
            >
              finux
            </button>
            <button
              className={`rounded-lg font-semibold flex-grow w-20 ${
                activeTab === "tab2" ? "text-yellow-500" : "text-gray-500"
              }`}
              onClick={() => handleTabClick("tab2")}
            >
              finulab
            </button>
          </div>
        </div>
        <hr />
        <div className="mt-16">
          <div
            id="tab1"
            className={`tab-content text-gray-700 dark:text-gray-300 flex gap-5 ${
              activeTab !== "tab1" && "hidden"
            }`}
          >
            <img
              src={image20}
              alt="icon"
              className="h-10 w-10 md:w-20 md:h-20"
            />
            <p className="text-gray-500 dark:text-gray-400 text-justify md:leading-loose">
              finulab is a vibrant haven where uncensored conversations thrive
              among market enthusiasts. authenticity reigns supreme as free
              voices transcend barriers to ignite meaningful discussions.Whats
              more? your participation doesnt go unnoticed. engage freely and
              receive more than just insights - receive finux payments as a
              token of our appreciation.
            </p>
          </div>
          <div
            id="tab2"
            className={`tab-content text-gray-700 dark:text-gray-300 flex gap-5 ${
              activeTab !== "tab2" && "hidden"
            }`}
          >
            <img
              src={image20}
              alt="icon"
              className="h-10 w-10 md:w-20 md:h-20"
            />
            <p className="text-gray-500 dark:text-gray-400 text-justify md:leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              aspernatur rem itaque doloribus culpa similique rerum provident id
              quos sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aspernatur rem itaque doloribus culpa similique rerum
              provident id quos sed. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestias aspernatur rem itaque doloribus culpa
              similique rerum provident id quos sed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabSection;
