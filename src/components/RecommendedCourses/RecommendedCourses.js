import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecommendedCourses = () => {
  const navigate = useNavigate();

  const handleViewDetails = (courseId) => {
    navigate(`/course-details/${courseId}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">คอร์สเรียนที่แนะนำ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ตัวอย่างคอร์สเรียน */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">คอร์สใหม่</h3>
            <p className="text-gray-600 mt-2">รายละเอียดเกี่ยวกับคอร์สใหม่...</p>
            <button
              onClick={() => handleViewDetails('123')} // ใช้ ID ของคอร์สที่ต้องการ
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              ดูรายละเอียด
            </button>
          </div>
          {/* เพิ่มคอร์สเรียนอื่น ๆ ที่นี่ */}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCourses;
