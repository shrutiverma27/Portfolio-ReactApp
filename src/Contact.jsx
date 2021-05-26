import React , {useState} from "react";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import github from "./images/github.png";
import {db} from "./Config";

const Contact =() => {

const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [message , setMessage] = useState("");

const [loader , setLoader] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  setLoader(true);

  db.collection("contacts").add({
    name:name,
    email:email,
    message:message,
  })
  .then(() => {
    alert("Message has been submitted");
    setLoader(false);
  })
  .catch((error) => {
    alert(error.message);
    setLoader("false");
  });
  setName("");
  setEmail("");
  setMessage("");
};




    return (
        <>
         <br/>
        <h1> Send me a msg in the form  below for any query . </h1> <br/>
        <div className="myform" >

            <form action=" " onSubmit={handleSubmit}>
                <label htmlFor="name"> Name</label> <br/>
                <input type="text" name=" name" placeholder="Your name.."  value={name} onChange={(e) => setName(e.target.value)}/><br/>

                <label htmlFor="email"> Email</label> <br/>
                <input type="text" name=" Email" placeholder="Your Email.." value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>

                <label for="subject" >Message</label> <br/>
               <textarea id="subject" name="subject" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} style={{height:"200px"} }></textarea>
               <button  className ="mybtn" type="submit" >Submit!  </button> <br/>
            </form>
            </div>


        </>
    );
};
export default Contact;


/*
            <footer>

            <div className="myfooter">

            <div className="row">

            <div className="column"><img src={github}  /> </div>
            <div className="column"> <img src={facebook} /> </div>
            <div className="column"><img src={twitter} className="column"/></div>

            </div>

            </div>
            </footer>
            */
