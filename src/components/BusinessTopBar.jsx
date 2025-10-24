import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Brand from "../assets/Brand.png";
import { CiUser } from "react-icons/ci";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { CiTrash } from "react-icons/ci";

const BusinessTopBar = ({ userName = "Michael" }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".user-menu") &&
        !event.target.closest(".menu-button-user")
      ) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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
              <button className=" flex items-center gap-[8px] h-[48px] px-[12px] py-[8px] border-[1px] border-[#E4E7EC] rounded-full transition-all">
                <div className="bg-[#F0EBFD] border-[1px] border-[#6938EF] px-[8px] py-[4px] h-[32px] rounded-full flex items-center justify-center">
                  <FaUser className="w-[16px] h-[16px] fill-[#6938EF]" />
                </div>
                <span className="text-[#101828] text-[14px]">
                  Hi, {userName}
                </span>
                <ChevronDown
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="menu-button-user w-[16px] h-[16px] text-[#667085] cursor-pointer"
                />
              </button>

              {/* Profile Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="user-menu absolute right-0 mt-2 w-[212px] bg-white border-[1px] border-[#F2F4F7] rounded-[12px] shadow-lg z-50">
                  <button className="w-full p-[12px] text-[12px] flex gap-[12px] items-center text-[#475467]  transition-all">
                    Profile Settings
                  </button>
                  <button className="w-full p-[12px] text-[12px] flex gap-[12px] items-center text-[#475467]  transition-all">
                    Account
                  </button>
                  <button className="w-full p-[12px] text-[12px] flex gap-[12px] items-center text-[#475467]  transition-all">
                    Account
                  </button>
                  <button className="w-full p-[12px] text-[12px] flex gap-[12px] items-center text-[#F04438 transition-all border-t-[1px] border-[#F2F4F7] ">
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
