import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateNote(props) {

  const [isExpanded, setExpanded] = useState(false);
  const [input, setInput] = useState({ title: '', content: '' });


  function expand(){
    setExpanded(true);
  }

  function changeState(event) {
    const { name, value } = event.target;
    

    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function submitNote(event){

    props.onAdd(input);
    setInput({title: "", content: ""});
    event.preventDefault();

  }

  return (
    <div>
      <form className="create-note">
       {isExpanded && ( <input
          onChange={changeState}
          name="title"
          placeholder="Title"
          value={input.title}
        />)}
        <textarea
        onClick={expand}
          onChange={changeState}
          name="content"
          placeholder="Take a note..."
          rows= {isExpanded? 3 : 1}
          value={input.content}
        />
        <Zoom in = {isExpanded}>
        <Fab type="submit" onClick={submitNote} >
         <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
