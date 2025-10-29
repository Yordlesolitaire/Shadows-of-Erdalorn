import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./comp/Overlay";

// Import des pages
import Home from "./pages/Home";
import Races from "./pages/Races";

export default function App() {
  return (
    <Router>
      <Header />

      <main className="p-6 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/races" element={<Races />} />
        </Routes>
      </main>
    </Router>
  );
}
