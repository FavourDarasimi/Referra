const RoleCard = ({
  key,
  Icon,
  title,
  description,
  selectedRole,
  setSelectedRole,
}) => {
  const handleClick = () => {
    setSelectedRole(title);
    localStorage.setItem("role", title);
  };
  return (
    <div
      className={`p-[20px] border-[1px] cursor-pointer transition-all duration-500 space-y-[12px] rounded-[12px] ${
        selectedRole === title
          ? "bg-[#F0EBFD] border-[#6938EF]"
          : "border-[#E4E7EC]"
      }`}
      onClick={() => handleClick()}
    >
      <div
        className={`p-[8px] w-fit rounded-[8px] transition-all duration-500 ${
          selectedRole === title ? "bg-[#6938EF] text-white" : "bg-[#F2F4F7]"
        }`}
      >
        <Icon className="w-[24px] h-[24px]" />
      </div>
      <h1 className="text-[16px] font-bold">{title}</h1>
      <h1 className="text-[14px] text-[#475467]">{description}</h1>
    </div>
  );
};

export default RoleCard;
