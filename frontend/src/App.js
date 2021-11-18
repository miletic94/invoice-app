import { useState } from "react"
import Calendar from "./components/Calendar"

function App() {
  const [theme, setTheme] = useState("darkTheme") /* set it from prefers-color-scheme */
  const toggleTheme = () => {
    if(theme === "darkTheme") {
      setTheme("lightTheme") 
      return
    }
    if(theme === "lightTheme") {
      setTheme("darkTheme")
      return
    }
  }
  return (


    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>      
     
      <Calendar />
      <Calendar />
    </div>

  );
}

export default App;
