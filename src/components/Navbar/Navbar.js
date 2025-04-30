import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../../i18n/i18n'; // อย่าลืม import

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="bg-teal-400 dark:bg-gray-800 px-6 py-4 shadow-md flex items-center justify-between transition duration-300">
      {/* Logo */}
      <div className="text-white font-bold text-lg border-2 border-teal-200 px-2 py-1 rounded-md">
        JK DEV
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-6 text-white font-medium">
        <a href="#">{t("home")}</a>
        <a href="#">{t("courses")}</a>
        <a href="#">{t("careers")}</a>
        <a href="#">{t("blog")}</a>
        <a href="#">{t("about")}</a>
      </div>

{/* Search */}
<div className="relative hidden md:block">
      <input
        type="text"
        placeholder={t("search")} 
        className="px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-sm text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none w-48"
      />
      <span className="absolute right-3 top-2.5 text-gray-400 dark:text-gray-300">
        🔍
      </span>
    </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-white text-teal-500 dark:bg-gray-700 dark:text-white px-5 py-2 rounded-full font-medium">
          {t("login")}
        </button>
        <button className="bg-white bg-opacity-20 dark:bg-opacity-40 text-white px-5 py-2 rounded-full font-medium">
          {t("signup")}
        </button>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-2 px-3 py-2 rounded-full text-white bg-black/20 dark:bg-white/20 hover:bg-opacity-30"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Language Select */}
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="rounded px-2 py-1 bg-white dark:bg-gray-700 text-sm"
        >
          <option value="en">EN</option>
          <option value="th">TH</option>
          <option value="lo">LO</option>
          <option value="cn">CN</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
