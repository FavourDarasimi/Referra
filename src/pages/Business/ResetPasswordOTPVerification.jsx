import AuthNavbar from "../../components/AuthNavbar";
import OTPInput from "../../components/OTPForm";
import { IoArrowBack } from "react-icons/io5";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ResetPasswordOTPVerification = () => {
  const userOTP = 256901;
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className="flex flex-col h-screen">
      <AuthNavbar />
      <div className="flex-1 flex flex-col items-center justify-center ">
        <div className="w-[480px] border-[1px] border-[#E4E7EC] rounded-[20px] p-[32px] space-y-[40px]">
          <div className="text-center space-y-[16px]">
            <h1 className="text-[24px] font-bold">Enter OTP</h1>
            <h1 className="text-[14px] text-[#667085]">
              Enter the 6 digit reset code sent to johndoe@gmail.com
            </h1>
          </div>
          <OTPInput
            userOTP={userOTP}
            buttonMessage="Verify Code"
            url="/business/forgot-password/password-reset"
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
    </div>
  );
};

export default ResetPasswordOTPVerification;
