import React from "react";

const index = ({ title, type, typeInput, value, onChangeHandler }) => {
  return (
    <div className="mt-5 space-y-3">
      <label className="font-light uppercase text-white" htmlFor={title}>
        {title}
      </label>
      {typeInput === "input" ? (
        <input
          className="inline-block w-full px-5 py-4 border rounded-lg box-border"
          type={type ? type : "input"}
          id={title}
          name={title}
          value={value}
          onChange={(e) => onChangeHandler(e)}
          placeholder={`Masukan ${title}`}
          required
        />
      ) : (
        <textarea
          className="inline-block w-full px-5 py-4 border rounded-lg box-border"
          type={type ? type : "input"}
          id={title}
          name={title}
          placeholder={`Masukan ${title}`}
          value={value}
          onChange={onChangeHandler}
          rows="4"
          required
        />
      )}
    </div>
  );
};

export default React.memo(index);
