import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from "./Navbar";
import {Switch , Route , Redirect , Link} from "react-router-dom";
import mySkill from "./myskills";
import firebase from "firebase";
import firebaseConfig from "./Config";



const App =() => {

    return(
        <>
        <div style={{ backgroundImage: "url(/images/My-logo.jpg)" }}>
        <Navbar />
        <Switch>
        <Route exact path="/" component ={Home} />
        <Route exact path="/about" component ={About} />
        <Route exact path="/skills" component ={Skills} />
        <Route exact path="/contact" component ={Contact} />
       <Redirect to ="/" />
        </Switch>
        </div>
        </>
    );
};
export default App;
