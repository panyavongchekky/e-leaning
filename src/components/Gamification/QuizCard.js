import React, { useState, useRef } from 'react';

const QuizCard = ({ question, onAnswer }) => {
  const [hasAnswered, setHasAnswered] = useState(false); 
  const [showSecondImage, setShowSecondImage] = useState(false); 
  const [isCorrect, setIsCorrect] = useState(null); 

  
  const correctAudioRef = useRef(new Audio('/sounds/correct.mp3'));
  const incorrectAudioRef = useRef(new Audio('/sounds/incorrect.mp3'));

  const handleAnswer = (optionNumber) => {
    if (hasAnswered) return; 
    setHasAnswered(true); 

    
    const correct = question.correct_option === optionNumber;
    setIsCorrect(correct);

   
    setShowSecondImage(true);

   
    if (correct) {
      correctAudioRef.current.play();
    } else {
      incorrectAudioRef.current.play();
    }

    if (onAnswer) {
      onAnswer(optionNumber); 
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md relative">
      {/* รูปภาพแรกจะแสดงก่อน */}
      {!showSecondImage && (
        <div className="relative">
          <img
            src={`http://localhost:5000${question.image_url1}`} // รูปภาพแรก (image_url1)
            alt="Initial Image"
            className="w-full object-cover mb-4"
          />
        </div>
      )}

      {/* รูปที่สองจะแสดงเมื่อกดปุ่ม */}
      {showSecondImage && (
        <div className="relative mt-4">
          <img
            src={`http://localhost:5000${question.image_url2}`} // รูปที่สอง (image_url2)
            alt="Second Image"
            className="w-full object-cover"
          />
        </div>
      )}

      {/* แสดงคำถาม */}
      <p className="text-lg mb-4">{question.question_text}</p>

      {/* ตัวเลือก */}
      <div>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => handleAnswer(num)}
            disabled={hasAnswered}
            className="block w-full p-2 my-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {question[`option_${num}`]} {/* ใช้ backticks เพื่อ interpolating */}
          </button>
        ))}
      </div>

      {/* แสดงผลลัพธ์หลังจากตอบ */}
      {hasAnswered && (
        <div className="mt-4">
          {isCorrect ? (
            <p className="text-green-500 font-bold text-xl">
              ตอบถูก
            </p>
          ) : (
            <p className="text-red-500 font-bold text-xl">
              ตอบผิด
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizCard;
