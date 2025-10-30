import React, { useState } from "react";
import {
  Search,
  Filter,
  Grid3x3,
  List,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Upload,
} from "lucide-react";
import { BiSort } from "react-icons/bi";
import { IoFilterOutline } from "react-icons/io5";
import Button from "../../components/Button";

const BusinessPublished = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [activeTab, setActiveTab] = useState("all"); // 'all' or 'responded'
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("recent");

  const forms = [
    {
      id: 1,
      title: "Form title",
      status: "Awaiting response",
      responses: 0,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 2,
      title: "Form title",
      status: "Responded",
      responses: 20,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 3,
      title: "Form title",
      status: "Responded",
      responses: 2,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 4,
      title: "Form title",
      status: "Responded",
      responses: 5,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 5,
      title: "Form title",
      status: "Closed",
      responses: 15,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 6,
      title: "Form title",
      status: "Responded",
      responses: 10,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 7,
      title: "Form title",
      status: "Responded",
      responses: 9,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 8,
      title: "Form title",
      status: "Responded",
      responses: 8,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 9,
      title: "Form title",
      status: "Responded",
      responses: 7,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 10,
      title: "Form title",
      status: "Responded",
      responses: 6,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 1,
      title: "Form title",
      status: "Awaiting response",
      responses: 0,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 2,
      title: "Form title",
      status: "Responded",
      responses: 20,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 3,
      title: "Form title",
      status: "Responded",
      responses: 2,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 4,
      title: "Form title",
      status: "Responded",
      responses: 5,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 5,
      title: "Form title",
      status: "Closed",
      responses: 15,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 6,
      title: "Form title",
      status: "Responded",
      responses: 10,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 7,
      title: "Form title",
      status: "Responded",
      responses: 9,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 8,
      title: "Form title",
      status: "Responded",
      responses: 8,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 9,
      title: "Form title",
      status: "Responded",
      responses: 7,
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 10,
      title: "Form title",
      status: "Responded",
      responses: 6,
      date: "12 Mar, 2024, 7:00PM",
    },
  ];

  const itemsPerPage = viewMode === "grid" ? 8 : 8;
  const totalPages = Math.ceil(forms.length / itemsPerPage);
  const paginatedForms = forms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Awaiting response":
        return "bg-[#FEF0C7] text-[#B54708] border border-[#F79009]";
      case "Responded":
        return "bg-[#D1E9FF] text-[#175CD3] border border-[#2E90FA]";
      case "Closed":
        return "bg-[#F2F4F7] text-[#344054] border border-[#667085]";
      default:
        return "bg-[#F2F4F7] text-[#667085] border border-[#D0D5DD]";
    }
  };

  const isEmptyState = forms.length === 0;
  return (
    <div className="bg-white p-[24px] space-y-[34px] rounded-[20px] h-full">
      <div>
        <h1 className="text-[24px] text-[#344054] font-semibold">Published</h1>
      </div>
      {isEmptyState ? (
        <div className="flex flex-col items-center justify-center h-[442px] rounded-[16px] bg-[#F9FAFB]">
          <div className="p-12  text-center space-y-6 flex flex-col items-center w-[452px]">
            <div className="flex justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-b from-[#E4E7EC] to-[#F2F4F7] rounded-full animate-pulse"></div>
                <div className="absolute inset-2 flex items-center justify-center bg-white rounded-full">
                  <Upload className="w-12 h-12 text-[#98A2B3]" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-[16px] font-semibold text-[#101828]">
                Start by creating your first reference request
              </h2>
              <p className="text-sm text-[#667085]">
                Any reference request uploaded will be available here for you to
                manage and view responses.
              </p>
            </div>

            <Button size="small" type="primary" title="Start creating" />
          </div>
        </div>
      ) : (
        <div className="space-y-[16px]">
          {/* Tabs */}
          <div className="flex items-center justify-between p-[8px]">
            <div className="flex gap-[10px] ">
              <button
                onClick={() => {
                  setActiveTab("all");
                  setCurrentPage(1);
                }}
                className={`p-[4px] h-fit text-[14px] font-medium transition-colors ${
                  activeTab === "all"
                    ? "text-[#2B2F38] border-b-2 border-[#2B2F38]"
                    : "text-[#858D9D] border-b-2 border-b-white"
                }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  setActiveTab("responded");
                  setCurrentPage(1);
                }}
                className={`p-[4px] h-fit text-[14px] font-medium transition-colors ${
                  activeTab === "responded"
                    ? "text-[#2B2F38] border-b-2 border-[#2B2F38]"
                    : "text-[#858D9D] border-b-2 border-b-white"
                }`}
              >
                Responded
              </button>
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between gap-[10px] ">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#989FAD]" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-[8px] border border-[#D0D3D9] rounded-full text-sm focus:outline-none placeholder:text-[#B9BDC7] placeholder:text-[14px]"
                />
              </div>

              <button className="menu-button-sort flex items-center gap-[2px] h-[40px] px-[12px] py-[4px] text-sm font-medium text-[#667085] border-[1px] border-[#D0D3D9] rounded-full transition-all">
                Sort by <BiSort className="w-[20px] h-[20px]" />
              </button>

              <button className="menu-button-filter flex items-center gap-[2px] h-[40px] px-[12px] py-[4px] text-sm font-medium text-[#667085] border-[1px] border-[#D0D3D9] rounded-full transition-all">
                Filter <IoFilterOutline className="w-[20px] h-[20px]" />
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#F0EBFD] border border-[#6938EF] text-[#6938EF] rounded-full"
                    : "border border-[#E4E7EC] text-[#98A2B3] rounded-full"
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "list"
                    ? "bg-[#F0EBFD] border border-[#6938EF] text-[#6938EF] rounded-full"
                    : "border border-[#E4E7EC] text-[#98A2B3] rounded-full"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid View */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-4 gap-6 mb-8">
              {paginatedForms.map((form) => (
                <div
                  key={form.id}
                  className="bg-[#F2F4F7] p-[12px] space-y-[12px] rounded-[18px]"
                >
                  <div className="relative flex flex-col justify-center h-[234px] group rounded-xl p-4 bg-[#F9FAFB] hover:bg-[#E4E7EC] transition-all duration-300">
                    {/* Status */}
                    <span
                      className={`absolute top-[12px] right-[12px] px-[8px]  rounded-full text-[12px] font-medium  ${getStatusColor(
                        form.status
                      )}`}
                    >
                      {form.status}
                    </span>
                  </div>
                  <div className="space-y-[4px]">
                    <p className="text-[16px] font-medium text-[#475467]">
                      {form.title}
                    </p>
                    <p className="text-xs text-[#98A2B3]">
                      Last updated {form.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="bg-white rounded-[16px] border border-[#E4E7EC] overflow-hidden mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E4E7EC]">
                    <th className="px-6 py-4 text-left">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-[#E4E7EC]"
                      />
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#667085]">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#667085]">
                      Response status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#667085]">
                      Responses
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-[#667085]">
                      Date created
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-[#667085]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedForms.map((form) => (
                    <tr
                      key={form.id}
                      className="border-b border-[#E4E7EC] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-[#E4E7EC]"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-[#344054]">
                        {form.title}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-[8px]  rounded-full text-xs font-medium border inline-block ${getStatusColor(
                            form.status
                          )}`}
                        >
                          {form.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#344054]">
                        {form.responses}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#667085]">
                        {form.date}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 hover:bg-[#F2F4F7] rounded-full transition-colors">
                          <MoreVertical className="w-4 h-4 text-[#667085]" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-between">
            {/* Previous button */}

            <Button
              type="neutralOutline"
              Icon={ChevronLeft}
              size="small"
              title="Previous"
              handleSubmit={() => setCurrentPage(Math.max(1, currentPage - 1))}
              styles={`${
                currentPage === 1 &&
                "opacity-50 cursor-not-allowed pointer-events-none"
              }`}
            />

            {/* Page numbers */}
            <div className="flex gap-1 items-center">
              {(() => {
                const pages = [];
                const delta = 1; // number of pages to show around current page

                for (let i = 1; i <= totalPages; i++) {
                  // Always show first, last, and nearby pages
                  if (
                    i === 1 ||
                    i === totalPages ||
                    (i >= currentPage - delta && i <= currentPage + delta)
                  ) {
                    pages.push(i);
                  } else if (
                    // Add ellipsis when jumping over hidden pages
                    (i === currentPage - delta - 1 && i > 1) ||
                    (i === currentPage + delta + 1 && i < totalPages)
                  ) {
                    pages.push("...");
                  }
                }

                return pages.map((page, idx) =>
                  page === "..." ? (
                    <span
                      key={`dots-${idx}`}
                      className="w-8 h-8 flex items-center justify-center text-[#667085]"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-white border border-[#E4E7EC] text-[#344054]"
                          : "text-[#667085] hover:bg-[#F2F4F7]"
                      }`}
                    >
                      {page}
                    </button>
                  )
                );
              })()}
            </div>

            {/* Next button */}

            <Button
              type="neutralOutline"
              Icon={ChevronRight}
              IconRight={true}
              size="small"
              title="Next"
              handleSubmit={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              styles={`${
                currentPage === totalPages &&
                "opacity-50 cursor-not-allowed pointer-events-none"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessPublished;
