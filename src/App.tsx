import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import DashboardScreen from "./pages/DashboardScreen";

function App() {
  const user = localStorage.getItem("User");
  const signedInstage = user ? (
    <Routes>
      <Route path="/dashboard" element={<DashboardScreen />} />
      <Route path="*" element={<Navigate to={"/dashboard"} replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
  return signedInstage;
}

export default App;
