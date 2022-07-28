import React from "react";

const ContainerForm = (props) => {
  return (
    <div className="p-5 md:p-7 rounded-md shadow-md dark:bg-slate-800">
      {props.children}
    </div>
  );
};

export default React.memo(ContainerForm);
