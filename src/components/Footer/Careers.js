import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ตรงนี้สำคัญ!
// i18n
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
// component
import Navbar from "../Navbar/Navbar";
// const
export default function Careers() {
  const { t } = useTranslation();
  const [fontClass, setFontClass] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {
    if (i18n.language === "lo") {
      setFontClass("font-phetsarath");
    } else {
      setFontClass("");
    }
  }, [i18n.language]);


  const positions = [
    {
      title: t("careers_title01"), // ✅ เปลี่ยนเป็น careers.title01
      location: t("careers_frontendLocation"),
      type: t("careers_fulltime"),
      description: t("careers_frontendDescription"),
    },
    {
      title: t("careers_uiuxTitle"),
      location: t("careers_uiuxLocation"),
      type: t("careers_parttime"),
      description: t("careers_uiuxDescription"),
    },
  ];

  return (
    <>
      <Navbar />
      <div className={`max-w-6xl mx-auto px-6 py-16 text-gray-800 ${fontClass}`}>
        {/* Intro */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-indigo-600 mb-4">
            {t("careers_title02")}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("careers_intro1")} <br />
            {t("careers_intro2")}
          </p>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
            {t("careers_openPositions")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-indigo-700">{job.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  📍 {job.location} ・ 💼 {job.type}
                </p>
                <p className="mt-4 text-gray-700">{job.description}</p>
                <button
                  onClick={() => navigate("/apply")} // ✅ ไปหน้า /apply
                  className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-full transition"
                >
                  {t("careers_applyNow")}
                </button>

              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            {t("careers_benefitsTitle")}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-gray-700 text-lg">
            <li className="bg-gray-100 rounded-xl p-4">✅ {t("careers_benefit1")}</li>
            <li className="bg-gray-100 rounded-xl p-4">🏠 {t("careers_benefit2")}</li>
            <li className="bg-gray-100 rounded-xl p-4">💰 {t("careers_benefit3")}</li>
            <li className="bg-gray-100 rounded-xl p-4">🌴 {t("careers_benefit4")}</li>
          </ul>
        </section>

        {/* How to Apply */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {t("careers_howToApplyTitle")}
          </h2>
          <p className="text-gray-600 mb-6">
            {t("careers_howToApplyText")}{" "}
            <a
              href="mailto:panyavongchekky44@gmail.com"
              className="text-indigo-600 underline hover:text-indigo-800"
            >
              panyavongchekky44@gmail.com
            </a>
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full transition">
            {t("careers_joinUs")}
          </button>
        </section>
      </div>
    </>
  );
}
