import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import BannerImage from "../../assets/images/Banner_1.png";
import jackImage from "../../assets/images/jack.jpg";
import { useTranslation } from "react-i18next";
import '../../i18n/i18n';

// color
import {
  MAIN_COLOR,
  WHITE_COLOR,
  ORANGE_COLOR,
  BLACK_COLOR,
  GRAY_COLOR,
  GRAY_COLOR1,
  PINK_COLOR,
} from "../../helper";

const Banner = () => {
  const { t, i18n } = useTranslation();
  const [fontClass, setFontClass] = useState("");
  const navigate = useNavigate();

  // ✅ แก้ไข: useEffect ต้องอยู่นอก handleClick
  useEffect(() => {
    if (i18n.language === "lo") {
      setFontClass("font-phetsarath");
    } else {
      setFontClass("");
    }
  }, [i18n.language]);

  const handleClick = () => {
    navigate('/attendance');
  };

  return (
    <section
      style={{ backgroundColor: MAIN_COLOR, color: WHITE_COLOR }}
      className={`py-20 px-6 md:px-20 relative overflow-hidden ${fontClass}`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ color: ORANGE_COLOR }}>{t("bannerTitle")} </span>
            {t("banner")}
          </h1>

          <p style={{ color: WHITE_COLOR }} className="mb-6">
            {t("bannerDescription")}<br />
          </p>
          <div className="flex items-center gap-4">
            <button
              style={{ backgroundColor: WHITE_COLOR, color: MAIN_COLOR }}
              className="font-semibold px-6 py-3 rounded-full"
            >
              {t("bannerButton")}
            </button>
            <button
              style={{ backgroundColor: WHITE_COLOR }}
              className="w-12 h-12 rounded-full flex items-center justify-center"
            >
              ▶️
            </button>
            <span style={{ color: BLACK_COLOR }} className="font-medium">
              {t("bannerWatch")}
            </span>
          </div>
        </div>

        {/* Right Image with floating cards */}
        <div className="relative">
          <img
            src={BannerImage}
            alt="Student"
            className="z-0 relative w-full max-w-md mx-auto top-0"
          />

          <div
            style={{ backgroundColor: WHITE_COLOR, color: BLACK_COLOR }}
            className="absolute top-40 left-0 z-10 px-4 py-2 rounded-xl shadow-lg"
          >
            📚 {t("badge")}
          </div>

          <div
            style={{ backgroundColor: WHITE_COLOR }}
            className="absolute top-[300px] right-5 z-10 px-10 py-2 rounded-xl shadow-md flex items-center gap-2"
          >
            <span className="absolute left-2 top-[10px]">📩</span>
            <div>
              <div style={{ color: GRAY_COLOR }} className="font-semibold">
                {t("congratsTitle")}
              </div>
              <div style={{ color: GRAY_COLOR1 }} className="text-xs">
                {t("congratsDetail")}
              </div>
            </div>
          </div>

          <div
            style={{ backgroundColor: WHITE_COLOR }}
            className="absolute bottom-[7em] left-0 z-10 px-4 py-3 rounded-xl shadow-md w-64"
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src={jackImage}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div style={{ color: GRAY_COLOR }} className="font-semibold">
                  {t("classTitle")}
                </div>
                <div style={{ color: GRAY_COLOR1 }} className="text-xs">
                  {t("classTime")}
                </div>
              </div>
            </div>
            <button
              onClick={handleClick}
              style={{ backgroundColor: PINK_COLOR, color: WHITE_COLOR }}
              className="px-4 py-2 rounded-full text-sm"
            >
              {t("joinNow")}
            </button>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div
        style={{ backgroundColor: MAIN_COLOR }}
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-150"
      >
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
