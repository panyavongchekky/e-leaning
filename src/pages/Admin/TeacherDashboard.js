import React from "react";
import { FaBookOpen, FaClipboardList, FaChalkboardTeacher } from "react-icons/fa";

const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          แดชบอร์ดครูผู้สอน 👩‍🏫
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* รายวิชาที่สอน */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaBookOpen className="text-4xl text-indigo-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">รายวิชาที่สอน</h2>
            <p className="text-gray-600 mb-4">
              ดูรายวิชาและรายละเอียดของบทเรียนที่คุณรับผิดชอบ
            </p>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
              เข้าดู
            </button>
          </div>

          {/* จัดการคะแนน */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaClipboardList className="text-4xl text-green-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">จัดการคะแนน</h2>
            <p className="text-gray-600 mb-4">
              เพิ่มหรือตรวจสอบคะแนนของนักเรียนในรายวิชาต่าง ๆ
            </p>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              จัดการ
            </button>
          </div>

          {/* ดูตารางสอน */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaChalkboardTeacher className="text-4xl text-pink-500 mb-4" />
            <h2 className="text-xl font-semibold mb-2">ตารางสอน</h2>
            <p className="text-gray-600 mb-4">
              ตรวจสอบตารางสอนประจำวันหรือสัปดาห์ของคุณ
            </p>
            <button className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
              ตรวจสอบ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
