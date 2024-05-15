import React from "react";

function Note(props){
   return(
     <div className="note">
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
    </div>
   )
}

export default Note;