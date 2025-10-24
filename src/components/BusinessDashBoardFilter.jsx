import { useState, useEffect } from "react";
import { ChevronUp, Star, ChevronDown } from "lucide-react";

const BusinessDashBoardFilter = () => {
  const [filterExpanded, setFilterExpanded] = useState(true);
  const [ratingExpanded, setRatingExpanded] = useState(true);
  const [ratingMin, setRatingMin] = useState(1.5);
  const [ratingMax, setRatingMax] = useState(4.8);
  const [minValue, setMinValue] = useState(1.5);
  const [maxValue, setMaxValue] = useState(4.8);
  const [isOpen, setIsOpen] = useState(true);

  const handleMinChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  const dateOptions = [
    { label: "Last 24 hours", count: 93 },
    { label: "Last 7 days", count: 93 },
    { label: "Last month", count: 93 },
    { label: "Last year", count: 93 },
  ];

  return (
    <div className="filter-menu absolute right-0 mt-2  w-[324px] bg-white border-[1px] border-[#E4E7EC] rounded-[8px] space-y-[8px] z-50 shadow-2xl">
      <div className="px-[16px] py-[8px] flex items-center justify-between border-b-[1px] border-[#E4E4E7] ">
        <h1 className="text-[16px] font-bold">Filter</h1>
        <h1 className="text-[12px] font-semibold text-[#F04438]">Clear all</h1>
      </div>
      <div className="px-[16px]  ">
        <div className="py-[24px] space-y-[16px] border-b-[1px] border-[#E4E4E7]">
          <div className="flex justify-between">
            <h1 className="text-[16px] font-bold">Date Range</h1>
            {filterExpanded ? (
              <ChevronUp
                onClick={() => setFilterExpanded(!filterExpanded)}
                className="w-[24px] h-[24px] text-[#101828] cursor-pointer"
              />
            ) : (
              <ChevronDown
                onClick={() => setFilterExpanded(!filterExpanded)}
                className="w-[24px] h-[24px] text-[#101828] cursor-pointer"
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
                className="w-[24px] h-[24px] text-[#101828] cursor-pointer"
              />
            ) : (
              <ChevronDown
                onClick={() => setRatingExpanded(!ratingExpanded)}
                className="w-[24px] h-[24px] text-[#101828] cursor-pointer"
              />
            )}
          </div>
          {ratingExpanded && (
            <div className="space-y-[20px]">
              {/* Range Slider */}

              <div className="space-y-4">
                <div className="relative h-1 bg-[#E4E7EC] rounded-full">
                  {/* Progress bar */}
                  <div
                    className="absolute h-1 bg-[#6938EF] rounded-full"
                    style={{
                      left: `${(minValue / 5) * 100}%`,
                      right: `${100 - (maxValue / 5) * 100}%`,
                    }}
                  ></div>

                  {/* Min slider */}
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    value={minValue}
                    onChange={handleMinChange}
                    className="absolute w-full h-1 top-0 appearance-none bg-transparent cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6938EF] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#6938EF] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
                    style={{ zIndex: minValue > 2.5 ? "5" : "3" }}
                  />

                  {/* Max slider */}
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.1"
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="absolute w-full h-1 top-0 appearance-none bg-transparent cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#6938EF] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#6938EF] [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
                    style={{ zIndex: "4" }}
                  />
                </div>
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
                      {minValue.toFixed(1)}
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
                      {maxValue.toFixed(1)}
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
