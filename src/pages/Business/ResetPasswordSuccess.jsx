import { IoMdCheckmarkCircle } from "react-icons/io";
import AuthNavbar from "../../components/AuthNavbar";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const ResetPasswordSuccess = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/business/signin");
  };
  return (
    <div className="flex flex-col h-screen">
      <AuthNavbar />
      <div className="flex-1 flex flex-col items-center justify-center ">
        <div className="h-fit space-y-[40px] w-[480px] border-[1px] border-[#E4E7EC] rounded-[20px] p-[32px] flex flex-col items-center">
          <div className="p-[20px] bg-[#F0EBFD] rounded-full w-fit">
            <div className="p-[20px] bg-[#D1C1FA] rounded-full w-fit">
              <IoMdCheckmarkCircle className="fill-[#6938EF] w-[33px] h-[33px]" />
            </div>
          </div>
          <div className="space-y-[16px] text-center">
            <h1 className="text-[24px] font-bold">Password changed!</h1>
            <h1 className="text-[14px] text-[#667085]">
              You have successfully reset your password. Go back to login with
              your new credentials.
            </h1>
          </div>
          <Button
            full={true}
            type="primary"
            title="Back to login"
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
