import React, { useState, useEffect } from "react";

const FooterCard = ({
  id,
  onDeleteHandler,
  onChangeStatusArchived,
  archived,
}) => {
  const [isArchived, setIsArvhived] = useState(archived);

  useEffect(() => {
    setIsArvhived(!archived);
  }, [archived]);

  return (
    <div className="w-full flex flex-auto items-end flex-row space-x-2">
      <button
        onClick={() => onDeleteHandler(id)}
        className="w-6/12 text-xs bg-amber-500 hover:bg-amber-600 text-white p-2 transition ease-in rounded-md"
      >
        Hapus Catatan
      </button>
      <button
        onClick={() => onChangeStatusArchived(id)}
        className="w-6/12 text-xs bg-cyan-500 hover:bg-cyan-600 text-white p-2 transition ease-in rounded-md"
      >
        {isArchived ? "Arsipkan Catatan" : "Tampilkan Catatan"}
      </button>
    </div>
  );
};

export default React.memo(FooterCard);
