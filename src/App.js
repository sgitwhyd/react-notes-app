import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Archieve from "./pages/Archieve";
import NoteDetail from "./pages/NoteDetail";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NewNote from "./pages/NewNote";

const App = () => {
  return (
    <div className="min-h-screen transition-[background-color] dark:bg-black dark:text-white">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/note/new" element={<NewNote />} />
          <Route path="/archieve" element={<Archieve />} />
          <Route path="/note/:id" element={<NoteDetail />} />
          <Route path="*" element={<h1 className="text-white">Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
