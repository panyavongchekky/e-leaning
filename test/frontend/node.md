<!-- navbar -->

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import '../../i18n/i18n';
import { MAIN_COLOR, GRAY800, WHITE_COLOR, GREEN_200 ,GRAY_400,GREEN_500 } from "../../helper";


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // ❗ จำลองไว้ก่อน (ภายหลังใช้จาก auth หรือ localStorage)
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  const handleProtectedClick = (e, path) => {
    if (!isRegistered) {
      e.preventDefault();
      alert("❗ กรุณาสมัครสมาชิกก่อนเข้าใช้งานหน้านี้");
      navigate("/Register"); // หรือจะเปลี่ยนเป็น '/login' ก็ได้
    }
  };

  return (
    <nav style={{MAIN_COLOR ,backgroundColor:GRAY800, color:WHITE_COLOR,border: GREEN_200}} className=" px-6 py-4 shadow-md flex items-center justify-between transition duration-300">
      <div className=" font-bold text-lg border-2 px-2 py-1 rounded-md">
        JK DEV
      </div>

      <div style={{color:WHITE_COLOR}} className="hidden md:flex gap-6 font-medium">
        <Link to="/" >{t("home")}</Link>
        <Link to="/Attendance" onClick={(e) => handleProtectedClick(e, "/Attendance")}>{t("Attendance")}</Link>
        <Link to="/careers" onClick={(e) => handleProtectedClick(e, "/careers")}>{t("careers")}</Link>
        <Link to="/blog" onClick={(e) => handleProtectedClick(e, "/blog")}>{t("blog")}</Link>
        <Link to="/about" onClick={(e) => handleProtectedClick(e, "/about")}>{t("about")}</Link>
      </div>

      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder={t("search")}
         style={{backgroundColor:WHITE_COLOR}} 
         className="px-4 py-2 rounded-full   text-sm focus:outline-none w-48"
        />
        <span  style={{ color:GRAY_400}}
         className="absolute right-3 top-2.5 ">🔍</span>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={() => setIsRegistered(true)} 
         style={{color:GREEN_500, backgroundColor:WHITE_COLOR}}
         className=" px-5 py-2 rounded-full font-medium">
          {t("login")}
        </button>
        <button onClick={() => navigate("/register")} 
        style={{color:WHITE_COLOR, }}
        className="bg-white bg-opacity-20 dark:bg-opacity-40 text-white px-5 py-2 rounded-full font-medium">
          {t("signup")} 
        </button>
        <button onClick={toggleDarkMode} className="ml-2 px-3 py-2 rounded-full text-white bg-black/20 dark:bg-white/20 hover:bg-opacity-30">
          {darkMode ? "🌙" : "☀️"}
        </button>
        <select onChange={(e) => changeLanguage(e.target.value)} className="rounded px-2 py-1 bg-white dark:bg-gray-700 text-sm">
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



