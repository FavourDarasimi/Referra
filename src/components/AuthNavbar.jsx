import Brand from "../assets/Brand.png";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

const AuthNavbar = () => {
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
  } else if (path.includes("/forgot-password")) {
    pageType = "forgot-password";
  }
  return (
    <div className="w-full px-[80px] py-[24px] border-b-[1px] border-[#E4E7EC] flex justify-between items-center">
      <img src={Brand} alt="" className="w-[95px] h-[24px]" />
      {pageType === "signup" ? (
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[14px] text-[#667085]"> Already a member?</h1>
          <Link to="/business/signin">
            <Button
              type="primaryLight"
              full={false}
              size="mini"
              title="login"
            />
          </Link>
        </div>
      ) : (
        ""
      )}
      {pageType == "profile" ? (
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[14px] text-[#667085]"> I'll do this later</h1>

          <Button type="primaryLight" full={false} size="mini" title="Skip" />
        </div>
      ) : (
        ""
      )}

      {pageType === "signin" ? (
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[14px] text-[#667085]">Don't have an account?</h1>
          <Link to="/role">
            <Button
              type="primaryLight"
              full={false}
              size="mini"
              title="Create an account"
            />
          </Link>
        </div>
      ) : (
        ""
      )}
      {pageType === "forgot-password" ? (
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[14px] text-[#667085]">
            Remember your password?
          </h1>
          <Link to="/business/signin">
            <Button
              type="primaryLight"
              full={false}
              size="mini"
              title="Login"
            />
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AuthNavbar;
