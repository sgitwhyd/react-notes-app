import React from "react";
import Note from "./Note";
import PropTypes from "prop-types";

const Notes = ({
  notes,
  onDelete,
  onSwitchToActiveNote,
  onSwitchToArchive,
}) => {
  return (
    <>
      <div className=" w-full">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              date={note.createdAt}
              body={note.body}
              isArchived={note.archived}
              onDelete={onDelete}
              onSwitchToActiveNote={onSwitchToActiveNote}
              onSwitchToArchive={onSwitchToArchive}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSwitchToActiveNote: PropTypes.func,
  onSwitchToArchive: PropTypes.func,
};
