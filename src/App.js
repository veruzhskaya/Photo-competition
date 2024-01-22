import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import './App.css'
import About from "./About";
import Contact from "./Contact";
import Works from "./Works";

function App() {
  return (<Router>
  <nav> 
    <Link to="/" className="link one">Главная</Link>
    <Link to="/works" className="link">Мои работы</Link>
    <Link to="/about" className="link">Информация</Link>
    <Link to="/contact" className="link">Контакты</Link>
  </nav>

  <Routes>
    
    <Route path="/" element = {<Home/>}/>
    <Route path="/works" element = {<Works/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/contact" element = {<Contact/>}/>
  </Routes>
  </Router>
  );
}

export default App;


