import { createContext, useState, useMemo, useEffect } from "react";

export const LocalizationContext = createContext({
  locale: null,
  setLocale: () => {},
  toggleLocale: () => {},
});

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "en");

  const toggleLocale = () => {
    setLocale(locale === "en" ? "id" : "en");
  };

  const localizationValue = useMemo(() => {
    return {
      locale,
      setLocale,
      toggleLocale,
    };
  }, [locale]);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <LocalizationContext.Provider value={localizationValue}>
      {children}
    </LocalizationContext.Provider>
  );
};
