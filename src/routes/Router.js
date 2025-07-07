import React from 'react'
import Home from '../pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// conponents
import Careers from '../components/Footer/Careers';
import Apply from '../components/Footer/Apply';
import Attendance from '../components/Attendance/Attendance';
import Register from '../components/Login/Register';
import Login from '../components/Login/Login'
import ProtectedRoute from './ProtectedRoute';
import RegisterAdmin from '../components/Login/RegisterAdmin';
// page
import AdminDashboard from '../pages/Admin/AdminDashboard';
import TeacherDashboard from '../pages/Admin/TeacherDashboard';
import Unauthorized from '../pages/Unauthorized'



const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* footer */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<Apply />} />
          {/* components */}
          <Route path='/attendance' element={<Attendance />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route
            path="/admin/Admindashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* ครู */}
          <Route
            path="/teacher/dashboard"
            element={
              <ProtectedRoute allowedRoles={["teacher"]}>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />

          {/* นักเรียน */}
            {/* <Route
          path="/student/dashboard"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          /> */}

          {/* ไม่มีสิทธิ์ */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/register-admin" element={<RegisterAdmin />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
