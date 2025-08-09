import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <h2 className={`text-2xl md:text-3xl font-bold text-left text-black my-8`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
