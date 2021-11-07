import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Course from './Course';
import Contact from './Contact';
import Menu from './Menu';
import Footer from './Footer';



function App() {
  return (
   
   <BrowserRouter>
   <>
   <Menu />
   <Switch>
    <Route path="/" exact component= {Home}/>
    <Route path="/course" component= {Course}/>
    <Route path="/about" component= {About}/>
    <Route path="/contact" component= {Contact}/>
   </Switch>
    <Footer />
    </>
   </BrowserRouter>
  );
}

export default App;
