import { Routes, Route } from "react-router-dom";
import SelectChart from "./pages/SelectChart";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectChart />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
