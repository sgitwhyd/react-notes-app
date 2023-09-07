import React, { useContext, useMemo } from "react";
import NotesApp from "../components/NotesApp";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container mx-auto  w-10/12 py-14">
      {currentUser ? <NotesApp /> : <Login />}
    </div>
  );
};

export default Home;
