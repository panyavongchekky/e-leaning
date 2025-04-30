import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (feedback.trim() === '') {
      setError('กรุณาเขียนความคิดเห็นของคุณ');
      return;
    }

    setError('');
    // ทำการส่งความคิดเห็นที่นี่
    console.log('ความคิดเห็น:', feedback);
    
    // ทำการส่งความคิดเห็นหรือเรียก API ที่นี่

    // ล้างฟอร์มหลังจากส่งความคิดเห็น
    setFeedback('');
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">ความคิดเห็นจากผู้เรียน</h2>
        <div className="bg-white shadow-md rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="กรุณาเขียนความคิดเห็นของคุณ"
              className={`w-full p-3 border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              rows="5"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="mt-4 w-full px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              ส่งความคิดเห็น
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
