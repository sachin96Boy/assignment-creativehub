import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import DashboardScreen from "./pages/DashboardScreen";

function App() {
  const user = localStorage.getItem("User");

  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardScreen />} />
      <Route path="/" element={<LoginScreen />} />
      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}

export default App;
