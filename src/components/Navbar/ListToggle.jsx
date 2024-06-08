import { NavbarToggle } from "./NavbarToggle";
import { NavListItems } from "./NavListItems";
import { useNavbar } from "../../hooks";

export const ListToggle = () => {
  const { isOpen, toggleMenu } = useNavbar();

  return (
    <div>
      <NavbarToggle onClick={toggleMenu} isOpen={isOpen} />
      <div
        className={`${
          isOpen
            ? "bg-gradient-to-r from-blue-400 to-indigo-100 rounded-lg transition-all duration-500 ease-in-out sm:hidden h-[50vh] w-[50vw] flex flex-col items-center justify-evenly hover:animate-pulse -translate-x-1 translate-y-2"
            : "hidden"
        }`}
      >
        <NavListItems onLinkClick={toggleMenu} />
      </div>
      <nav
        className={`hidden sm:flex flex-col sm:flex-row max-w-[85rem] text-lg gap-7 font-medium  w-80 h-[2.5rem] rounded-3xl px-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] items-center justify-between `}
      >
        <NavListItems />
      </nav>
    </div>
  );
};
