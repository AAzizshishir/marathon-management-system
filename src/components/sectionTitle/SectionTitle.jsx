import React from "react";

const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2
      className={`text-2xl md:text-3xl font-bold text-left  text-gray-800 my-8 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
