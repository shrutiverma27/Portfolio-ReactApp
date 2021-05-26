import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) => {

    return(
      <>
      <section id="header className" className="d-flex align-items-center">
      <div className="container-fluid ">
      <div className="row">
         <div className="col-10- mx-auto">
      <div className="row">
         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
         <h1 className="my-3"> 
         {props.name}
         </h1>
         <h2 >
         
         </h2>
      
       </div>

      </div>
         <div className="col d-flex justify-content-center ">
         <img className="myimg" src={props.img} />
      </div>
      <div className="my-3 text-center">
       <NavLink to={props.link} className=" btn btn-danger btn-lg" disabled="disabled"> {props.text}</NavLink>
       </div>
      </div>
      </div>
      </div>

      </section>
        </>
    );
};
export default Common;
