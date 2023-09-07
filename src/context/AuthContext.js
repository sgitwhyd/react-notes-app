import { createContext, useState, useMemo, useEffect } from "react";
import { getUserLogged } from "../utils/locale-network";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  const AuthProviderValue = useMemo(() => {
    return {
      currentUser,
      setCurrentUser,
    };
  }, [currentUser]);

  useEffect(() => {
    const fetchUser = async () => {
      getUserLogged().then(({ data }) => {
        setCurrentUser(data);
      });
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={AuthProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
