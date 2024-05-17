import React, { useState } from 'react';

function CreateNote(props) {
  const [input, setInput] = useState({ title: '', content: '' });

  function changeState(event) {
    const { name, value } = event.target;
    

    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input
          onChange={changeState}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onChange={changeState}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <button type="submit" onClick={() => {
             props.onAdd(input)
             setInput({title:"", content: ""})
        }} >Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
