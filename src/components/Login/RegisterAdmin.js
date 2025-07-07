// src/components/Login/RegisterAdmin.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterAdmin = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register-admin", form);
      alert("สมัครผู้บริหารสำเร็จ!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("สมัครไม่สำเร็จ");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4 text-center text-teal-700">สมัครผู้บริหาร</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border rounded p-2 mb-4"
          type="text"
          name="name"
          placeholder="ชื่อ"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="w-full border rounded p-2 mb-4"
          type="email"
          name="email"
          placeholder="อีเมล"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="w-full border rounded p-2 mb-4"
          type="password"
          name="password"
          placeholder="รหัสผ่าน"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
          สมัคร
        </button>
      </form>
    </div>
  );
};

export default RegisterAdmin;
