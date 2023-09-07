import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { putAccessToken } from "../utils/locale-network";
import { LocalizationContext } from "../context/LocalizationContext";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { navigationLocal } from "../utils/locale-context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocalizationContext);

  const handleLogout = () => {
    putAccessToken(null);
    setCurrentUser(null);
  };

  return (
    <>
      <header className="shadow-md dark:shadow-border-color">
        <nav className="flex justify-between py-4  sm:px-24">
          <Link to="/" className="text-2xl font-bold">
            Notes Brand
          </Link>
          <ul className="flex items-center space-x-5">
            {currentUser ? (
              <>
                <li>
                  <Link
                    to="/archieve"
                    className="rounded-md py-2 px-4 hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700"
                  >
                    {locale === "id" ? "Arsip" : "Archive"}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/note/new"
                    className="rounded-md py-2 px-4 hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700"
                  >
                    {locale === "id" ? "Buat Catatan" : "Create Note"}
                  </Link>
                </li>
              </>
            ) : null}
            {currentUser && (
              <li>
                <p>
                  {navigationLocal[locale].welcome} {currentUser.name}
                </p>
              </li>
            )}
            {currentUser && (
              <li>
                <button
                  onClick={handleLogout}
                  className="rounded-md py-2 px-4 hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700"
                >
                  {navigationLocal[locale].logout}
                </button>
              </li>
            )}
            <li>
              <button
                onClick={toggleLocale}
                className="rounded-md py-2 px-4 capitalize hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700"
              >
                {locale}
              </button>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="rounded-md py-2 px-4 hover:bg-gray-400 dark:hover:bg-gray-700"
              >
                {theme === "dark" ? (
                  <BsFillMoonFill className="" />
                ) : (
                  <BsFillSunFill className="hover:text-white" />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
