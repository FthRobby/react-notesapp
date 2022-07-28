import React from "react";

const BodyCard = ({ catatan }) => {
  return <div className="text-sm text-white pt-3 pb-8">{catatan}</div>;
};

export default React.memo(BodyCard);
