import React, { useState } from "react";
import AuthNavbar from "../components/AuthNavbar";
import RoleCard from "../components/RoleCard";
import { TbBuilding } from "react-icons/tb";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const roles = [
    {
      icon: TbBuilding,
      title: "As a Business/Organization",
      description:
        "For companies, teams, and hiring managers who want to streamline reference checks, manage responses, and gain insights on candidates.Select this role to create reference templates, send requests, and analyze feedback with AI support.",
    },
    {
      icon: HiOutlineUser,
      title: "As a Referee/Individual",
      description:
        "For individuals who need to provide references, create custom templates, or respond to requests from businesses.Select this role to fill out reference forms and manage your templates with ease.",
    },
  ];

  const handleContinue = () => {
    if (selectedRole === "As a Business/Organization") {
      navigate("/business/signup");
    } else if (selectedRole === "As a Referee/Individual") {
      navigate("/individual/signup");
    } else if (selectedRole === null) {
      alert("Please select a role to continue.");
    }
  };
  return (
    <div className="w-[480px]  p-[32px] space-y-[40px]">
      <h1 className="font-bold text-[24px]">How do you want to use referra?</h1>
      <div className="space-y-[20px]">
        {roles.map((role, index) => (
          <RoleCard
            key={index}
            Icon={role.icon}
            title={role.title}
            description={role.description}
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
          />
        ))}
      </div>
      <button
        onClick={handleContinue}
        className="w-full bg-[#6938EF] text-white rounded-full  text-[14px] hover:bg-[#6033D9] transition-all duration-300 h-[56px] focus:border-[2px] focus:border-[#D1C1FA]"
      >
        Continue
      </button>
    </div>
  );
};

export default RoleSelection;
