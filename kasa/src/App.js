import {Routes, Route} from "react-router-dom";
import React from 'react';
import Home from './pages/Home.jsx'
import Logement from "./pages/Logement.jsx";
import About from "./pages/About.jsx"
import Error from "./pages/Error.jsx";
import "./styles/styles.css"; 
import Header from "../src/componemts/Header.jsx";
import Footer from "../src/componemts/Footer.jsx";


function App () {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logement/:id" element={<Logement />} />
                <Route path="/About" element={<About />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer></Footer>
        </div>
    )
} 

export default App; 