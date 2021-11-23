// TODO: Add horizontal lines in MenuList
import Nav from "./components/Nav"
import Bill from "./components/Bill";
import SummaryList from "./components/SummaryList";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ThemeProvider from "./contexts/ThemeProvider"
import Theme from "./components/Theme"

function App() {
  return (
      <ThemeProvider>
        <Theme>
        <div className="App">
          
            <Router basename="/">
              <Nav />
              <Routes basename="/">
                <Route path="/" element={<SummaryList/>} />
                <Route path="/invoice/:id" element={<Bill />} />
              </Routes>
            </ Router>
        </div>
        </Theme>
      </ThemeProvider>
  );
}

export default App;
