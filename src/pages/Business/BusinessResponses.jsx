import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const BusinessResponses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Dummy data
  const responses = [
    {
      id: 1,
      name: "Jaden Smith Flourish",
      rating: 6.9,
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 2,
      name: "Jaden Smith Flourish",
      rating: 7.0,
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 3,
      name: "Jaden Smith Flourish",
      rating: 9.0,
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 4,
      name: "Jaden Smith Flourish",
      rating: 8.9,
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 5,
      name: "Jaden Smith Flourish",
      rating: 3.9,
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024, 7:00PM",
    },
    {
      id: 6,
      name: "Jaden Smith Flourish",
      rating: 4.9,
      email: "adrianberenguer@gmail.com",
      date: "12 Mar, 2024, 7:00PM",
    },
  ];

  const totalPages = Math.ceil(responses.length / itemsPerPage); // static for demo
  const paginatedResponses = responses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Rating color logic
  const getRatingColor = (rating) => {
    if (rating >= 8)
      return "text-[#0D824B] bg-[#E7F8F0] border border-[#12B76A]";
    if (rating >= 5)
      return "text-[#AF6606] bg-[#FEF4E6] border border-[#F79009]";
    return "text-[#AA3028] bg-[#FEECEB] border border-[#F04438]";
  };

  return (
    <div className="bg-white p-6 rounded-[20px] h-full space-y-6 border border-[#F0F1F3]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[20px] font-semibold text-[#344054]">Responses</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3]" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-[8px] border border-[#F0F1F3] rounded-full text-sm placeholder:text-[#98A2B3] focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-[20px] border border-[#F0F1F3] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#F0F1F3] ">
              <th className="px-6 py-[12px] text-left">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-[#D0D5DD] rounded"
                />
              </th>
              <th className="px-6 py-[12px] text-left text-xs font-semibold text-[#667085]">
                Name
              </th>
              <th className="px-6 py-[12px] text-left text-xs font-semibold text-[#667085]">
                AI rating
              </th>
              <th className="px-6 py-[12px] text-left text-xs font-semibold text-[#667085]">
                Email
              </th>
              <th className="px-6 py-[12px] text-left text-xs font-semibold text-[#667085]">
                Response date
              </th>
              <th className="px-6 py-[12px] text-center text-xs font-semibold text-[#667085]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedResponses.map((res) => (
              <tr
                key={res.id}
                className="border-b border-[#F0F1F3] hover:bg-[#F9FAFB] transition-colors"
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-[#D0D5DD] rounded"
                  />
                </td>
                <td className="px-6 py-4 text-sm font-medium text-[#344054]">
                  {res.name}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center justify-center px-[8px] text-xs font-medium rounded-full ${getRatingColor(
                      res.rating
                    )}`}
                  >
                    {res.rating.toFixed(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-[#667085]">
                  {res.email}
                </td>
                <td className="px-6 py-4 text-sm text-[#667085]">{res.date}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-4 text-sm font-medium">
                    <button className="text-[#6938EF] hover:underline">
                      View
                    </button>
                    <button className="text-[#F04438] hover:underline">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 border border-[#F0F1F3] rounded-full text-sm font-medium text-[#667085] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        {/* Page numbers */}
        <div className="flex gap-1 items-center">
          {(() => {
            const pages = [];
            const total = totalPages;
            const delta = 1;

            for (let i = 1; i <= total; i++) {
              if (
                i === 1 ||
                i === total ||
                (i >= currentPage - delta && i <= currentPage + delta)
              ) {
                pages.push(i);
              } else if (
                (i === currentPage - delta - 1 && i > 1) ||
                (i === currentPage + delta + 1 && i < total)
              ) {
                pages.push("...");
              }
            }

            return pages.map((p, idx) =>
              p === "..." ? (
                <span
                  key={idx}
                  className="w-8 h-8 flex items-center justify-center text-[#667085]"
                >
                  ...
                </span>
              ) : (
                <button
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                    currentPage === p
                      ? "bg-white border border-[#F0F1F3] text-[#344054]"
                      : "text-[#667085] hover:bg-[#F2F4F7]"
                  }`}
                >
                  {p}
                </button>
              )
            );
          })()}
        </div>

        {/* Next */}
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-4 py-2 border border-[#F0F1F3] rounded-full text-sm font-medium text-[#667085] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BusinessResponses;
