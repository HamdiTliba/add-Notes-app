import React, { useState } from "react";
import Button from "./Button";
import NewNotes from "./NewNotes";
import { v4 as uuidv4 } from "uuid";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const addNewNote = (newNote) => {
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = uuidv4()));
    setNotes(newNotes);
  };
  const deleteNotes = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const cards = [
    "card-bg-blue",
    "card-bg-green",
    "card-bg-red",
    "card-bg-orange",
    "card-bg-magenta",
    "card-bg-cyan",
  ];
  const randomizeBg = () => {
    const random = Math.floor(Math.random() * cards.length);
    return cards[random];
  };
  return (
    <div>
      <Button onClick={addNewNote} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          gap: "15px",
          flexWrap: "wrap",
        }}>
        {notes.map((note, i) => (
          <NewNotes
            note={note}
            key={note.id}
            onDeleteClick={deleteNotes}
            cardBg={randomizeBg}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesApp;
