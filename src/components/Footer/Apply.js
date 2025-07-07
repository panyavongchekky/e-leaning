import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

export default function Apply() {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      ...form,
      user_email: "panyavongchekky44@gmail.com",
    };

    emailjs
      .send("service_x9ivb9s", "template_d8xto9e", templateParams, "Nje3vjz3Ark0I3bIL")
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert(t("success"));
          setForm({ name: "", email: "", position: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error?.text || error?.message || error);
          alert(t("error"));
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-16 text-gray-800">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          {t("apply_title")}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">{t("name")}</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("email")}</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("position")}</label>
            <input
              type="text"
              name="position"
              value={form.position}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t("message")}</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-xl px-4 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-full transition"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </>
  );
}
