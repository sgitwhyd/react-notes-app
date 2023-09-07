import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { getNote } from "../utils/locale-network";

const NoteDetail = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });
  }, [id]);

  return (
    <div className="container mx-auto  w-10/12 py-14">
      {note ? (
        <div className="relative border border-border-color p-6">
          <h1 className="text-2xl font-semibold">{note.title}</h1>
          <p className="my-3 text-xs">{showFormattedDate(note.createdAt)}</p>
          <p className="text-lg">{note.body}</p>
          <p className="mt-3 font-semibold">
            {note.archived ? "Archived" : "Active"} Note
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-5 w-full text-end text-base font-bold text-red-700"
          >
            Kembali
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default NoteDetail;
