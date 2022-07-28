import React from "react";

const index = ({ onKeyUpHandler }) => {
  return (
    <div className="w-full relative shadow-md rounded-lg transition ease-in-ou">
      <input
        className="w-full p-5 pl-8 text-base text-left border-0 rounded-lg bg-slate-800 text-white"
        placeholder="Cari catatan anda..."
        id="searchElement"
        type="text"
        onKeyUp={(e) => onKeyUpHandler(e)}
      ></input>
    </div>
  );
};

export default React.memo(index);
