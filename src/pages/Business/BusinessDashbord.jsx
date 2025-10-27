import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import BusinessSideBar from "../../components/BusinessSideBar";
import BusinessTopBar from "../../components/BusinessTopBar";
import Button from "../../components/Button";
import { FaUserCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { BiSort } from "react-icons/bi";
import { IoFilterOutline } from "react-icons/io5";
import BusinessDashBoardFilter from "../../components/BusinessDashBoardFilter";
import BusinessDashboardSort from "../../components/BusinessDashboardSort";

const BusinessDashbord = () => {
  const [activeNav, setActiveNav] = useState("Overview");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const stats = [
    { label: "Total created", value: "58" },
    { label: "Total published", value: "30" },
    { label: "Total responses", value: "120" },
    { label: "Total templates", value: "5" },
  ];

  const responses = [
    {
      id: 1,
      name: "Jaden Smith Flourish",
      rating: "6.9",
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      id: 2,
      name: "Jaden Smith Flourish",
      rating: "7.0",
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      id: 3,
      name: "Jaden Smith Flourish",
      rating: "9.0",
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024 7:00PM",
    },
    {
      id: 4,
      name: "Jaden Smith Flourish",
      rating: "8.9",
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024 7:00PM",
    },
  ];

  const getRatingColor = (rating) => {
    const rate = parseFloat(rating);
    if (rate >= 8)
      return "bg-[#E7F8F0] text-[#0D824B] border-[0.5px] border-[#12B76A]";
    if (rate >= 7)
      return "bg-[#EAF4FF] text-[#2166B2] border-[0.5px] border-[#2E90FA]";
    return "bg-[#FEF4E6] text-[#AF6606] border-[0.5px] border-[#F79009]";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".filter-menu") &&
        !event.target.closest(".menu-button-filter")
      ) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".sort-menu") &&
        !event.target.closest(".menu-button-sort")
      ) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="bg-white p-[24px] space-y-[32px]  rounded-[20px] ">
      <h1 className="text-[24px] text-[#344054] font-semibold">OverView</h1>
      {/* Welcome Section */}
      <div className="bg-[#F6F4FB] relative overflow-hidden rounded-[20px] p-[40px] mb-8 flex gap-[24px] justify-between items-center">
        <div className="space-y-[20px]">
          <div className="space-y-[12px]">
            <h2 className="text-[30px] font-bold text-[#101828]">
              Hi, Michael 👋
            </h2>
            <p className="text-[#344054] text-[16px]">
              Effortlessly craft your reference request forms in no time and
              with ease!
            </p>
          </div>

          <Button
            size="small"
            type="primary"
            title="Start here"
            Icon={FaArrowRight}
            IconRight={true}
          />
        </div>
        <div className="absolute w-[226px]  h-full -bottom-[55px] right-[200px] border-[8px] border-[#D1C1FA] rounded-[20px] p-[20px] flex flex-col items-stretch justify-between">
          <div className="space-y-[10px]">
            <div className="flex justify-between">
              <FaUserCircle className="fill-[#BAA3F8] w-[56px] h-[56px]" />
              <div className="relative ">
                <div className="w-[42px] h-[42px] bg-[#D1C1FA] rounded-full"></div>
                <GiCheckMark
                  className="w-[32px] h-[60px] absolute bottom-1/4 right-0 text-[#6938EF]"
                  style={{ strokeWidth: 100 }}
                />
              </div>
            </div>
            <div className="h-[15px] bg-[#BAA3F8] w-[42%] rounded-full"></div>
            <div className="h-[15px] bg-[#D1C1FA] w-full rounded-full"></div>
            <div className="h-[15px] bg-[#D1C1FA] w-full rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-[13px] ">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#F9FAFB] p-[26px] space-y-[48px] rounded-[16px]"
          >
            <p className="text-[#98A2B3] text-[16px] font-medium">
              {stat.label}
            </p>
            <p className="text-[#344054] font-medium text-[30px]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Responses Table */}
      <div className="">
        <div className="p-[8px]  flex justify-between items-center">
          <h3 className="text-[20px] font-semibold text-[#344054]">
            Recent responses
          </h3>
          <div className="flex gap-[10px]">
            <input
              type="text"
              placeholder="Search"
              className="px-[12px] py-[8px] border-[1px] border-[#D0D3D9] rounded-full text-sm w-[276px] outline-none"
            />
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="menu-button-sort flex items-center gap-[2px] h-[40px] px-[12px] py-[4px] text-sm font-medium text-[#667085] border-[1px] border-[#D0D3D9] rounded-full transition-all"
              >
                Sort by <BiSort className="w-[20px] h-[20px]" />
              </button>
              {isSortOpen ? <BusinessDashboardSort /> : ""}
            </div>
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="menu-button-filter flex items-center gap-[2px] h-[40px] px-[12px] py-[4px] text-sm font-medium text-[#667085] border-[1px] border-[#D0D3D9] rounded-full transition-all"
              >
                Filter <IoFilterOutline className="w-[20px] h-[20px]" />
              </button>

              {isFilterOpen ? <BusinessDashBoardFilter /> : ""}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 ">
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#5D6679]">
                  <input
                    type="checkbox"
                    className="rounded cursor-pointer w-[15px] h-[15px] border-[1px] border-[#D0D3D9]"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#5D6679]">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#5D6679]">
                  AI rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#5D6679]">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-[#5D6679]">
                  Response date
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-[#5D6679]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {responses.map((response) => (
                <tr
                  key={response.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-all h-[72px]"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded cursor-pointer w-[15px] h-[15px] border-[1px] border-[#D0D3D9]"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    {response.name}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-[8px] rounded-full h-[20px] text-xs ${getRatingColor(
                        response.rating
                      )}`}
                    >
                      {response.rating}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#667085]">
                    {response.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-[#667085]">
                    {response.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex  justify-between px-[24px]">
                      <button className="text-[#6938EF] text-[12px] font-medium ">
                        View
                      </button>
                      <button className="text-[#F04438] text-[12px] font-medium ">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashbord;
