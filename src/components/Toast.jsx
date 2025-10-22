import React, { useEffect } from "react";
import { BiSolidError } from "react-icons/bi";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { PiWarningOctagonBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmarkCircle } from "react-icons/io";
const Toast = ({ Icon, type, title, variant, removeToast }) => {
  const handleCloseToast = () => {
    removeToast(title);
  };
  if (type === "error") {
    return (
      <div
        className={`w-[328px] animate-in slide-in-from-top-2 fade-in duration-1000 flex justify-between items-center p-[8px] rounded-[8px] ${
          variant == "primary" ? "bg-[#F04438] text-white" : "bg-[#FEE4E2] "
        }`}
      >
        <div className="flex gap-[16px] items-center">
          <BiSolidError
            className={`w-[24px] h-[24px] ${
              variant == "primary" ? " text-white" : "text-[#F04438]"
            }`}
          />
          <h1>{title}</h1>
        </div>
        <RxCross2
          className="w-[16px] h-[16px] cursor-pointer"
          onClick={() => handleCloseToast()}
        />
      </div>
    );
  } else if (type === "success") {
    return (
      <div
        className={`w-[328px] animate-in slide-in-from-top-2 fade-in duration-1000 flex justify-between items-center p-[8px] rounded-[8px] ${
          variant == "primary" ? "bg-[#06C270] text-white" : "bg-[#D1FADF] "
        }`}
      >
        <div className="flex gap-[16px] items-center">
          <IoMdCheckmarkCircle
            className={`w-[24px] h-[24px] ${
              variant == "primary"
                ? " text-[#06C270] fill-white"
                : "text-white fill-[#06C270]"
            }`}
          />
          <h1>{title}</h1>
        </div>
        <RxCross2
          className="w-[16px] h-[16px] cursor-pointer"
          onClick={() => handleCloseToast()}
        />
      </div>
    );
  }
};

export default Toast;
