import './App.css'
import {Route, Router, Routes} from "react-router-dom";
import {Content} from "./Page/Content.tsx";
import NavBar from "./Components/NavBar.tsx";
import {Gallery} from "./Page/Gallery.tsx";

function App() {

  return (
    <>
        <Router>
            <NavBar>
                  <Routes>
                    <>
                            <Route path="/" element={<Content/> }/>
                            <Route path="/gallery" element={<Gallery/> }/>
                    </>
                  </Routes>
            </NavBar>
        </Router>
    </>
  )
}

export default App
