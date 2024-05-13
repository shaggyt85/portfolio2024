import { Logo } from "../../utils";
import { NavItem } from "./NavItems";

export const Navbar = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="flex text-lg gap-7 font-medium">
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </nav>
    </header>
  );
};
