import React, { useState } from "react";
import Addnote from "./addnote";
import Note from "./note";

const notesboard = () => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState([]);

  const addNote = (title, description) => {
    const newNote = [...note];
    newNote.push({ title: title, description: description });
    setNote(newNote);
  };
  const deleteNote = (idx) => {
    const newNotes = [...note];
    newNotes.splice(idx, 1);
    setNote(newNotes);
  };

  return (
    <div>
      <div className="bg-[#525871] text-white py-2 my-2">
        <h1 className="text-center text-2xl font-semibold">Notes App</h1>
      </div>
      <div className="">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="text-center w-full bg-[#f2c1a3] rounded py-1 my-2 border active:scale-95 text-[#fafffd] font-semibold"
        >
          Add notes
        </button>
      </div>

      <Addnote
        addNote={addNote}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />

      {/* ============= notes Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {note.map((value, idx) => {
          return <Note key={idx} deleteNote={deleteNote} idx={idx} value={value} />;
        })}
      </div>
    </div>
  );
};

export default notesboard;
