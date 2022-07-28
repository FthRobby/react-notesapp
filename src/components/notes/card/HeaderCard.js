import React from "react";

const HeaderCard = ({ title, date }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <h1 className="text-lg font-bold text-white">{title}</h1>
      <p className="text-sm text-white">{date}</p>
    </div>
  );
};

export default React.memo(HeaderCard);
