import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "../../components";
import { About, Projects, Contact, Root } from "../../pages";

export const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
