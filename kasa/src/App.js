import {Routes, Route} from "react-router-dom";
import React from 'react';
import Home from './pages/Home'
import Logement from "./pages/Logement";
import About from "./pages/About"
import Error from "./pages/Error";
import "./styles/styles.css"; 
import Header from "../src/componemts/Header";
import Footer from "../src/componemts/Footer";


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