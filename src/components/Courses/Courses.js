import React from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate

const Courses = () => {
  const navigate = useNavigate(); // สร้างฟังก์ชันสำหรับการนำทาง

  const handleEnrollClick = () => {
    navigate('/register'); // นำทางไปยังหน้า Registration
  };

  const courses = [
    {
      id: 1,
      title: "การเขียนโปรแกรมเบื้องต้น",
      description: "เรียนรู้การเขียนโปรแกรมจากพื้นฐานถึงขั้นสูง",
      duration: "4 สัปดาห์",
      price: "ฟรี",
    },
    {
      id: 2,
      title: "การพัฒนาเว็บด้วย React",
      description: "เรียนรู้การสร้างเว็บแอปพลิเคชันด้วย React",
      duration: "6 สัปดาห์",
      price: "$50",
    },
    // เพิ่มหลักสูตรเพิ่มเติมตามต้องการ
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">หลักสูตรของเรา</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
              <p className="text-gray-600 mt-2">ระยะเวลา: {course.duration}</p>
              <p className="text-gray-600 mt-2">ราคา: {course.price}</p>
              <button
                onClick={handleEnrollClick} // เพิ่มการจัดการคลิก
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                สมัครเรียน
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
