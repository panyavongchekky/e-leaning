import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";
import { WHITE_COLOR, BLUE_700, GRAY_COLOR1, MAIN_COLOR, BLUE_600 } from "../../helper";

import Rectangle from '../../assets/images/Rectangle.png';
import Rectangle1 from '../../assets/images/Rectangle1.png';
import Rectangle2 from '../../assets/images/Rectangle2.png';
import Rectangle3 from '../../assets/images/Rectangle3.png';

const images = [Rectangle, Rectangle1, Rectangle2, Rectangle3];

const NewsSection = () => {
  const { t } = useTranslation();
  const [fontClass, setFontClass] = useState("");

  useEffect(() => {
    setFontClass(i18n.language === "lo" ? "font-phetsarath" : "");
  }, [i18n.language]);

  const newsItems = [1, 2, 3, 4].map((i, index) => ({
    tag: t(`news${i}Tag`),
    title: t(`news${i}Title`),
    desc: t(`news${i}Desc`),
    image: images[index],
  }));

  return (
    <section style={{ backgroundColor: WHITE_COLOR }} className={`py-16 px-6 md:px-20 ${fontClass}`}>
      <div className="text-center mb-12">
        <h2 style={{ color: BLUE_700 }} className="text-3xl md:text-4xl font-bold mb-2">
          {t("newsHeadline")}
        </h2>
        <p style={{ color: GRAY_COLOR1 }}>{t("newsSubtext")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Main News */}
        <div className="flex flex-col md:flex-row gap-6">
          <img src={newsItems[0].image} alt="Main News" className="rounded-xl w-full md:w-1/2 h-64 object-cover" />
          <div className="flex-1">
            <span style={{ backgroundColor: MAIN_COLOR, color: WHITE_COLOR }} className="px-3 py-1 text-xs rounded-full">
              {newsItems[0].tag}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{newsItems[0].title}</h3>
            <p style={{ color: GRAY_COLOR1 }} className="mt-2 text-sm">{newsItems[0].desc}</p>
            <a href="#" style={{ color: BLUE_600 }} className="mt-2 inline-block text-sm font-medium hover:underline">
              {t("readMore")}
            </a>
          </div>
        </div>

        {/* Other News */}
        <div className="flex flex-col gap-6">
          {newsItems.slice(1).map((item, index) => (
            <div key={index} className="flex gap-4">
              <img src={item.image} alt={`News ${index + 2}`} className="w-24 h-24 rounded-lg object-cover" />
              <div>
                <span style={{ backgroundColor: MAIN_COLOR, color: WHITE_COLOR }} className="px-2 py-1 text-xs rounded-full">
                  {item.tag}
                </span>
                <h4 className="mt-1 font-semibold text-sm">{item.title}</h4>
                <p style={{ color: GRAY_COLOR1 }} className="text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
