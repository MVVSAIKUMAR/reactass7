import Header from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/students";
import ContactUs from "./components/contactus";
import Detail from "./components/details"
import Home from "./components/home";
import Editstudent from "./components/edit";
import AddStudent from "./components/addstudents";

function App() {
  return (
    <Detail>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/student/add/:id" element={<AddStudent />} />
            <Route path="/student/edit/:id" element={<Editstudent />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
    </Detail>
  );
}

export default App;


