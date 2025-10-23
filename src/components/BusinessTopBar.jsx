import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Brand from "../assets/Brand.png";

const BusinessTopBar = ({ userName = "Michael" }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-[40px] py-[16px]">
        <img src={Brand} alt="" className="w-[95px] h-[24px]" />
        {/* Search Bar */}
        <div className="flex gap-[20px]">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="px-[20px] py-[12px] border-[1px] border-[#E4E7EC] rounded-full text-sm w-[362px] h-[48px] focus:outline-none"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Notification Bell */}
            <button className="relative p-[8px] border-[1px] border-[#E4E7EC] h-[48px] w-[48px] flex justify-center items-center rounded-full text-[#98A2B3] hover:bg-gray-50 transition-all">
              <IoIosNotificationsOutline className="w-[24px] h-[24px]" />
              <span className="absolute -top-1 right-0 w-[12px] h-[12px] bg-[#F04438] rounded-full"></span>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-[8px] h-[48px] px-[12px] py-[8px] border-[1px] border-[#E4E7EC] rounded-full transition-all"
              >
                <div className="bg-[#F0EBFD] border-[1px] border-[#6938EF] px-[8px] py-[4px] h-[32px] rounded-full flex items-center justify-center">
                  <FaUser className="w-[16px] h-[16px] fill-[#6938EF]" />
                </div>
                <span className="text-[#101828] text-[14px]">
                  Hi, {userName}
                </span>
                <ChevronDown className="w-[16px] h-[16px] text-[#667085]" />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-3 border-b border-gray-200">
                    <p className="text-sm font-semibold text-gray-900">
                      {userName}
                    </p>
                    <p className="text-xs text-gray-500">user@example.com</p>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all">
                    Account
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all border-t border-gray-200">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTopBar;
