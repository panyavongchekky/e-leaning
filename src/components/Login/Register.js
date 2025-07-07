import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [status, setStatus] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ เพิ่ม state ตรงนี้
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", {
        ...formData,
        approved: false,
      });

      navigate("/login");
    } catch (err) {
      console.error(err);
      setStatus("❌ เกิดข้อผิดพลาดในการสมัครสมาชิก");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">สมัครสมาชิก</h2>
      {status && <div className="text-center mb-6 text-lg font-semibold">{status}</div>}

      <form onSubmit={handleRegister} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            ชื่อ-สกุล
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="ชื่อ-สกุล"
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">อีเมล</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="อีเมล"
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">
            รหัสผ่าน
          </label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="รหัสผ่าน"
            onChange={handleChange}
            required
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent pr-12"
          />
          <div
            onClick={togglePassword}
            className="absolute right-3 top-[45px] cursor-pointer text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        <div>
          <label htmlFor="role" className="block text-lg font-medium text-gray-700">
            เลือกบทบาท
          </label>
          <select
            id="role"
            name="role"
            onChange={handleChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="student">👷 นักเรียน</option>
            <option value="teacher">👩‍🏫 ครูสอน</option>
            <option value="school_director">📘 ผู้อำนวยการโรงเรียน</option>
            <option value="academic_director">📗 ผู้อำนวยการฝ่ายวิชาการ</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-200"
        >
          สมัครสมาชิก
        </button>
      </form>

      <div className="text-center mt-4 text-sm text-gray-500">
        <span>มีบัญชีแล้ว? </span>
        <a href="/login" className="text-teal-500 hover:underline">เข้าสู่ระบบ</a>
      </div>
    </div>
  );
};

export default Register;
