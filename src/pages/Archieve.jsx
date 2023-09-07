import React, { useEffect, useState, useContext } from "react";
import { handleSearchNotes } from "../utils";
import Notes from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import {
  unarchiveNote,
  getArchivedNotes,
  deleteNote,
} from "../utils/locale-network";
import { LocalizationContext } from "../context/LocalizationContext";

const Archieve = () => {
  const [archieveNotes, setArchieveNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const { locale } = useContext(LocalizationContext);

  const getNotes = async () => {
    await getArchivedNotes().then(({ data }) => {
      setFilteredNotes(data);
      setArchieveNotes(data);
    });
  };

  useEffect(() => {
    getNotes();
  }, []);

  const onDelete = async (id) => {
    try {
      await deleteNote(id);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const onSwitchToActiveNote = async (id) => {
    try {
      await unarchiveNote(id);
      getNotes();
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchEventHandler = (event) => {
    const { filteredNotes } = handleSearchNotes(
      archieveNotes,
      event.target.value
    );
    setFilteredNotes(filteredNotes);
  };

  return (
    <div className="container mx-auto  w-10/12 py-14">
      <div className="flex flex-col-reverse items-center justify-between md:mb-5 md:flex-row">
        <div className="my-5 text-2xl font-semibold md:my-0">
          {locale === "id" ? "Catatan Arsip" : "Archived Notes"}
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
        <Notes
          notes={filteredNotes}
          onSwitchToActiveNote={onSwitchToActiveNote}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default Archieve;
