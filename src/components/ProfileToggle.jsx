import { useState } from "react";

export const ProfileToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex text-sm place-self-center bg-zinc-900 w-14 h-14 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded={isMenuOpen ? "true" : "false"}
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-14 h-14 rounded-full"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="user photo"
        />
      </button>
      {/* Dropdown menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } z-50 absolute right-0 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-zinc-900 dark:divide-gray-600`}
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Bonnie Green
          </span>
          <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
            name@example.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Settings
            </a>
          </li>

          <li>
            <a
              href="/logIn"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
