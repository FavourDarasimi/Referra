import { useEffect, useRef, useState, useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const OTPInput = ({ userOTP, buttonMessage, url }) => {
  const { addToast } = useContext(Context);
  const [time, setTime] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [otp, setOtp] = useState();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (time === 0) {
      setCanResend(true);
    }
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  const handleResend = () => {
    setTime(60);
    setCanResend(false);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;
    e.target.value = value;
    const newOTP = inputsRef.current.map((input) => input.value).join("");
    setOtp(newOTP);
    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }

    if (newOTP.length == 6) {
      if (userOTP !== Number(newOTP)) {
        setError(true);
        setSuccess(false);
        addToast("secondary", "Invalid OTP", "error");
      } else if (userOTP === Number(newOTP)) {
        setSuccess(true);
        setError(false);
        addToast("secondary", "OTP Verification successfully", "success");
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").slice(0, 6);
    paste.split("").forEach((char, i) => {
      if (inputsRef.current[i]) inputsRef.current[i].value = char;
    });
    const newOTP = inputsRef.current.map((input) => input.value).join("");
    setOtp(newOTP);
    if (paste.length === 6) {
      inputsRef.current[5].focus();
    }
    if (newOTP.length == 6) {
      if (userOTP !== Number(newOTP)) {
        setError(true);
        setSuccess(false);
        addToast("secondary", "Invalid OTP", "error");
      } else if (userOTP === Number(newOTP)) {
        setSuccess(true);
        setError(false);
        addToast("secondary", "OTP Verification successfully", "success");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOTP = Number(otp);
    console.log(userOTP);
    if (userOTP !== newOTP) {
      setError(true);
      setSuccess(false);
      addToast("secondary", "Invalid OTP", "error");
    } else if (userOTP === newOTP) {
      setSuccess(true);
      setError(false);
      addToast("secondary", "OTP Verification successfully", "success");
      navigate(url);
    }
  };
  return (
    <div className="space-y-[40px]">
      <div className="space-y-[20px]">
        <div className="space-y-[12px]">
          <h1 className="text-[14px] text-[#344054] font-semibold">
            Enter otp
          </h1>
          <div className="grid grid-cols-6 max-w-full gap-[8px] ">
            <input
              className={`border-[1px]  rounded-[8px] py-[16px] px-[10px] text-[14px]  text-[#101828]  outline-none w-full text-center ${
                error
                  ? "border-[#F04438] bg-[#FFFBFA] placeholder:text-[#98A2B3]"
                  : success
                  ? "not-placeholder-shown:border-[#12B76A] bg-[#F6FEF9] border-[#E4E7EC] placeholder:text-[#98A2B3]"
                  : "not-placeholder-shown:border-[#6938EF] border-[#E4E7EC] placeholder:text-[#98A2B3]"
              }`}
              maxLength={1}
              placeholder="-"
              ref={(e) => (inputsRef.current[0] = e)}
              onChange={(e) => handleChange(e, 0)}
              onKeyDown={(e) => handleKeyDown(e, 0)}
              onPaste={handlePaste}
            />
            <input
              className={`border-[1px]  rounded-[8px] py-[16px] px-[10px] text-[14px]  text-[#101828]  outline-none w-full text-center ${
                error
                  ? "border-[#F04438] bg-[#FFFBFA] placeholder:text-[#98A2B3]"
                  : success
                  ? "not-placeholder-shown:border-[#12B76A] bg-[#F6FEF9] border-[#E4E7EC] placeholder:text-[#98A2B3]"
                  : "not-placeholder-shown:border-[#6938EF] border-[#E4E7EC] placeholder:text-[#98A2B3]"
              }`}
              maxLength={1}
              placeholder="-"
              ref={(e) => (inputsRef.current[1] = e)}
              onChange={(e) => handleChange(e, 1)}
              onKeyDown={(e) => handleKeyDown(e, 1)}
              onPaste={handlePaste}
            />
            <input
              className={`border-[1px]  rounded-[8px] py-[16px] px-[10px] text-[14px]  text-[#101828]  outline-none w-full text-center ${
                error
                  ? "border-[#F04438] bg-[#FFFBFA] placeholder:text-[#98A2B3]"
                  : success
                  ? "not-placeholder-shown:border-[#12B76A] bg-[#F6FEF9] border-[#E4E7EC] placeholder:text-[#98A2B3]"
                  : "not-placeholder-shown:border-[#6938EF] border-[#E4E7EC] placeholder:text-[#98A2B3]"
              }`}
              maxLength={1}
              placeholder="-"
              ref={(e) => (inputsRef.current[2] = e)}
              onChange={(e) => handleChange(e, 2)}
              onKeyDown={(e) => handleKeyDown(e, 2)}
              onPaste={handlePaste}
            />
            <input
              className={`border-[1px]  rounded-[8px] py-[16px] px-[10px] text-[14px]  text-[#101828]  outline-none w-full text-center ${
                error
                  ? "border-[#F04438] bg-[#FFFBFA] placeholder:text-[#98A2B3]"
                  : success
                  ? "not-placeholder-shown:border-[#12B76A] bg-[#F6FEF9] border-[#E4E7EC] placeholder:text-[#98A2B3]"
                  : "not-placeholder-shown:border-[#6938EF] border-[#E4E7EC] placeholder:text-[#98A2B3]"
              }`}
              maxLength={1}
              placeholder="-"
              ref={(e) => (inputsRef.current[3] = e)}
              onChange={(e) => handleChange(e, 3)}
              onKeyDown={(e) => handleKeyDown(e, 3)}
              onPaste={handlePaste}
            />
            <input
              className={`border-[1px]  rounded-[8px] py-[16px] px-[10px] text-[14px]  text-[#101828]  outline-none w-full text-center ${
                error
                  ? "border-[#F04438] bg-[#FFFBFA] placeholder:text-[#98A2B3]"
                  : success
                  ? "not-placeholder-shown:border-[#12B76A] bg-[#F6FEF9] border-[#E4E7EC] placeholder:text-[#98A2B3]"
                  : "not-placeholder-shown:border-[#6938EF] border-[#E4E7EC] placeholder:text-[#98A2B3]"
              }`}
              maxLength={1}
              placeholder="-"
              ref={(e) => (inputsRef.current[4] = e)}
              onChange={(e) => handleChange(e, 4)}
              onKeyDown={(e) => handleKeyDown(e, 4)}
              onPaste={handlePaste}
            />
            <input
              className={`border-[1px]  rounded-[8px] py-[16px] px-[10px] text-[14px]  text-[#101828]  outline-none w-full text-center ${
                error
                  ? "border-[#F04438] bg-[#FFFBFA] placeholder:text-[#98A2B3]"
                  : success
                  ? "not-placeholder-shown:border-[#12B76A] bg-[#F6FEF9] border-[#E4E7EC] placeholder:text-[#98A2B3]"
                  : "not-placeholder-shown:border-[#6938EF] border-[#E4E7EC] placeholder:text-[#98A2B3]"
              }`}
              maxLength={1}
              placeholder="-"
              ref={(e) => (inputsRef.current[5] = e)}
              onChange={(e) => handleChange(e, 5)}
              onKeyDown={(e) => handleKeyDown(e, 5)}
              onPaste={handlePaste}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-[10px]">
          <h1 className="text-[14px] text-[#667085]">Didn't get reset code?</h1>
          {canResend ? (
            <h1
              className="cursor-pointer py-[4px] px-[12px]  bg-[#F0EBFD] rounded-full text-[12px] font-medium border-[1px]  border-[#6938EF] text-[#6938EF]"
              onClick={() => handleResend()}
            >
              Resend code
            </h1>
          ) : (
            <h1 className="cursor-pointer py-[4px] px-[12px] bg-[#F2F4F7] rounded-full text-[12px] font-medium">
              Resend in {formatTime(time)}
            </h1>
          )}
        </div>
      </div>

      <Button
        type="primary"
        full={true}
        handleSubmit={handleSubmit}
        title={buttonMessage}
      />
    </div>
  );
};

export default OTPInput;
