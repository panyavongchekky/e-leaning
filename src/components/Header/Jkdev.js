import React, { useEffect, useState } from "react";
import { PlayCircle } from "lucide-react";
import GroupImg from "../../assets/images/Group1.png";
import Group2Img from "../../assets/images/Group2.png";
import Group3Img from "../../assets/images/Group3.png";
// i18n
import { useTranslation, Trans } from "react-i18next";
import i18n from "../../i18n/i18n";
// color
import { WHITE_COLOR,BLACK_COLOR,GREEN_500,GRAY_COLOR1,BLACK40,BLUE_700 } from "../../helper";
const Jkdev = () => {
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
    <section style={{ backgroundColor:WHITE_COLOR,BLACK_COLOR}} className={`py-20 px-6 md:px-20 ${fontClass}`}>
      {/* Headline */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          <Trans i18nKey="headline" components={{ 1: <span style={{color:GREEN_500}} /> }} />
        </h2>
        <p style={{color: GRAY_COLOR1}} className="mt-4 leading-relaxed">
          {t("desc")}
        </p>
      </div>

      {/* For Instructors / Students */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Instructor */}
        <div
          className="relative rounded-xl overflow-hidden h-64 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${GroupImg})` }}
        >
          <div style={{backgroundColor:BLACK40}} className="absolute inset-0 "></div>
          <div style={{color:WHITE_COLOR}} className="relative z-10 text-center">
            <div className="text-lg font-semibold mb-2">{t("forInstructors")}</div>
            <button className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
              {t("startClass")}
            </button>
          </div>
        </div>

        {/* Students */}
        <div
          className="relative rounded-xl overflow-hidden h-64 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${Group2Img})` }}
        >
          <div style={{backgroundColor:BLACK40}} className="absolute inset-0"></div>
          <div style={{color:WHITE_COLOR}} className="relative z-10 text-center ">
            <div className="text-lg font-semibold mb-2">{t("forStudents")}</div>
            <button  className="bg-teal-500 px-4 py-2 rounded-full hover:bg-teal-600 transition">
              {t("enterCode")}
            </button>
          </div>
        </div>
      </div>

      {/* Physical Classroom Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h3 style={{color:BLUE_700}} className="text-xl md:text-2xl font-semibold mb-4">
            <Trans i18nKey="physicalHeadline" components={{ 1: <span style={{color:GREEN_500}} /> }} />
          </h3>
          <p style={{color:GRAY_COLOR1}} className=" mb-4">{t("physicalDesc")}</p>
        </div>

        {/* Image + Play Button */}
        <div className="relative">
          <img src={Group3Img} alt="classroom" className="rounded-xl shadow-lg" />
          <button className="absolute inset-0 flex items-center justify-center">
            <PlayCircle size={60} style={{color:GREEN_500}} className=" hover:scale-105 transition" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jkdev;
