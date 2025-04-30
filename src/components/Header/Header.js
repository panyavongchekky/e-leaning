import React, { useEffect, useState } from "react";
import { FileText, CalendarCheck, Users } from "lucide-react";
// i18n
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
//color
import { WHITE_COLOR,BLACK_COLOR,GRAY_COLOR,GREEN_500,GRAY_COLOR700,BLUE_700,BLUE_500,GRAY_COLOR1,SKY_5000 } from "../../helper";

const Header = () => {
  const { t } = useTranslation();
  const [fontClass, setFontClass] = useState("");
  // useEffect
  useEffect(() => {
    if (i18n.language === "lo") {
      setFontClass("font-phetsarath");
    } else {
      setFontClass("");
    }
  }, [i18n.language]);

  return (
    <section  style={{ backgroundColor: WHITE_COLOR, color: BLACK_COLOR}}
    className={`py-20 px-6 md:px-20 ${fontClass}`}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">{t("ourSuccess")}</h2>
        <p style={{ color:GRAY_COLOR}} className=" mt-2">{t("details")}</p>
      </div>

      <div style={{color:GREEN_500}} className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center font-semibold text-xl mb-20">
        <div>
          <div className="text-3xl">15K+</div>
          <div style={{color:GRAY_COLOR700}} className="text-sm">{t("students")}</div>
        </div>
        <div>
          <div className="text-3xl">75%</div>
          <div  style={{color:GRAY_COLOR700}} className="text-sm ">{t("successRate")}</div>
        </div>
        <div>
          <div className="text-3xl">35</div>
          <div  style={{color:GRAY_COLOR700}} className="text-sm">{t("mainQuestions")}</div>
        </div>
        <div>
          <div className="text-3xl">26</div>
          <div  style={{color:GRAY_COLOR700}} className="text-sm">{t("chiefExperts")}</div>
        </div>
        <div>
          <div className="text-3xl">16</div>
          <div  style={{color:GRAY_COLOR700}} className="text-sm">{t("experienceYears")}</div>
        </div>
      </div>

      <div className="text-center mb-14">
        <h3 style={{color:BLUE_700}} className="text-xl font-bold">
          {t("allInOne")} <span style={{ color:GREEN_500}}>{t("cloudSoftware")}</span>
        </h3>
        <p style={{color:GRAY_COLOR}} className="mt-2 max-w-2xl mx-auto">{t("description")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div style={{backgroundColor:WHITE_COLOR}} className=" p-6 rounded-xl shadow-md text-center">
          <div style={{backgroundColor:BLUE_500,color:WHITE_COLOR}} className=" w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
            <FileText size={24} />
          </div>
          <h4 className="font-bold text-lg mb-2">{t("title")}</h4>
          <p style={{color: GRAY_COLOR1}} className=" text-sm">{t("text")}</p>
        </div>

        <div  style={{ backgroundColor: WHITE_COLOR}} className=" p-6 rounded-xl shadow-md text-center">
          <div style={{ backgroundColor: GREEN_500,color:WHITE_COLOR}} className=" w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
            <CalendarCheck size={24} />
          </div>
          <h4 className="font-bold text-lg mb-2">{t("title1")}</h4>
          <p style={{color: GRAY_COLOR1}}  className="text-sm">{t("text1")}</p>
        </div>

        <div style={{ backgroundColor: WHITE_COLOR}} className=" p-6 rounded-xl shadow-md text-center">
          <div style={{color:WHITE_COLOR,color:SKY_5000}} className=" w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4">
            <Users size={24} />
          </div>
          <h4 className="font-bold text-lg mb-2">{t("title2")}</h4>
          <p style={{color: GRAY_COLOR1}}  className=" text-sm">{t("text2")}</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
