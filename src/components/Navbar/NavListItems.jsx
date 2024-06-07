import { NavItems } from "./NavItems";
import { navItems } from "../../constants/RoutesNavbarLinks";

export const NavListItems = ({ onLinkClick }) => {
  return navItems.map((item) => (
    <NavItems
      className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff]"
      key={item.to}
      to={item.to}
      onLinkClick={onLinkClick}
    >
      {item.label}
    </NavItems>
  ));
};
