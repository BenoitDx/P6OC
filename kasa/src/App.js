import {Routes, Route} from "react-router-dom";
import React from 'react';
import Home from './pages/Home'
import Appartements from "./pages/Appartements";
import About from "./pages/About"
import Error from "./pages/Error";
import "./App.css"; 
import Navbar from "./componemts/Navbar/Navbar";


function App () {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Appartements" element={<Appartements />} />
                <Route path="/About" element={<About />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </div>
    )
} 

export default App; 