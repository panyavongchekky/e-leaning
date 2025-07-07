import React from "react";

const Unauthorized = () => (
  <div className="min-h-screen flex items-center justify-center bg-red-100">
    <div className="bg-white p-8 rounded shadow text-center">
      <h1 className="text-2xl font-bold text-red-600">⛔ ไม่มีสิทธิ์เข้าถึง</h1>
      <p className="mt-4">คุณไม่มีสิทธิ์ในการเข้าถึงหน้านี้</p>
    </div>
  </div>
);

export default Unauthorized;
