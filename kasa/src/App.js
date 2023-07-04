import {Routes, Route} from "react-router-dom";
import React from 'react';
import Home from './pages/Home'
import Appartements from "./pages/Appartements";
import About from "./pages/About"
import Error from "./pages/Error";
import "./styles/App.css"; 
import Header from "../src/componemts/header";
import Footer from "../src/componemts/footer";


function App () {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Appartements" element={<Appartements />} />
                <Route path="/About" element={<About />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer></Footer>
        </div>
    )
} 

export default App; 