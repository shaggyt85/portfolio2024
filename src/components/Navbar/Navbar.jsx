import { Logo } from "../../utils";
import { NavItem } from "./NavItems";

export const Navbar = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="flex text-lg gap-7 font-medium  w-80 h-[2.5rem] rounded-3xl px-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] items-center ">
        <NavItem to="/about">About</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </nav>
    </header>
  );
};
