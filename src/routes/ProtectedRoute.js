import React from "react";
import { Navigate } from "react-router-dom";

// ✅ ใช้สำหรับเช็คสิทธิ์เข้า route โดยดูจาก localStorage
const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // ❌ ยังไม่ login เลย
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ❌ login แล้ว แต่ไม่ใช่ role ที่อนุญาต
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ ผ่านทุกเงื่อนไข แสดงหน้าที่ต้องการ
  return children;
};

export default ProtectedRoute;
