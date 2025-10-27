import { useState } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/business/forgot-password/otp/verification");
  };
  return (
    <div className="">
      <div className="h-fit space-y-[40px] w-[480px] border-[1px] border-[#E4E7EC] rounded-[20px] p-[32px]">
        <div className="space-y-[16px] text-center">
          <h1 className="text-[24px] font-bold">Forgot password?</h1>
          <h1 className="text-[14px] text-[#667085]">
            Provide a valid email adress to recieve the rset code.
          </h1>
        </div>
        <div className="">
          <label className="text-[14px] font-semibold">Email</label>
          <div className="">
            <input
              name="email"
              type="text"
              className={`h-[56px] w-full rounded-full border-[1px] border-[#E4E7EC] text-[14px] p-[16px] outline-none focus:border-[#6938EF] `}
              placeholder="e.g.name@gmail.com"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <Button
          full={true}
          type="primary"
          title="Send reset code"
          handleSubmit={handleContinue}
          styles={
            email
              ? "cursor-pointe"
              : "bg-[#D1C1FA] hover:bg-[#D1C1FA] cursor-not-allowed"
          }
          disabled={email ? false : true}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
