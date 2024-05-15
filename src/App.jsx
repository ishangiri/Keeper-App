import React from 'react'
import './App.css'
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import notes from './Notes'





function App() {
 return(
  <div>
    <Header />
   
     {notes.map((noteArray)=>
     {
       return(
      <Note
         key = {noteArray.key}
         h1 = {noteArray.title}
         p = {noteArray.content}
          />
       )
       
})}
    
    <Footer />
  
  </div>
 )
}

export default App
