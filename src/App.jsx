import React,{useState} from 'react'
import './App.css'
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import CreateNote from './components/CreateArea'






function App() {
  const[items, setItems] = useState([]);

  function addItem(input){
    setItems(prevItems => {
        return [...prevItems, input]
    })

         console.log(items);
      }

  
 return(
  <div>
    <Header />

    <CreateNote  onAdd = {addItem} />
   
   {

     items.map((notes) => {
     return <Note title = {notes.title}   content = {notes.content}  />
     })


   }
    
    <Footer />
  
  </div>
 )
}

export default App
