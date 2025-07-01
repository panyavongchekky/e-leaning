import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import emailjs from "@emailjs/browser";

export default function Apply() {
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

    emailjs
      .send("service_x9ivb9s", "template_d8xto9e", form, "Nje3vjz3Ark0I3b")
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("ส่งใบสมัครเรียบร้อยแล้ว ขอบคุณครับ!");
          setForm({ name: "", email: "", position: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-16 text-gray-800">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          สมัครงานกับเรา
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">ชื่อ-นามสกุล</label>
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
            <label className="block text-sm font-medium mb-1">อีเมล</label>
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
            <label className="block text-sm font-medium mb-1">ตำแหน่งที่ต้องการสมัคร</label>
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
            <label className="block text-sm font-medium mb-1">ข้อความเพิ่มเติม</label>
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
            ส่งใบสมัคร
          </button>
        </form>
      </div>
    </>
  );
}
