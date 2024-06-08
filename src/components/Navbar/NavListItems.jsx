import { NavItem } from "./NavItems";
const navItems = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];
export const NavListItems = () => {
  return (
    <>
      {navItems.map((item) => (
        <NavItem key={item.to} to={item.to}>
          {item.label}
        </NavItem>
      ))}
    </>
  );
};
