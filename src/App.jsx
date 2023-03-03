import React from 'react'
import Footer from './Components/footer/Footer';
import Home from './Components/home/Home';
import Navbar from './Components/navbar/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Teams from './Components/teams/Teams';
import AboutUs from './Components/about us/AboutUs';

export default function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route path='/teams' element={<Teams />}></Route>
                    <Route path='/about-us' element={<AboutUs />}></Route>
                </Routes>
            </Router>
            <Footer></Footer>
        </div>
    )
}
