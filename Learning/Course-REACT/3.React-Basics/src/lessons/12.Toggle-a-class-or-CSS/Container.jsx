import { useState } from "react";
import "./Container.css";

export default function Container() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`full-container ${darkMode && "dark-mode"}`}>
      <h1>Welcome frome NotesMania</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias labore
        sit deleniti adipisci omnis voluptates est illum asperiores. Aperiam
        odio, impedit voluptas in odit pariatur aut beatae dicta iusto
        repellendus?
      </p>

      <button onClick={() => setDarkMode(!darkMode)}>
        Show the {darkMode ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}
