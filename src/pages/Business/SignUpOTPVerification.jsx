import { useContext } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import { Context } from "../../context/Context";
import OTPInput from "../../components/OTPForm";

const OTPVerification = () => {
  const userOTP = 256901;

  return (
    <div className="">
      <div className="w-[480px] border-[1px] border-[#E4E7EC] rounded-[20px] p-[32px] space-y-[40px]">
        <div className="text-center space-y-[16px]">
          <h1 className="text-[24px] font-bold">Account verification</h1>
          <h1 className="text-[14px] text-[#667085]">
            We have sent a 6 digit code to johndoe@gmail.com
          </h1>
        </div>
        <OTPInput
          userOTP={userOTP}
          buttonMessage="Create account"
          url="/business/profile"
        />
      </div>
    </div>
  );
};

export default OTPVerification;
