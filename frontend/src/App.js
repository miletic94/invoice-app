// TODO: Add horizontal lines in MenuList
import Nav from "./components/Nav"
import Bill from "./components/Bill";
import SummaryList from "./components/SummaryList";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
      <div className="App lightTheme">  
        <Router basename="/">
          <Nav />
          <Routes basename="/">
            <Route path="/" element={<SummaryList/>} />
            <Route path="/invoice/:id" element={<Bill />} />
          </Routes>
        </ Router>
        
        
      </div>
  );
}

export default App;
