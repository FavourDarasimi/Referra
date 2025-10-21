import "./App.css";
import { useContext } from "react";
import BusinessLogin from "./pages/Business/BusinessLogin";
import BusinessSignUp from "./pages/Business/BusinessSignUp";
import OTPVerification from "./pages/Business/OTPVerification";
import IndividualLogin from "./pages/Individual/IndividualLogin";
import IndividualSignUp from "./pages/Individual/IndividualSignUp";
import Registration from "./pages/Registration";
import RoleSelection from "./pages/RoleSelection";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import Toast from "./components/Toast";
import BusinessProfile from "./pages/Business/BusinessProfile";
import BusinessProfileImage from "./pages/Business/BusinessProfileImage";

function App() {
  const { toasts, removeToast } = useContext(Context);
  return (
    <>
      <div className="space-y-3 absolute top-[124px] left-1/2 -translate-x-1/2 transition-all duration-1000">
        {toasts.map((toast) => (
          <Toast
            variant={toast.variant}
            title={toast.title}
            type={toast.type}
            removeToast={removeToast}
          />
        ))}{" "}
      </div>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/role" element={<RoleSelection />} />

        {/* Business Routes */}
        <Route
          path="/business/registration/signup"
          element={<BusinessSignUp />}
        />
        <Route
          path="/business/registration/signin"
          element={<BusinessLogin />}
        />
        <Route
          path="/business/registration/otp/verification"
          element={<OTPVerification />}
        />
        <Route path="/business/profile" element={<BusinessProfile />} />
        <Route
          path="/business/profile/image"
          element={<BusinessProfileImage />}
        />

        {/* Individual Routes */}
        <Route path="/individual/signin" element={<IndividualLogin />} />
        <Route path="/individual/signup" element={<IndividualSignUp />} />
      </Routes>
    </>
  );
}

export default App;
