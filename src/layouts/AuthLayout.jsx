import AuthNavbar from "../components/AuthNavbar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <AuthNavbar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
