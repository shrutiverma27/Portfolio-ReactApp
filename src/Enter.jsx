import React from "react";
import mySkill from "./myskills";

function Enter(props) {
    return (
        <div className="term">
        <dt>
          <span className="emoji"  aria-label="Tense Biceps">
            <img className="courseImg" src={props.image} /> 
          </span>
          <span>{props.subject} </span>
          <span>{props.name} </span>
        </dt>
        <dd>{props.level}</dd>
      </div>

    );
  }


  export default Enter;