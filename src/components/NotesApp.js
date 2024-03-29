import React, { useEffect, useState, useContext } from "react";
import NotesList from "./NotesList";
import { handleSearchNotes } from "../utils";
import SearchBar from "./SearchBar";
import {
  getActiveNotes,
  archiveNote,
  deleteNote,
} from "../utils/locale-network";
import { LocalizationContext } from "../context/LocalizationContext";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const { locale } = useContext(LocalizationContext);

  const getNote = async () => {
    await getActiveNotes().then(({ data }) => {
      setFilteredNotes(data);
      setNotes(data);
    });
  };

  useEffect(() => {
    getNote();
  }, []);

  const onDeleteHandler = async (id) => {
    try {
      await deleteNote(id);
      getNote();
    } catch (error) {
      console.log(error);
    }
  };

  const onAddToArchiveHandler = async (id) => {
    try {
      await archiveNote(id);
      getNote();
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchEventHandler = (event) => {
    const { filteredNotes } = handleSearchNotes(notes, event.target.value);
    setFilteredNotes(filteredNotes);
  };

  return (
    <div className="container mx-auto  w-10/12 pb-14">
      <div className="flex flex-col-reverse items-center justify-between md:mb-5 md:flex-row">
        <div className="mb-5 text-2xl font-semibold md:my-0">
          {locale === "id" ? "Catatan Aktif" : "Active Notes"}
        </div>
        <SearchBar
          onSearchEventHandler={onSearchEventHandler}
          placeholder={locale === "id" ? "Cari Note.." : " Search Note.."}
        />
      </div>
      {!filteredNotes.length ? (
        <div className="flex h-[300px] items-center justify-center">
          {locale === "id" ? "Catatan tidak ditemukan" : "No Notes Found"}
        </div>
      ) : (
        <NotesList
          notes={filteredNotes}
          onDelete={onDeleteHandler}
          onSwitchToArchive={onAddToArchiveHandler}
          onSearchEventHandler={onSearchEventHandler}
        />
      )}
    </div>
  );
};

export default NotesApp;
