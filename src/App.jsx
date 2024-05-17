import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { About, Projects, Contact, Root } from "./pages";
import { Spinners } from "./utils/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="lg:h-[100vh]">
      {loading ? (
        <Spinners />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      )}
    </main>
  );
};

export default App;
