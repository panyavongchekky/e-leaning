import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { FaUserCheck, FaBuilding, FaDoorOpen, FaBook } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">
        🏫 หน้าหลักผู้บริหาร
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* จัดการอนุมัติสมาชิก */}
        <Card className="hover:shadow-xl">
          <CardContent className="p-6 text-center">
            <FaUserCheck className="text-5xl text-teal-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">อนุมัติสมาชิก</h2>
            <p className="text-sm text-gray-500 mb-4">
              ตรวจสอบและอนุมัติการสมัครสมาชิกจากครูและนักเรียน
            </p>
            <Link to="/admin/approvals">
              <Button className="bg-teal-600 hover:bg-teal-700 w-full">ไปยังหน้าจัดการ</Button>
            </Link>
          </CardContent>
        </Card>

        {/* เพิ่มแผนกงาน */}
        <Card className="hover:shadow-xl">
          <CardContent className="p-6 text-center">
            <FaBuilding className="text-5xl text-purple-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">เพิ่มแผนกงาน</h2>
            <p className="text-sm text-gray-500 mb-4">
              จัดการเพิ่ม ลบ หรือแก้ไขแผนกต่าง ๆ ภายในโรงงาน
            </p>
            <Link to="/admin/departments">
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">จัดการแผนก</Button>
            </Link>
          </CardContent>
        </Card>

        {/* เพิ่มห้องเรียน */}
        <Card className="hover:shadow-xl">
          <CardContent className="p-6 text-center">
            <FaDoorOpen className="text-5xl text-orange-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">เพิ่มห้องเรียน</h2>
            <p className="text-sm text-gray-500 mb-4">
              เพิ่มหรือปรับปรุงข้อมูลห้องเรียนในระบบ
            </p>
            <Link to="/admin/classrooms">
              <Button className="bg-orange-500 hover:bg-orange-600 w-full">จัดการห้องเรียน</Button>
            </Link>
          </CardContent>
        </Card>

        {/* เพิ่มวิชา */}
        <Card className="hover:shadow-xl">
          <CardContent className="p-6 text-center">
            <FaBook className="text-5xl text-blue-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">เพิ่มวิชา</h2>
            <p className="text-sm text-gray-500 mb-4">
              จัดการรายชื่อวิชาในหลักสูตรของโรงงาน
            </p>
            <Link to="/admin/subjects">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">จัดการวิชา</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
