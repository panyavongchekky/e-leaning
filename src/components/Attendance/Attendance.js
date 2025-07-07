import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MAIN_COLOR,
  WHITE_COLOR,
  BLACK_COLOR,
  GRAY_COLOR,
  GRAY_COLOR1,
  PINK_COLOR
} from "../../helper";
// component
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"

const Attendance = () => {
  // const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [history, setHistory] = useState([]);

  const handleReset = () => {
    setStudentName("");
    setFromDate("");
    setToDate("");
    setReason("");
    setImage(null);
    setPreviewUrl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("student_name", studentName);
    formData.append("from_date", fromDate);
    formData.append("to_date", toDate);
    formData.append("reason", reason);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/attendance-range", formData);
      setStatusMessage("✅ แจ้งขาดเรียนเรียบร้อย");
      handleReset();
    } catch (err) {
      console.error(err);
      setStatusMessage("❌ ส่งข้อมูลไม่สำเร็จ");
    }
  };

    return (
      <>
        <Navbar />
        <div className="max-w-3xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-gray-900 shadow-xl rounded-3xl transition-all">
          <h2 className="text-3xl font-bold text-center text-pink-600 dark:text-pink-400 flex items-center justify-center gap-2 mb-8">
            📅 แจ้งการขาดเรียน
          </h2>

          {statusMessage && (
            <div className="mb-6 text-center font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900 p-3 rounded-xl shadow-sm">
              {statusMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ชื่อ */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">👩‍🎓 ชื่อนักเรียน</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="เช่น เด็กหญิงลาวดี ดีใจ"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500 transition"
              />
            </div>

            {/* วันที่ */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">📆 จากวันที่</label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500 transition"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">📆 ถึงวันที่</label>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500 transition"
                />
              </div>
            </div>

            {/* เหตุผล */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">📄 เหตุผล</label>
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="เช่น ป่วย, ธุระ, ฯลฯ"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500 transition"
              />
            </div>

            {/* แนบรูป */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">📷 แนบรูปภาพ (ถ้ามี)</label>
              <input
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setPreviewUrl(URL.createObjectURL(e.target.files[0]));
                }}
                className="block w-full text-sm text-gray-500 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-pink-50 dark:file:bg-pink-900 file:text-pink-600 dark:file:text-pink-300 hover:file:bg-pink-100"
              />
              {previewUrl && (
                <img src={previewUrl} alt="preview" className="w-32 mt-3 rounded-lg shadow-md" />
              )}
            </div>

            {/* ปุ่ม */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold transition"
              >
                ✅ บันทึกการขาดเรียน
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl border border-pink-400 text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900 font-semibold transition"
              >
                🗑 ล้างข้อมูล
              </button>
            </div>
          </form>

          {/* ประวัติ */}
          {history.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">📌 ประวัติการแจ้งขาดเรียน</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border rounded-xl overflow-hidden shadow-sm">
                  <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <tr>
                      <th className="p-3 text-left">ชื่อ</th>
                      <th className="p-3 text-left">จาก</th>
                      <th className="p-3 text-left">ถึง</th>
                      <th className="p-3 text-left">เหตุผล</th>
                      <th className="p-3 text-left">สถานะ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((item, idx) => (
                      <tr key={idx} className="border-t hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="p-3">{item.name}</td>
                        <td className="p-3">{item.from}</td>
                        <td className="p-3">{item.to}</td>
                        <td className="p-3">{item.reason}</td>
                        <td className="p-3 text-orange-500">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  };

export default Attendance;