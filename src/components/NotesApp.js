import React, { Component } from "react";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

export default class NotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchNotes: getInitialData(),
      searchQuery: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddToArchiveHandler = this.onAddToArchiveHandler.bind(this);
    this.onAddToActiveNoteHandler = this.onAddToActiveNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
        searchNotes: prevState.searchNotes.filter((note) => note.id !== id),
      };
    });
  }

  onAddToArchiveHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
        searchNotes: prevState.searchNotes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }

  onAddToActiveNoteHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
        searchNotes: prevState.searchNotes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        ),
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      createdAt: new Date().toISOString(),
      title,
      body,
      archived: false,
    };
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, newNote],
        searchNotes: [...prevState.notes, newNote],
        searchQuery: "",
      };
    });
  }

  onSearchEventHandler(event) {
    this.setState({ searchQuery: event });
    this.setState((prevState) => {
      return {
        searchNotes: prevState.notes.filter((note) =>
          note.title.toLowerCase().match(event)
        ),
      };
    });
  }

  render() {
    return (
      <div className="container mx-auto  w-10/12 py-14">
        <NoteInput onAddNote={this.onAddNoteHandler} />
        <NotesList
          notes={this.state.searchNotes}
          onDelete={this.onDeleteHandler}
          onSwitchToArchive={this.onAddToArchiveHandler}
          onSwitchToActiveNote={this.onAddToActiveNoteHandler}
          searchQuery={this.state.searchQuery}
          onSearchEventHandler={this.onSearchEventHandler}
        />
      </div>
    );
  }
}
