import React from "react";
import AuthNavbar from "../../components/AuthNavbar";
import { useNavigate } from "react-router-dom";

const BusinessProfile = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/business/profile/image");
  };
  return (
    <div className="flex flex-col h-screen">
      <AuthNavbar />
      <div className="flex-1 flex flex-col items-center justify-center ">
        <div className="w-[480px] space-y-[40px]">
          <h1 className="text-[24px] font-bold text-center">
            Setup your business profile
          </h1>
          <div className="space-y-[24px]">
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold">Business name</label>
              <input
                placeholder="e.g. Eusate"
                className="placeholder:text-[#98A2B3] text-[14px] p-[16px] h-[56px] border-[1px] border-[#E4E7EC] rounded-full outline-none focus:border-[#6938EF] w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold">Industry</label>
              <input
                placeholder="e.g. e-commerce, fintech,etc"
                className="placeholder:text-[#98A2B3] text-[14px] p-[16px] h-[56px] border-[1px] border-[#E4E7EC] rounded-full outline-none focus:border-[#6938EF] w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold">Company Size</label>
              <input
                placeholder="e.g.10-15"
                className="placeholder:text-[#98A2B3] text-[14px] p-[16px] h-[56px] border-[1px] border-[#E4E7EC] rounded-full outline-none focus:border-[#6938EF] w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#6938EF] text-white rounded-full  text-[14px] hover:bg-[#6033D9] transition-all duration-300 h-[56px] focus:border-[2px] focus:border-[#D1C1FA]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
