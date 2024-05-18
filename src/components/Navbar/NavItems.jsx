import { NavLink } from "react-router-dom";
export const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? "text-greenRgb" : "text-white")}
  >
    {children}
  </NavLink>
);
