import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
    const [formData, setFormData] = useState({
        question_text: "",
        option_1: "",
        option_2: "",
        option_3: "",
        correct_option: "",
        image1: null,
        image2: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // ตรวจสอบข้อมูลที่อยู่ใน state ก่อนส่ง
        console.log("📤 Data to send:", formData);
    
        const dataToSend = new FormData();
        dataToSend.append("question_text", formData.question_text);
        dataToSend.append("option_1", formData.option_1);
        dataToSend.append("option_2", formData.option_2);
        dataToSend.append("option_3", formData.option_3);
        dataToSend.append("correct_option", formData.correct_option);
        dataToSend.append("image1", formData.image1);  // รูปแรก
        dataToSend.append("image2", formData.image2);  // รูปที่สอง
    
        try {
            const response = await axios.post("http://localhost:5000/api/admin/upload", dataToSend, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log("✅ Server Response:", response.data);
            alert("อัปโหลดสำเร็จ");
        } catch (error) {
            console.error("❌ Upload Error:", error.response ? error.response.data : error.message);
            alert("เกิดข้อผิดพลาด");
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">เพิ่มคำถามใหม่</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="question_text" placeholder="คำถาม" value={formData.question_text} onChange={handleChange} required className="border p-2 w-full" />
                <input type="text" name="option_1" placeholder="ตัวเลือกที่ 1" value={formData.option_1} onChange={handleChange} required className="border p-2 w-full" />
                <input type="text" name="option_2" placeholder="ตัวเลือกที่ 2" value={formData.option_2} onChange={handleChange} required className="border p-2 w-full" />
                <input type="text" name="option_3" placeholder="ตัวเลือกที่ 3" value={formData.option_3} onChange={handleChange} required className="border p-2 w-full" />
                <input type="number" name="correct_option" placeholder="ตัวเลือกที่ถูกต้อง (1-3)" value={formData.correct_option} onChange={handleChange} required className="border p-2 w-full" />
                
                {/* ฟอร์มสำหรับอัปโหลดรูปภาพสองรูป */}
                <input type="file" name="image1" onChange={handleFileChange} required className="border p-2 w-full" />
                <input type="file" name="image2" onChange={handleFileChange} required className="border p-2 w-full" />
                
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">เพิ่มคำถาม</button>
            </form>
        </div>
    );
};

export default Admin;
