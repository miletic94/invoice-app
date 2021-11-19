import { useState } from "react";
import Selector from "./components/Selector";

function App() {
  const [theme, setTheme] = useState("darkTheme")
  return (
    <div className={`App ${theme}`}>
      <button onClick={() => setTheme(() => {
        if(theme === "darkTheme") {
          return "lightTheme"
        }
        if(theme === "lightTheme") {
          return "darkTheme"
        }
      })}>
        Toggle Theme
      </button>

      <Selector />

    </div>

  );
}

export default App;
