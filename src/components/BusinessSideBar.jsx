import React, { useState } from "react";
import { GrOverview } from "react-icons/gr";
import { MdDrafts, MdPublish } from "react-icons/md";
import { FaFileAlt, FaComments } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";

const BusinessSideBar = ({ activeNav, setActiveNav }) => {
  // Inside the component:
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  if (path.includes("/overview")) {
    setActiveNav("Overview");
  } else if (path.includes("/drafts")) {
    setActiveNav("Drafts");
  }
  const topNavItems = [
    { name: "Overview", icon: GrOverview },
    { name: "Drafts", icon: MdDrafts },
    { name: "Templates", icon: FaFileAlt },
    { name: "Published", icon: MdPublish },
    { name: "Responses", icon: FaComments },
    { name: "Billing", icon: IoSettingsSharp },
  ];

  const bottomNavItems = [
    { name: "Settings", icon: IoSettingsSharp },
    { name: "Help & support", icon: HiOutlineQuestionMarkCircle },
  ];

  const handleClick = (item) => {
    setActiveNav(item.name);
    if (item.name === "Drafts") navigate("/business/drafts");
    if (item.name === "Overview") navigate("/business/overview");
    if (item.name === "Templates") navigate("/business/templates");
  };
  return (
    <div className="w-[240px] mt-[20px]  flex flex-col">
      {/* Logo */}

      {/* Navigation Items */}
      <nav className="flex-1 space-y-[24px]  py-[20px]">
        <div className="space-y-[8px]">
          {topNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={`w-full flex items-center gap-[15px] px-[20px] py-[12px] rounded-full transition-all ${
                  isActive ? "bg-[#F0EBFD]  text-[#6938EF]" : "text-[#667085] "
                }`}
              >
                <Icon className="w-[17px] h-[20px]" />
                <span className="text-[16px]">{item.name}</span>
                {item.name === "Billing" ? (
                  <span className="ml-auto bg-[#6938EF] text-[10px] text-white rounded-full w-[16px] h-[16px]">
                    1
                  </span>
                ) : (
                  ""
                )}
              </button>
            );
          })}
        </div>
        <div className="flex-grow h-px bg-[#E4E7EC]"></div>
        <div className="space-y-[8px]">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center gap-[15px] px-[20px] py-[12px] rounded-full transition-all ${
                  isActive ? "bg-[#F0EBFD]  text-[#6938EF]" : "text-[#667085] "
                }`}
              >
                <Icon className="w-[17px] h-[20px]" />
                <span className="text-[16px]">{item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default BusinessSideBar;
