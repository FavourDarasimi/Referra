import React from "react";
import Brand from "../assets/Brand.png";
import { Link, useLocation } from "react-router-dom";

const AuthNavbar = ({ selectedRole }) => {
  const location = useLocation();
  const path = location.pathname;

  let pageType = "unknown"; // default

  if (path.includes("/signup")) {
    pageType = "signup";
  } else if (path.includes("/signin")) {
    pageType = "signin";
  } else if (path.includes("/role")) {
    pageType = "role";
  } else if (path.includes("/profile")) {
    pageType = "profile";
  }
  //  else if (path.startsWith("/dashboard")) {
  //     pageType = "dashboard";
  //   }
  return (
    <div className="w-full px-[80px] py-[24px] border-b-[1px] border-[#E4E7EC] flex justify-between items-center">
      <img src={Brand} alt="" className="w-[95px] h-[24px]" />
      {pageType === "signup" ? (
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[14px] text-[#667085]"> Already a member?</h1>
          <Link to="/business/registration/signin">
            <button className="bg-[#F0EBFD] text-[#6938EF] border-[#6938EF] hover:border-[#6033D9] border-[1px] rounded-full px-[12px] h-[32px] text-[14px]">
              login
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
      {pageType == "profile" ? (
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[14px] text-[#667085]"> I'll do this later</h1>

          <button className="bg-[#F0EBFD] text-[#6938EF] border-[#6938EF] hover:border-[#6033D9] border-[1px] rounded-full px-[12px] h-[32px] text-[14px]">
            Skip
          </button>
        </div>
      ) : (
        ""
      )}

      {pageType === "signin" ? (
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[14px] text-[#667085]">Don't have an account?</h1>
          <Link to="/business/registration/signup">
            <button className="bg-[#F0EBFD] text-[#6938EF] border-[#6938EF] hover:border-[#6033D9] border-[1px] rounded-full px-[12px] h-[32px] text-[14px]">
              Create an account
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AuthNavbar;
