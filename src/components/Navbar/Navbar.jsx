import { Logo } from "../../utils";
import { NavbarToggle } from "./NavbarToggle";
import { NavListItems } from "./NavListItems";
import { useNavbar } from "../../hooks";

export const Navbar = () => {
  const { isOpen, toggleMenu } = useNavbar();

  return (
    <header className="header">
      <Logo />
      <div>
        <NavbarToggle onClick={toggleMenu} isOpen={isOpen} />
        <div
          className={`hs-collapse ${
            isOpen ? "bg-gradient-to-r from-blue-500 to-indigo-500 " : "hidden"
          }`}
        >
          <NavListItems />
        </div>
        <nav
          className={`hidden sm:flex flex-col sm:flex-row max-w-[85rem] text-lg gap-7 font-medium  w-80 h-[2.5rem] rounded-3xl px-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] items-center justify-between `}
        >
          <NavListItems />
        </nav>
      </div>
    </header>
  );
};
