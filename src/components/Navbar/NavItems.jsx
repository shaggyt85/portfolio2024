import { NavLink } from "react-router-dom";
export const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? "text-blue-500" : "text-black")}
  >
    {children}
  </NavLink>
);
