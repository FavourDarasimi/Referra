import { useState, useEffect } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [match, setMatch] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!confirmPassword) {
      setMatch(null);
    } else if (password === confirmPassword) {
      setMatch(true);
    } else if (password !== confirmPassword) {
      setMatch(false);
    }
  }, [password, confirmPassword]);

  const validations = {
    length: password && password.length >= 8,
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    uppercase: /[A-Z]/.test(password),
  };

  const handleChange1 = (e) => {
    setPassword(e.target.value);
  };
  const handleChange2 = (e) => {
    setconfirmPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/business/forgot-password/success");
  };
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className=" ">
      <div className="h-fit space-y-[40px] w-[480px] border-[1px] border-[#E4E7EC] rounded-[20px] p-[32px]">
        <div className="space-y-[16px] text-center">
          <h1 className="text-[24px] font-bold">Forgot password?</h1>
          <h1 className="text-[14px] text-[#667085]">
            Provide a valid email adress to recieve the rset code.
          </h1>
        </div>
        <div className="space-y-[16px]">
          <div className="">
            <label className="text-[14px] font-semibold">Password</label>
            <div className="relative">
              <input
                name="pasword"
                type={showPassword ? "text" : "password"}
                className={`h-[56px] w-full rounded-full border-[1px] border-[#E4E7EC] text-[14px] p-[16px] outline-none focus:border-[#6938EF] `}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => handleChange1(e)}
              />
              <button
                className="absolute inset-y-0  right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEye className="w-[20px] h-[20px]" />
                ) : (
                  <AiOutlineEyeInvisible className="w-[20px] h-[20px]" />
                )}
              </button>
            </div>
          </div>
          <div className="ml-5">
            <ul className="text-[14px] text-[#D0D5DD] list-disc space-y-[7px]">
              <li
                className={`font-medium ${
                  password
                    ? password.length > 0 && validations.length
                      ? "text-[#12B76A] "
                      : "text-[#F04438]"
                    : ""
                }`}
              >
                8 or more characters
              </li>
              <li
                className={`font-medium ${
                  password
                    ? password.length > 0 && validations.number
                      ? "text-[#12B76A] "
                      : "text-[#F04438]"
                    : ""
                }`}
              >
                At least 1 number
              </li>
              <li
                className={`font-medium ${
                  password
                    ? password.length > 0 && validations.special
                      ? "text-[#12B76A] "
                      : "text-[#F04438]"
                    : ""
                }`}
              >
                At least 1 special character
              </li>
              <li
                className={`font-medium ${
                  password
                    ? password.length > 0 && validations.uppercase
                      ? "text-[#12B76A] "
                      : "text-[#F04438]"
                    : ""
                }`}
              >
                At least 1 uppercase letter
              </li>
            </ul>
          </div>
          <div className="">
            <label className="text-[14px] font-semibold">
              Confirm Password
            </label>
            <div className="relative">
              <input
                name="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                className={`h-[56px] w-full rounded-full border-[1px] border-[#E4E7EC] text-[14px] p-[16px] outline-none focus:border-[#6938EF] `}
                placeholder="Enter your password"
                value={confirmPassword}
                onChange={(e) => handleChange2(e)}
              />
              <button
                className="absolute inset-y-0  right-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEye className="w-[20px] h-[20px]" />
                ) : (
                  <AiOutlineEyeInvisible className="w-[20px] h-[20px]" />
                )}
              </button>
            </div>
          </div>
        </div>
        <Button
          full={true}
          type="primary"
          title="Reset your password"
          handleSubmit={handleSubmit}
        />
        <div className="flex w-full justify-center">
          <Button
            type="neutralOutline"
            size="mini"
            title="Back"
            Icon={IoArrowBack}
            handleSubmit={handleBack}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
