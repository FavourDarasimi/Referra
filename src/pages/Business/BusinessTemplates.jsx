import React, { useState } from "react";
import {
  MoreVertical,
  Edit,
  Copy,
  Trash,
  Globe,
  Upload,
  X,
} from "lucide-react";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CreateRequest from "../../components/CreateRequest";

const BusinessTemplates = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const templates = [
    {
      id: 1,
      title: "Template title",
      status: "Published",
      updated: "2 days ago",
    },
    { id: 2, title: "Template title", status: "Draft", updated: "2 days ago" },
    { id: 3, title: "Template title", status: "Draft", updated: "2 days ago" },
    {
      id: 4,
      title: "Template title",
      status: "Published",
      updated: "2 days ago",
    },
    {
      id: 5,
      title: "Template title",
      status: "Published",
      updated: "2 days ago",
    },
    { id: 6, title: "Template title", status: "Draft", updated: "2 days ago" },
    { id: 7, title: "Template title", status: "Draft", updated: "2 days ago" },
    {
      id: 8,
      title: "Template title",
      status: "Published",
      updated: "2 days ago",
    },
  ];

  const handleMenuToggle = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  const getStatusColor = (status) => {
    if (status === "Published") {
      return "bg-[#D1FADF] text-[#027A48] border border-[#12B76A]";
    } else {
      return "";
    }
  };

  return (
    <div className="bg-white p-[24px] space-y-[34px] rounded-[20px]">
      <CreateRequest
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
      />
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-semibold text-[#344054]">Templates</h1>
        <button
          onClick={() => setIsCreateOpen(true)}
          className="flex items-center gap-[8px] px-[16px] py-[10px] bg-[#6938EF] text-white rounded-full hover:bg-[#6033D9] transition-colors"
        >
          <MdAdd className="w-[20px] h-[20px]" />
          <span className="text-[14px] font-medium">Create new</span>
        </button>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-4 gap-[24px]">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-[#F2F4F7] p-[12px] space-y-[12px] rounded-[18px]"
          >
            <div className="relative flex flex-col justify-center h-[234px] group rounded-xl p-4 bg-[#F9FAFB] hover:bg-[#E4E7EC] transition-all duration-300">
              {/* Status */}
              <span
                className={`absolute top-[12px] right-[12px] px-[10px] py-[4px] rounded-full text-[12px] font-medium  ${getStatusColor(
                  template.status
                )}`}
              >
                {template.status == "Published" ? template.status : ""}
              </span>
            </div>
            <div className="space-y-[4px]">
              <p className="text-[16px] font-medium text-[#475467]">
                {template.title}
              </p>
              <p className="text-xs text-[#98A2B3]">
                Last updated {template.updated}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessTemplates;
