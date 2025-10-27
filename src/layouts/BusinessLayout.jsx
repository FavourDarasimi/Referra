import { useState } from "react";
import BusinessSideBar from "../components/BusinessSideBar";
import BusinessTopBar from "../components/BusinessTopBar";
import { Outlet, useLocation } from "react-router-dom";

const BusinessLayout = () => {
  const [activeNav, setActiveNav] = useState();

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-30 bg-white">
        <BusinessTopBar userName="Michael" />
      </div>

      <div className="flex-1 flex bg-[#F9FAFB] p-[20px] gap-[20px]">
        <div className="fixed left-0 top-[80px] flex-1 bottom-0 z-20">
          <BusinessSideBar activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>

        <div className="flex-1 ml-[280px] mt-[80px] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BusinessLayout;
