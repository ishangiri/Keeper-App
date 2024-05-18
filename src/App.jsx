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
        }

  function deleteItem(id){                         // this function deletes the items whose id is equal to the index of the
                                                  //array while using filter method by returning a new array without that id.
          setItems(prevItems => {
          return prevItems.filter((items, index) => {
            return index !== id
          })
        })
  }

  
 return(
  <div>
    <Header />

    <CreateNote  onAdd = {addItem} />
   
   {

     items.map((notes, index) => {
     return <Note
    title={notes.title} 
    key={index} 
    id={index}   
    content={notes.content}  
    onDelete={deleteItem} />
     })


   }
    
    <Footer />
  
  </div>
 )
}

export default App
