import React, { useState } from "react";
import { GrOverview } from "react-icons/gr";
import { MdDrafts, MdPublish } from "react-icons/md";
import { FaFileAlt, FaComments } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";

const BusinessSideBar = ({ activeNav, setActiveNav }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const isFormBuilder = path.includes("/form-builder");

  if (path.includes("/overview")) {
    setActiveNav("Overview");
  } else if (path.includes("/drafts")) {
    setActiveNav("Drafts");
  } else if (path.includes("/templates") || path.includes("/form-builder")) {
    setActiveNav("Templates");
  } else if (path.includes("/published")) {
    setActiveNav("Published");
  } else if (path.includes("/responses")) {
    setActiveNav("Responses");
  } else if (path.includes("/billing")) {
    setActiveNav("Billing");
  } else if (path.includes("/settings")) {
    setActiveNav("Settings");
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
    if (item.name === "Published") navigate("/business/published");
    if (item.name === "Responses") navigate("/business/responses");
    if (item.name === "Billing") navigate("/business/billing");
    if (item.name === "Settings") navigate("/business/settings");
  };

  if (isFormBuilder) {
    return (
      <div className="flex flex-col items-center  gap-[24px] mt-[20px]">
        <div className="flex flex-col gap-[8px] py-[20px]">
          {topNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={`py-[12px] px-[20px] rounded-full transition-all duration-300 flex items-center justify-center ${
                  isActive ? "bg-[#F0EBFD] text-[#6938EF]" : "text-[#667085] "
                }`}
                title={item.name}
              >
                <Icon className="w-[20px] h-[20px]" />
              </button>
            );
          })}
        </div>

        <div className="w-[20px] h-px bg-[#E4E7EC]"></div>

        <div className="flex flex-col gap-[8px] mt-auto">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`py-[12px] px-[20px] rounded-full transition-all duration-300 flex items-center justify-center ${
                  isActive ? "bg-[#F0EBFD] text-[#6938EF]" : "text-[#667085] "
                }`}
                title={item.name}
              >
                <Icon className="w-[24px] h-[24px]" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-[240px] mt-[20px] flex flex-col pl-[20px]">
      <nav className="flex-1 space-y-[24px] py-[20px]">
        <div className="space-y-[8px]">
          {topNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={`w-full flex items-center gap-[15px] px-[20px] py-[12px] rounded-full transition-all ${
                  isActive ? "bg-[#F0EBFD] text-[#6938EF]" : "text-[#667085]"
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
                onClick={() => handleClick(item)}
                className={`w-full flex items-center gap-[15px] px-[20px] py-[12px] rounded-full transition-all ${
                  isActive ? "bg-[#F0EBFD] text-[#6938EF]" : "text-[#667085]"
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
