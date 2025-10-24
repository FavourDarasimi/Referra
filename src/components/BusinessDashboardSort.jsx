import React, { useState } from "react";
import { ChevronUp, Star, ChevronDown } from "lucide-react";

const BusinessDashboardSort = () => {
  const [nameExpanded, setNameExpanded] = useState(true);
  const [responseDateExpanded, setResponseDateExpanded] = useState(true);
  const [ratingExpanded, setRatingExpanded] = useState(true);

  const [nameSelected, setnameSelected] = useState("z-a");
  const [responseDateSelected, setResponseDateSelected] =
    useState("descending");
  const [ratingSelected, setRatingSelected] = useState("descending");

  const nameOptions = [
    { id: "a-z", label: "A-Z" },
    { id: "z-a", label: "Z-A" },
  ];
  const responseDateOptions = [
    { id: "ascending", label: "Ascending" },
    { id: "descending", label: "Descending" },
  ];
  const ratingOptions = [
    { id: "ascending", label: "Ascending" },
    { id: "descending", label: "Descending" },
  ];

  return (
    <div className="sort-menu absolute right-0 mt-2  w-[324px] bg-white border-[1px] border-[#E4E7EC] rounded-[8px] space-y-[8px] z-50 shadow-2xl">
      <div className="px-[16px] py-[8px] flex items-center justify-between border-b-[1px] border-[#E4E4E7] ">
        <h1 className="text-[16px] font-bold">Sort by</h1>
        <h1 className="text-[12px] font-semibold text-[#F04438]">Reset</h1>
      </div>
      <div className="px-[16px] space-y-[16px]">
        <div className="py-[24px] space-y-[16px] border-b-[1px] border-[#E4E4E7]">
          <div className="flex justify-between">
            <h1 className="text-[16px] font-bold">Name</h1>
            {nameExpanded ? (
              <ChevronUp
                onClick={() => setNameExpanded(!nameExpanded)}
                className="w-[24px] h-[24px] text-[#101828] cursor-pointer"
              />
            ) : (
              <ChevronDown
                onClick={() => setNameExpanded(!nameExpanded)}
                className="w-[24px] h-[24px] text-[#101828] cursor-pointer"
              />
            )}
          </div>
          {nameExpanded ? (
            <div className="px-[16px] space-y-[10px]">
              <div className="flex flex-col gap-3">
                {nameOptions.map((option) => (
                  <div className="flex justify-between items-center h-[25px]">
                    <label
                      key={option.id}
                      className="flex gap-[8px] items-center   cursor-pointer transition-colors"
                    >
                      {/* Custom radio button */}
                      <input
                        type="radio"
                        name="sort"
                        value={option.id}
                        checked={nameSelected === option.id}
                        onChange={(e) => setnameSelected(e.target.value)}
                        className="sr-only" // Hide default radio
                      />

                      {/* Custom radio circle */}
                      <div
                        className={`w-[16px] h-[16px] rounded-full border-[1px] flex items-center justify-center transition-all ${
                          nameSelected === option.id
                            ? "border-[#6938EF] bg-[#F0EBFD]"
                            : "border-[#E4E7EC] bg-[#F2F4F7]"
                        }`}
                      >
                        {/* Inner dot for nameSelected state */}
                        {nameSelected === option.id ? (
                          <div className="w-2 h-2 bg-[#6938EF] rounded-full"></div>
                        ) : (
                          <div className="w-2 h-2 bg-[#98A2B3] rounded-full"></div>
                        )}
                      </div>

                      {/* Label text */}
                      <span className="font-medium text-[14px] text-[#667085]">
                        {option.label}
                      </span>
                    </label>{" "}
                    <h1 className="text-[#98A2B3] font-medium text-[14px]">
                      93
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="py-[24px] space-y-[16px] border-b-[1px] border-[#E4E4E7]">
          <div className="flex justify-between">
            <h1 className="text-[16px] font-bold">Response date</h1>
            {responseDateExpanded ? (
              <ChevronUp
                onClick={() => setResponseDateExpanded(!responseDateExpanded)}
                className="w-[24px] h-[24px] text-[#101828] cursor-pointer"
              />
            ) : (
              <ChevronDown
                onClick={() => setResponseDateExpanded(!responseDateExpanded)}
                className="w-[24px] h-[24px] text-[#101828] cursor-pointer"
              />
            )}
          </div>
          {responseDateExpanded ? (
            <div className="px-[16px] space-y-[10px]">
              <div className="flex flex-col gap-3">
                {responseDateOptions.map((option) => (
                  <div className="flex justify-between items-center h-[25px]">
                    <label
                      key={option.id}
                      className="flex gap-[8px] items-center   cursor-pointer transition-colors"
                    >
                      {/* Custom radio button */}
                      <input
                        type="radio"
                        name="sort"
                        value={option.id}
                        checked={responseDateSelected === option.id}
                        onChange={(e) =>
                          setResponseDateSelected(e.target.value)
                        }
                        className="sr-only" // Hide default radio
                      />

                      {/* Custom radio circle */}
                      <div
                        className={`w-[16px] h-[16px] rounded-full border-[1px] flex items-center justify-center transition-all ${
                          responseDateSelected === option.id
                            ? "border-[#6938EF] bg-[#F0EBFD]"
                            : "border-[#E4E7EC] bg-[#F2F4F7]"
                        }`}
                      >
                        {/* Inner dot for responseDateSelected state */}
                        {responseDateSelected === option.id ? (
                          <div className="w-2 h-2 bg-[#6938EF] rounded-full"></div>
                        ) : (
                          <div className="w-2 h-2 bg-[#98A2B3] rounded-full"></div>
                        )}
                      </div>

                      {/* Label text */}
                      <span className="font-medium text-[14px] text-[#667085]">
                        {option.label}
                      </span>
                    </label>{" "}
                    <h1 className="text-[#98A2B3] font-medium text-[14px]">
                      93
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="py-[24px] space-y-[16px] border-b-[1px] border-[#E4E4E7]">
          <div className="flex justify-between">
            <h1 className="text-[16px] font-bold">Response date</h1>
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
          {ratingExpanded ? (
            <div className="px-[16px] space-y-[10px]">
              <div className="flex flex-col gap-3">
                {ratingOptions.map((option) => (
                  <div className="flex justify-between items-center h-[25px]">
                    <label
                      key={option.id}
                      className="flex gap-[8px] items-center   cursor-pointer transition-colors"
                    >
                      {/* Custom radio button */}
                      <input
                        type="radio"
                        name="sort"
                        value={option.id}
                        checked={ratingSelected === option.id}
                        onChange={(e) => setRatingSelected(e.target.value)}
                        className="sr-only" // Hide default radio
                      />

                      {/* Custom radio circle */}
                      <div
                        className={`w-[16px] h-[16px] rounded-full border-[1px] flex items-center justify-center transition-all ${
                          ratingSelected === option.id
                            ? "border-[#6938EF] bg-[#F0EBFD]"
                            : "border-[#E4E7EC] bg-[#F2F4F7]"
                        }`}
                      >
                        {/* Inner dot for responseDateSelected state */}
                        {ratingSelected === option.id ? (
                          <div className="w-2 h-2 bg-[#6938EF] rounded-full"></div>
                        ) : (
                          <div className="w-2 h-2 bg-[#98A2B3] rounded-full"></div>
                        )}
                      </div>

                      {/* Label text */}
                      <span className="font-medium text-[14px] text-[#667085]">
                        {option.label}
                      </span>
                    </label>{" "}
                    <h1 className="text-[#98A2B3] font-medium text-[14px]">
                      93
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboardSort;
