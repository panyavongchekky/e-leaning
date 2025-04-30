import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// color
import { BLACK_FOOTER, WHITE_COLOR, BLUE_400, GRAY_400 } from "../../helper";

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email, // 👈  key to user
    };

    emailjs
      .send(
        "service_x9ivb9s",       // ✅ Service ID
        "template_d8xto9e",      // ✅ Template ID
        templateParams,
        "Nje3vjz3Ark0I3bIL"      // ✅ Public Key
      )
      .then(
        (result) => {
          // console.log(result.text);
          setStatus("✅ ສົ່ງສຳເລັດແລ້ວ!");
          setEmail("");

          // ລົບຫລັງຈາກ 3 ວິນາທີ
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          // console.log(error.text);
          setStatus("❌ ເກີດຂໍ້ຜິດຜາດ");

          // ລົບຫລັງຈາກ 3 ວິນາທີ
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );

  };

  return (
    <footer style={{ backgroundColor: BLACK_FOOTER, color: WHITE_COLOR }} className="py-12 text-center">
      <div className="flex flex-col items-center gap-8">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div style={{ border: `2px solid ${BLUE_400}` }} className="rounded-lg p-3">
            <span className="font-bold text-xl">JK DEV</span>
          </div>
          <div className="text-left">
            <p className="font-semibold text-lg">{t("footerTitle")}</p>
            <p className="text-sm">{t("footerSubtitle")}</p>
          </div>
        </div>

        {/* Newsletter Form */}
        <div>
          <p className="text-lg font-medium mb-4">{t("newsletterText")}</p>
          <form onSubmit={sendEmail} className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              required
              className="px-6 py-3 rounded-full w-72 sm:w-96 outline-none text-black"
            />
            <button
              type="submit"
              style={{ color: WHITE_COLOR }}
              className="bg-cyan-400 hover:bg-cyan-300 font-semibold px-8 py-3 rounded-full shadow-lg"
            >
              {t("subscribe")}
            </button>
          </form>
          {status && <p style={{ color: WHITE_COLOR }} className="text-sm mt-2">{status}</p>}
        </div>
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 text-sm mt-6">
          <Link to="/careers" className="hover:underline">{t("careers")}</Link>
          <Link to="/privacy-policy" className="hover:underline border-l border-gray-500 pl-4">{t("privacyPolicy")}</Link>
          <Link to="/terms" className="hover:underline border-l border-gray-500 pl-4">{t("termsConditions")}</Link>
        </div>

        {/* Copyright */}
        <p style={{ color: GRAY_400 }} className="text-xs mt-4">
          © 2025 JK DEV Technologies.com
        </p>
      </div>
    </footer>
  );
}
