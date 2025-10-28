// import { useState } from "react";
// import BusinessSideBar from "../components/BusinessSideBar";
// import BusinessTopBar from "../components/BusinessTopBar";
// import { Outlet, useLocation } from "react-router-dom";

// const BusinessLayout = () => {
//   const [activeNav, setActiveNav] = useState();

//   return (
//     <div className="flex flex-col h-screen bg-white">
//       <div className="fixed top-0 left-0 right-0 z-30 bg-white">
//         <BusinessTopBar userName="Michael" />
//       </div>

//       <div className="flex-1 flex bg-[#F9FAFB] p-[20px] gap-[20px]">
//         <div className="fixed left-0 top-[80px] flex-1 bottom-0 z-20">
//           <BusinessSideBar activeNav={activeNav} setActiveNav={setActiveNav} />
//         </div>

//         <div className="flex-1 ml-[280px] mt-[80px] ">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessLayout;

import { useState } from "react";
import BusinessSideBar from "../components/BusinessSideBar";
import BusinessTopBar from "../components/BusinessTopBar";
import { Outlet, useLocation } from "react-router-dom";

const BusinessLayout = () => {
  const [activeNav, setActiveNav] = useState();
  const location = useLocation();
  const isFormBuilder = location.pathname.includes("/form-builder");

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-30 bg-white">
        <BusinessTopBar userName="Michael" />
      </div>

      <div className="flex flex-1 bg-[#F9FAFB]">
        <div
          className={`fixed left-0 top-[80px] bottom-0 z-20 ${
            isFormBuilder ? "w-[60px] mx-[20px]" : "w-[240px]"
          }`}
        >
          <BusinessSideBar activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>

        <div
          className={`flex-1 mt-[80px] ${
            isFormBuilder ? "ml-[80px]" : "ml-[240px]"
          } p-[20px]`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BusinessLayout;
