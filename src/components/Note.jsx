import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
   return(
     <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={()=>{            // we have to create a function to call the delete method otherwise the delete method will run without clicking the button.
         props.onDelete(props.id)
        }}>
         <DeleteIcon />
        </button>
    </div>
   )
}

export default Note;