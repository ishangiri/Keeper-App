import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateNote(props) {
  const [isExpanded, setExpanded] = useState(false); // usestate for expanding the textarea
  const [input, setInput] = useState({ title: "", content: "" }); // usestate to change the state of input

  function expand() {
    //function to se the isExpanded to true
    setExpanded(true);
  }

  function changeState(event) {
    //function to get hold of the value from input
    const { name, value } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function submitNote(event) {
    // function to submit the note which will pass the value of fthe input as props

    if (input.title.trim() === "" && input.content.trim() === "") {
      // if the title and content both are empty then call the displayShowArea using props.
      props.displayShowArea();
      event.preventDefault();
      setExpanded(false);
      setInput({ title: "", content: "" });
    } else {
      props.onAdd(input); // else call the onAdd function using props
      setInput({ title: "", content: "" });
      event.preventDefault();
      setExpanded(false);
    }
  }

  return (
    //returns html form element that takes two inputs
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={changeState}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={changeState}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={input.content}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
