import React, { useState } from "react";

export const SideMenu = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <div className="relative">
      {/* Button positioned in the top left corner */}
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 absolute top-0 left-0 mt-4 ml-4"
        type="button"
        onClick={toggleDrawer}
        aria-expanded={drawerVisible}
        aria-controls="drawer-navigation"
      >
        {drawerVisible ? "Hide navigation" : "Show navigation"}
      </button>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
          drawerVisible ? "" : "-translate-x-full"
        } bg-white dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        {/* Your drawer content here */}
        {/* For brevity, I'm omitting the content inside the drawer */}
      </div>
    </div>
  );
};
