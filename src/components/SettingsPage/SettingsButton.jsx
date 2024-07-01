import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

function SettingsButton({ active, selectTab, children }) {
  const buttonClasses = active
    ? "dark:text-white text-black"
    : "dark:text-[#ADB7BE] text-gray-500";
  return (
    <button onClick={selectTab} className=" text-start">
      <p
        className={` text-start md:text-lg mr-3 font-semibold dark:hover:text-white hover:text-black  ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-indigo-500 mt-2"
      ></motion.div>
    </button>
  );
}

export default SettingsButton;
