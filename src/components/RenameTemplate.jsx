import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export const RenameTemplate = ({
  isOpen,
  currentTitle,
  onConfirm,
  onCancel,
}) => {
  const [newTitle, setNewTitle] = useState(currentTitle || "");

  useEffect(() => {
    setNewTitle(currentTitle || "");
  }, [currentTitle, isOpen]);

  const handleSave = () => {
    if (newTitle.trim()) {
      onConfirm(newTitle);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 h-screen">
      <div className="bg-white rounded-[16px]  w-[30%] ">
        {/* Close Button */}
        <div className="flex justify-end p-[16px]">
          <button
            onClick={onCancel}
            className="text-[#98A2B3] hover:text-[#667085] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className=" pt-[20px] pb-[40px] px-[16px]] space-y-[25px]">
          {/* Title */}
          <div className="space-y-[24px] px-[40px]">
            <h2 className="text-[24px] font-bold text-[#101828]">
              Rename template
            </h2>

            {/* Input Field */}
            <div className="space-y-[8px]">
              <label className="text-[14px] font-medium text-[#344054]">
                Template title
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Template title"
                className="w-full px-[16px] py-[12px] h-[56px] border-[1px] border-[#E4E7EC] rounded-full text-[14px] outline-none "
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-[21px] px-[40px]">
            <button
              onClick={onCancel}
              className=" px-[12px] w-fit py-[10px] border-[1px] border-[#E4E7EC] rounded-full text-[14px]  text-[#667085] hover:bg-[#F9FAFB] transition-all"
            >
              No, cancel.
            </button>
            <button
              onClick={handleSave}
              disabled={!newTitle.trim()}
              className="px-[12px] py-[10px] bg-[#6938EF] text-white rounded-full text-[14px] font-medium hover:bg-[#6033D9] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenameTemplate;
