import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// Pages import
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Mobile Pages import
import NotSupportedYet from "./mobile/pages/NotSupportedYet";

// Hooks import
import useDeviceType from "./hooks/useDeviceType";

function App() {
  const isPhone = useDeviceType();

  if (isPhone) {
    return (
      <div>
        <NotSupportedYet />
      </div>
    );
  }

  return (
    <Router basename="/DennisZhouPortfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
