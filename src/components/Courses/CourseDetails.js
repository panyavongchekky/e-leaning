import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams(); // ดึง ID คอร์สเรียนจาก URL
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // ดึงข้อมูลคอร์สเรียนจาก API หรือสตอเรจ
    fetch(`/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error('Error fetching course details:', error));
  }, [id]);

  if (!course) {
    return <p>กำลังโหลด...</p>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">{course.title}</h2>
        <p className="text-gray-600">{course.description}</p>
        {/* ข้อมูลเพิ่มเติมเกี่ยวกับคอร์สเรียน */}
      </div>
    </section>
  );
};

export default CourseDetails;
