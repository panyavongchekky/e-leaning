import React, { useState, useEffect } from 'react';
import QuizCard from './QuizCard';  // นำเข้า QuizCard Component
import Admin from './Admin';  // นำเข้า Admin Component

const App = () => {
    const [questions, setQuestions] = useState([]);

    // ดึงข้อมูลจาก API
    useEffect(() => {
        fetch('http://localhost:5000/questions')
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>คำถามจากฐานข้อมูล</h1>
            {questions.length > 0 ? (
                questions.map((question) => (
                    <QuizCard key={question.id} question={question} />
                ))
            ) : (
                <p>Loading...</p>
            )}
            <Admin />  {/* แสดง Admin Component */}
        </div>
    );
};

export default App;
