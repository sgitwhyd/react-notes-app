import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { Link } from "react-router-dom";
import { register } from "../utils/locale-network";
import { LocalizationContext } from "../context/LocalizationContext";
const Register = () => {
  const { value: name, onChange: onChangeName } = useInput("");
  const { value: email, onChange: onChangeEmail } = useInput("");
  const { value: password, onChange: onChangePassword } = useInput("");
  const { locale } = useContext(LocalizationContext);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { error } = await register({
      name,
      email,
      password,
    });

    if (!error) {
      alert("success");
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center pt-14">
      <h1 className="mb-5 text-2xl font-semibold">
        {locale === "id"
          ? "Daftar untuk masuk Aplikasi"
          : "Register to login the application"}
      </h1>
      <form onSubmit={handleFormSubmit} className="w-2/4">
        <div className="mb-3 flex  flex-col">
          <label htmlFor="name" className="mb-3">
            {locale === "id" ? "Nama" : "Name"}
          </label>
          <input
            type="text"
            value={name}
            onChange={onChangeName}
            className="border border-border-color py-3 pl-3 text-black"
            placeholder="Email"
          />
        </div>
        <div className="mb-3 flex  flex-col">
          <label htmlFor="email" className="mb-3">
            Email
          </label>
          <input
            type="email"
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
        <button type="submit" className="w-full bg-border-color py-4">
          {locale === "id" ? "Daftar" : "Register"}
        </button>
        <p className="mt-3">
          {locale === "id" ? "Sudah punya akun?" : "Already have account?"}{" "}
          <Link to="/">{locale === "id" ? "Masuk Sekarang" : "Login Now"}</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
