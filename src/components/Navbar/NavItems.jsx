import { NavLink } from "react-router-dom";

const determineClass = ({ isActive }) =>
  isActive ? "text-greenRgb " : "sm:text-white text-black";

export const NavItems = ({ to, children, onLinkClick }) => (
  <NavLink to={to} onClick={onLinkClick} className={determineClass}>
    {children}
  </NavLink>
);
