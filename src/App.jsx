import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import DatePicker from "./Pages/DatePicker";

function App() {
  //State

  //Comportements

  //Render
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datepicker" element={<DatePicker />} />
      </Routes>
    </div>
  );
}

export default App;
