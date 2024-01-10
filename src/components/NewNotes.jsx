import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";

const NewNotes = ({ note, onDeleteClick, text, cardBg }) => {
  const [newCardBg, setNewCardBg] = useState();
  useEffect(() => {
    !newCardBg && setNewCardBg(cardBg);
  }, [newCardBg, cardBg]);

  return (
    <div className="new-notes">
      <div className={`note-header ${newCardBg}`}>
        <div style={{ fontSize: "40px", color: "white", cursor: "pointer" }}>
          <CiEdit />
        </div>
        <div
          style={{ fontSize: "40px", color: "white", cursor: "pointer" }}
          onClick={() => onDeleteClick(note.id)}>
          <RiDeleteBin2Line />
        </div>
      </div>
      <textarea cols={40} rows={7}>
        {text}
      </textarea>
    </div>
  );
};

export default NewNotes;
