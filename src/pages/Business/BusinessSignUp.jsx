import React, { useState, useContext } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import { MdReportGmailerrorred } from "react-icons/md";
import Toast from "../../components/Toast";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const BusinessSignUp = () => {
  const { addToast } = useContext(Context);
  const navigate = useNavigate();
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};
    if (
      formData.email == "" ||
      !formData.email.includes("@") ||
      !formData.email.includes(".com")
    ) {
      newError.email = "Invalid Email";
    }
    if (formData.password == "") {
      newError.password = "Invalid Password";
    }

    if (Object.keys(newError).length > 0) {
      addToast("secondary", "Error creating account", "error");
      setError(newError);
    } else {
      addToast("secondary", "Account created successfully", "success");
      setError({});
      navigate("/business/registration/otp/verification");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <AuthNavbar />
      <div className="flex-1 flex flex-col items-center justify-center ">
        <div className="h-fit space-y-[40px] w-[480px] border-[1px] border-[#E4E7EC] rounded-[20px] p-[32px]">
          <h1 className="text-[24px] font-bold text-center">
            Create an account
          </h1>
          <form className="space-y-[40px]" onSubmit={handleSubmit}>
            <div className="space-y-[20px]">
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold">
                  Business Email
                </label>
                <div className="relative">
                  <input
                    name="email"
                    type="text"
                    className={`h-[56px] w-full rounded-full border-[1px] text-[14px] p-[16px] outline-none focus:border-[#6938EF] ${
                      error.email ? "border-[#F04438]" : "border-[#E4E7EC]"
                    }`}
                    placeholder="e.g.name@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                  />
                  {error.email && (
                    <MdReportGmailerrorred className="absolute right-3 -translate-y-1/2 top-[50%] text-[#F04438] w-[20px] h-[20px]" />
                  )}
                </div>
                <span className="text-[14px] text-[#F04438] mt-[8px]">
                  {error.email}
                </span>
              </div>
              <div className="flex flex-col">
                <label className="text-[14px] font-semibold">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    className={`h-[56px] w-full rounded-full border-[1px] text-[14px] p-[16px] outline-none focus:border-[#6938EF] ${
                      error.password ? "border-[#F04438]" : "border-[#E4E7EC]"
                    }`}
                    placeholder="Enter your Password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                  />
                  {error.password && (
                    <MdReportGmailerrorred className="absolute right-3 -translate-y-1/2 top-[50%] text-[#F04438] w-[20px] h-[20px]" />
                  )}
                </div>
                <span className="text-[14px] text-[#F04438] mt-[8px]">
                  {error.password}
                </span>
              </div>
            </div>
            <div className="space-y-[32px]">
              <div className="flex gap-[12px]">
                <input type="checkbox" required />
                <h1 className="text-[14px]">
                  I have read and agree to the{" "}
                  <span className="text-[#6938EF] underline">
                    Terms & Conditions
                  </span>
                </h1>
              </div>
              <button
                type="submit"
                className="w-full bg-[#6938EF] text-white rounded-full  text-[14px] hover:bg-[#6033D9] transition-all duration-300 h-[56px] focus:border-[2px] focus:border-[#D1C1FA]"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignUp;
