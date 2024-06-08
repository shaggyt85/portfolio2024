import { Toggle, SvgX } from "../../utils";
export const NavbarToggle = ({ onClick, isOpen }) => (
  <div className="flex items-center  justify-end ">
    <div className="sm:hidden">
      <button
        type="button"
        onClick={onClick}
        className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-black dark:hover:bg-white/10"
        data-hs-collapse="#navbar-collapse-with-animation"
        aria-controls="navbar-collapse-with-animation"
        aria-label="Toggle navigation"
      >
        {isOpen ? <Toggle /> : <SvgX />}
      </button>
    </div>
  </div>
);
