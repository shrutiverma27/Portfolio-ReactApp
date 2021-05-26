import React from "react";
import { NavLink } from "react-router-dom";


import Common from "./common";


const Home = () => {

    return(
      <>
      <br/>
      <br/>
     <h1> Hello everyone ,  my name is Shruti Verma .  😄</h1>

     <h2>  Thank you for visiting my website . 🥰 </h2>


        <Common




         link="/Skills"

         text="some of my skills are...."


        />
        <br/>



        </>
    );
};
export default Home
