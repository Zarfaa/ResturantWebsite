import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "../Pages/About/About"
import Home from '../Pages/Home/Home';
import Menu from "../Pages/Menu/Menu"
import Event from "../Pages/Events/Events"
import Reservation from '../Pages/Reservation/Reservation';
import Footer from '../Components/Footer/Footer';
import Contact from '../Pages/Contact/Contact';
function App() {
  return (
    <div className="App">
              <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Menu" element={<Menu/>}></Route>
            <Route path="/Events" element={<Event/>}></Route>
            <Route path="/Reservation" element={<Reservation/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
