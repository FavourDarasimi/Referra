import React from "react";
import Brand from "../assets/Brand.png";
import { useLocation } from "react-router-dom";

const AuthNavbar = ({ selectedRole }) => {
  location = useLocation();
  const path = location.pathname;

  let pageType = "unknown"; // default

  if (path.includes("/signin")) {
    pageType = "signin";
  } else if (path.includes("/signup")) {
    pageType = "signup";
  } else if (path.includes("/role")) {
    pageType = "role";
  }
  //   else if (path === "/profile") {
  //     pageType = "profile";
  //   } else if (path.startsWith("/dashboard")) {
  //     pageType = "dashboard";
  //   }
  return (
    <div className="w-full px-[80px] py-[24px] border-b-[1px] border-[#E4E7EC] flex justify-between">
      <img src={Brand} alt="" className="w-[95px] h-[24px]" />
      {pageType === "signup" ? (
        <div>
          <h1 className="text-[14px] text-[#667085]"> Already a member?</h1>
          <button></button>
        </div>
      ) : (
        ""
      )}
      <div></div>
    </div>
  );
};

export default AuthNavbar;
