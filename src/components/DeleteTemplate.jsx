import React from "react";
import { Trash2 } from "lucide-react";
import { X } from "lucide-react";

export const DeleteTemplate = ({ isOpen, title, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 h-screen">
      <div className="bg-white rounded-[16px]  w-[30%] ">
        {/* Icon */}
        <div className="flex justify-end p-[16px]">
          <button
            onClick={onCancel}
            className="text-[#98A2B3] hover:text-[#667085] transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-[25px] pt-[20px] pb-[40px] px-[16px]">
          <div className="space-y-[20px] px-[40px]">
            <div className="flex justify-center">
              <div className="p-[10px] bg-[#FEE4E2] rounded-full">
                <Trash2 className="w-[20px] h-[20px] text-[#F04438]" />
              </div>
            </div>

            {/* Title and Description */}
            <div className="space-y-[7px] text-center">
              <h2 className="text-[24px] font-bold text-[#2B2F38]">
                Delete reference request template
              </h2>
              <p className="text-[14px] text-[#667085]">
                All responses will be gone and the link will be de-activated for
                further responses. Are you sure you want to delete this
                template? This action cannot be undone.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[21px]  justify-center">
            <button
              onClick={onCancel}
              className=" px-[12px] w-fit py-[10px] border-[1px] border-[#E4E7EC] rounded-full text-[14px]  text-[#667085] hover:bg-[#F9FAFB] transition-all"
            >
              No, cancel.
            </button>
            <button
              onClick={onConfirm}
              className=" px-[12px] w-fit py-[10px] bg-[#F04438] text-white rounded-full text-[14px]  hover:bg-[#D92D20] transition-all"
            >
              Yes, delete.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTemplate;
