import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">แผงควบคุม ผู้อำนวยการโรงเรียน</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-xl hover:shadow-2xl transition">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">อนุมัติผู้บริหาร</h2>
            <p className="text-gray-600 mb-4">ตรวจสอบและอนุมัติบัญชีผู้บริหารที่รอการยืนยัน</p>
            <Button onClick={() => navigate("/director/manage-admins")}>ไปยังการจัดการ</Button>
          </CardContent>
        </Card>

        <Card className="shadow-xl hover:shadow-2xl transition">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">ข้อมูลสรุประบบ</h2>
            <p className="text-gray-600 mb-4">ดูรายงานภาพรวมของระบบ เช่น จำนวนนักเรียน ครู แผนกต่าง ๆ</p>
            <Button onClick={() => navigate("/director/system-summary")}>ดูรายงาน</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
