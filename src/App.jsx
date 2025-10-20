import "./App.css";
import BusinessLogin from "./pages/Business/BusinessLogin";
import BusinessSignUp from "./pages/Business/BusinessSignUp";
import IndividualLogin from "./pages/Individual/IndividualLogin";
import IndividualSignUp from "./pages/Individual/IndividualSignUp";
import Registration from "./pages/Registration";
import RoleSelection from "./pages/RoleSelection";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/role" element={<RoleSelection />} />

        {/* Business Routes */}
        <Route path="/business/signup" element={<BusinessSignUp />} />
        <Route path="/business/signin" element={<BusinessLogin />} />

        {/* Individual Routes */}
        <Route path="/individual/signin" element={<IndividualLogin />} />
        <Route path="/individual/signup" element={<IndividualSignUp />} />
      </Routes>
    </>
  );
}

export default App;
