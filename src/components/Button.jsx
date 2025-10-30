import React from "react";

const Button = ({
  full = false,
  Icon = null,
  IconRight = null,
  type,
  size = "default",
  handleSubmit,
  title,
  styles = "",
  disabled = null,
}) => {
  const sizeClasses = {
    default: "h-[56px] px-[12px] text-[14px] focus:border-[2px]",
    large: "h-[48px] px-[12px] text-[14px] focus:border-[2px]",
    small: "h-[40px] px-[12px] text-[14px]",
    mini: "h-[32px] px-[12px] text-[12px]",
  };

  const iconSize = {
    default: "w-[20px] h-[20px]",
    large: "w-[20px] h-[20px]]",
    small: "w-[20px] h-[20px]",
    mini: "w-[16px] h-[16px]",
  };

  const defaultStyles = {
    primary:
      "bg-[#6938EF] hover:bg-[#6033D9] focus:border-[#D1C1FA] text-white",
    primaryLight: "bg-[#F0EBFD] ] border-[1px] border-[#6938EF] text-[#6938EF]",
    neutralOutline: "border-[1px] border-[#E4E7EC] text-[#667085]",
  };
  return (
    <button
      type="submit"
      onClick={(e) => handleSubmit(e)}
      className={`${full ? "w-full" : "w-fit"} ${styles} ${
        defaultStyles[type]
      }   rounded-full   transition-all duration-300 ${
        sizeClasses[size]
      }  cursor-pointer flex justify-center items-center gap-[4px]`}
      disabled={disabled}
    >
      {IconRight ? "" : Icon ? <Icon className={`${iconSize[size]}`} /> : ""}

      {title}
      {IconRight ? Icon ? <Icon className={`${iconSize[size]}`} /> : "" : ""}
    </button>
  );
};

export default Button;
