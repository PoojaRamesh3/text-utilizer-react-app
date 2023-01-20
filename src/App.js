import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { createContext } from "react";
import React, { useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="d-flex justify-content-sm-between align-items-center px-3 switch">
          <Navbar title="TextUtilizer" />
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            aria-label="Switch to dark mode"
          />
        </div>
        <div className="container mt-5 pb-5">
          <TextForm heading="Enter your text below: " />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
