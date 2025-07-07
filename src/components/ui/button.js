import React from "react";

export function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
