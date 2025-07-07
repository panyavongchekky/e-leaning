import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* ส่วนแสดงข้อมูลผู้ใช้ */}
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">ผู้บริหาร</h2>
        <p className="text-gray-600">ยินดีต้อนรับสู่หน้าแดชบอร์ดสำหรับผู้บริหาร</p>
      </section>

      {/* ปุ่มจัดการอนุมัติสมาชิก */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/admin/approvals" className="bg-teal-500 text-white text-center py-4 rounded-lg shadow-md hover:bg-teal-600 transition">
          <h3 className="text-xl font-semibold">จัดการอนุมัติสมาชิก</h3>
          <p className="mt-2">ตรวจสอบและอนุมัติสมาชิกใหม่</p>
        </Link>

        {/* ส่วนเพิ่มข้อมูล */}
        <Link to="/admin/departments" className="bg-blue-500 text-white text-center py-4 rounded-lg shadow-md hover:bg-blue-600 transition">
          <h3 className="text-xl font-semibold">เพิ่มแผนกงาน</h3>
          <p className="mt-2">จัดการแผนกงานของคุณ</p>
        </Link>

        <Link to="/admin/rooms" className="bg-green-500 text-white text-center py-4 rounded-lg shadow-md hover:bg-green-600 transition">
          <h3 className="text-xl font-semibold">เพิ่มห้องเรียน</h3>
          <p className="mt-2">เพิ่มข้อมูลห้องเรียนใหม่</p>
        </Link>

        <Link to="/admin/subjects" className="bg-purple-500 text-white text-center py-4 rounded-lg shadow-md hover:bg-purple-600 transition">
          <h3 className="text-xl font-semibold">เพิ่มวิชา</h3>
          <p className="mt-2">จัดการวิชาที่เปิดสอน</p>
        </Link>
      </section>

    </div>
  );
};

export default Dashboard;
