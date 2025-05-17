import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { TaskProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <TaskProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
