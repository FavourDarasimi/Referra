import { useState } from "react";
import { ChevronUp, Star } from "lucide-react";

const BusinessDashBoardFilter = () => {
  const [filterExpanded, setFilterExpanded] = useState(true);
  const [ratingExpanded, setRatingExpanded] = useState(true);
  const [ratingMin, setRatingMin] = useState(1.5);
  const [ratingMax, setRatingMax] = useState(4.8);

  const dateOptions = [
    { label: "Last 24 hours", count: 93 },
    { label: "Last 7 days", count: 93 },
    { label: "Last month", count: 93 },
    { label: "Last year", count: 93 },
  ];

  return (
    <div className="absolute right-0 mt-2  w-[324px] bg-white border-[1px] border-[#E4E7EC] rounded-[8px] space-y-[8px] z-50 shadow-2xl">
      <div className="px-[16px] py-[8px] flex items-center justify-between border-b-[1px] border-[#E4E4E7] ">
        <h1 className="text-[16px] font-bold">Filter</h1>
        <h1 className="text-[12px] font-semibold text-[#F04438]">Clear all</h1>
      </div>
      <div className="px-[16px]  ">
        <div className="py-[24px] space-y-[16px]">
          <div className="flex justify-between">
            <h1 className="text-[16px] font-bold">Date Range</h1>
            {filterExpanded ? (
              <ChevronUp
                onClick={() => setFilterExpanded(!filterExpanded)}
                className="w-[24px] h-[24px] text-[#101828]"
              />
            ) : (
              <ChevronDown
                onClick={() => setFilterExpanded(!filterExpanded)}
                className="w-[24px] h-[24px] text-[#101828]"
              />
            )}
          </div>
          {filterExpanded ? (
            <div className="px-[16px] space-y-[10px]">
              <div className="space-y-[8px]">
                <h1 className="text-[14px] text-[#667085] font-medium">
                  Custom range
                </h1>
                <div className="flex gap-[10px]">
                  <div className="border-[1px] border-[#E4E7EC] space-y-[8px] p-[8px] rounded-[8px]">
                    <input
                      type="date"
                      className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-clear-button]:hidden border-[1px] border-[#E4E7EC] py-[8px] px-[4px] rounded-[4px] text-[14px] font-medium outline-none w-[110px]"
                    />
                    <h1 className="text-center text-[12px] font-medium text-[#667085]">
                      From
                    </h1>
                  </div>
                  <div className="border-[1px] border-[#E4E7EC] space-y-[8px] p-[8px] rounded-[8px]">
                    <input
                      type="date"
                      className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-clear-button]:hidden border-[1px] border-[#E4E7EC] py-[8px] px-[4px] rounded-[4px] text-[14px] font-medium outline-none w-[110px]"
                    />
                    <h1 className="text-center text-[12px] font-medium text-[#667085]">
                      To
                    </h1>
                  </div>
                </div>
              </div>
              {dateOptions.map((option) => (
                <div className="flex justify-between items-center">
                  <div className="flex gap-[8px] items-center h-[25px]">
                    <input
                      type="checkbox"
                      className="rounded cursor-pointer w-[14px] h-[14px] border-[1px] border-[#D0D3D9] accent-[#F0EBFD] "
                    />
                    <h1 className="text-[14px] text-[#667085] font-medium">
                      {option.label}
                    </h1>
                  </div>
                  <h1 className="text-[14px] text-[#98A2B3] font-medium">
                    {option.count}
                  </h1>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="py-[24px] space-y-[16px]">
          <div className="flex justify-between">
            <h1 className="text-[16px] font-bold">Rating</h1>
            {ratingExpanded ? (
              <ChevronUp
                onClick={() => setRatingExpanded(!ratingExpanded)}
                className="w-[24px] h-[24px] text-[#101828]"
              />
            ) : (
              <ChevronDown
                onClick={() => setRatingExpanded(!ratingExpanded)}
                className="w-[24px] h-[24px] text-[#101828]"
              />
            )}
          </div>
          {ratingExpanded && (
            <div className="space-y-[20px]">
              {/* Range Slider */}
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={ratingMin}
                  onChange={(e) => setRatingMin(parseFloat(e.target.value))}
                  className="flex-1 h-1 bg-gray-300 rounded appearance-none cursor-pointer accent-[#6938EF]"
                  style={{
                    background: `linear-gradient(to right, #6938EF 0%, #6938EF ${
                      ((ratingMin - 0) / 5) * 100
                    }%, #E4E7EC ${((ratingMin - 0) / 5) * 100}%, #E4E7EC 100%)`,
                  }}
                />
              </div>

              {/* Rating Inputs */}
              <div className="flex gap-3">
                <div className="flex-1 space-y-[8px]">
                  <span className="text-[14px] text-[#667085] font-medium">
                    From
                  </span>
                  <div className="flex-1 border border-[#E4E7EC] rounded-[8px] px-[8px] py-[12px] flex items-center justify-center gap-[16px]">
                    <Star className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium">
                      {ratingMin.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-[8px]">
                  <span className="text-[14px] text-[#667085] font-medium">
                    To
                  </span>
                  <div className="flex-1 border border-[#E4E7EC] rounded-[8px] px-[8px] py-[12px] flex items-center justify-center gap-[16px]">
                    <Star className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium">
                      {ratingMax.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessDashBoardFilter;
