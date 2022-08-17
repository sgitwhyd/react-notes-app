import React, { Component } from "react";
import { getInitialData } from "../utils";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

export default class NotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      currentNotes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddToArchiveHandler = this.onAddToArchiveHandler.bind(this);
    this.onAddToActiveNoteHandler = this.onAddToActiveNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({
      notes,
    });
  }

  onAddToArchiveHandler(id) {
    const filteredNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived ? (note.archived = false) : (note.archived = true);
      }
      return note;
    });

    this.setState({
      filteredNotes,
    });
  }

  onAddToActiveNoteHandler(id) {
    const filteredNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        !note.archived ? (note.archived = true) : (note.archived = false);
      }
      return note;
    });

    this.setState({
      filteredNotes,
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
      const newNotes = [...prevState.notes, newNote];
      return {
        notes: newNotes,
        currentNotes: newNotes,
      };
    });
  }

  onSearchEventHandler(searchValue) {
    if (searchValue !== "") {
      const searchNote = this.state.notes.filter((note) => {
        return note.title.toLowerCase().includes(searchValue.toLowerCase());
      });

      this.setState(() => {
        return {
          notes: searchNote,
        };
      });
    } else {
      if (this.state.notes.length === 0) {
        this.setState(() => {
          return {
            notes: [],
          };
        });
      } else {
        this.setState(() => {
          return {
            notes: this.state.currentNotes,
          };
        });
      }
    }
  }

  render() {
    return (
      <div className="container mx-auto  w-10/12 py-14">
        <NoteInput onAddNote={this.onAddNoteHandler} />
        <NotesList
          notes={this.state.notes}
          onDelete={this.onDeleteHandler}
          onSwitchToArchive={this.onAddToArchiveHandler}
          onSwitchToActiveNote={this.onAddToActiveNoteHandler}
          onSearchEventHandler={this.onSearchEventHandler}
        />
      </div>
    );
  }
}
