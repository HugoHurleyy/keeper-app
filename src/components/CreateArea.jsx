import React from "react";
import { isPropertySignature } from "typescript";

function CreateArea(props) {
  const [note, setNote]= React.useState({
    title:"",
    content:""
  });
  function handleChange(event){
    const {name,value} = event.target;
    setNote(prevValue =>{return {...prevValue,[name]:value}})
  }
  return (
    <div>
      <form>
        <input name="title" value={note.title} placeholder="Title" onChange={handleChange} />
        <textarea name="content" value={note.content} placeholder="Take a note..." onChange={handleChange} rows="3" />
        <button onClick={(event) =>{props.addItem(note);setNote("");event.preventDefault();}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
