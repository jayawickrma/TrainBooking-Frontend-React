import './App.css'
import {Route, Router, Routes} from "react-router-dom";
import {Content} from "./Page/Content.tsx";
import NavBar from "./Components/NavBar.tsx";
import {Gallery} from "./Page/Gallery.tsx";
import {Booking} from "./Page/Booking.tsx";
import {Contact} from "./Page/Contact.tsx";

function App() {

  return (
    <>
        <Router>
            <NavBar>
                  <Routes>
                    <>
                            <Route path="/" element={<Content/> }/>
                            <Route path="/gallery" element={<Gallery/> }/>
                            <Route path="/booking" element={<Booking/> }/>
                            <Route path="/contact" element={<Contact/> }/>
                            <Route path="/services" element={}/>
                    </>
                  </Routes>
            </NavBar>
        </Router>
    </>
  )
}

export default App
