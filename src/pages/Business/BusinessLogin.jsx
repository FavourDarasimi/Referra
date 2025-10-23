import { useState, useContext } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import { Context } from "../../context/Context";
import { useNavigate, Link } from "react-router-dom";
import { MdReportGmailerrorred } from "react-icons/md";
import Button from "../../components/Button";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const BusinessLogin = () => {
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
  const [showPassword, setShowPassword] = useState(false);

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
      addToast("secondary", "Invalid login credentials", "error");
      setError(newError);
    } else {
      addToast("secondary", "Logged in successfully", "success");
      setError({});
      navigate("/business/dashboard");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <AuthNavbar />
      <div className="flex-1 flex flex-col items-center justify-center ">
        <div className="h-fit space-y-[40px] w-[480px] border-[1px] border-[#E4E7EC] rounded-[20px] p-[32px]">
          <h1 className="text-[24px] font-bold text-center">
            Log in to your account
          </h1>
          <form className="space-y-[40px]" onSubmit={handleSubmit}>
            <div className="space-y-[24px]">
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
                    type={showPassword ? "text" : "password"}
                    className={`h-[56px] w-full rounded-full border-[1px] text-[14px] p-[16px] outline-none focus:border-[#6938EF] ${
                      error.password ? "border-[#F04438]" : "border-[#E4E7EC]"
                    }`}
                    placeholder="Enter your Password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                  />
                  <button
                    type="button"
                    className={`absolute inset-y-0   ${
                      error.password ? "right-10" : "right-3"
                    }`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEye className="w-[20px] h-[20px]" />
                    ) : (
                      <AiOutlineEyeInvisible className="w-[20px] h-[20px]" />
                    )}
                  </button>
                  {error.password && (
                    <MdReportGmailerrorred className="absolute right-3 -translate-y-1/2 top-[50%] text-[#F04438] w-[20px] h-[20px]" />
                  )}
                </div>
                <span className="text-[14px] text-[#F04438] mt-[8px]">
                  {error.password}
                </span>
              </div>
              <div className=" w-full flex justify-end ">
                <Link to="/business/forgot-password">
                  <h1 className="bg-[#F2F4F7] px-[14px] py-[5px] rounded-full w-fit text-[12px] font-medium text-[#101828]">
                    Forgot password?
                  </h1>
                </Link>
              </div>
            </div>

            <Button type="primary" title="Login" full={true} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessLogin;
