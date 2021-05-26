import React from "react";
import { NavLink } from "react-router-dom";
import Enter from "./Enter";


import mySkill from "./myskills"
console.log(mySkill);

function Skills() {

  return (
      <>
        
                <div>
             <h1> <br/>
            <span>My Skills</span>
            
             </h1>
                <dl className="dictionary">{mySkill.map(Cards)}</dl>
                 </div>
            

       
    
     
      </>
  );
}
function Cards(mySkill) {
  return (
 <Enter
 key= {mySkill.id} 
 image={mySkill.image}
 subject={mySkill.sub}
 name={mySkill.name}
 level={mySkill.level}
 
 />
);




  

  };

export default Skills

