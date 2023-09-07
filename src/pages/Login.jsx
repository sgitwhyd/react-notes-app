import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { putAccessToken, login, getUserLogged } from "../utils/locale-network";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LocalizationContext } from "../context/LocalizationContext";

const Login = () => {
  const navigate = useNavigate();
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { locale } = useContext(LocalizationContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { error, data } = await login({ email, password });
    if (!error) {
      putAccessToken(data.accessToken);
      const { data: user } = await getUserLogged();
      setCurrentUser(user);
      navigate("/");
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mb-5 text-2xl font-semibold">
        {locale === "id"
          ? "Masuk untuk menggunakan Aplikasi"
          : "Login for using application"}
      </h1>
      <form onSubmit={handleFormSubmit} className="w-2/4">
        <div className="mb-3 flex  flex-col">
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={onChangeEmail}
            className="border border-border-color py-3 pl-3 text-black"
            placeholder="Email"
          />
        </div>
        <div className="mb-3 flex  flex-col">
          <label htmlFor="password" className="mb-3">
            {locale === "id" ? "Kata Sandi" : "Password"}
          </label>
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            className="border border-border-color py-3 pl-3 text-black"
            placeholder="password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-border-color py-4 text-white"
        >
          {locale === "id" ? "Masuk" : "Login"}
        </button>
        <p className="mt-3">
          {locale === "id" ? "Belum punya akun?" : "Dont't have account ?"}{" "}
          <Link to="/register">
            {locale === "id" ? "Daftar Sekarang" : "Register Now"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
