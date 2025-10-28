import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";

const CreateRequest = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    recipientEmail: "",
    candidateName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContinue = () => {
    console.log("Form Data:", formData);
    // Add API call here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 h-screen">
      <div className="bg-white rounded-[16px] w-[520px] max-h-[90vh] overflow-y-auto space-y-[20px]">
        {/* Header */}
        <div className="flex items-center justify-between p-[16px] border-b border-[#E4E7EC]">
          <h2 className="text-[20px] font-semibold text-[#101828]">
            Create new request
          </h2>
          <button
            onClick={onClose}
            className="text-[#98A2B3] hover:text-[#667085] border border-[#F2F4F7] rounded-full p-[7px] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <div className="py-[20px] px-[16px] space-y-[25px]">
          {/* Recipient Email Address */}
          <div className="">
            <label className="text-[14px] font-medium text-[#344054]">
              Recipient email address
            </label>
            <input
              type="email"
              name="recipientEmail"
              placeholder="Placeholder"
              value={formData.recipientEmail}
              onChange={handleInputChange}
              className="w-full p-[16px] placeholder:text-[#98A2B3] border border-[#E4E7EC] rounded-full text-[14px] outline-none focus:border-[#6938EF] focus:ring-1 focus:ring-[#6938EF]/20"
            />
          </div>

          {/* Candidate Name */}
          <div className="">
            <label className="text-[14px] font-medium text-[#344054]">
              Candidate name
            </label>
            <input
              type="text"
              name="candidateName"
              placeholder="Placeholder"
              value={formData.candidateName}
              onChange={handleInputChange}
              className="w-full p-[16px] placeholder:text-[#98A2B3] border border-[#E4E7EC] rounded-full text-[14px] outline-none focus:border-[#6938EF] focus:ring-1 focus:ring-[#6938EF]/20"
            />
          </div>

          {/* Position/Role */}
          <div className="">
            <label className="text-[14px] font-medium text-[#344054]">
              Position/role
            </label>
            <input
              type="text"
              name="positionTitle"
              placeholder="Placeholder"
              value={formData.positionTitle}
              onChange={handleInputChange}
              className="w-full p-[16px] placeholder:text-[#98A2B3] border border-[#E4E7EC] rounded-full text-[14px] outline-none focus:border-[#6938EF] focus:ring-1 focus:ring-[#6938EF]/20"
            />
          </div>

          {/* Set Deadline for Response */}
          <div className="space-y-[12px]">
            <label className="text-[14px] font-medium text-[#344054]">
              Set deadline for response
            </label>

            {/* Date Picker */}
            <div className="">
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full p-[16px] placeholder:text-[#98A2B3] border border-[#E4E7EC] rounded-full text-[14px] outline-none focus:border-[#6938EF] focus:ring-1 focus:ring-[#6938EF]/20"
              />
            </div>

            {/* Time Picker */}
            <div className="">
              <select
                className="w-full p-[16px] placeholder:text-[#98A2B3] border border-[#E4E7EC] rounded-full text-[14px] outline-none focus:border-[#6938EF] focus:ring-1 focus:ring-[#6938EF]/20 appearance-none bg-white cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23667085' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  paddingRight: "32px",
                }}
              >
                <option>Select a time</option>
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
                <option>04:00 PM</option>
                <option>05:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-[12px] py-[16px] px-[40px] border-t border-[#F2F4F7]">
          <Button
            size="small"
            type="primary"
            title="Continue"
            Icon={FaArrowRight}
            IconRight={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
