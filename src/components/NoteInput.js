import React, { useState } from "react";
import PropTypes from "prop-types";

const NoteInput = ({ onAddNote }) => {
  const [maxCharTitle, setMaxCharTitle] = useState(50);
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const onTitleChangeEventHandler = (e) => {
    setMaxCharTitle(Math.max(0, 50 - e.target.value.length));
    setNote({
      ...note,
      title: e.target.value.slice(0, 50),
    });
  };

  const onBodyChangeEventHandler = (e) => {
    return setNote({
      ...note,
      body: e.target.value,
    });
  };

  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    setNote(note);
    onAddNote(note);
    setNote({
      title: "",
      body: "",
    });
    setMaxCharTitle(50);
  };

  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center">
      <div className="w-full md:w-4/6 lg:w-3/6">
        <form onSubmit={onSubmitEventHandler}>
          <div className="text-3xl font-bold">Buat Catatan</div>
          <div className="float-right mt-5 text-sm  text-gray-400">
            Sisa Karakter: {maxCharTitle}
          </div>
          <input
            type="text"
            className="mt-2 w-full rounded border border-primary bg-transparent px-2 py-3 text-sm placeholder:text-sm placeholder:font-bold focus:outline-none"
            placeholder="Ini adalah Judul..."
            value={note.title}
            onChange={onTitleChangeEventHandler}
            required
          />
          <textarea
            className="mt-3 w-full rounded border border-primary bg-transparent p-2 text-sm placeholder:text-sm placeholder:font-bold focus:outline-none "
            cols="15"
            rows="5"
            placeholder="Tuliskan Catatan Mu Disini"
            onChange={onBodyChangeEventHandler}
            value={note.body}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full rounded bg-primary p-3 text-base font-bold text-white"
          >
            Buat
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteInput;

NoteInput.propTypes = {
  onAddNote: PropTypes.func,
};
