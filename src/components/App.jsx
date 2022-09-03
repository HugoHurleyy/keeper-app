import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray,setNoteArray] = React.useState([])

  function addItem(note){
    setNoteArray(prevValue =>{return[...prevValue,note]})
  }

  function deleteItem(id){
    setNoteArray(prevValue =>{return prevValue.filter((item,index)  => {return index !== id})})
  }
  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {noteArray.map((item,index) => {return <Note deleteItem={deleteItem} id={index} key={index} title={item.title} content={item.content} />})}
      <Footer/>
    </div>
  );
}
export default App;
