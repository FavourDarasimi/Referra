import React from "react";
import Brand from "../assets/Brand.png";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[28%] flex flex-col items-center space-y-8">
        <img src={Brand} alt="Brand Logo" className="w-[284px] h-[72px]" />
        <h1 className="text-center text-[20px] w-[95%] text-[#667085]">
          Effortlessly send, request, and manage referrals while leveraging AI
          to select the ideal candidate.
        </h1>
        <div className="flex justify-between w-full gap-[47px]">
          <button className="bg-[#F0EBFD] text-[#6938EF] border-[#6938EF] hover:border-[#6033D9] border-[1px] rounded-full w-full h-[56px] text-[14px]">
            Login
          </button>
          <Link to="/role" className="w-full">
            <button className="w-full bg-[#6938EF] text-white rounded-full  text-[14px] hover:bg-[#6033D9] transition-all duration-300 h-[56px] focus:border-[2px] focus:border-[#D1C1FA]">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
