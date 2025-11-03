import React, { useState } from "react";
import {
  User,
  Mail,
  Camera,
  Building2,
  Palette,
  Cpu,
  Shield,
  Eye,
  EyeOff,
} from "lucide-react";
import BusinessProfileSettings from "../../components/BusinessProfileSettings";

const BusinessSettings = () => {
  const [activeTab, setActiveTab] = useState("Personal");
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { name: "Personal", icon: User },
    { name: "Business", icon: Building2 },
    { name: "Branding", icon: Palette },
    { name: "AI", icon: Cpu },
    { name: "Security", icon: Shield },
  ];

  return (
    <div className="bg-white p-[24px] rounded-[20px] min-h-full space-y-[20px]">
      {/* Header */}
      <div className="">
        <h1 className="text-[24px] font-semibold text-[#344054]">Settings</h1>
      </div>

      {/* Tabs */}
      <div className="bg-[#F9FAFB] w-fit p-[6px] rounded-full">
        <div className="flex gap-[10px]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`p-[10px] w-[100px] transition-colors ${
                  activeTab === tab.name
                    ? "bg-white rounded-full text-[#101828]"
                    : "text-[#98A2B3]"
                }`}
              >
                <span className="text-[14px] font-medium">{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Personal Tab Content */}
      {activeTab === "Personal" && <BusinessProfileSettings />}

      {/* Other Tabs (Placeholder) */}
      {activeTab !== "Personal" && (
        <div className="flex items-center justify-center h-[400px]">
          <div className="text-center space-y-[16px]">
            <div className="w-[80px] h-[80px] rounded-full bg-[#F9FAFB] flex items-center justify-center mx-auto">
              {activeTab === "Business" && (
                <Building2 className="w-[40px] h-[40px] text-[#667085]" />
              )}
              {activeTab === "Branding" && (
                <Palette className="w-[40px] h-[40px] text-[#667085]" />
              )}
              {activeTab === "AI" && (
                <Cpu className="w-[40px] h-[40px] text-[#667085]" />
              )}
              {activeTab === "Security" && (
                <Shield className="w-[40px] h-[40px] text-[#667085]" />
              )}
            </div>
            <div>
              <h3 className="text-[16px] font-semibold text-[#101828] mb-[8px]">
                {activeTab} Settings
              </h3>
              <p className="text-[14px] text-[#667085]">
                This section is under development
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessSettings;
