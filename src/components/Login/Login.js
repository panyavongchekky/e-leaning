import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminPanel = () => {
  const [users, setUsers] = useState([
    { username: 'john_doe', role: 'student', status: 'pending' },
    { username: 'jane_doe', role: 'teacher', status: 'pending' },
  ]);

  const handleApprove = (username) => {
    setUsers(users.map(user => 
      user.username === username ? { ...user, status: 'approved' } : user
    ));
  };

  return (
    <div className="h-screen bg-gray-100 p-4">
      <motion.div
        className="container mx-auto bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Admin Panel</h2>

        {/* Users List */}
        <div className="space-y-4">
          {users.map((user, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm">
              <div>
                <p className="text-lg font-medium text-gray-800">Username: {user.username}</p>
                <p className="text-sm text-gray-600">Role: {user.role}</p>
                <p className={`text-sm ${user.status === 'pending' ? 'text-yellow-500' : 'text-green-500'}`}>
                  Status: {user.status}
                </p>
              </div>
              {user.status === 'pending' && (
                <motion.button
                  onClick={() => handleApprove(user.username)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Approve
                </motion.button>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminPanel;
