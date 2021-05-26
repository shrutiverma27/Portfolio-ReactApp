import React from "react";
import { NavLink } from "react-router-dom";

import Common from "./common";

const About = () => {

    return(
      <>
      <br/>
      <h1> I'm a website developer and loves to code.</h1>
      <br/>
      <h2>I am an engineering student in  Ganga Institute of Technology  <br/>
      And Management college and  wants to become a successful Web developer. </h2>

      < Common

      link="/Contact"

      text="To contact me...."



      />

        </>
    );
};
export default About;
