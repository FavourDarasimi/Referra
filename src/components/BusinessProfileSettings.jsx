import React, { useState } from "react";
import { User, Mail, Camera, Pencil } from "lucide-react";
import Button from "./Button";

const BusinessProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: "Adaini Patrick",
    email: "adainipatrick17@gmail.com",
  });

  return (
    <div className="space-y-[20px] border border-[#E4E7EC] py-[20px] px-[40px] rounded-[12px]">
      {/* Profile Section */}
      <div className="flex gap-[40px] items-start">
        <div className="flex-1 space-y-[24px]">
          {/* Profile Picture */}
          <div className="flex items-center gap-[24px]">
            <div className="relative">
              <div className="p-[40px] rounded-full bg-[#F0EBFD] border-[2px] border-[#6938EF] flex items-center justify-center">
                <User className="w-[40px] h-[40px] text-[#6938EF]" />
              </div>
              <button className="absolute bottom-0 right-0 w-[32px] h-[32px] bg-[#6938EF] rounded-full flex items-center justify-center hover:bg-[#6033D9] transition-colors">
                <Camera className="w-[16px] h-[16px] text-white" />
              </button>
            </div>
            <div className="space-y-[8px]">
              <div className="flex gap-[12px]">
                <Button
                  title="Edit profile"
                  Icon={Pencil}
                  type="primary"
                  size="mini"
                />

                <Button
                  title="Change email address"
                  Icon={Mail}
                  type="primary"
                  size="mini"
                />
              </div>
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-[8px]">
            <label className="text-[14px] font-medium text-[#344054]">
              Full name
            </label>
            <div className="relative">
              <User className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[#344054]" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                disabled
                className="w-full h-[56px] pl-[48px] pr-[16px] border border-[#E4E7EC] rounded-full text-[14px] text-[#101828] outline-none focus:border-[#6938EF] focus:ring-1 focus:ring-[#6938EF]/20"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-[8px]">
            <label className="text-[14px] font-medium text-[#344054]">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[#344054]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="w-full h-[56px] pl-[48px] pr-[16px] border border-[#E4E7EC] rounded-full text-[14px] text-[#101828] outline-none focus:border-[#6938EF] focus:ring-1 focus:ring-[#6938EF]/20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E4E7EC]"></div>
    </div>
  );
};

export default BusinessProfileSettings;
