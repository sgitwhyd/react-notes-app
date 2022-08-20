import React from "react";
import Note from "./Note";

const Notes = ({
  notes,
  onDelete,
  onSwitchToActiveNote,
  onSwitchToArchive,
  searchQuery,
  onSearchEventHandler,
}) => {
  return (
    <>
      <div className=" w-full">
        <div className="flex flex-col-reverse items-center justify-between md:mb-5 md:flex-row">
          <div className="my-5 text-2xl font-semibold md:my-0">
            Catatan Aktif
          </div>
          <input
            type="search"
            className="w-full rounded  border border-primary bg-transparent px-2 py-2 text-sm placeholder:text-sm placeholder:font-bold focus:outline-none md:w-4/12 lg:w-3/12 "
            placeholder="Cari Note..."
            value={searchQuery}
            onChange={(e) => onSearchEventHandler(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
          {notes.filter((note) => !note.archived).length === 0 ? (
            <div className="col-span-4 flex w-full">
              <span className="text-ld w-full px-1 text-center text-gray-400">
                Tidak Ada Catatan Aktif
              </span>
            </div>
          ) : (
            notes.map(
              (note) =>
                !note.archived && (
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
                )
            )
          )}
        </div>
        <div className="my-5 text-2xl font-semibold">Arsip</div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {notes.filter((note) => note.archived === true).length === 0 ? (
            <div className="col-span-4 flex w-full">
              <span className="text-ld w-full px-1 text-center text-gray-400">
                Tidak Ada Arsip
              </span>
            </div>
          ) : (
            notes.map(
              (note) =>
                note.archived && (
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
                )
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Notes;
