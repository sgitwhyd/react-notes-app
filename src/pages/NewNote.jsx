import React from "react";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/locale-network";

const NewNote = () => {
  const onAddNoteHandler = async ({ title, body }) => {
    try {
      const { error } = await addNote({ title, body });
      if (!error) {
        alert("Note Created");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto  w-10/12 py-14">
      <NoteInput onAddNote={onAddNoteHandler} />
    </div>
  );
};

export default NewNote;
