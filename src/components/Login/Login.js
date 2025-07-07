import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👁️ import ไอคอนตา

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ state toggle

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      const user = res.data;

      localStorage.setItem("user", JSON.stringify(res.data));

      // redirect ตาม role
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (user.role === "student") {
        navigate("/student/dashboard");
      } else if (user.role === "teacher") {
        navigate("/teacher/dashboard");
      } else {
        navigate("/unauthorized");
      }

    } catch (err) {
      console.error(err);
      setError("❌ อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-center mb-4">ເຂົ້າສູ່ລະບົບ</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="อีเมล"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="รหัสผ่าน"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded pr-12"
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={togglePassword}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
        >
          ເຂົ້າສູ່ລະບົບ
        </button>
      </form>
    </div>
  );
};

export default Login;
